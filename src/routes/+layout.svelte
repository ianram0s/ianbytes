<script lang="ts">
	import { Footer, Header } from '$lib/components/layout';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<div class="flex min-h-screen min-w-full flex-col items-center justify-center bg-secondary dark:bg-primary-foreground">
	<Header />

	<main class="mx-0 my-auto flex w-full max-w-screen-xl flex-col items-center p-1">
		<slot />
	</main>

	<Footer />

	<ModeWatcher />
</div>
