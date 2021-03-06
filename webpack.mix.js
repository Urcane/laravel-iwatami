const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         require('postcss-import'),
//         require('tailwindcss'),
//     ])
//     .webpackConfig(require('./webpack.config'));


mix.js('resources/js/index.js', 'public/js/index.js')
    .styles([
        'resources/css/bootstrap.css',
        'resources/css/style.css'
    ], 'public/css/style.css')

mix.js('resources/js/dashboard.js', 'public/js/dashboard.js')
    .styles([
        'resources/css/bootstrap.css',
        'resources/css/dashboard.css'
    ], 'public/css/dashboard.css')

mix.webpackConfig({
    output: {
        filename:'[name].js',
        chunkFilename: 'js/chunks/[name].js',
    },
});

mix.browserSync('127.0.0.1:8000');