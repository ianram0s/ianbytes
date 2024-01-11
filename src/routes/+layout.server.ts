import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ( {locals} ) => {

    if (locals.auth) {
        const session = await locals.auth.validate();
        
        return {
            user: session ? session.user : null
        };
    }
};