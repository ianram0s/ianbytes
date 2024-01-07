<script>
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Globe } from 'lucide-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon">
			<Globe
				class="h-[1.1rem] w-[1.1rem] rotate-0 scale-100"
			/>
			<span class="sr-only">Toggle language</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => console.log('light')}>English</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => console.log('dark')}>Português</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => console.log('français')}>Français</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
