import { NuxtConfig } from '@nuxt/types'

const nuxtConfiguration: NuxtConfig = {
  srcDir: 'src/',
  /*
   ** Nuxt ssr
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: ['~/plugins/composition-api'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://typescript.nuxtjs.org
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',
    // Doc: https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build
   */
  build: {
    terser: {
      extractComments: false,
    },
    extend: ({ output }) => {
      output.globalObject = 'this'
    },
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
  /*
   ** Generate configuration
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
   */
  generate: {
    /*
     ** async functions require extra time with `nuxt generate`
     ** See https://github.com/nuxt-community/composition-api/issues/44
     */
    interval: 2000,
  },
  /*
   ** Render configuration
   ** See https://ja.nuxtjs.org/docs/2.x/configuration-glossary/configuration-render
   */
  // render: {
  //   csp: {
  //     policies: {
  //       'script-src': [
  //         'https://ytk6565.net',
  //         'https://www.google-analytics.com',
  //       ],
  //     },
  //   },
  // },
  // Doc: https://google-analytics.nuxtjs.org/options
  googleAnalytics: {
    id: 'UA-186919639-2',
  },
  // Doc: https://github.com/typekit/webfontloader
  webfontloader: {
    google: {
      // Loads Open Sans font with weights 300 and 400 + display font as swap
      families: ['Inter:400,700&display=swap'],
    },
  },
}

export default nuxtConfiguration
