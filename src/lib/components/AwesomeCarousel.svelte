<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import GameCard from '$lib/components/GameCard.svelte';
	import { games, type IGame } from '$lib/data';
	import { createTweenedProgress } from '$lib/mask-tweened';
	import { onMount } from 'svelte';

	// reactive variables
	let currentGameIndex = 0;
	let currentGame: IGame;
	let isPlaying: boolean = true;
	// stores
	const maskTween = createTweenedProgress();
	// lifecycles
	onMount(() => {
		maskTween.start();
	});
	// computed/reactive statements
	$: {
		currentGame = games[currentGameIndex];
		maskTween.start();
	}
	// actions/event handling
	const onGameCardClick = (index: number) => {
		currentGameIndex = index;
	};

	maskTween.subscribe((value) => {
		if (value === 1) {
			if (currentGameIndex === games.length - 1) {
				currentGameIndex = 0;
			} else {
				currentGameIndex++;
			}
		}
	});
</script>

<div class="grid grid-cols-12 m-8 gap-4">
	<Carousel classNames="col-span-12 md:col-span-9" game={currentGame} />
	<div class="col-span-3 bg-gray-800 relative">
		{#each games as game, index}
			<!-- content here -->
			<GameCard
				{game}
				on:click={() => onGameCardClick(index)}
				isCurrentCard={game.name === currentGame.name}
				progress={$maskTween * 100}
			/>
		{/each}
	</div>
</div>
<button
	on:click={() => {
		if (isPlaying) {
			maskTween.pause();
		} else {
			maskTween.resume();
		}
		isPlaying = !isPlaying;
	}}
	class="absolute bottom-10 right-5 inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
>
	<svg
		stroke="currentColor"
		fill="currentColor"
		viewBox="0 0 16 16"
		class="w-8 ml-[2px]"
		class:ml-1={!isPlaying}
	>
		{#if isPlaying}
			<path
				d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
			/>
		{:else}
			<path
				d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
			/>
		{/if}
	</svg>
</button>
