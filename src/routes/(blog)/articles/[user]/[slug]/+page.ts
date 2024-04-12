import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/articles/${params.user}/${params.slug}`);
	const result = await response.json();

	return {
		article: result
	};
};
