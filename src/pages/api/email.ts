import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOSTMAIL,
    port: 587,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
  });

  const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  if (data === undefined) {
    throw new Error();
  }

  if (
    !(
      "name" in data &&
      "email" in data &&
      "subject" in data &&
      "message" in data
    ) ||
    data.name.length < 10 ||
    data.email.length < 5 ||
    data.subject.length < 5 ||
    data.message.length < 10
  ) {
    throw new Error();
  }

  await transporter
    .sendMail({
      from: `Formulário Web <${process.env.USERMAIL}>`,
      to: process.env.USERMAIL,
      replyTo: data.email,
      subject: data.subject,
      text: data.message,
      html: `
      
        <b>Nome: </b> ${data.name},
        <br>
        <b>Email: </b> ${data.email},
        <br>
        ${data.phone ? `<b>Telefone: </b> ${data.phone},` : ""}
        
        <br><br>
        
        ${data.message}
        
        `,
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
};

export default sendEmail;
