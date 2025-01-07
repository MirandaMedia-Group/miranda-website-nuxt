import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueReCaptcha, {
		siteKey: '6LccjNUZAAAAAL9yRIFICsIW6aZf5pV41u6mU1rA',
		loaderOptions: {
			autoHideBadge: true,
			explicitRenderParameters: {
				badge: 'bottomleft',
				size: 'invisible',
				theme: 'dark',
			},
		},
	})
})
