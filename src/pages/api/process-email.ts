import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: Email
}

export default async function handleSubscribe(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<any>
) {
  const { name, email, message } = req.body;
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
  
  const msg = {
    to: 'techishiring@gmail.com', // Change to your recipient
    from: 'techishiring@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: message,
    html: `<strong>${message}</strong>`,
  };
  
  /* sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      return res.status(500).json({ data: error });
    });
    
    return res.status(200).json({ data: "Email sent" }); */
};
