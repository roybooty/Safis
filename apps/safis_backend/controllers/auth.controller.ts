import query from "../config/database.ts";
import { eq } from "drizzle-orm";
import users from "../schema/User.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.ts";
import message from "../utils/mails.js";
import { NewBoy, OldBoy, otp_message } from "../constants/index.js";

export const sign_up = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
  
    const user: typeof users.$inferInsert = {
      name: name,
      email: email,
      role: role,
      password: await bcrypt.hash(password, 10),
    };

    const userExist = await query
      .select()
      .from(users)
      .where(eq(users.email, user.email))
      .limit(1);

      console.log(userExist)

    if (userExist.length > 0) {
      const err = new Error();
      err.message = "User already exist";
      err.statusCode = 400;
      throw err;
    }

    const newUser = await query.insert(users).values(user).returning({ insertedId: users.id }); // Returns an array of objects;
    if (newUser) {
      const token = await jwt.sign({ userId: newUser[0].insertedId }, JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).json({
        success: true,
        message: "User created successfully",
        data: token,
      });

      await message(name, email, NewBoy);
    }
  } catch (e) {
    res.status(e.statusCode || 500).json({ success: false, message: e });
    console.log(e);
  }
};
export const sign_in = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user: typeof users.$inferInsert = {
      email: email,
      password: password,
    };

    const userExist = await query
      .select()
      .from(users)
      .where(eq(users.email, user.email))
      .limit(1);

    if (!userExist) {
      const err = new Error();
      err.message = "User or password is incorrect";
      err.statusCode = 404;
      throw err;
    }

    const passwordExist = await bcrypt.compare(password, userExist[0].password);

    if (!passwordExist) {
      const err = new Error();
      err.message = "User or password is incorrect";
      err.statusCode = 404;
      throw err;
    }

    const token = await jwt.sign({ userId: userExist[0].id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    if (userExist && passwordExist) {
      let isReturning = true;
      await message(userExist[0].name, email, OldBoy, isReturning);
    }

    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: token,
    });
  } catch (e) {
    res.status(e.statusCode || 500).json({ success: false, message: e });
  }
};
export const sign_out = (req, res) => {};
