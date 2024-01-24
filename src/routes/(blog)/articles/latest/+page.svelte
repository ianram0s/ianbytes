<script lang="ts">
	import { page } from '$app/stores';
	import { ArticlesFeed } from '$lib/components/blog';
	
</script>

<ArticlesFeed articles={$page.data.articles}/>

