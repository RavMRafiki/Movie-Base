// import type { PageLoad } from './$types';

export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
        }
      });
    const item :Response = await res.json();
    const id = params.id
    return { item, id };
}