import { lucia } from 'lucia';
import { d1 } from '@lucia-auth/adapter-sqlite';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import type { D1Database } from '@cloudflare/workers-types';

// Because of Cloudfare D1 binding, lucia must be initialized on every request
export const initializeLucia = (db: D1Database) => {
	const auth = lucia({
		env: dev ? 'DEV' : 'PROD',
		adapter: d1(db, {
			user: 'user',
			key: 'user_key',
			session: 'user_session'
		}),
		middleware: sveltekit(),
		getUserAttributes: (data) => {
			return {
				username: data.username
			};
		}
	});

	return auth;
};

export type Auth = ReturnType<typeof initializeLucia>;
