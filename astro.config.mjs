// import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap";
// export default defineConfig({
//    site: 'https://lexingtonthemes.com',
//   integrations: [tailwind(),  sitemap()]
// });

// import image from "@astrojs/image";
// import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  // output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind(), sitemap(), icon(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
