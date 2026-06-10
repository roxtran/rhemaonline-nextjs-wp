import type { NextApiRequest, NextApiResponse } from "next";

type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  created_at: number;
};

type PcoPersonAttributes = {
  first_name: string;
  last_name: string;
  name: string;
  avatar: string;
};

type PcoMeResponse = {
  data: {
    id: string;
    attributes: PcoPersonAttributes;
  };
};

type PcoEmailResponse = {
  data: Array<{
    id: string;
    attributes: {
      address: string;
      primary: boolean;
    };
  }>;
};

function parseCookies(cookieHeader: string | undefined): Record<string, string> {
  if (!cookieHeader) return {};
  return Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [key, ...rest] = c.trim().split("=");
      return [key, rest.join("=")];
    })
  );
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, state, error } = req.query;

  if (error) {
    return res.redirect(302, `/prayer?auth_error=${encodeURIComponent(String(error))}`);
  }

  if (!code || typeof code !== "string") {
    return res.redirect(302, "/prayer?auth_error=missing_code");
  }

  // Verify state token and retrieve PKCE code verifier
  const cookies = parseCookies(req.headers.cookie);
  const savedState = cookies.pco_oauth_state;
  const codeVerifier = cookies.pco_code_verifier;

  if (!savedState || savedState !== state) {
    return res.redirect(302, "/prayer?auth_error=invalid_state");
  }

  if (!codeVerifier) {
    return res.redirect(302, "/prayer?auth_error=missing_code_verifier");
  }

  const clientId = process.env.PCO_CLIENT_ID;
  const clientSecret = process.env.PCO_CLIENT_SECRET;
  
  // Dynamically determine the base URL
  const isLocalhost = req.headers.host?.includes("localhost");
  const protocol = req.headers["x-forwarded-proto"] || (isLocalhost ? "http" : "https");
  const baseUrl = isLocalhost ? `http://${req.headers.host}` : (process.env.HOME_URL || `${protocol}://${req.headers.host}`);
  const redirectUri = `${baseUrl}/api/auth/pco-callback`;

  if (!clientId || !clientSecret) {
    return res.redirect(302, "/prayer?auth_error=server_config");
  }

  try {
    // Exchange authorization code for access token
    const tokenRes = await fetch("https://api.planningcenteronline.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.error("PCO token exchange failed:", tokenRes.status, errText);
      console.error("PCO token request body:", JSON.stringify({ grant_type: "authorization_code", code: code?.slice(0, 8) + "...", client_id: clientId?.slice(0, 8) + "...", redirect_uri: redirectUri, code_verifier: codeVerifier?.slice(0, 8) + "..." }));
      const shortErr = encodeURIComponent(errText.slice(0, 200));
      return res.redirect(302, `/prayer?auth_error=token_exchange_failed&detail=${shortErr}`);
    }

    const tokenData: TokenResponse = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Fetch user profile from Planning Center People API
    const meRes = await fetch("https://api.planningcenteronline.com/people/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!meRes.ok) {
      console.error("PCO /me fetch failed:", await meRes.text());
      return res.redirect(302, "/prayer?auth_error=user_fetch_failed");
    }

    const meData: PcoMeResponse = await meRes.json();
    const person = meData.data;

    // Fetch user's primary email
    const emailRes = await fetch(
      `https://api.planningcenteronline.com/people/v2/people/${person.id}/emails`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    let primaryEmail = "";
    if (emailRes.ok) {
      const emailData: PcoEmailResponse = await emailRes.json();
      const primary = emailData.data.find((e) => e.attributes.primary);
      primaryEmail = primary?.attributes.address ?? emailData.data[0]?.attributes.address ?? "";
    }

    // Create session payload
    const sessionPayload = {
      id: person.id,
      name: person.attributes.name,
      firstName: person.attributes.first_name,
      lastName: person.attributes.last_name,
      email: primaryEmail,
      avatar: person.attributes.avatar,
      accessToken,
    };

    // Store session in an HttpOnly cookie (base64 encoded JSON)
    const sessionValue = Buffer.from(JSON.stringify(sessionPayload)).toString("base64");

    // Set session cookie and clear oauth state cookie
    res.setHeader("Set-Cookie", [
      `pco_session=${sessionValue}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
      `pco_oauth_state=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
      `pco_code_verifier=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
    ]);

    return res.redirect(302, "/prayer");
  } catch (err) {
    console.error("PCO OAuth callback error:", err);
    return res.redirect(302, "/prayer?auth_error=unexpected");
  }
}
