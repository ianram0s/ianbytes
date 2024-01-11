import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { initAuth } from '$lib/server/auth';
import { loginFormSchema } from '$lib/forms';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) redirect(302, '/');

	return {
		form: await superValidate(loginFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, loginFormSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const db: D1Database = event.platform?.env.IANBYTES_DB as D1Database;
		const auth = initAuth(db);

		try {
			console.log(auth);
		} catch (e) {
			return fail(500, {
				message: 'An error occurred'
			});
		}

		return {
			form
		};
	}
};
