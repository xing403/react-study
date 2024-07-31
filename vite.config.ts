import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import usePlugins from './plugins'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: usePlugins(),
  server: {
    port: 3000,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

})
