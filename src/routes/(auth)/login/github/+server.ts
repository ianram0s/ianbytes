import { dev } from '$app/environment';
import { initAuth, GitHubProvider } from '$lib/server/auth';

export const GET = async ({ cookies, platform }) => {
	const auth = initAuth(platform?.env.IANBYTES_DB as D1Database);
	const githubAuth = GitHubProvider(auth);

	const [url, state] = await githubAuth.getAuthorizationUrl();

	// store state
	cookies.set('github_oauth_state', state, {
		httpOnly: true,
		secure: !dev,
		path: '/',
		maxAge: 60 * 60
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString()
		}
	});
};
