<script lang="ts">
	import { fly } from 'svelte/transition';
	import { maskedTween } from '$lib/stores/mask-tweened';
	export let isPlay = false;
</script>

<button
	on:click={() => {
		if (isPlay) {
			maskedTween.pause();
		} else {
			maskedTween.resume();
		}
		isPlay = !isPlay;
	}}
	class=" rounded-full bg-blue-600 absolute right-10 bottom-10 w-9 h-9"
>
	<svg viewBox="0 0 16 16" class="w-8 fill-white" class:ml-1={!isPlay} class:ml-2px={isPlay}>
		{#if isPlay}
			<path
				transition:fly={{ x: -100, duration: 500 }}
				d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
			/>
		{:else}
			<path
				transition:fly={{ x: 100, duration: 500 }}
				d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
			/>
		{/if}
	</svg>
</button>
