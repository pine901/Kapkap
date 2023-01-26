import axios from "axios";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "KapKap",
    htmlAttrs: {
      lang: "pl",
    },
    meta: [
      { charset: "utf-8" },
      {
        equiv: "Content-Type",
        content: "text/html",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
      {
        property: "og:image",
        content: "/images/main-page/M_700x150.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        sizes: "any",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
      {
        rel: "preconnect",
        href: process.env.SITE_URL,
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/scss/font-awesome.scss',
    "~/assets/scss/category.scss",
    "~/assets/scss/style-all.scss",
    "~/assets/scss/style-home.scss",
    "~/assets/scss/style-about-us.scss",
    "~/assets/scss/style-contact.scss",
    "~/assets/scss/style-blog.scss",
    "~/assets/scss/style-regulamin.scss",
    "~/assets/scss/style-sklep.scss",
    "~/assets/scss/style-product.scss",
    "~/assets/scss/style-loader.scss",
    "~/assets/scss/style-order.scss",
    "~/assets/scss/style-basket.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/preview.client.js",
    "~/plugins/jsonld",
    "~/plugins/axios-accessor",
    "~/plugins/axios",
    "~/plugins/filters",
    "~/plugins/directives",
    "~/plugins/vee-validate.js",
    "~/plugins/notifications.js",
    {
      src: "~plugins/zoom",
      ssr: false,
    },
  ],
  build: {
    transpile: ["vee-validate/dist/rules"],
  },

  // build: {
  //   transpile: ["vee-validate/dist/rules"],
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module'
    "@nuxtjs/google-fonts",
    "nuxt-compress",
    "nuxt-purgecss",
  ],

  purgeCSS: {
    paths: [
      "pages/**/*.vue",
      "layouts/**/*.vue",
      "components/**/*.vue",
      "node_modules/vue-slick-carousel/**/*.js",
    ],
    whitelist: [
      "html",
      "body",
      "dark_brown",
      "brown",
      "list-widget",
      "search-group",
      "accordion",
      "theme-accordion",
    ],
  },

  googleFonts: {
    families: {
      Lato: [300, 400, 700],
      Poppins: [200, 300, 400, 500, 700],
    },
    display: "swap",
    prefetch: false,
    preconnect: true,
    preload: true,
  },

  styleResources: {
    scss: ["~/assets/scss/_media.scss", "./assets/scss/theme/_variables.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/sentry",
    "@nuxtjs/gtm",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "nuxt-i18n",
    [
      "nuxt-compress",
      {
        gzip: {
          threshold: 8192,
        },

        brotli: {
          threshold: 8192,
        },
      },
    ],
    "vue-currency-filter/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    // '@nuxtjs/amp',
    "nuxt-lazy-load",
  ],

  amp: {
    origin: process.env.SITE_URL,
    mode: "hybrid", // could use `only` or `false` as well
  },

  gtm: {
    id: "GTM-MRT9G38",
    respectDoNotTrack: false,
  },

  sitemap: {
    hostname: "https://kapkap.eu",
    gzip: true,
    i18n: false,
    exclude: [
      "/en/**",
      "/cz/**",
      "/de/**",
      "/cz",
      "/en",
      "/de",
      "/kasa",
      "/podglad-zamowienia",
      "/dziekujemy-za-zamowienie",
      "/kasa",
      "/koszyk",
      "/zamowienie-platnosc",
    ],
    routes: async () => {
      const result1 = await axios.get("https://api.kapkap.eu/v1/categories");
      const result2 = await axios.get("https://api.kapkap.eu/v1/products");
      return [
        ...result1.data.categories.map((category) => category.path),
        ...result2.data.products.map((product) => product.path),
        "/kubki/",
      ];
    },
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Disallow: [
      "*s=",
      "/shop/",
      "/prywatnosc/",
      "/dostawa/",
      "/my-account/",
      "/v1/*",
      "/feed",
      "/sledz-zamowienie",
      "/polityka-prywatnosci",
      "/regulamin-infografika",
    ],
    Sitemap: "https://kapkap.eu/sitemap.xml",
  },

  i18n: {
    strategy: "prefix_except_default",
    parsePages: true,
    defaultLocale: "pl",
    lazy: true,
    locales: [
      // {
      //   code: 'en',
      //   iso: 'en-US',
      //   file: 'en/index.js'
      // },
      {
        code: "pl",
        iso: "pl-PL",
        file: "pl/index.js",
      },
    ],
    langDir: "~/locales/",
  },

  // or for one filter
  currencyFilter: {
    // default name 'currency'
    symbol: "zł",
    thousandsSeparator: " ",
    fractionCount: 2,
    fractionSeparator: ",",
    symbolPosition: "back",
    symbolSpacing: true,
    avoidEmptyDecimals: false,
  },

  sentry: {
    dsn: process.env.SENTRY_DNS,
    config: {
      lazy: true,
      disableServerSide: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: false,
    baseURL: process.env.API_URL,
  },

  env: {
    assetsURL: process.env.ASSETS_URL || "https://images.kapkap.eu",
    phone: process.env.PHONE,
    phoneFormatted: process.env.PHONE_FORMATTED,
    companyName: process.env.COMPANY_NAME,
    companyStreet: process.env.COMPANY_STREET,
    companyZip: process.env.COMPANY_ZIP,
    companyCity: process.env.COMPANY_CITY,
    companyMail: process.env.COMPANY_MAIL,
    geowidgetToken: process.env.GEOWIDGET_TOKEN,
  },

  server: {
    host: "0.0.0.0",
    port: process.env.PORT,
    // https:
    //   process.env.ENV !== 'production'
    //     ? undefined
    //     : {
    //         key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt.pem'))
    //       }
  },

  proxy: {
    "/v1/": {
      target: process.env.API_URL,
    },
  },

  generate: {
    crawler: true,
    concurrency: process.env.ENV === "dev" ? 200 : 1,
    exclude: [/^\/cz(?:\/|$)/, /^\/en(?:\/|$)/, /^\/pay/],
    subFolders: false,
  },
};
