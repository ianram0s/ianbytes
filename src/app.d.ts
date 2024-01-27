/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/// <reference types="lucia" />

declare global {
	namespace App {
		interface Platform {
			env: {
				IANBYTES_DB: D1Database;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
		interface Locals {
			auth: import("lucia").AuthRequest;
			user: User;
		}
		type Article = {
			
		}
	}
	declare namespace Lucia {
		type Auth = import('./lib/server/auth/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = {};
	}

	type Article = {
		id: number;
		title: string;
		body_html: string;
		description: string;
		slug: string;
		path: string;
		cover_image: string;
		readable_publish_date: string;
		published_at: string;
		created_at: string;
		comments_count: number;
		positive_reactions_count: number;
		tag_list: string[];
		reading_time_minutes: number;
		user: {
			name: string;
			username: string;
			profile_image: string;
		}
	}
}

export {};
