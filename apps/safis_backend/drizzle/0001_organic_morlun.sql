ALTER TABLE "ticket" RENAME COLUMN "ownerId" TO "type";--> statement-breakpoint
ALTER TABLE "ticket" ALTER COLUMN "ticketCode" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "generalTicket" integer NOT NULL;