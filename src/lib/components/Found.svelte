<script lang="ts">
	export let found: string[];
</script>

<div class="found">
	{#each found as emoji}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	.found {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		height: 100%;
    gap: 0.5em;
	}
	span {
		font-size: 5em;
	}
</style>
