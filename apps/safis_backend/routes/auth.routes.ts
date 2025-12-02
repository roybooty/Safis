import { Router } from "express";
import { sign_in, sign_up, sign_out } from "../controllers/auth.controller.ts";

const authRouter = Router();

authRouter.post("/sign-up", sign_up);
authRouter.post("/sign-in", sign_in);
authRouter.post("/sign-out", sign_out);

export default authRouter;
