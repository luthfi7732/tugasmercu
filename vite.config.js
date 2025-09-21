import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  server: {
    fs: {
      // Allow serving files from content directory
      allow: ['..']
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure admin files are copied to dist
        assetFileNames: (assetInfo) => {
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Copy admin files to dist
    copyPublicDir: true
  }
})
