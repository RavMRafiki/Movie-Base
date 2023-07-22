<script lang="ts">
	// @ts-nocheck
	import MovieCard from '../../../components/MovieCard.svelte';
    import { slide } from 'svelte/transition';
	export let data;
	let movies = data.item.results
	let totalpages = data.item.total_pages

	let pageNumber = 2;
	async function loadNextPage() {
		if ( pageNumber <= totalpages){
			const response = await fetch(`/search/${data.id}`, {
				method: 'POST',
				body: JSON.stringify({ pageNumber }),
				headers: {
					'content-type': 'application/json'
				}
			});
			const result = await response.json()
			movies = [...movies, ...result]
			pageNumber+=1;
		}
	}
	function actionWhenInViewport(e: Element) {
		const observer = new IntersectionObserver(entries => {
		if(entries[0].isIntersecting) {
			loadNextPage()
    }
  },);

  observer.observe(e);
}
</script>

<div class="searched-movies" in:slide={{ duration: 500, delay: 500 }} out:slide={{ duration: 500 }}>
	{#each movies as movie}
		<MovieCard {movie} />
	{:else}
		<p>Nothing was found</p>
	{/each}

</div>
<div class="load-more" use:actionWhenInViewport>
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
	p {
		text-align: center;
	}
</style>
