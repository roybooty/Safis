import { DATABASE_URL } from "./env.ts";
import { drizzle } from "drizzle-orm/node-postgres";

const query = drizzle(DATABASE_URL);

if (query) {
  console.log("connecting to DB is successfully");
} else {
  console.log("wuppsy");
}

export default query;
