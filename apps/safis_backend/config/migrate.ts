import { migrate } from "drizzle-orm/node-postgres/migrator"; // or your specific driver
import query from "./database.ts";

async function runMigrations() {
  console.log("⏳ Running migrations...");
  try {
    // This points to the folder where your .sql files live
    await migrate(query, { migrationsFolder: "../drizzle" }); 
    console.log("✅ Migrations completed!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1); // Stop the app if migrations fail
  }
}


export default runMigrations;