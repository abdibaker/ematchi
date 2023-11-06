<script lang="ts">
	import { levels, type Level } from '$lib/level';
	import Grid from './Grid.svelte';

	let level = levels[0];
	let size = level.size;
	let grid = createGrid(level);
	let found: string[] = [];

	function createGrid(level: Level) {
		const copy = level.emojis.slice();
		const pairs: string[] = [];

		for (let i = 0; i < level.size ** 2 / 2; i++) {
			const index = Math.floor(Math.random() * copy.length);
			const emoji = copy.splice(index, 1)[0];
			pairs.push(emoji);
		}

		pairs.push(...pairs);

		return pairs;
	}

	createGrid(level);
</script>

<div class="game">
	<div class="info" />
	<div class="board">
		<Grid {grid} />
	</div>
	<div class="info" />
</div>

<style>
	.game {
		display: flex;
		font-size: min(5vmin, 0.3rem);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.info {
		width: 80em;
		height: 10em;
		background-color: purple;
	}

	.board {
		width: 80em;
		height: 80em;
		background-color: teal;
	}
</style>
