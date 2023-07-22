<script lang="ts">
	import { onMount } from "svelte";

    onMount(()=>{

        fetch('https://api.geoapify.com/v1/ipinfo?apiKey=9469811e32874fb9a399d4adc248a357')
        .then(response => response.json())
        .then(data => {
            // You can now access the location data in the "data" object
            countryCode = data.country.iso_code
            // console.log(data.country.flag)
            countryFlag = data.country.flag
        })
    })
  export let data : IData
  interface IData {
    item : {
        results : {
            [countryCode : string] : {
                buy : IOption[],
                rent : IOption[],
            }
        }
    }
  }
  $: {
    if ( typeof data.item.results[countryCode] !== 'undefined'){
        buyMovies = data.item.results[countryCode].buy
            rentMovies = data.item.results[countryCode].rent
    }    
    // if ( typeof data.item.results[countryCode].rent !== 'undefined'){
    // }
}
  let countryCode = ''
  let countryFlag = ''
    let buyMovies : IOption[] = []
    let rentMovies : IOption[] = []
interface IOption {
    display_priority
: 
number,
logo_path
: 
string,
provider_id
: 
number,
provider_name
: 
string
}
$: console.log(data)
</script>

<h1>You can buy here in {countryFlag}:</h1>
{#each buyMovies as movie}
<img src={`https://image.tmdb.org/t/p/original/${movie.logo_path}`} alt="">
    
{/each}
<h1>You can rent here in {countryFlag}:</h1>
{#each rentMovies as movie}
<img src={`https://image.tmdb.org/t/p/original/${movie.logo_path}`} alt="">
    
{/each}

<style>
    img {
        border-radius: 20%;
    }
</style>