ALTER TABLE "events" ALTER COLUMN "generalTicket" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "vipTicket" integer;