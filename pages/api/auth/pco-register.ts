import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: "First name, last name, and email are required." });
  }

  const appId = process.env.PCO_PAT_APP_ID;
  const secret = process.env.PCO_PAT_SECRET;

  if (!appId || !secret) {
    console.error("Missing PCO_PAT_APP_ID or PCO_PAT_SECRET in environment variables.");
    return res.status(500).json({ error: "Server configuration error: Planning Center API token is not set." });
  }

  // Create Basic Auth header for Personal Access Token
  const basicAuthHeader = `Basic ${Buffer.from(`${appId}:${secret}`).toString("base64")}`;

  try {
    // 1. Create the Person in Planning Center
    const personRes = await fetch("https://api.planningcenteronline.com/people/v2/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuthHeader,
      },
      body: JSON.stringify({
        data: {
          type: "Person",
          attributes: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      }),
    });

    if (!personRes.ok) {
      const errText = await personRes.text();
      console.error("Failed to create person in PCO:", errText);
      return res.status(personRes.status).json({ error: "Failed to create user profile in Planning Center." });
    }

    const personData = await personRes.json();
    const personId = personData.data.id;

    // 2. Add the email address to the newly created Person
    const emailRes = await fetch(`https://api.planningcenteronline.com/people/v2/people/${personId}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuthHeader,
      },
      body: JSON.stringify({
        data: {
          type: "Email",
          attributes: {
            address: email,
            location: "Home",
          },
        },
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Failed to add email to person in PCO:", errText);
      // We still created the user, but failed to add the email. This is a partial failure.
      return res.status(emailRes.status).json({ error: "Created user but failed to attach email address. Please contact support." });
    }

    // Success
    return res.status(200).json({ success: true, message: "User registered successfully." });
  } catch (err) {
    console.error("PCO Registration API Error:", err);
    return res.status(500).json({ error: "An unexpected error occurred during registration." });
  }
}
