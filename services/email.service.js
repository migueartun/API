const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.GPASS,
  },
});

exports.sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.MAIL,
    to,
    subject,
    text,
  });
};
