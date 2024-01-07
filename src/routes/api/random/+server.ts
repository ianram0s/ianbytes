import type { RequestHandler } from './$types';

export const GET = (async ({ platform }) => {

    const result = await platform?.env.IANBYTES_DB.prepare(
        "SELECT * FROM users LIMIT 5"
      ).run();

    console.log(result)
      
	return new Response(result);
}) satisfies RequestHandler;
