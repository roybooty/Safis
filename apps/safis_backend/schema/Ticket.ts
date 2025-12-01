import { relations } from "drizzle-orm";
import { numeric, pgTable, text, uuid, boolean } from "drizzle-orm/pg-core";
import events from "./Event.ts";
import users from "./User.ts";

const ticket = pgTable("ticket", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  ticketCode: text("ticketCode").unique().notNull(),
  ownerId: uuid("ownerId").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  eventId: uuid("eventId").notNull(),
  sold: boolean().notNull(),
});

export const eventRelations = relations(ticket, ({ one }) => ({
  event: one(events, { fields: [ticket.eventId], references: [events.id] }),
  owner: one(users, { fields: [ticket.ownerId], references: [users.id] }),
}));

export default ticket;
