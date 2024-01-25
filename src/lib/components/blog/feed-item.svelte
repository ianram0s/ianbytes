<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Icons } from '../icons';

	export let article: Article;
	export let showCoverImage = false;
</script>

<div class="w-full max-w-screen-md rounded-xl bg-background">
	{#if showCoverImage && article.cover_image}
		<div class="flex w-full items-center justify-center">
			<img
				src={article.cover_image}
				alt="Article's cover"
				class="object-fit aspect-auto min-h-[320px] w-full rounded-t-xl bg-background"
			/>
		</div>
	{/if}
	<div class="px-6 py-4 {showCoverImage ? 'rounded-b-xl' : 'rounded-xl'}">
		<div class="my-2 flex">
			<img class="h-12 w-12 rounded-full" src={article.user.profile_image} alt="Author's profile" />
			<div class="ml-2 flex flex-col">
				<span>{article.user.name}</span>
				<span class="text-sm">{article.readable_publish_date}</span>
			</div>
		</div>

		<h2 class="text-bold py-2 text-xl text-primary">
			{article.title}
		</h2>

		<p class="py-2 text-sm text-primary">
			{article.description}
		</p>

		<div class="mt-3 flex gap-2">
			{#each article.tag_list as tag}
				<a class="opacity-70 group" href="/articles?tag={tag}">
					<Badge class="group-hover:bg-secondary/80" variant="outline">
						#{tag}
					</Badge>
				</a>
			{/each}
		</div>
		<div class="mt-6 flex items-center justify-between">
			<div class="flex items-center justify-center gap-12">
				<span class="flex items-center justify-center gap-2">
					<Icons.heart class="mt-1 h-6 w-6" />
					{article.positive_reactions_count}
				</span>
				<span class="flex items-center justify-center gap-2">
					<Icons.comment class="h-6 w-6" />
					{article.comments_count}
				</span>
			</div>
			<div class="flex items-center justify-center">
				<span class="flex items-center justify-center gap-2">
					<Icons.chevronRight />
				</span>
			</div>
		</div>
	</div>
</div>
