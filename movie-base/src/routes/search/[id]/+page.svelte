<script>
	// @ts-nocheck
	import MovieCard from '../../../components/MovieCard.svelte';
	export let data;
    import { slide } from 'svelte/transition';
</script>

<div class="searched-movies" in:slide={{ duration: 500, delay: 500 }} out:slide={{ duration: 500 }}>
	{#each data.item.results as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
