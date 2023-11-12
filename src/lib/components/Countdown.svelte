<script lang="ts">
	export let duration: number;
	export let remaining: number;
</script>

<div class="countdown">
	<button>
		<iconify-icon class="icon-pause" icon="mdi:pause-circle" />
	</button>
	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}" />
	</div>
</div>

<style>
	.countdown {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 1em;
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 8em;
		display: flex;
	}
	.duration {
		flex: 1;
		height: 1em;
		background-color: #ccc;
	}

	.icon-pause {
		color: #999;
	}

	.remaining {
		position: absolute;
		height: 100%;
		width: calc(var(--p) * 100%);
		background-color: #999;
	}
</style>
