<script lang="ts">
	import { slide } from 'svelte/transition';
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	export let data;
	let movies = data.result;
	let check = false
	let pageNumber = 2;
	async function loadNextPage() {
		if ( pageNumber <= 39120){

			const response = await fetch('/', {
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
<svelte:head>
	<title>Movie Base</title>
</svelte:head>

<main in:slide={{ duration: 500, delay: 500 }} out:slide={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies movies={movies} />
	<div class="load-more" use:actionWhenInViewport>
	</div>
</main>

<style>
	.load-more {
		margin: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	main {
		min-height: 101vh;
	}
</style>