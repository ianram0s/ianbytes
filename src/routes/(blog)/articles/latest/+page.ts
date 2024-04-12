import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/articles/latest');

	return {
		articles: await response.json()
	};
};
