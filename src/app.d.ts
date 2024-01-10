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
		}
	}
	declare namespace Lucia {
		type Auth = import('./lib/server/auth/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = {};
	}
}

export {};
