/** @type {import('tailwindcss/types').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './assets/**/*.scss',
        './assets/**/*.css',
    ],
    theme: {
        fontFamily: {
            Poppins: ['Poppins'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '0.75rem',
            },
        },
        screens: {
            xs: '480px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            '2xl': '1366px',
        },
        extend: {
            colors: {
                site: {
                    primary: {
                        DEFAULT: '#FFFFFF',
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
