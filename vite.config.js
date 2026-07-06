import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-i18n')) {
              return 'vendor'
            }
            if (id.includes('@fortawesome')) {
              return 'icons'
            }
            return 'vendor'
          }
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  },
  optimizeDeps: {
    include: ['vue', 'vue-i18n', '@fortawesome/fontawesome-svg-core']
  },
  // ✅ Agrega esto para evitar el error
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})