<script lang="ts">
	import { page } from '$app/stores';
	
	const article: Article = $page.data.article;
</script>
{#if article.cover_image}
	<img class="w-full mt-6 max-w-screen-md rounded-t-xl" src={article.cover_image} alt="Post header banner"/>
{/if}

<div class="flex flex-row justify-start max-w-screen-md w-full bg-popover p-4">
	<img class="w-12 h-12 rounded-full" src={article.user.profile_image} alt="User's profile" />
	<div class="ml-3 text-sm flex flex-col justify-center">
		<span class="font-bold">
			{article.user.name}
		</span>
		<span class="text-primary/50 mt-1 flex gap-2">
			<span>Published on {article.readable_publish_date}</span>
			<span>•</span>
			<span>{article.reading_time_minutes} min read</span>
			
		</span>
	</div>
</div>

<div class="article max-w-screen-md mb-6 bg-popover px-14 pb-4 {article.cover_image ? "rounded-b-xl" : "rounded-xl"}">
	<h2>{article.title}</h2>

	<p class="article-body">
		{@html article.body_html}
	</p>
</div>

<style>
	.article > :global(h2) {
		@apply text-6xl my-6;
	}
	.article-body > :global(p) {
		@apply text-xl my-6;
	}

	.article-body > :global(h2) {
		@apply text-3xl mt-4;
	}

	.article-body > :global(h3) {
		@apply text-4xl mt-12 mb-2;
	}

	.article-body > :global(ul) {
		@apply text-xl ml-4 mt-4;
		list-style-type: disc;
	}

	.article-body > :global(h2) > :global(a) {
		@apply text-3xl mt-4 underline hover:text-popover;
	}
</style>