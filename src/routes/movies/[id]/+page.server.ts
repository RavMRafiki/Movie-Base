import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
  const [detailReq, recomendReq, watchReq] = await Promise.all([
    await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
        }
      }),
    await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
      }
    }),
    await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUzYWEwYzNhNTQyMDdmNjU3NDRkM2MxM2NkYjJjYSIsInN1YiI6IjY0OTVkNTZkZDIzNmU2MDExZTBhMjFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDKXSw8TifKrPUrb1dsavWFdVnzaa3HGNpj6avisIyw'
      }
    }),
  ])
  if ( detailReq.ok){
    const detail = await detailReq.json()
    const recomend = await recomendReq.json()
    const watch = await watchReq.json()
    const id = params.id
    return { detail, recomend, watch, id };

  }
  return error
}
