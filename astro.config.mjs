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
  srcDir: "./src",
  outDir: "./dist",
});
