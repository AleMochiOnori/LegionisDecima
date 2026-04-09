import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    conditions: ['module']
  },
  ssr: {
    noExternal: ['react-router', 'react-router-dom', 'hamburger-react', 'framer-motion'],
    resolve: {
      conditions: ['module', 'import']
    }
  }
})
