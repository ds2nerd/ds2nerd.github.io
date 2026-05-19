import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ds2nerd.github.io",
  base: "/",
  output: "static",
  integrations: [tailwind()],
  build: {
    format: "directory",
  },
});
