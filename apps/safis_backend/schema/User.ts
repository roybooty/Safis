import { pgTable, text, uuid, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import events from "./Event.ts";
import ticket from "./Ticket.ts";

export const actionRole = pgEnum("roles", ["organiserUser", "nonOrganiser"]);

const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  role: actionRole("role").notNull(),
  password: text("password").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  eventsOwned: many(events),
  ticket: many(ticket),
}));

export default users;
