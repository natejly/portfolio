import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  build: {
    // Increase chunk size warning limit for large video files
    chunkSizeWarningLimit: 200000, // 200MB in KB
    rollupOptions: {
      output: {
        // Separate large assets into their own chunks
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          // Keep video files with content hash for caching
          if (assetInfo.name && /\.(mp4|webm|ogg)$/.test(assetInfo.name)) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  // Ensure large video files are treated as assets
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.ogg']
})
