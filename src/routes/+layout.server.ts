import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ( { locals } ) => {

    const session = locals.auth ? await locals.auth.validate() : undefined;

    return {
        user: session ? session.user : undefined
    };
};