import {
	boolean,
	integer,
	pgTable,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { user as usersTable } from "./auth-schema";
import { sql } from "drizzle-orm";

export const statusesTable = pgTable("statuses", {
	id: text("id").primaryKey().generatedAlwaysAs(sql`gen_random_uuid()`),
	name: varchar({ length: 255 }).notNull(),
	description: text(),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const tasksTable = pgTable("tasks", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 255 }).notNull(),
	description: text().notNull(),

	completed: boolean().notNull().default(false),
	status: integer()
		.references(() => statusesTable.id)
		.notNull()
		.default(1),

	assignedTo: varchar({ length: 255 }).references(() => usersTable.email),
	createdBy: varchar({ length: 255 }).references(() => usersTable.email),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const goalsTable = pgTable("goals", {
	id: text("id").primaryKey().generatedAlwaysAs(sql`gen_random_uuid()`),
	title: varchar({ length: 255 }).notNull(),
	description: text(),

	status: text()
		.references(() => statusesTable.id)
		.notNull()
		.default("todo"),

	assignedTo: varchar({ length: 255 }).references(() => usersTable.id),
	createdBy: varchar({ length: 255 }).references(() => usersTable.id),

	tasks: integer()
		.references(() => tasksTable.id)
		.array(),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const projectsTable = pgTable("projects", {
	id: text("id").primaryKey().generatedAlwaysAs(sql`gen_random_uuid()`),
	title: varchar({ length: 255 }).notNull(),
	description: text(),

	createdBy: varchar({ length: 255 }).references(() => usersTable.id),
	tasks: integer()
		.references(() => tasksTable.id)
		.array(),
	goals: text()
		.references(() => goalsTable.id)
		.array(),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
