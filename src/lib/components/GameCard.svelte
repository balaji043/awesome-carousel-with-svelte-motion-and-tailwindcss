<script lang="ts">
	import Mask from "./Mask.svelte";
	export let game: any;
	export let currentGame: any;
	export let progress: number = 0;
</script>

<button class="relative" on:click>
	<div class="flex p-3 gap-4 items-center relative z-[1]">
		<img
			class="w-1/6 rounded-md"
			src={game.img.sm}
			alt={game.name}
		/>
		<p>{game.name}</p>
	</div>
	{#if game.name === currentGame.name}
		<Mask
			classNames="bg-slate-900 rounded-xl"
			style="width: {progress}%"
		/>
	{/if}
</button>
