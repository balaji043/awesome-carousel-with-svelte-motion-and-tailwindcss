<script lang="ts">
	import type { IGame } from '$lib/utils/data';
	import { fly } from 'svelte/transition';
	import Mask from './Mask.svelte';

	export let game: IGame;
</script>

<div class="h-full rounded-lg relative">
	{#key game}
		<figure in:fly={{ x: 100, duration: 1000 }} class="h-full">
			<img
				class="h-full  rounded-lg"
				src={game.img.lg}
				alt={game.name}
			/>
			<Mask classNames="bg-gray-700 opacity-70 rounded-lg" />
		</figure>
	{/key}
	<div
		class="absolute bottom-10 left-10 w-1/2 flex flex-col gap-3 items-start"
	>
		{#key game}
			<h1
				in:fly={{ x: 500, duration: 1000 }}
				class="text-2xl md:text-5xl"
			>
				{game.name}
			</h1>
			<p in:fly={{ x: 600, duration: 1000 }} class="text-gray-300">
				{game.description}
			</p>
			<button
				in:fly={{ x: 700, duration: 1000 }}
				class="bg-blue-500 p-3 text-xs rounded-lg uppercase"
			>
				Buy Now
			</button>
		{/key}
	</div>
</div>
