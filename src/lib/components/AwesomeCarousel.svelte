<script lang="ts">
	import { games, type IGame } from '$lib/utils/data';
	import Carousel from './Carousel.svelte';
	import GameCard from './GameCard.svelte';
	import { maskedTween } from '$lib/stores/mask-tweened';
	import PlayPauseButton from './PlayPauseButton.svelte';

	let currentGameIndex = 0;
	let currentGame: IGame;
	let isPlay = true;

	$: {
		currentGame = games[currentGameIndex];
		maskedTween.start();
		isPlay = true;
	}

	maskedTween.subscribe((value) => {
		if (value === 1) {
			if (currentGameIndex === games.length - 1) {
				currentGameIndex = 0;
			} else {
				currentGameIndex++;
			}
		}
	});
</script>

<section class="grid grid-cols-12 gap-4">
	<div class="col-span-12 md:col-span-9">
		<Carousel game={currentGame} />
	</div>
	<div class="hidden md:block col-span-3">
		{#each games as game, index}
			<GameCard
				on:click={() => {
					currentGameIndex = index;
				}}
				{game}
				isSelected={currentGameIndex === index}
				progress={$maskedTween * 100}
			/>
		{/each}
	</div>
</section>
<PlayPauseButton bind:isPlay />
