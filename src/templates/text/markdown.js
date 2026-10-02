import { marked } from 'marked'

// Turns a Markdown file (with the --- front matter block on top) into { meta, html, headings }.
const slug = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')

function parseFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return { meta: {}, body: raw }
  const meta = {}
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (!kv) continue
    let v = kv[2].trim()
    if (v.startsWith('[') && v.endsWith(']')) v = v.slice(1, -1).split(',').map((x) => x.trim()).filter(Boolean)
    else v = v.replace(/^"(.*)"$/, '$1')
    meta[kv[1]] = v
  }
  return { meta, body: raw.slice(m[0].length) }
}

// Images written as assets/file.png (or ../assets/file.png) are served from here.
// Copy the lesson's assets folder to public/templates/text/lesson-assets/ with spaces in names changed to hyphens.
const ASSET_BASE = '/templates/text/lesson-assets/'
const assetUrl = (href) => {
  const m = decodeURIComponent(href).match(/(?:^|\/)assets\/(.+)$/)
  return m ? ASSET_BASE + encodeURIComponent(m[1].trim().replace(/\s+/g, '-')) : href
}

export function renderLesson(raw) {
  const { meta, body } = parseFrontMatter(raw)
  const headings = []
  const renderer = {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens)
      const text = tokens.map((t) => t.raw ?? t.text ?? '').join('')
      const id = slug(text)
      if (depth === 2) headings.push({ id, text: text.replace(/[*_`]/g, '') })
      return `<h${depth} id="${id}">${html}</h${depth}>\n`
    },
    image({ href, text }) {
      const src = assetUrl(href)
      return `<a class="tp-fig" href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${text}" loading="lazy"><span class="tp-fig__cap">${text}</span></a>`
    },
    link({ href, tokens }) {
      return `<a href="${href}" target="_blank" rel="noopener">${this.parser.parseInline(tokens)}</a>`
    },
  }
  const html = marked.use({ renderer }).parse(body)
  return { meta, html, headings }
}
