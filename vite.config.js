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
        portfolioHome: resolve(__dirname, 'portfolio/index.html'),
        portfolioAbout: resolve(__dirname, 'portfolio/about.html'),
        portfolioContact: resolve(__dirname, 'portfolio/contact.html'),
        portfolioWork: resolve(__dirname, 'portfolio/work.html'),
        portfolioGo1: resolve(__dirname, 'portfolio/work/go1.html'),
        trainingHub: resolve(__dirname, 'training/index.html'),
        programJuniorToMid: resolve(__dirname, 'training/programs/junior-to-mid-level.html'),
        programMidToSenior: resolve(__dirname, 'training/programs/mid-to-senior.html'),
        programSystematicAi: resolve(__dirname, 'training/programs/systematic-ai-prototyping.html'),
        programUiUxFundamentals: resolve(__dirname, 'training/programs/ui-ux-fundamentals.html'),
      },
    },
  },
})
