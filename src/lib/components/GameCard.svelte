<script lang="ts">
	import type { IGame } from '$lib/utils/data';
	import Mask from './Mask.svelte';

	export let game: IGame;
	export let isSelected: boolean = false;
	export let progress: number = 0;
</script>

<button on:click class="relative">
	<div class="flex gap-4 items-center p-3 relative z-[1]">
		<img
			class="w-1/6 rounded-md"
			src={game.img.sm}
			alt={game.name}
		/>
		<p>{game.name}</p>
	</div>
	{#if isSelected}
		<Mask classNames="bg-slate-900 rounded-xl" 
		style="width: {progress}%" />
	{/if}
</button>
