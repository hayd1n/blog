<script lang="ts">
	import { APP_NAME } from '$lib/app';
	import Neofetch from './Neofetch.svelte';
</script>

<svelte:head>
	<title>{APP_NAME}</title>
</svelte:head>

<article>
	<header class="my-4 sm:my-10">
		<Neofetch />
	</header>
</article>
