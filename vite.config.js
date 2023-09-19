import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://43.205.232.204:8000" 
    },
    watch: {
      usePolling: true,
    },
    host: true, 
    strictPort: true,
    port: 3000,
  },
  plugins: [react()],
})
