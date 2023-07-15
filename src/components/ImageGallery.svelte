<script lang="ts">
    import { fly } from "svelte/transition";
    export let images : IImage[]
    type IImage = { file_path : string}

    export let currentImage = 0;
    $ : {
        if(currentImage < 0)
        currentImage = images.length - 1
        else if (currentImage > images.length - 1)
        currentImage = 0
    }
    let toRight = 1;
</script>

<div class="video">
{#key currentImage}
    
<img width="420" height="315" in:fly={{ delay: 400, x: 200*toRight*-1}} out:fly={{x: 200*toRight}}
src={`https://image.tmdb.org/t/p/original/${images[currentImage].file_path}`} alt="For Film">
{/key}
</div>
<div class="buttons">
    <button on:click={()=>{currentImage--; toRight=1}}>ᐸ</button>
    <button on:click={()=>{currentImage++; toRight=-1}}>ᐳ</button>
</div>

<style>
    .buttons {
        display: flex;
        width: 100%;
        justify-content: center;
        /* flex-direction: row; */
    }
    .buttons button {
        background-color: black;
        color: white;
        border: none;
        outline: none;
        width: 100%;
        height: 3rem;
    }
    .buttons button:hover {
        background-color: #333333;
    }
    .buttons button:active {
        background-color: #555555;
    }
    img {
        width: 100%;
        height: 100%;
    }
    
    .video {
        width: 100%;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
</style>