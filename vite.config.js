import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://13.126.195.163:8000" 
    },
    watch: {
      usePolling: true,
    },
    host: true, 
    strictPort: true,
    port: 5173,
  },
  plugins: [react()],
})
