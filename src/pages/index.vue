<script lang="ts" setup>
useHead({
    title: 'Basic Version - Nuxt 3 Template',
    // titleTemplate: (title) => `${title} | MySite`,
    meta: [{ name: 'description', content: 'Basic Version - Nuxt 3 Template' }],
})

const whatWeHave = [
    {
        title: 'TailwindCSS',
        image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png',
        description: 'A utility-first CSS framework.',
        url: 'https://tailwindcss.com/',
    },
    {
        title: 'Headless UI',
        image: '/assets/headlessui-icon.svg',
        description: 'Completely unstyled, fully accessible UI components.',
        url: 'https://headlessui.dev/',
    },
    {
        title: 'Pinia',
        image: 'https://pinia.esm.dev/logo.svg',
        description: 'A store for Vue applications.',
        url: 'https://pinia.esm.dev/',
    },
    {
        title: 'VueUse',
        image: 'https://vueuse.org/favicon.svg',
        description: 'A collection of essential Composition API functions.',
        url: 'https://vueuse.org/',
    },
    {
        title: 'Nuxt Image',
        image: 'https://i.imgur.com/C9lDB1x.png',
        description: 'Plug-and-play image optimization for Nuxt apps.',
        url: 'https://v1.image.nuxtjs.org/get-started/',
    },
    {
        title: 'Color Mode',
        image: 'https://i.imgur.com/3lExL6H.png',
        description: 'Dark and Light mode with auto detection made easy.',
        url: 'https://color-mode.nuxtjs.org/',
    },
    {
        title: 'Unlighthouse',
        image: 'https://d33wubrfki0l68.cloudfront.net/64ca835bc00d433f990610a6e616b65bb6f70118/68801/logo-light.svg',
        description: 'Like Lighthouse, but it scans every single page.',
        url: 'https://unlighthouse.dev/',
    },
    {
        title: 'Uno Icons',
        image: 'https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg',
        description: 'Use any icons with Pure CSS for UnoCSS.',
        url: 'https://github.com/unocss/unocss/tree/main/packages/preset-icons/',
    },
]
</script>

<template>
    <div class="mainpage">
        <div class="mainpage__wrapper">
            <h1>
                Nuxt 3 Template - Basic Version
                <div class="i-mdi:beta text-orange-400" />
            </h1>
            <h2>What's included</h2>
            <div class="mainpage__items">
                <NuxtLink
                    :to="item.url"
                    v-for="(item, key) in whatWeHave"
                    :key="key"
                    class="mainpage__items-card"
                    target="_blank"
                >
                    <div class="mainpage__items-card-body">
                        <img :src="item.image" alt="" />
                        <h3 class="title">{{ item.title }}</h3>
                        <p class="description">
                            {{ item.description }}
                        </p>
                    </div>
                </NuxtLink>
            </div>
            <footer class="mainpage__creator">
                <p>
                    Made with ❤️ by <a href="https://twitter.com/matifanger" target="_blank">@matifanger</a>
                </p>
            </footer>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.mainpage {
    @apply bg-[#0C0C0D] text-white flex flex-col justify-center items-center min-h-screen py-10;
    &__wrapper {
        @apply container w-full flex flex-col justify-center items-center gap-3;
        & h1 {
            @apply flex items-center gap-1;
        }
    }
    & h2 {
        @apply text-4xl font-bold;
    }
    &__items {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10;
        grid-auto-rows: 1fr;
        &-card {
            @apply flex items-center justify-center rounded-2xl border-2 border-[#18181B] border-opacity-80 overflow-hidden p-0.5;
            &:hover {
                background: linear-gradient(
                    90deg,
                    #ff0000 0%,
                    #ff7f00 12.5%,
                    #ffff00 25%,
                    #00ff00 37.5%,
                    #0000ff 50%,
                    #4b0082 62.5%,
                    #8b00ff 75%,
                    #ff0000 87.5%
                );
                background-size: 200% 200%;
                animation: rainbow 2s ease infinite;
                @keyframes rainbow {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            }
            &-body {
                @apply flex flex-col justify-center bg-[#0C0C0D] gap-2 px-10 py-7 h-full w-full rounded-xl;
                & img {
                    @apply w-10 h-10 object-cover;
                }
                & .title {
                    @apply text-xl font-bold text-gray-50;
                }
                & .description {
                    @apply text-gray-400;
                }
            }
        }
    }
    &__creator {
        @apply text-gray-400 text-sm mt-10;
        & a {
            @apply text-gray-400 underline;
        }
    }
}
</style>
