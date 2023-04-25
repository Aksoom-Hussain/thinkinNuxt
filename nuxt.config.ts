// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.api_url,
      APP_NAME: process.env.name,
      BASE_IMAGE_URL: process.env.image_url,
      MAP_API: process.env.map_api,
    },
  },
  app: {
    head: {
      title: process.env.name,
      titleTemplate: "%s - " + process.env.name,
      meta: [
        {
          name: "viewport",
          content:
            "initial-scale=1, user-scalable=no, width=device-width, height=device-height, viewport-fit=cover",
        },
        {
          hid: "description",
          name: "description",
          content: "Thinkin Dragon",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
        },
      ],
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          //src: "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.8.1/lottie.min.js",
          //src: "https://js.stripe.com/v3/",
        },
        {
          "data-website-id":"87db4362-caaa-4388-bc16-7d8430f404e0",
          src:"https://umami.thinkindragon.com/umami.js",
          async:true,
          defer:true,
        },
        // <script async defer data-website-id="87db4362-caaa-4388-bc16-7d8430f404e0" src="https://umami.thinkindragon.com/umami.js"></script>

      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", 
  //'nuxt-umami'
],
  // umami:{
  //   enable: true, 
  //   autoTrack: true,
  //   doNotTrack: false,
  //   cache: false,
  //   domains: "www.thinkindragon.com,thinkindragon.com",
  //   websiteId: "87db4362-caaa-4388-bc16-7d8430f404e0",
  //   scriptUrl: "https://umami.thinkindragon.com/umami.js",
  // }
});
