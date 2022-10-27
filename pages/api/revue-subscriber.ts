import { addNewSubscriber } from "lib/api/external-apis/revue/subscribers-api";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handleSubscribe (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { email } = req.body;
  if(!email) res.status(400).json({ error: "Email is required" });

  const requestBody = {
    email: email,
    // eslint-disable-next-line
    double_opt_in: true
  };

  const data = addNewSubscriber(requestBody);
  return res.status(200).json(data);
};