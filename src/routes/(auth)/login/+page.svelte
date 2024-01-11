<script lang="ts">
	import { LoginForm } from "$lib/forms";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="md:hidden">
	<img
		src="/examples/authentication-light.png"
		width={1280}
		height={843}
		alt="Authentication"
		class="block dark:hidden"
	/>
	<img
		src="/examples/authentication-dark.png"
		width={1280}
		height={843}
		alt="Authentication"
		class="hidden dark:block"
	/>
</div>
<div
	class="container relative hidden h-[600px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div
		class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
	>
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
	</div>
	<div class="lg:p-8">
		<div
			class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
		>
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					Create an account
				</h1>
				<p class="text-sm text-muted-foreground">
					Enter your email below to create your account
				</p>
			</div>
			
			<LoginForm form={data.form} />
		</div>
	</div>
</div>