import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  markdown: {
    remarkPlugins: [],
    shikiConfig: {
      // Choose your preferred theme (optional)
      theme: "github-light",
      // Languages to enable syntax highlighting for
      langs: ["javascript", "python", "html", "css"],
      // Enable word wrap (optional)
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@styles": path.resolve("./src/styles"),
        "@content": path.resolve("./src/content"),
      },
    },
  },
});
