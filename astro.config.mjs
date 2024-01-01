// import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap";
// export default defineConfig({
//    site: 'https://lexingtonthemes.com',
//   integrations: [tailwind(),  sitemap()]
// });

// import image from "@astrojs/image";
// import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  // output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    // mdx(),
    sitemap(),
  ],
});
