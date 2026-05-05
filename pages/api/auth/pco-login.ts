import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

function generateCodeVerifier(): string {
  return crypto.randomBytes(32).toString("base64url");
}

function generateCodeChallenge(verifier: string): string {
  return crypto.createHash("sha256").update(verifier).digest("base64url");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.PCO_CLIENT_ID;
  const redirectUri = process.env.PCO_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return res.status(500).json({ error: "Planning Center OAuth is not configured." });
  }

  // Generate PKCE code verifier and challenge
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = generateCodeChallenge(codeVerifier);

  // Generate a random state token to prevent CSRF
  const state = crypto.randomBytes(32).toString("hex");

  // Store state and code_verifier in cookies for verification in the callback
  res.setHeader("Set-Cookie", [
    `pco_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`,
    `pco_code_verifier=${codeVerifier}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`,
  ]);

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "people",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  const authorizationUrl = `https://api.planningcenteronline.com/oauth/authorize?${params.toString()}`;

  res.redirect(302, authorizationUrl);
}
