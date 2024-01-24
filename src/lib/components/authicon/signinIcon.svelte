<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { User } from 'lucide-svelte';

	export let loggedIn = false;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon">
			<User
				class="h-[1.1rem] w-[1.1rem] rotate-0 scale-100"
			/>
			<span class="sr-only">{loggedIn ? 'Account' : 'Sign in'}</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		{#if loggedIn}
			<DropdownMenu.Item on:click={() => goto('/profile')}>Profile</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => goto('/logout')}>Logout</DropdownMenu.Item>
		{:else}
			<DropdownMenu.Item on:click={() => goto('/login')}>Log in</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => goto('/signup')}>Sign up</DropdownMenu.Item>
		{/if}
	</DropdownMenu.Content>
</DropdownMenu.Root>
