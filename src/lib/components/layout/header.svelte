<script>
	import { page } from '$app/stores';
	import { LightSwitcher } from '$lib/components/lightswitch';
</script>

<header class="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur">
	<div class="container flex justify-between h-14 items-center">
		<nav class="leading">
			<ul class="w-full flex gap-6">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="transition-colors hover:text-foreground/80 text-foreground/60 font-semibold" href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a class="transition-colors hover:text-foreground/80 text-foreground/60 font-semibold" href="/about">About</a>
				</li>
			</ul>
		</nav>
		<div class="trail">
			<LightSwitcher/>
		</div>

	</div>

</header>