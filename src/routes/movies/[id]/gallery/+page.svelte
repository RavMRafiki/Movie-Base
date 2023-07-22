<script lang="ts">
	import ImageGallery from "../../../../components/ImageGallery.svelte";
	import type { IImage } from "../../../../types/IImage";

    export let data : {result : IImage[]}
    let currentImage : number
</script>

<main>

    <ImageGallery {currentImage} images={data.result}/>
    <div class="images">
    {#each data.result as image, idx} 
        <button on:click={()=>{currentImage = idx, document.body.scrollIntoView()}}>
            <img width="210" height="157"
            src={`https://image.tmdb.org/t/p/original/${image.file_path}`} alt="For Film">
        </button>               
    {/each}
    </div>
</main>

<style>
    main {
		margin: 2rem 20%;
	}
    @media (max-width: 1000px){
            main {
		margin: 2rem 0;
	}
    }
    .images button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>
