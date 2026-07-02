const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.GPASS,
  },
});

// to = correo destino | subject = asunto | text = mensaje
exports.sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: '"Mi App" <' + process.env.MAIL + '>',
    to,
    subject,
    html: '<h3>' + subject + '</h3><p>' + text + '</p>',
  });
};
