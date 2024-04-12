<script lang="ts">
	import FeedItem from './feed-item.svelte';

	export let articles: Article[] = [];

	const firstArticle = articles[0];
</script>

<div class="flex flex-col gap-4 rounded-xl">
	{#if firstArticle}
		<FeedItem article={firstArticle} showCoverImage />
	{/if}

	{#each articles as article, index}
		{#if index !== 0}
			<FeedItem {article} />
		{/if}
	{/each}
</div>
