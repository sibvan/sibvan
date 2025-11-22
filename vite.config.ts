import { defineConfig } from "vite";
import { viteConvertPugInHtml } from "@mish.dev/vite-convert-pug-in-html";

export default defineConfig({
  // Tell Vite that your source code is in the 'src' directory
  root: "src",
  envDir: "../",
  publicDir: "../public",

  plugins: [
    // That's it! No options needed for a standard setup.
    viteConvertPugInHtml(),
  ],

  build: {
    // Make sure Vite builds to the project root, not inside 'src'
    outDir: "../dist",
  },
});
