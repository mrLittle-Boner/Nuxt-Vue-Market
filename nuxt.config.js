export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-nuxt-market',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-vue-market' }
    ],
    link: [
      { rel: 'stylesheet', type: '', href: 'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // base: '/category/',
    // routes: [
    //   {path: '*', redirect: '/1' }
    // ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: "[local]_[hash:base64:4]"
        }
      }
    }
  }
}
