<script lang="ts">
	import { Icons } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { cn } from '$lib/utils';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';
	import { loginFormSchema, type LoginFormSchema } from '$lib/forms';

	let className: string | undefined | null = undefined;
	export { className as class };

	type Provider = 'GitHub' | 'Email';

	let isLoading: boolean = false;
	let isLoadingProvider: Provider | false = false;

	async function onSubmit(provider: Provider) {
		isLoading = true;
		isLoadingProvider = provider;

		goto('/login/github');
	}
	export let form: SuperValidated<LoginFormSchema>;
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<Form.Root method="POST" {form} schema={loginFormSchema} let:config>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>E-mail</Form.Label>
				<Form.Input type="email" placeholder="name@example.com" />
				<Form.Validation class="pb-2" />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="password">
			<Form.Item>
				<Form.Label>Password</Form.Label>
				<Form.Input type="password" />
				<Form.Validation class="pb-2" />
			</Form.Item>
		</Form.Field>
		<Form.Button class="mt-2 w-full" type="submit" disabled={isLoading}>
			{#if isLoading && isLoadingProvider == 'Email'}
				<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
			{:else}
				Sign up with E-mail
			{/if}
		</Form.Button>
	</Form.Root>

	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
		</div>
	</div>
	<Button
		variant="outline"
		type="button"
		disabled={isLoading}
		on:click={() => {
			onSubmit('GitHub');
		}}
	>
		{#if isLoading && isLoadingProvider == 'GitHub'}
			<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
		{:else}
			<Icons.github class="mr-2 h-4 w-4" />
		{/if}
		{' '}
		GitHub
	</Button>
</div>
