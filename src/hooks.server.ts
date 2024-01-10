// src/hooks.server.ts
import { initializeLucia } from "$lib/server/auth/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

	// event.platform and env does not exist on dev
	// TODO: configure wrangler properly to use dev environment
	if(event.platform && event.platform.env) {
		const auth = initializeLucia(event.platform.env!.IANBYTES_DB);
		event.locals.auth = auth.handleRequest(event);
	}

	return await resolve(event);
};