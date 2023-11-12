<script lang="ts">
	import { levels, type Level } from '$lib/level';
	import { shuffle } from '$lib/utils';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';

	let level = levels[0];
	let size = level.size;
	let grid = createGrid(level);
	let found: string[] = [];
	let remaining = level.duration;
	let duration = level.duration;
	let playing = false;	

	function createGrid(level: Level) {
		const copy = level.emojis.slice();
		const pairs: string[] = [];

		for (let i = 0; i < level.size ** 2 / 2; i++) {
			const index = Math.floor(Math.random() * copy.length);
			const emoji = copy.splice(index, 1)[0];
			pairs.push(emoji);
		}

		pairs.push(...pairs);

		return shuffle(pairs);
	}

	createGrid(level);

	function countdown() {
		const start = Date.now();
		let remainingAtStart = remaining;

		function loop() {
			if(playing) return
			requestAnimationFrame(loop);
			const now = Date.now();
			const elapsed = now - start;
			remaining = Math.max(0, remainingAtStart - elapsed);
			if (remaining <= 0) {
				playing = false
			}
		}

		loop();
	}
</script>

<div class="game">
	<div class="info">
		<Countdown duration={level.duration} {remaining} />
	</div>
	<div class="board">
		<Grid
			{grid}
			on:found={(e) => {
				found = [...found, e.detail.emoji];
			}}
			{found}
		/>
	</div>
	<div class="info">
		<Found {found} />
	</div>
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
	}

	.board {
		width: 80em;
		height: 80em;
	}
</style>
