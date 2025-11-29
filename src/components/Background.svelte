<script>
    
    import { onMount } from 'svelte';
    import backgrounds from '../assets/backgrounds.json'

    const images = import.meta.glob("../assets/background/*.jpg", { eager: true })

    const imageMap = Object.fromEntries(
        Object.entries(images).map(([path, img]) => {
            const filename = path.split('/').pop()
            const src = // what the fuc
                img?.src ??
                img?.default?.src ??
                img?.default ??
                '';
            return [filename, src]
        })
    )

    backgrounds.forEach(bg => {
        bg.url = imageMap[bg.file]
        if (!bg.url) console.warn('Missing URL for', bg.file);
    })

    let background = -1

    onMount(async () => {
        background = Math.floor(Math.random() * backgrounds.length)

        document.documentElement.style.cssText = "--accent-color: " + backgrounds[background].accent

        //console.log("matched image paths: ", Object.keys(images));
        
        //console.log("loading background")
        //console.log(backgrounds[background])
    })
</script>

<div class="fixed bg-black w-screen h-screen">
    {#if background == -1}
    <div class="w-screen h-screen bg-black"></div>
    {:else}
    <img
        src={backgrounds[background].url}
        id="bg-render"
        loading="lazy"
        alt={backgrounds[background].alt}
    />
    {/if}
</div>

<style lang="postcss">
    #bg-render {
        @apply w-screen h-screen object-cover;
    }
</style>