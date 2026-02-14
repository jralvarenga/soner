import "dotenv/config";
import { eq } from "drizzle-orm";
import { db } from "./index";
import {
	DONE_STATUS_ID,
	IN_PROGRESS_STATUS_ID,
	statusesTable,
	TODO_STATUS_ID,
} from "./schema";

const STATUSES = [
	{
		id: TODO_STATUS_ID,
		code: "todo",
		name: "To Do",
		description: "Work has not started yet.",
	},
	{
		id: IN_PROGRESS_STATUS_ID,
		code: "in_progress",
		name: "In Progress",
		description: "Work is actively in progress.",
	},
	{
		id: DONE_STATUS_ID,
		code: "done",
		name: "Done",
		description: "Work has been completed.",
	},
] as const;

async function seedStatuses() {
	for (const status of STATUSES) {
		await db
			.insert(statusesTable)
			.values(status)
			.onConflictDoUpdate({
				target: statusesTable.code,
				set: {
					name: status.name,
					description: status.description,
					updatedAt: new Date(),
				},
			});
	}

	for (const status of STATUSES) {
		const [row] = await db
			.select({ id: statusesTable.id })
			.from(statusesTable)
			.where(eq(statusesTable.code, status.code))
			.limit(1);

		if (!row || row.id !== status.id) {
			throw new Error(
				`Status ${status.code} does not match expected id ${status.id}. Run db:reset:app then db:push and db:seed:statuses.`,
			);
		}
	}

	console.log(`Seeded ${STATUSES.length} statuses`);
}

seedStatuses().catch((error) => {
	console.error("Failed to seed statuses", error);
	process.exit(1);
});
