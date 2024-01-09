<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button } from "$lib/components/ui/button";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Profile</h1>
<p>User: @{data.username}</p>


<form method="post" action="?/logout" use:enhance>
	<Button type='submit'>
		Sign out
	</Button>
</form>