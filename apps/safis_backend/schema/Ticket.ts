import { relations } from "drizzle-orm";
import { numeric, pgTable, text, uuid, boolean } from "drizzle-orm/pg-core";
import events from "./Event.ts";

const tickets = pgTable("ticket", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  ticketCode: text("ticketCode").unique(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  eventId: uuid("eventId").notNull(),
  sold: boolean().notNull(),
  type: text("type")
});

export const eventRelations = relations(tickets, ({ one }) => ({
  event: one(events, { fields: [tickets.eventId], references: [events.id] }),
}));

export default tickets;
