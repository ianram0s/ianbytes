import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.auth) {
        const session = await locals.auth.validate();
        
        return {
            username: session ? session.user.username : null
        };
    }
  };
  