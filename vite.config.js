import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://35.154.107.165:8000" 
    }
  },
  plugins: [react()],
})
