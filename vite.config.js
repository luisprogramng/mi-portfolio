import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-i18n'],
          icons: ['@fortawesome/fontawesome-svg-core']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})