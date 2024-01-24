import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/articles?top=7');
	const result = await response.json();

	return {
		articles: result
	};
};