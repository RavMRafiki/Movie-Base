<script>
	// @ts-nocheck

	export let data;
	import { slide } from 'svelte/transition';
</script>

<div class="movie-details" in:slide={{ duration: 500, delay: 500 }} out:slide={{ duration: 500 }}>
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original/' + data.item.backdrop_path}
			alt={data.item.title}
		/>
	</div>
	<div class="text-container">
		<h1>{data.item.title}</h1>
		<p>{data.item.overview}</p>
		<p>
			<span>Release date:</span>
			{data.item.release_date} <br />
			<span>Budget:</span>
			{data.item.budget} <br />
			<span>Rating:</span>{data.item.vote_average} <br />
			<span>Runtime:</span>{data.item.runtime}
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
