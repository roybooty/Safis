import { config } from "dotenv";

config({ path: `.env.local` });

export const { PORT, 
    DATABASE_URL, 
    JWT_SECRET, 
    CLOUDINARY_SECRET, 
    CLOUDINARY_KEY, 
    CLOUDINARY_CLOUD_NAME, 
    BASE_URL, 
    GMAIL_GMAIL, 
    GMAIL_PASS,
    PAYSTACK_SECRET_KEY,
    REDIS_URL
} = process.env;
