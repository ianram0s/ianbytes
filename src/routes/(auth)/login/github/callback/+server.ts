import { GitHubProvider, initAuth } from '$lib/server/auth';
import { OAuthRequestError } from '@lucia-auth/oauth';

export const GET = async ({ url, cookies, locals, platform }) => {
	const storedState = cookies.get('github_oauth_state');
	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	if (!storedState || !state || storedState !== state || !code) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const auth = initAuth(platform?.env?.IANBYTES_DB as D1Database);
		const githubAuth = GitHubProvider(auth);

		const { getExistingUser, githubUser, createUser } = await githubAuth.validateCallback(code);

		const getUser = async () => {
			const existingUser = await getExistingUser();

			if (existingUser) return existingUser;

			const user = await createUser({
				attributes: {
					username: githubUser.login
				}
			});

			return user;
		};

		const user = await getUser();

		const session = await auth.createSession({
			userId: user!.userId,
			attributes: {}
		});

		locals.auth.setSession(session);

		return new Response(null, {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	} catch (e) {
		if (e instanceof OAuthRequestError) {
			return new Response(null, {
				status: 400
			});
		}

		return new Response(null, {
			status: 500
		});
	}
};
