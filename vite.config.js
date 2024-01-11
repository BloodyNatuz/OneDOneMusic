// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        music: resolve(__dirname, 'music/music.html'),
        contact: resolve(__dirname, 'contact/contact.html'),
      },
    },
  },
})