import { lucia } from 'lucia';
import { d1 } from '@lucia-auth/adapter-sqlite';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import type { D1Database } from '@cloudflare/workers-types';
import { github } from '@lucia-auth/oauth/providers';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { drizzle } from "drizzle-orm/d1";

export const initializeDrizzle = (db: D1Database) => {
	return drizzle(db);
};

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

	return auth
};

export type Auth = ReturnType<typeof initializeLucia>;

export const initializeGitHubProvider = (auth: Auth) => {
	const githubAuth = github(auth, {
		clientId: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET
	});

	return githubAuth;
}