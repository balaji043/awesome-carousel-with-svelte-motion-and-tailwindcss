<script lang="ts">
	import AwesomeCarousel from '$lib/components/AwesomeCarousel.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<title>Cosmic Margin - Awesome carousel</title>
</svelte:head>

<main
	class="text-white h-screen
            overflow-hidden max-w-7xl mx-auto relative"
>
	<NavBar />
	<AwesomeCarousel />
</main>
