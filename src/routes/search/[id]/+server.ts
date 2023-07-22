import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { IMovie } from '../../../types/IMovie';
import type { IResponse } from '../../../types/IResponse';

export const POST: RequestHandler = async ( { request, params } ) => {
    const { pageNumber } = await request.json();
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.id}&page=${pageNumber}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
        }
      });
    const item = await res.json();
    const result : IMovie[] = await item.results;
    return json(result);
};