import { DEVTO_API_KEY } from '$env/static/private';
import { error, type NumericRange } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const apiUrl = `https://dev.to/api/articles/${params.user}/${params.slug}`;

	const response = await fetch(apiUrl, {
		headers: {
			'api-key': DEVTO_API_KEY,
			'User-Agent': 'Mozilla/5.0 '
		}
	});

	if (response.ok) {
		const jsonData = await response.json();

		return new Response(JSON.stringify(jsonData), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} else {
		return error(response.status as NumericRange<400, 599>);
	}
};
