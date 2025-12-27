import nodemailer from "nodemailer";
import { GMAIL_GMAIL, GMAIL_PASS } from "./env.js";

const transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: GMAIL_GMAIL,
    pass: GMAIL_PASS,
  },
});

export default transpoter;
