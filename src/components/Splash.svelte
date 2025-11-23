<script>
    import { onMount } from 'svelte';

    const images = import.meta.glob("../assets/splash/*.png", { eager: true })

    const imageArray = Object.values(images).map((m) => m.default);

    let splash = -1

    onMount(async () => {
        splash = Math.floor(Math.random() * imageArray.length)

        //console.log("it is ", imageArray)
    })
</script>

<div>
    {#if splash != -1}
    <img
        src={imageArray[splash].src}
        alt=""
    />
    {/if}
</div>