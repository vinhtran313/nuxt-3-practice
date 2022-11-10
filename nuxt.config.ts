// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/_colors.scss" as *;'
				}
			}
		}
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},
})
