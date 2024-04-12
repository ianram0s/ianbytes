import { redirect } from '@sveltejs/kit';
import { initAuth } from '$lib/server/auth';

export const actions = {
	default: async ({ locals, platform }) => {
		const session = await locals.auth.validate();

		if (!session) {
			redirect(302, '/login');
		}

		const auth = initAuth(platform?.env.IANBYTES_DB as D1Database);

		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);

		redirect(302, '/login');
	}
};
