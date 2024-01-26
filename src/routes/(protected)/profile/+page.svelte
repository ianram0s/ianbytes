<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Profile</h1>
<p>User: @{data.user.username}</p>


<form method="POST" action="/logout">
	<Button type="submit" variant='outline'>
		Sign out
	</Button>
</form>
