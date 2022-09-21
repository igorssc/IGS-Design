![space](https://user-images.githubusercontent.com/26682297/191368584-c36a95f6-f4d1-428c-8014-c22f89fae56a.jpg)

IGS Design is a company offers various services like creating logos, business cards, flyers, banners, flyers, and invitations. They also offer services for online platforms such as website creation, blogging and more.

## ✨ Technologies

This project was developed with the following technologies:

- React
- Next.js
- TypeScript
- Sass

## 🔐 Environment variables

The system makes use of email sending, using [nodemailer](https://nodemailer.com/). For its correct operation, the following environment variables must be used:

```
HOSTMAIL=smtp.example.com
USERMAIL=username
PASSMAIL=password
```

> To change nodemailer connection information, such as Port, change the file [`email.ts`](/src/pages/api/email.ts)

```ts
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
```

## 🚀 How to run

- Clone the repository

```bash
git clone https://github.com/igorssc/IGS-Design.git

cd IGS-Design
```

- Install dependencies

```bash
yarn

# or

npm init
```

- Put your environment variables in a file .env.local at the root of the project

- Start the server

```bash
yarn dev

# or

npm run dev
```

You can now access [`localhost:3000`](http://localhost:3000) from your browser.

## 🪄 Preview

Access <https://www.igsdesign.com.br>

## 📝 Licence

This project is under MIT licence. See the archive [LICENSE](LICENSE.md) to more details.

---

Made with 💜 by [IGS Design](https://igsdesign.com.br) - Igor Santos 👋
