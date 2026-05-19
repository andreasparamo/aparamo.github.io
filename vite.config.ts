import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // GitHub Pages serves from root for user sites (username.github.io)
  base: "/",
});
