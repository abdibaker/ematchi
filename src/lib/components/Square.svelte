<script lang="ts">
	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	{#if !found}
		<span>{emoji}</span>
	{/if}
</div>

<style>
	.square {
		background-color: red;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.flipped button {
		background-color: blue;
	}
	button {
		position: absolute;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	span {
		font-size: 5em;
		cursor: pointer;
		pointer-events: none;
	}
</style>
