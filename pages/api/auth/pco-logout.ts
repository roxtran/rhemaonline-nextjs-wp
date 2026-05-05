import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Clear the session cookie
  res.setHeader(
    "Set-Cookie",
    "pco_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  );

  res.redirect(302, "/prayer");
}
