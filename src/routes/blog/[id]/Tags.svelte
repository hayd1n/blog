<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	export let tags: string[] = [];
</script>

<div class="flex flex-wrap gap-2">
	{#each tags as tag}
		<!-- <Badge variant="secondary" href={`/tags/${tag}`}>{tag}</Badge> -->
		<Badge variant="secondary">{tag}</Badge>
	{/each}
</div>
