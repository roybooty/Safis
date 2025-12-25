import { config } from "dotenv";

config({ path: `.env.local` });

export const { PORT, DATABASE_URL, JWT_SECRET, CLOUDINARY_SECRET, CLOUDINARY_KEY, CLOUDINARY_CLOUD_NAME, BASE_URL } = process.env;
