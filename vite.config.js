import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, join, extname, normalize } from 'node:path'
import { cpSync, existsSync, createReadStream, statSync } from 'node:fs'

// Files that live in the design-system folder but are published (and linked by older,
// plain-HTML pages) at fixed addresses. They are served while developing and copied into
// the finished site when building, so no page link has to change.
const SHARED = [
  { url: '/assets/css/', dir: 'design-system/css' },
  { url: '/assets/fonts/', dir: 'design-system/fonts' },
  { url: '/design-system/examples/', dir: 'design-system/examples' },
]
const TYPES = { '.css': 'text/css', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2' }

function designSystemAssets() {
  let rootDir
  let outDir
  return {
    name: 'design-system-assets',
    configResolved(config) {
      rootDir = config.root
      outDir = resolve(config.root, config.build.outDir)
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const hit = SHARED.find((s) => url.startsWith(s.url))
        if (!hit) return next()
        const base = join(rootDir, hit.dir)
        const file = normalize(join(base, decodeURIComponent(url.slice(hit.url.length))))
        if (!file.startsWith(base) || !existsSync(file) || !statSync(file).isFile()) return next()
        res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
        createReadStream(file).pipe(res)
      })
    },
    closeBundle() {
      for (const s of SHARED) cpSync(join(rootDir, s.dir), join(outDir, s.url), { recursive: true })
    },
  }
}

// Each page keeps its current address. Pages already converted to React are
// listed under `input`; every other page is still plain HTML inside public/
// and is copied to the site untouched.
export default defineConfig({
  plugins: [react(), designSystemAssets()],
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
        designSystemIndex: resolve(__dirname, 'design-system/index.html'),
        designSystemProgram: resolve(__dirname, 'design-system/program.html'),
        designSystemCardList: resolve(__dirname, 'design-system/card-list.html'),
        designSystemText: resolve(__dirname, 'design-system/text.html'),
        designSystemResource: resolve(__dirname, 'design-system/resource.html'),
        docsStyleGuide: resolve(__dirname, 'docs/style-guide.html'),
        docsStyleGuideLegacy: resolve(__dirname, 'docs/style-guide-legacy.html'),
        selfAssessment: resolve(__dirname, 'training/self-assessment.html'),
        trainingHub: resolve(__dirname, 'training/index.html'),
        programJuniorToMid: resolve(__dirname, 'training/programs/junior-to-mid-level.html'),
        programMidToSenior: resolve(__dirname, 'training/programs/mid-to-senior.html'),
        programSystematicAi: resolve(__dirname, 'training/programs/systematic-ai-prototyping.html'),
        programUiUxFundamentals: resolve(__dirname, 'training/programs/ui-ux-fundamentals.html'),
      },
    },
  },
})
