import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import users from "./User.ts";
import ticket from "./Ticket.ts";

export const categorieEnum = pgEnum("categorie", [
  "music",
  "sports",
  "education",
  "entertainment",
  "arts & culture",
  "food & drink",
  "conferences",
  "workshops",
  "community",
  "nightlife",
  "health & wellness",
  "charity & fundraising",
  "festivals & fairs",
  "other",
]);

const events = pgTable("events", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  venu: text("venu").notNull(),
  description: text("description").notNull(),
  categories: categorieEnum("categories"),
  imageUrl: text("imageUrl").notNull(),
  organiserId: uuid("organiserId").notNull(),
  date: text("date").notNull(),
});

export const eventRelations = relations(events, ({ one, many }) => ({
  organiser: one(users, {
    fields: [events.organiserId],
    references: [users.id],
  }),
  ticketOwned: many(ticket),
}));

export default events;
