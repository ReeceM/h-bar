const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.js',
        './src/**/*.css',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        process.env.NODE_ENV === 'production'
            ? require('autoprefixer')
            : null,
        process.env.NODE_ENV === 'production'
            ? cssnano({ preset: 'default' })
            : null,
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
}
