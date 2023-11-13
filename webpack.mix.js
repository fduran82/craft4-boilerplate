require("dotenv").config();
const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
// require("laravel-mix-versionhash");

mix.js(["assets/javascript/app.js"], "public/assets/app.js").extract();

mix
	.sass("assets/sass/app.scss", "assets/app.css")
	.setPublicPath("public/")
	.options({
		processCssUrls: false,
		postCss: [tailwindcss("./tailwind.config.js")]
	});


// Run BrowserSync Locally, off by default
// if (!mix.inProduction()) {
// 	mix.browserSync({
// 		proxy: {
// 			target: process.env.SITE_URL,
// 		},
// 		files: ['assets/**/*', 'templates/**/*'],
// 		secure: false,
// 	})
// }

// Only run in Production
// if (mix.inProduction()) {
// 	mix.versionHash();
// }
