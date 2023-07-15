<script lang="ts">
    import { fly } from "svelte/transition";
    export let videos : IVideo[]
    type IVideo = { key : string , name: string}

    let currentVideo = 0
    $ : {
        if(currentVideo < 0)
        currentVideo = videos.length - 1
        else if (currentVideo > videos.length - 1)
        currentVideo = 0
    }
    let toRight = 1;
</script>
{#if videos.length !== 0 }
<div class="video">
{#key currentVideo}
    
<iframe width="420" height="315" title={videos[currentVideo]=== undefined ? 'Youtube Video' : videos[currentVideo].name} in:fly={{ delay: 400, x: 200*toRight*-1}} out:fly={{x: 200*toRight}}
src={`https://www.youtube.com/embed/${videos[currentVideo].key}`}>
</iframe>
{/key}
</div>
<div class="buttons">
    <button on:click={()=>{currentVideo--; toRight=1}}>ᐸ</button>
    <button on:click={()=>{currentVideo++; toRight=-1}}>ᐳ</button>
</div>
{/if}

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
    iframe {
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