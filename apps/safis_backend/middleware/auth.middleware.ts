import jwt from "jsonwebtoken";
import query from "../config/database.ts";
import users from "../schema/User.ts";
import { JWT_SECRET } from "../config/env.ts";
import { eq } from "drizzle-orm";

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if user still exists
    const user = await query.select().from(users).where(eq(users.id, decoded.userId))
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User no longer exists" });
    }

    // Attach user to request object
    req.user = user[0];
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
      error: error.message,
    });
  }
};

export default authorize;