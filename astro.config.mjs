import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@content": path.resolve(__dirname, "./src/content"),
      },
    },
  },
});
