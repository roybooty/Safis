CREATE TYPE "public"."categorie" AS ENUM('music', 'sports', 'education', 'entertainment', 'arts & culture', 'food & drink', 'conferences', 'workshops', 'community', 'nightlife', 'health & wellness', 'charity & fundraising', 'festivals & fairs', 'other');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('organiserUser', 'nonOrganiser');--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"venu" text NOT NULL,
	"description" text NOT NULL,
	"categories" "categorie",
	"imageUrl" text NOT NULL,
	"organiserId" uuid NOT NULL,
	"date" text NOT NULL,
	"generalTicket" integer,
	"vipTicket" integer,
	"active" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ticket" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ticketCode" text,
	"price" numeric(10, 2) NOT NULL,
	"eventId" uuid NOT NULL,
	"sold" boolean NOT NULL,
	"type" text,
	CONSTRAINT "ticket_ticketCode_unique" UNIQUE("ticketCode")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"role" "roles" NOT NULL,
	"password" text NOT NULL,
	"active" boolean DEFAULT false NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
