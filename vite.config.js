import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://3.110.193.147/:8000" 
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
