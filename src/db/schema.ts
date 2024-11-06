// categories table
// fields -> id, name, slug, isArchived, createdAt, updatedAt

import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("categories", {
    id: uuid("id").notNull().defaultRandom().primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    isArchived: boolean("isArchived").notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .$onUpdate(() => new Date()),
});

export type InsertCategory = typeof categoriesTable.$inferInsert;
export type SelectCategory = typeof categoriesTable.$inferSelect;

// tags table
// fields -> id, name, slug, isArchived, createdAt, updatedAt

export const tagsTable = pgTable("tags", {
    id: uuid("id").notNull().defaultRandom().primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    isArchived: boolean("isArchived").notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .$onUpdate(() => new Date()),
});

export type InsertTag = typeof tagsTable.$inferInsert;
export type SelectTag = typeof tagsTable.$inferSelect;

// users table
// fields -> id, firstName, lastName, imgUrl, email, userAuthId, createdAt, updatedAt

export const usersTable = pgTable("users", {
    id: uuid("id").notNull().defaultRandom().primaryKey(),
    firstName: text("firstName").notNull(),
    lastName: text("lastName").notNull(),
    imgUrl: text("imgUrl"),
    email: text("email").notNull(),
    userAuthId: text("userAuthId").notNull(),
    isAvailable: boolean("isAvailable").notNull().default(true),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;