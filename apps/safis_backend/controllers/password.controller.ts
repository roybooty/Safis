import { otp_message } from "../constants/index.ts";
import message from "../utils/mails.ts";
import client from "../config/redis.ts";
import bcrypt from "bcrypt";
import query from "../config/database.ts"
import users from "../schema/User.ts";
import { eq } from "drizzle-orm";

export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    const value = await client.get("otp");

    console.log(value);

    if (otp == value) {
      res.status(201).json({
        success: true,
        message: "OTP is correct"
      })
    }

    const err = new Error("OTP not correct");
    err.statusCode = 404;
    throw err;
  } catch (e) {
    res
      .status(e.statusCode || 500)
      .json({ success: false, message: e});
  }
};
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await query.select().from(users).where(eq(users.email, email)).limit(1);

    if (!existingEmail) {
      const err = new Error("email does not exist");
      err.statusCode = 404;
      throw err;
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    await client.set("otp", `${otp}`, { EX: 1000 });
    await client.set("em", `${email}`);
    if (existingEmail) {
      try {
        await message(otp, email, otp_message);
      } catch (e) {
        console.log(e);
      }
    }

    res.status(201).json({ success: false, message: "OTP sent successfully"});
  } catch (e) {
    res
      .status(e.statusCode || 500)
      .json({ success: false, message: e });
  }
};
export const resetPassword = async (req, res) => {
  try {
    const { password, confirm } = req.body;

    if (password != confirm) {
      const err = new Error("Password does not match");
      err.statusCode = 409;
      throw err;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const email = await client.get("em");

    const user = await query.update(users).set({
      password: hashedPassword,
    }).where(eq(users.email, email))

    if (user) {
      res.status(201).json({ success: true, message: "password updated successfully"});
    }
  } catch (e) {
    res
      .status(e.statusCode || 500)
      .json({ success: false, message: e });
  }
};
