<script lang="ts">
    export let title : string;
    export let altTitle : string;
    let showAltTitle = false;
</script>

<h1 on:mouseenter={()=>{showAltTitle = true}} on:mouseleave={()=>{showAltTitle = false}}>{title}</h1>

{#if altTitle !== '' && showAltTitle}
<p>

    {altTitle}
</p>
{/if}

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
    p {
        position: absolute;
        background-color: white;
        border: 1px solid gray;
        left: 20%;
        right: 20%;
        border-radius: 1rem;
        padding: 1rem;
    }
</style>