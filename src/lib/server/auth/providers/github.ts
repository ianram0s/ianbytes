import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { github } from '@lucia-auth/oauth/providers';
import type { Auth } from '$lib/server/auth';

export const GitHubProvider = (auth: Auth) => {
	const githubAuth = github(auth, {
		clientId: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET
	});

	return githubAuth;
}