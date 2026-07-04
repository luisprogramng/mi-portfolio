import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Usar esbuild en lugar de terser (más rápido y no necesita dependencias extra)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
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
  }
})
