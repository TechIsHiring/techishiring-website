import { addNewSubscriber } from "lib/api/external-apis/revue/subscribers-api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handleSubscribe (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { email } = req.body;
  if(!email) res.status(400).json({ error: "Email is required" });

  const requestBody = {
    email: email
  };

  try {
    const data = await addNewSubscriber(requestBody);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};