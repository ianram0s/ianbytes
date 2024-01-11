import { initAuth } from "$lib/server/auth";
import { type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

	// Platform doesn't exist on normal dev environment. Must use yarn pages:dev to proxy through wrangler
	if(event.platform && event.platform.env) {
		const auth = initAuth(event.platform.env!.IANBYTES_DB);
		event.locals.auth = auth.handleRequest(event);
	}

	return await resolve(event);
};