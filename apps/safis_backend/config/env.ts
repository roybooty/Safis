import { config } from "dotenv";

config({ path: `.env.local` });

export const { PORT } = process.env;
