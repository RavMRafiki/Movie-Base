<script lang="ts">
	import { fade } from "svelte/transition";
	import type { IMovie } from "../types/IMovie";
	export let movie : IMovie;

</script>

<div class="movie-card" transition:fade>
	<a data-sveltekit-preload-data="hover" href={'/movies/' + movie.id} >
		{#if movie.poster_path}
			<img src={'https://image.tmdb.org/t/p/w200' + movie.poster_path} alt={movie.title} />
			{:else}
			<img src={'https://i.stack.imgur.com/aGiVE.png'} alt={movie.title} />
		{/if}
	</a>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 5vh;
	}
	p {
		font-size: 0.7rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
