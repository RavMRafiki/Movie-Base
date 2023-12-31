import type { IImage } from '../../../../types/IImage.js';
import type { IResponse } from '../../../../types/IResponse.js';

export async function load({ fetch , params }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/images`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
        }
      });
    const item = await res.json();
    const result : IImage[] = await item.backdrops;
    return { result };
}