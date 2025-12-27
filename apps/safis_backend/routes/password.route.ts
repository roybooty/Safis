import { Router } from "express";
import {
  verifyOtp,
  resetPassword,
  forgetPassword,
} from "../controllers/password.controller.ts";

const passRouter = Router();

passRouter.post("/verify-otp", verifyOtp);
passRouter.post("/forgot-password", forgetPassword);
passRouter.post("/reset-password", resetPassword);

export default passRouter;
