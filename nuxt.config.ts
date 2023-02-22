// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',

    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        // '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org
        '@pinia/nuxt',
        // unocss plugin - https://github.com/unocss/unocss
        '@unlighthouse/nuxt', // 
        'nuxt-headlessui', // 
        'unplugin-icons/nuxt',
      ],

      postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: ['@/assets/css/main.pcss', '@/assets/css/tailwind.css'],

      vueuse: {
        ssrHandlers: true,
      },

      sourcemap: {
        server: true,
        client: true,
    },

      vite: {
        build: {
          sourcemap: true
        },
        clearScreen: true,
        logLevel: 'info'
      }
})
