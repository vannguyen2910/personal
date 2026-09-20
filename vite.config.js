import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Each page keeps its current address. Pages already converted to React are
// listed under `input`; every other page is still plain HTML inside public/
// and is copied to the site untouched.
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'bundle',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
      },
    },
  },
})
