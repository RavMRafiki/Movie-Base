import type { IMovie } from '../types/IMovie.js';

export async function load({ fetch }) {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
        }
      });
    const item = await res.json();
    const result : IMovie[] = await item.results;
    return { result };
}