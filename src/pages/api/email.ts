import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type DataProps = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

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

  const data: DataProps =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body;

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
    data.email.length < 10 ||
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
      <div
        style="
          padding: 20px;
          background: #199ada;
          color: #fff;
          line-height: 2rem
        "
      >
        <h1 style="margin-bottom: 20px; font-size: 1.8rem">Formulário Web</h1>
        <p>
          <strong>Nome: </strong>${data.name}
          <br />
          <strong>E-mail: </strong>${data.email}
          ${
            data.phone
              ? `<br />
          <strong>Telefone: </strong>${data.phone}`
              : ""
          }
          <br />
          <strong>Assunto: </strong>${data.subject}
        </p>
      </div>
      <p style="padding: 20px; line-height: 2rem">${data.message.replaceAll(
        "\n",
        "<br/>"
      )}</p>
    `,
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
};

export default sendEmail;
