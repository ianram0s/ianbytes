<script>
	import { page } from "$app/stores";
</script>
<svelte:head>
	<title>Devs Blog</title>
	<meta name="description" content="Latest cool dev blog posts" />
</svelte:head>


<div class="flex w-full justify-between items-center py-4 px-2">
    <div class="text-xl flex gap-4">
        <a href="/articles/top" class="hover:underline transition-all {$page.url.pathname.includes('articles/top') ||  $page.url.pathname == '/' ? 'text-primary font-bold' : 'text-primary'}">
            Top
        </a>
        <a href="/articles/latest"  class="hover:underline {$page.url.pathname.includes('articles/latest') ? 'text-primary font-bold' : 'text-primary'}">
            Latest
        </a>
    </div>

    {#if $page.url.pathname.includes('articles/top') || $page.url.pathname == '/'}
        <div class="text-sm flex gap-2">
            <a href="/articles/top/week" class="hover:underline {$page.url.pathname.endsWith('articles/top') || $page.url.pathname.includes('articles/top/week') ||  $page.url.pathname == '/' ? 'text-primary font-bold' : 'text-primary'}">
                Week
            </a>
            <a href="/articles/top/month" class="hover:underline {$page.url.pathname.includes('articles/top/month') ? ' text-primary font-bold' : 'text-primary'} transition-all">
                Month
            </a>
            <a href="/articles/top/year" class="hover:underline {$page.url.pathname.includes('articles/top/year') ? 'text-primary font-bold' : 'text-primary'} transition-all">
                Year
            </a>
        </div>
    {/if}


</div>

<div>
    <slot/>
</div>