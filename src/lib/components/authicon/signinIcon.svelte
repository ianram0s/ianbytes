<script>
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { User } from 'lucide-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon">
			<User
				class="h-[1.1rem] w-[1.1rem] rotate-0 scale-100"
			/>
			<span class="sr-only">Sign in</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => console.log('light')}>Sign in</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
