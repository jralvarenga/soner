import {
	boolean,
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import {
	account,
	accountRelations,
	session,
	sessionRelations,
	userRelations,
	user as usersTable,
	verification,
} from "./auth-schema";

export {
	usersTable,
	session,
	account,
	verification,
	userRelations,
	sessionRelations,
	accountRelations,
};

export const TODO_STATUS_ID = "00000000-0000-0000-0000-000000000001";
export const IN_PROGRESS_STATUS_ID = "00000000-0000-0000-0000-000000000002";
export const DONE_STATUS_ID = "00000000-0000-0000-0000-000000000003";

export const statusesTable = pgTable("statuses", {
	id: uuid("id").primaryKey().defaultRandom(),
	code: varchar({ length: 64 }).notNull().unique(),
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
	status: uuid("status")
		.references(() => statusesTable.id)
		.notNull()
		.default(TODO_STATUS_ID),

	assignedTo: text("assigned_to"),
	createdBy: text("created_by"),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const goalsTable = pgTable("goals", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar({ length: 255 }).notNull(),
	description: text(),

	status: uuid()
		.references(() => statusesTable.id)
		.notNull(),

	assignedTo: text("assigned_to").references(() => usersTable.id),
	createdBy: text("created_by").references(() => usersTable.id),

	tasks: integer()
		.references(() => tasksTable.id)
		.array(),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const projectsTable = pgTable("projects", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar({ length: 255 }).notNull(),
	description: text(),

	createdBy: text("created_by").references(() => usersTable.id),
	tasks: integer()
		.references(() => tasksTable.id)
		.array(),
	goals: uuid()
		.references(() => goalsTable.id)
		.array(),

	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
