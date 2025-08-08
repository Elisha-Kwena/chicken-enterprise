// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs' // Explicit path to CJS file
  },
  server: {
    host: '0.0.0.0', // Allows external connections
    port: 96, // Your custom port
    strictPort: true,
    allowedHosts: [
      '2197292c9097.ngrok-free.app', // Your specific ngrok host
      '.ngrok-free.app' // Wildcard for all ngrok subdomains (recommended)
    ]
  }
})