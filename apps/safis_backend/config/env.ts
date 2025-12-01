import { config } from "dotenv";

config({ path: `.env.local` });

export const { PORT, DATABASE_URL } = process.env;
