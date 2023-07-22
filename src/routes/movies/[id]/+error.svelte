<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>{
        alert('This page does not exists')
        goto('/')
    })
</script>
