// const fs = require('fs');
const main=(req,res)=>{
    const nodemailer = require("nodemailer");
let {to}=req.body;
let {subject}=req.body;
let {text}=req.body;
let {html}=req.body;
let {attachments}=req.body;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "ruchibarochiya21@gmail.com",
    pass: "kyuv eoal ghng uyih",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <ruchibarochiya21@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
    attachments: attachments
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

    console.log("create");  
    res.send("create");
    }
module.exports={
    main:main
}