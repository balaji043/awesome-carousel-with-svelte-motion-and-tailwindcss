<script lang="ts">
	import { fly } from 'svelte/transition';
	import Mask from './Mask.svelte';
	export let game: any;
	export let classNames: any = '';
</script>

<div class="{classNames} relative h-full w-full rounded-lg">
	{#key game}
		<figure in:fly={{ x: 100, duration: 1000 }} class="h-full">
			<img class="rounded-lg h-full aspect-auto object-fill" src={game.img.lg} alt={game.name} />
			<Mask classNames="bg-gray-700 opacity-60 rounded-lg" />
		</figure>
	{/key}
	<div class="absolute left-10 bottom-10 md:w-1/2 flex flex-col gap-3 z-[1]">
		{#key game}
			<h1 in:fly={{ x: 500, duration: 1400 }} class="text-2xl md:text-5xl">
				{game.name}
			</h1>
			<p in:fly={{ x: 600, duration: 1600 }} class="text-gray-400">
				{game.description}
			</p>
		{/key}
		<div>
			{#key game}
				<button
					in:fly={{ x: 700, duration: 1800 }}
					class="bg-blue-500 p-3 text-xs rounded-lg uppercase"
				>
					Buy Now
				</button>
			{/key}
		</div>
	</div>
</div>
