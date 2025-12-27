import express from "express";
import { PORT } from "./config/env.ts";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.ts";
import eventRouter from "./routes/event.route.ts";
import ticketRoter from "./routes/ticket.route.ts";
import passRouter from "./routes/password.route.ts"
import userProfile from "./routes/userProfile.route.ts";

const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(cors({
  origin: '*', // or your specific frontend URL like 'http://localhost:3000'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/event", eventRouter);
app.use("/api/v1/ticket", ticketRoter);
app.use("/api/v1/password", passRouter);
app.use("/api/v1/user", userProfile);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to safis api",
  });
});

app.listen(PORT, () => {
  console.log(`Listeaning on http://localhost:${PORT}`);
});
