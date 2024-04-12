<script lang="ts">
	import { page } from '$app/stores';

	const article: Article = $page.data.article;
</script>

{#if article.cover_image}
	<img class="mt-6 w-full max-w-screen-md rounded-t-xl" src={article.cover_image} alt="Post header banner" />
{/if}

<div class="flex w-full max-w-screen-md flex-row justify-start bg-popover p-4">
	<img class="h-12 w-12 rounded-full" src={article.user.profile_image} alt="User's profile" />
	<div class="ml-3 flex flex-col justify-center text-sm">
		<span class="font-bold">
			{article.user.name}
		</span>
		<span class="mt-1 flex gap-2 text-primary/50">
			<span>Published on {article.readable_publish_date}</span>
			<span>•</span>
			<span>{article.reading_time_minutes} min read</span>
		</span>
	</div>
</div>

<div class="article mb-6 max-w-screen-md bg-popover px-14 pb-4 {article.cover_image ? 'rounded-b-xl' : 'rounded-xl'}">
	<h2>{article.title}</h2>

	<p class="article-body">
		{@html article.body_html}
	</p>
</div>

<style>
	.article > :global(h2) {
		@apply my-6 text-6xl;
	}
	.article-body > :global(p) {
		@apply my-6 text-xl;
	}

	.article-body > :global(h2) {
		@apply mt-4 text-3xl;
	}

	.article-body > :global(h3) {
		@apply mb-2 mt-12 text-4xl;
	}

	.article-body > :global(ul) {
		@apply ml-4 mt-4 text-xl;
		list-style-type: disc;
	}

	.article-body > :global(h2) > :global(a) {
		@apply mt-4 text-3xl underline hover:text-popover;
	}
</style>
