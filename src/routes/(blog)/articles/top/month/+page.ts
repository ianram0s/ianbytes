import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/articles?top=30');

	return {
		articles: await response.json()
	};
};