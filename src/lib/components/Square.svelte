<script lang="ts">
	export let emoji: string;
</script>

<div class="square">
	<button on:click />
	<span>{emoji}</span>
</div>

<style>
	.square {
		background-color: red;
		display: flex;
		justify-content: center;
		align-items: center;
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
