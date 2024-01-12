// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    modulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        music: resolve(__dirname, "music/music.html"),
        contact: resolve(__dirname, "contact/contact.html"),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "../font",
        replacement: path.resolve(__dirname, "public/fonts"),
      },
    ],
  },
});
