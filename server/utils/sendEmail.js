require("dotenv").config();

const nodemailer = require("nodemailer");
const config = require("../config/email.config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.email,
    pass: config.pass,
  },
});

const sendConfirmationEmail = (name, email, confirmationCode) => {
  console.log(config.email, config.pass);
  transporter.sendMail({
    from: config.email,
    to: email,
    subject: "Please confirm your Kroma Board account",
    html: `<h1>Email Confirmation</h1>
    <h2>Hello ${name}</h2>
    <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
    <a href="http://localhost:8081/api/verify/${confirmationCode}" target="_blank"> Click here</a>
    </div>`,
  });
};

module.exports = { sendConfirmationEmail };
