import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],

  // build: {
  //   rollupOptions: {
  //       external: ['react', 'react-dom', 'react-router-dom'], // Add react-router-dom to external
  //   },
  // },
})
