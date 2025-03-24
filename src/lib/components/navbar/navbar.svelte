<script lang="ts">
	export let border = true;
</script>

<header
	class="bg-background bg-opacity-70 fixed top-0 z-30 flex h-fit w-full flex-row flex-nowrap items-center justify-center border-b px-2 py-1 backdrop-blur transition-colors {border
		? 'border-opacity-80'
		: 'border-opacity-0'}"
	{...$$restProps}
>
	<div class="flex w-full flex-row flex-nowrap items-center md:w-10/12 lg:w-8/12">
		<slot />
	</div>
</header>
