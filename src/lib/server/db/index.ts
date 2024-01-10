import { drizzle } from "drizzle-orm/d1";
export * as schema from './schema';

export const DB = (db: D1Database) => {
	return drizzle(db);
};
