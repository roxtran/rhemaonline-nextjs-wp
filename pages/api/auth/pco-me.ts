import type { NextApiRequest, NextApiResponse } from "next";

type SessionPayload = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = parseCookies(req.headers.cookie);
  const sessionCookie = cookies.pco_session;

  if (!sessionCookie) {
    return res.status(200).json({ user: null });
  }

  try {
    const decoded = Buffer.from(sessionCookie, "base64").toString("utf-8");
    const session: SessionPayload & { accessToken?: string } = JSON.parse(decoded);

    // Return user info without the access token (don't expose to client)
    return res.status(200).json({
      user: {
        id: session.id,
        name: session.name,
        firstName: session.firstName,
        lastName: session.lastName,
        email: session.email,
        avatar: session.avatar,
      },
    });
  } catch {
    // Invalid cookie, clear it
    res.setHeader(
      "Set-Cookie",
      "pco_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
    );
    return res.status(200).json({ user: null });
  }
}
