import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
})
