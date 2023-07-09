<script lang="ts">
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	export let data;
	import { slide } from 'svelte/transition';
</script>

<div in:slide={{ duration: 500, delay: 500 }} out:slide={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies movies={data.result} />
</div>
