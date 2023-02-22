export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () => {
        window.scrollTo(0, 0)
    })
})
