CREATE TABLE IF NOT EXISTS "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"isArchived" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"sku" text,
	"productDescription" text NOT NULL,
	"category" text NOT NULL,
	"tags" text[] NOT NULL,
	"brand" text NOT NULL,
	"displayInfo" text NOT NULL,
	"storage" text NOT NULL,
	"camera" text NOT NULL,
	"battery" text NOT NULL,
	"colors" text[],
	"ramInformation" text NOT NULL,
	"availability" text NOT NULL,
	"stock" integer NOT NULL,
	"compareAtPrice" boolean DEFAULT false,
	"images" jsonb NOT NULL,
	"services" jsonb NOT NULL,
	"variants" jsonb NOT NULL,
	"isPublished" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"isArchived" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"imgUrl" text,
	"email" text NOT NULL,
	"userAuthId" text NOT NULL,
	"isAvailable" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
