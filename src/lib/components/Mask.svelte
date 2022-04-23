<script lang="ts">
	export let classNames: string = '';
</script>

<div
	{...$$restProps}
	class="{classNames} absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-fixed"
/>
