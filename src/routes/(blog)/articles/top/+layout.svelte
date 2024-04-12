<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Devs Blog</title>
	<meta name="description" content="Latest cool dev blog posts" />
</svelte:head>

<div class="flex w-full max-w-screen-md items-center justify-between px-2 py-4">
	<div class="flex gap-4 text-xl">
		<a
			href="/articles/top"
			class="transition-all hover:underline {$page.url.pathname.includes('articles/top') || $page.url.pathname == '/'
				? 'font-bold text-primary'
				: 'text-primary'}"
		>
			Top
		</a>
		<a
			href="/articles/latest"
			class="hover:underline {$page.url.pathname.includes('articles/latest')
				? 'font-bold text-primary'
				: 'text-primary'}"
		>
			Latest
		</a>
	</div>

	{#if $page.url.pathname.includes('articles/top') || $page.url.pathname == '/'}
		<div class="flex gap-2 text-sm">
			<a
				href="/articles/top/week"
				class="hover:underline {$page.url.pathname.endsWith('articles/top') ||
				$page.url.pathname.includes('articles/top/week') ||
				$page.url.pathname == '/'
					? 'font-bold text-primary'
					: 'text-primary'}"
			>
				Week
			</a>
			<a
				href="/articles/top/month"
				class="hover:underline {$page.url.pathname.includes('articles/top/month')
					? ' font-bold text-primary'
					: 'text-primary'} transition-all"
			>
				Month
			</a>
			<a
				href="/articles/top/year"
				class="hover:underline {$page.url.pathname.includes('articles/top/year')
					? 'font-bold text-primary'
					: 'text-primary'} transition-all"
			>
				Year
			</a>
		</div>
	{/if}
</div>

<div>
	<slot />
</div>
