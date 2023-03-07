/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.js',
    ],
    prefix: 'hb-',
    theme: {
        extend: {},
    },
    variants: {
        margin: ['first', 'last']
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}
