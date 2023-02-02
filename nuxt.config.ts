// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],

	build: {
		transpile: ["vuetify"],
	},

	vite: {
		define: {
			"process.env.DEBUG": false,
		},
	},

	dir: {
		layouts: "src/layouts",
		pages: "src/pages",
		middleware: "src/middleware",
	},

	

	
	
	app: {
		head: {
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					charset: "utf-8",
				},
			],
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
			style: [],
			script: [],
			noscript: [],
		},
	},
})
