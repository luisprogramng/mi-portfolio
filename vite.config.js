import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
    // ✅ Sin minify, sin rollupOptions
  },
  server: {
    port: 5173,
    open: true
  }
})
