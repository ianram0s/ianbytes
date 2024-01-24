// routes/+page.server.ts
import { redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";
import { initAuth } from "$lib/server/auth";

export const load: PageServerLoad = async ({ locals, platform }) => {
    const session = await locals.auth.validate();
    
    if (session) {
        const auth = initAuth(platform?.env.IANBYTES_DB as D1Database);
        await auth.invalidateSession(session.sessionId);
        locals.auth.setSession(null);
        locals.user = null;
    }
    
    redirect(302, "/login");
};
