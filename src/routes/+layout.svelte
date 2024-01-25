<script lang="ts">
	import { Footer, Header } from '$lib/components/layout';
	import '../app.pcss';
	import { ModeWatcher } from "mode-watcher";
</script>


<div class="flex flex-col items-center justify-center min-h-screen min-w-full bg-secondary dark:bg-primary-foreground">
	<Header />

	<main class="items-center flex flex-col p-1 w-full max-w-screen-xl mx-0 my-auto">
		<slot />
	</main>

	<Footer/>

	<ModeWatcher />
</div>