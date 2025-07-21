import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  // Set root to src directory where our assets are
  root: 'src',
  
  plugins: [
    tailwindcss(),
  ],
  
  // Build configuration
  build: {
    // Output to _site directory to match Eleventy
    outDir: '../_site/assets',
    // Don't empty outDir since Eleventy manages it
    emptyOutDir: false,
    // No need for manifest since we use fixed output names
    manifest: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/assets/js/main.js'),
        styles: resolve(__dirname, 'src/assets/css/main.css')
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/style[extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    // Run on different port to avoid conflict with Eleventy
    port: 3000,
    // Allow Eleventy dev server to proxy to Vite
    cors: true,
    // Watch for changes
    watch: {
      usePolling: true
    }
  },
  
  // Resolve aliases
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})