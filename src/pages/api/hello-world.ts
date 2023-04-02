import type { NextApiRequest, NextApiResponse } from "next";

export default async function handleSubscribe(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json({ data: "Hello world!" })
}
