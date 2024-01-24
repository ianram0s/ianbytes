<script lang="ts">
	import FeedItem from "./feed-item.svelte";

	export let articles: Article[] = [];

	const firstArticle = articles[0];
	
</script>
<div class="flex flex-col gap-4 rounded-xl">
	<FeedItem article={firstArticle} showCoverImage />

	{#each articles as article, index}
		{#if index !== 0}
			<FeedItem article={article} />
		{/if}
	{/each}
</div>
