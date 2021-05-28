const sendEmail = async (subject, text, nodemailer) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_FROM_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (data) => {
    console.log(mailOptions);
    console.log(subject);
    console.log(text);
    console.log("Email sent!");
  });

  return;
};

module.exports = sendEmail;
