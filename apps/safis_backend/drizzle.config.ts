import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./config/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
