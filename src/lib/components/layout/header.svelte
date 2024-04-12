<script>
	import { page } from '$app/stores';
	import { LightSwitcher } from '$lib/components/lightswitcher';
	import { LanguageSwitcher } from '$lib/components/langswitcher';
	import { AuthIcon } from '$lib/components/authicon';
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center justify-between">
		<nav class="leading">
			<ul class="flex w-full gap-6">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="font-semibold text-foreground/60 transition-colors hover:text-foreground/80" href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a class="font-semibold text-foreground/60 transition-colors hover:text-foreground/80" href="/about">About</a>
				</li>
			</ul>
		</nav>
		<div class="trail flex">
			<LightSwitcher />
			<AuthIcon loggedIn={$page.data.user !== undefined} />
		</div>
	</div>
</header>
