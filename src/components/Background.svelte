<script>
    import { onMount } from 'svelte';

    const photos = [
        'vn_bodyofwater.JPG',
        'vn_city.JPG',
        'vn_watermountain.JPG',
        'vn_beach.JPG',
        'vn_streets.JPG',
        'ca_recordstore.JPG',
        'tx_bay.JPG',
        'tx_bay2.JPG',
        'ak_mountains.JPG',
        'ak_mountains2.JPG',
        'ca_cloudflare.JPG',
        'ca_salesforce.JPG'
    ]

    const backgrounds = [
        {
            file: "vn_bodyofwater.JPG",
            tag: ["nature"],
            alt: "body of water",
            accent: "#79803b"
        },
        {
            file: "vn_city.JPG",
            tag: ["urban"],
            alt: "bright lights of city development",
            accent: "#030e17"
        },
        {
            file: "vn_watermountain.JPG",
            tag: ["nature"],
            alt: "mountain with water",
            accent: "#aac0c6"
        }
    ]

    let background = -1
    let imageURL = ''

    onMount(async () => {
        background = Math.floor(Math.random() * backgrounds.length)

        document.documentElement.style.cssText = "--accent-color: " + backgrounds[background].accent

        const img = await import(`../assets/background/${backgrounds[background].file}`)
        imageURL = img.default.src

        //console.log("url is " + backgrounds[background].file)
        //console.log(imageURL)
        //console.log(imageURL.src)

        
        // console.log("bg is", background)
    })
</script>

<div class="fixed bg-black w-screen h-screen">
    {#if background == -1}
    <div class="w-screen h-screen bg-black"></div>
    {:else}
    <img
        src={imageURL}
        id="bg-render"
        loading="lazy"
        alt={backgrounds[background].alt}
    />
    {/if}
</div>

<style lang="postcss">
    #bg-render {
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        @apply w-screen h-screen object-cover;
    }
</style>