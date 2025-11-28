import express from "express";
import { PORT } from "./config/env.ts";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to safis api",
  });
});

app.listen(PORT, () => {
  console.log(`Listeaning on http://localhost:${PORT}`);
});
