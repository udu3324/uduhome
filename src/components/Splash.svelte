<script>
    import { onMount } from 'svelte';

    const images = import.meta.glob("../assets/splash/*.png", { eager: true })

    const imageArray = Object.values(images).map((m) => m.default);

    let splash = -1
    let mask = ""
    let text = ""

    onMount(async () => {
        splash = Math.floor(Math.random() * imageArray.length)
        mask = imageArray[splash].src
        text = mask.substring(mask.lastIndexOf("/") + 1, mask.lastIndexOf("."))
        
        console.log("it is ", imageArray)
    })

    function change() {
        splash++
        if (splash == imageArray.length)
            splash = 0

        mask = imageArray[splash].src
        text = mask.substring(mask.lastIndexOf("/") + 1, mask.lastIndexOf("."))
        
    }
</script>

<button
    title={text}
    on:click={change}
    class="shape block cursor-pointer bg-stone-950/80 mask-no-repeat mask-contain mask-center mask-luminance"
    style={`
        mask-image: url('${mask}');
        -webkit-mask-image: url('${mask}');
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
    `}
    >
</button>

<style lang="postcss">
    .shape {
        width: 440px;
        height: 90px;
        background-color: var(--accent-color);
    }
    
    .shape:hover {
        background-color: color-mix(in srgb, var(--accent-color) 80%, transparent);
    }
</style>