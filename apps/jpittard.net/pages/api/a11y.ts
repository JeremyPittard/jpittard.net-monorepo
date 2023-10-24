const pa11y = require("pa11y");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const query = req.query;
  const { page } = query;

  try {
    const result = await pa11y(page?.toString());
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "this is data" });
  }
}
