/* eslint-disable @typescript-eslint/no-explicit-any */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
        interface Platform {
          env: {
            IANBYTES_DB: D1Database;
          };
          context: {
            waitUntil(promise: Promise<any>): void;
          };
          caches: CacheStorage & { default: Cache }
        }
    }
}

export {};
