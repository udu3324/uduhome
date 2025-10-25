<script>
    import { onMount } from 'svelte';

    const images = import.meta.glob("../assets/background/*.jpg", { eager: true })

    const backgrounds = [
        {
            file: "ak_mountains.jpg",
            tag: [""],
            alt: "",
            accent: "#857c77"
        },
        {
            file: "ak_mountains2.jpg",
            tag: [""],
            alt: "",
            accent: "#84a560"
        },
        {
            file: "ca_cloudflare.jpg",
            tag: [""],
            alt: "",
            accent: "#ddafb2"
        },
        {
            file: "ca_recordstore.jpg",
            tag: [""],
            alt: "",
            accent: "#45392f"
        },
        {
            file: "ca_salesforce.jpg",
            tag: [""],
            alt: "",
            accent: "#98bcb3"
        },
        {
            file: "tx_bay.jpg",
            tag: [""],
            alt: "",
            accent: "#eed6b0"
        },
        {
            file: "tx_bay2.jpg",
            tag: [""],
            alt: "",
            accent: "#3f525d"
        },
        {
            file: "vn_beach.jpg",
            tag: [""],
            alt: "",
            accent: "#f1e0d6"
        },
        {
            file: "vn_bodyofwater.jpg",
            tag: ["nature"],
            alt: "body of water",
            accent: "#79803b"
        },
        {
            file: "vn_city.jpg",
            tag: ["urban"],
            alt: "bright lights of city development",
            accent: "#030e17"
        },
        {
            file: "vn_streets.jpg",
            tag: [""],
            alt: "",
            accent: "#020c1a"
        },
        {
            file: "vn_watermountain.jpg",
            tag: ["nature"],
            alt: "mountain with water",
            accent: "#aac0c6"
        }
    ]

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

        console.log("matched image paths: ", Object.keys(images));
        
        console.log("loading background")
        console.log(backgrounds[background])
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
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        @apply w-screen h-screen object-cover;
    }
</style>