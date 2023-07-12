<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	export let movies: any;
	import { slide } from 'svelte/transition';
</script>

<section>
	<h3>Popular Movies</h3>
	<div class="popular-movies">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</section>

<style>
	h3 {
		padding: 0 1rem;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
