import transpoter from "../config/nodemailer.js";
import { GMAIL_GMAIL } from "../config/env.js";

const message = async (item, email, template, isReturning = false) => {
  let message = "";

  if (!isNaN(Number(item))) {
    message = "Your OTP";
  } else {
    message = isReturning ? `Welcome ${item}` : `Welcome back ${item}`;
  }

  const mailOptions = {
    from: GMAIL_GMAIL,
    to: email,
    subject: message,
    html: template(item),
  };
  await transpoter.sendMail(mailOptions);
};

export default message;
