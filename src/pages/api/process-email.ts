import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { z } from "zod";

// Define The Zod schema for the request body
const Email = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

interface ExtendedNextApiRequest extends NextApiRequest {
  body: z.infer<typeof Email>;
}

export default async function handleSubscribe(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<any>
) {
  const { name, email, message } = req.body;

  const requestEmpty = !name || !email || !message;
  const badRequest = req.method !== "POST" || requestEmpty;
  if( badRequest ) return res.status(400).json({ data: "Please send a properly formatted request" });

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
  
  const msg = {
    to: 'techishiring@gmail.com',
    from: 'techishiring@gmail.com',
    subject: `TechIsHiring.com Query - from ${name} (${email})`,
    text: message,
    html: `<h1>Message from TechIsHiring.com</h1>
      <p>${message}</p>`
  };
  
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      return res.status(500).json({ data: error });
    });
    
  return res.status(200).json({ data: "Email sent" });
};
