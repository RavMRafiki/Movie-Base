<script>
	// @ts-nocheck
	export let data;
	import { slide } from 'svelte/transition';
	import MovieCard from '../../../components/MovieCard.svelte';
	import VideoGallery from '../../../components/VideoGallery.svelte';
	let stars = Array(Math.round(data.detail.vote_average)).fill('★');
	let noStars = Array(10 - Math.round(data.detail.vote_average)).fill('☆')
</script>
<svelte:head>
	<title>{data.detail.title} - Movie Base</title>
</svelte:head>
{#key data.id}
	
<div class="movie-details" in:slide={{ duration: 500, delay: 500 }} out:slide={{ duration: 500 }}>
	{#if data.detail.backdrop_path}
	<a href={data.id + '/gallery'}>

		<div class="img-container">
			<img
			src={'https://image.tmdb.org/t/p/original/' + data.detail.backdrop_path}
			alt={data.detail.title}
			/>
		</div>
	</a>
	{/if}
	<div class="text-container">
		<h1>{data.detail.title}</h1>
		<p>{data.detail.overview}</p>
		<p>
			<span>Release date: </span>
			{data.detail.release_date} <br />
			{#if data.detail.budget}
			<span>Budget: </span>
			{data.detail.budget} <br />
			{/if}
			<span>Rating: </span>{stars.join('') + noStars.join('')} <br />
			<span>Runtime: </span>{data.detail.runtime} min.
		</p>
	</div>
	<h3>Videos:</h3>
	<div class="videos">
		<VideoGallery videos={data.watch.results}/>
	</div>
	{#if data.recomend.results.length !== 0}
	<h3>After watching {data.detail.title}: </h3>
	<div class="recommendations">
		{#each data.recomend.results as movie}
		<MovieCard {movie}/>
		{/each}
	</div>
	{/if}
</div>
{/key}

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
	.recommendations {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
