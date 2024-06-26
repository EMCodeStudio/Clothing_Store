import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      'client-api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }

})
