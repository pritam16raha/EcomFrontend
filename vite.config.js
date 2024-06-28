import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/ecom': "http://localhost:5500"
    }
  },
  plugins: [react()],
})
