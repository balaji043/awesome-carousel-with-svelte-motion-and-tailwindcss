<script lang="ts">
	import AwesomeCarousel from '$lib/components/AwesomeCarousel.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<title>Cosmic Margin - Awesome carousel</title>
</svelte:head>

<main
	class="h-screen overflow-hidden max-w-2xl md:max-w-3xl lg:max-w-7xl mx-auto mt-8"
>
	<NavBar />
	<AwesomeCarousel />
</main>
