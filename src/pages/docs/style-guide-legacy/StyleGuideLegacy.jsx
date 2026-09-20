import { useEffect } from 'react'
import { drawCharts, switchTab } from './charts.js'

export default function StyleGuideLegacy() {
  useEffect(() => { drawCharts() }, [])

  return (
    <>
      <nav>
        <span className="nav-logo">Winnie · Design System</span>
        <div className="nav-right">
          <span className="chip chip--soft chip--primary chip--sm">v2.0</span>
          <a href="/training/index.html" className="nav-back">Hub</a>
        </div>
      </nav>

      <div className="sg-page">

        {/* Header */}
        <div style={{ padding: 'var(--space-12) 0 var(--space-16)' }}>
          <div className="alert alert--outlined alert--warning" style={{ marginBottom: 'var(--space-8)' }}>
            <span className="alert__icon">!</span>
            <span className="alert__message">Retired as the canonical style guide — <code>docs/style-guide.html</code> is now the program (terracotta/lime) system. This page still accurately documents <code>assets/css/tokens.css</code> + <code>components.css</code>, which remain in active use on the homepage, Portfolio, and the Training Hub's base components.</span>
          </div>
          <p className="page-eyebrow">Living Style Guide</p>
          <h1 className="page-title">Design <em>System</em></h1>
          <p className="page-desc">Single source of truth for colors, typography, spacing, and components. Edit <code>assets/css/tokens.css</code> — everything here updates automatically.</p>
        </div>

        <hr className="sg-divider"/>

        {/* ── COLOR ─────────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Color</h2>
          <p className="sg-section-desc">Purple primary · Yellow secondary · Standard semantic scale.</p>

          <div className="sg-group">
            <div className="sg-group-title">Brand</div>
            <div className="color-grid">
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#6B3FEE' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Purple</div><div className="color-swatch__value">--purple · #6B3FEE</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#4A24C4' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Purple Deep</div><div className="color-swatch__value">--purple-deep · #4A24C4</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#9E7EF5' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Purple Mid</div><div className="color-swatch__value">--purple-mid · #9E7EF5</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#EAE0FF' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Purple Tint</div><div className="color-swatch__value">--purple-tint · #EAE0FF</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#F5F2FF' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Purple Subtle</div><div className="color-swatch__value">--purple-subtle · #F5F2FF</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#F5D028' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Yellow</div><div className="color-swatch__value">--yellow · #F5D028</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#C9A400' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Yellow Deep</div><div className="color-swatch__value">--yellow-deep · #C9A400</div></div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch__block" style={{ background: '#FFF4B8' }}></div>
                <div className="color-swatch__info"><div className="color-swatch__name">Yellow Tint</div><div className="color-swatch__value">--yellow-tint · #FFF4B8</div></div>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Semantic</div>
            <div className="color-grid">
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#22C55E' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Success</div><div className="color-swatch__value">--success · #22C55E</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#DCFCE7' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Success Tint</div><div className="color-swatch__value">--success-tint</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#EF4444' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Error</div><div className="color-swatch__value">--error · #EF4444</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#FEE2E2' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Error Tint</div><div className="color-swatch__value">--error-tint</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#F59E0B' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Warning</div><div className="color-swatch__value">--warning · #F59E0B</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#FEF3C7' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Warning Tint</div><div className="color-swatch__value">--warning-tint</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#3B82F6' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Info</div><div className="color-swatch__value">--info · #3B82F6</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#DBEAFE' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Info Tint</div><div className="color-swatch__value">--info-tint</div></div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Neutrals</div>
            <div className="color-grid">
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#F8F7FB', borderBottom: '1px solid #eee' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Gray 50</div><div className="color-swatch__value">--gray-50 · Page bg</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#F0EEF5' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Gray 100</div><div className="color-swatch__value">--gray-100</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#E0DCE9' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Gray 200</div><div className="color-swatch__value">--gray-200 · Border</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#9A94A5' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Gray 400</div><div className="color-swatch__value">--gray-400 · Tertiary</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#4E4758' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Gray 600</div><div className="color-swatch__value">--gray-600 · Secondary</div></div></div>
              <div className="color-swatch"><div className="color-swatch__block" style={{ background: '#1A1325' }}></div><div className="color-swatch__info"><div className="color-swatch__name">Gray 900</div><div className="color-swatch__value">--gray-900 · Primary</div></div></div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── TYPOGRAPHY ──────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Typography</h2>
          <p className="sg-section-desc">Public Sans (display & body) · JetBrains Mono (labels, kickers)</p>

          <div className="sg-group">
            <div className="sg-group-title">Type Scale</div>
            <div>
              <div className="type-row"><div className="type-row__meta">--text-5xl<br/>48px</div><div className="type-row__sample" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', fontWeight: '700', letterSpacing: '-.02em' }}>Display</div></div>
              <div className="type-row"><div className="type-row__meta">--text-4xl<br/>36px</div><div className="type-row__sample" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: '700', letterSpacing: '-.02em' }}>Heading 1</div></div>
              <div className="type-row"><div className="type-row__meta">--text-3xl<br/>30px</div><div className="type-row__sample" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: '600' }}>Heading 2</div></div>
              <div className="type-row"><div className="type-row__meta">--text-2xl<br/>24px</div><div className="type-row__sample" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '600' }}>Heading 3</div></div>
              <div className="type-row"><div className="type-row__meta">--text-xl<br/>20px</div><div className="type-row__sample" style={{ fontSize: 'var(--text-xl)', fontWeight: '600' }}>Heading 4</div></div>
              <div className="type-row"><div className="type-row__meta">--text-lg<br/>18px</div><div className="type-row__sample" style={{ fontSize: 'var(--text-lg)' }}>Body Large — The quick brown fox jumps over the lazy dog.</div></div>
              <div className="type-row"><div className="type-row__meta">--text-base<br/>15px</div><div className="type-row__sample" style={{ fontSize: 'var(--text-base)' }}>Body — The quick brown fox jumps over the lazy dog.</div></div>
              <div className="type-row"><div className="type-row__meta">--text-sm<br/>13px</div><div className="type-row__sample" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Body Small — Caption, helper text, secondary information.</div></div>
              <div className="type-row"><div className="type-row__meta">--text-xs<br/>11px</div><div className="type-row__sample" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>MONO LABEL — KICKER · METADATA</div></div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── SPACING ────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Spacing</h2>
          <p className="sg-section-desc">4px base unit. Named by multiplier (--space-1 = 4px, --space-2 = 8px…)</p>
          <div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-1)' }}></div><div className="space-meta">--space-1 · 4px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-2)' }}></div><div className="space-meta">--space-2 · 8px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-3)' }}></div><div className="space-meta">--space-3 · 12px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-4)' }}></div><div className="space-meta">--space-4 · 16px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-5)' }}></div><div className="space-meta">--space-5 · 20px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-6)' }}></div><div className="space-meta">--space-6 · 24px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-8)' }}></div><div className="space-meta">--space-8 · 32px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-10)' }}></div><div className="space-meta">--space-10 · 40px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-12)' }}></div><div className="space-meta">--space-12 · 48px</div></div>
            <div className="space-row"><div className="space-bar" style={{ width: 'var(--space-16)' }}></div><div className="space-meta">--space-16 · 64px</div></div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── RADIUS ─────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Border Radius</h2>
          <div className="radius-grid">
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-xs)' }}></div><div className="radius-label">--radius-xs<br/>4px</div></div>
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-sm)' }}></div><div className="radius-label">--radius-sm<br/>6px</div></div>
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-md)' }}></div><div className="radius-label">--radius-md<br/>8px</div></div>
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-lg)' }}></div><div className="radius-label">--radius-lg<br/>12px</div></div>
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-xl)' }}></div><div className="radius-label">--radius-xl<br/>16px</div></div>
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-2xl)' }}></div><div className="radius-label">--radius-2xl<br/>20px</div></div>
            <div className="radius-swatch"><div className="radius-box" style={{ borderRadius: 'var(--radius-pill)' }}></div><div className="radius-label">--radius-pill<br/>9999px</div></div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── ELEVATION ──────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Elevation</h2>
          <p className="sg-section-desc">Neutral shadow scale. Z1 (resting) → Z24 (modal). Named aliases map to semantic use cases.</p>

          <div className="elev-layout" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: 'var(--radius-xl)' }}>

            {/* Left: Z scale */}
            <div className="elev-scale">
              <div className="elev-row">
                <span className="elev-label">Z 1</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z1)' }}></div>
              </div>
              <div className="elev-row">
                <span className="elev-label">Z 4</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z4)' }}></div>
              </div>
              <div className="elev-row">
                <span className="elev-label">Z 8</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z8)' }}></div>
              </div>
              <div className="elev-row">
                <span className="elev-label">Z 12</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z12)' }}></div>
              </div>
              <div className="elev-row">
                <span className="elev-label">Z 16</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z16)' }}></div>
              </div>
              <div className="elev-row">
                <span className="elev-label">Z 20</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z20)' }}></div>
              </div>
              <div className="elev-row">
                <span className="elev-label">Z 24</span>
                <div className="elev-card" style={{ boxShadow: 'var(--shadow-z24)' }}></div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '1px', background: 'var(--border-default)', alignSelf: 'stretch', flexShrink: '0' }}></div>

            {/* Right: named aliases */}
            <div className="elev-aliases">
              <div className="elev-alias-row">
                <span className="elev-alias-tag elev-alias-tag--highlight">CARD</span>
                <div className="elev-alias-card" style={{ boxShadow: 'var(--shadow-card)' }}></div>
              </div>
              <div className="elev-alias-row">
                <span className="elev-alias-tag">DROPDOWN</span>
                <div className="elev-alias-card" style={{ boxShadow: 'var(--shadow-dropdown)' }}></div>
              </div>
              <div className="elev-alias-row">
                <span className="elev-alias-tag">DIALOG</span>
                <div className="elev-alias-card elev-alias-card--dialog" style={{ boxShadow: 'var(--shadow-dialog)' }}></div>
              </div>
            </div>

          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── BUTTONS ────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Buttons</h2>
          <p className="sg-section-desc">4 variants × 3 colors × 3 sizes × 3 states.</p>

          <div className="sg-group">
            <div className="sg-group-title">Contained Button</div>
            <div className="btn-table">
              <div><div className="sg-label">Color</div><div className="sg-row"><button className="btn btn--contained btn--primary btn--md">Primary</button><button className="btn btn--contained btn--secondary btn--md">Secondary</button><button className="btn btn--contained btn--error btn--md">Error</button></div></div>
              <div><div className="sg-label">States</div><div className="sg-row"><button className="btn btn--contained btn--primary btn--md">Enabled</button><button className="btn btn--contained btn--primary btn--md" style={{ background: 'var(--purple-deep)', boxShadow: 'var(--shadow-z8)' }}>Hover</button><button className="btn btn--contained btn--primary btn--md" disabled>Disabled</button></div></div>
              <div><div className="sg-label">Size</div><div className="sg-row"><button className="btn btn--contained btn--primary btn--lg">Large</button><button className="btn btn--contained btn--primary btn--md">Medium</button><button className="btn btn--contained btn--primary btn--sm">Small</button></div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Outlined Button</div>
            <div className="btn-table">
              <div><div className="sg-label">Color</div><div className="sg-row"><button className="btn btn--outlined btn--primary btn--md">Primary</button><button className="btn btn--outlined btn--secondary btn--md">Secondary</button><button className="btn btn--outlined btn--error btn--md">Error</button></div></div>
              <div><div className="sg-label">States</div><div className="sg-row"><button className="btn btn--outlined btn--primary btn--md">Enabled</button><button className="btn btn--outlined btn--primary btn--md" style={{ background: 'var(--purple-subtle)' }}>Hover</button><button className="btn btn--outlined btn--primary btn--md" disabled>Disabled</button></div></div>
              <div><div className="sg-label">Size</div><div className="sg-row"><button className="btn btn--outlined btn--primary btn--lg">Large</button><button className="btn btn--outlined btn--primary btn--md">Medium</button><button className="btn btn--outlined btn--primary btn--sm">Small</button></div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Text Button</div>
            <div className="btn-table">
              <div><div className="sg-label">Color</div><div className="sg-row"><button className="btn btn--text btn--primary btn--md">Primary</button><button className="btn btn--text btn--secondary btn--md">Secondary</button><button className="btn btn--text btn--error btn--md">Error</button></div></div>
              <div><div className="sg-label">States</div><div className="sg-row"><button className="btn btn--text btn--primary btn--md">Enabled</button><button className="btn btn--text btn--primary btn--md" style={{ background: 'var(--purple-subtle)' }}>Hover</button><button className="btn btn--text btn--primary btn--md" disabled>Disabled</button></div></div>
              <div><div className="sg-label">Size</div><div className="sg-row"><button className="btn btn--text btn--primary btn--lg">Large</button><button className="btn btn--text btn--primary btn--md">Medium</button><button className="btn btn--text btn--primary btn--sm">Small</button></div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Soft Button</div>
            <div className="btn-table">
              <div><div className="sg-label">Color</div><div className="sg-row"><button className="btn btn--soft btn--primary btn--md">Primary</button><button className="btn btn--soft btn--secondary btn--md">Secondary</button><button className="btn btn--soft btn--error btn--md">Error</button></div></div>
              <div><div className="sg-label">States</div><div className="sg-row"><button className="btn btn--soft btn--primary btn--md">Enabled</button><button className="btn btn--soft btn--primary btn--md" style={{ background: 'var(--purple-mid)', color: '#fff' }}>Hover</button><button className="btn btn--soft btn--primary btn--md" disabled>Disabled</button></div></div>
              <div><div className="sg-label">Size</div><div className="sg-row"><button className="btn btn--soft btn--primary btn--lg">Large</button><button className="btn btn--soft btn--primary btn--md">Medium</button><button className="btn btn--soft btn--primary btn--sm">Small</button></div></div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── CHIPS ──────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Chips</h2>
          <p className="sg-section-desc">Filled, outlined, and soft variants with semantic colors.</p>

          <div className="sg-group">
            <div className="sg-group-title">Filled</div>
            <div><div className="sg-label">Color</div><div className="sg-row"><span className="chip chip--filled chip--default">Default</span><span className="chip chip--filled chip--primary">Primary</span><span className="chip chip--filled chip--secondary">Secondary</span><span className="chip chip--filled chip--info">Info</span><span className="chip chip--filled chip--success">Success</span><span className="chip chip--filled chip--warning">Warning</span><span className="chip chip--filled chip--error">Error</span></div></div>
            <div style={{ marginTop: 'var(--space-3)' }}><div className="sg-label">With delete</div><div className="sg-row"><span className="chip chip--filled chip--primary">Primary <span className="chip__delete">✕</span></span><span className="chip chip--filled chip--success">Success <span className="chip__delete">✕</span></span></div></div>
            <div style={{ marginTop: 'var(--space-3)' }}><div className="sg-label">Size</div><div className="sg-row"><span className="chip chip--filled chip--primary">Medium</span><span className="chip chip--filled chip--primary chip--sm">Small</span></div></div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Outlined</div>
            <div className="sg-row"><span className="chip chip--outlined chip--default">Default</span><span className="chip chip--outlined chip--primary">Primary</span><span className="chip chip--outlined chip--secondary">Secondary</span><span className="chip chip--outlined chip--info">Info</span><span className="chip chip--outlined chip--success">Success</span><span className="chip chip--outlined chip--warning">Warning</span><span className="chip chip--outlined chip--error">Error</span></div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Soft</div>
            <div className="sg-row"><span className="chip chip--soft chip--default">Default</span><span className="chip chip--soft chip--primary">Primary</span><span className="chip chip--soft chip--secondary">Secondary</span><span className="chip chip--soft chip--info">Info</span><span className="chip chip--soft chip--success">Success</span><span className="chip chip--soft chip--warning">Warning</span><span className="chip chip--soft chip--error">Error</span></div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Content Type</div>
            <div className="sg-row"><span className="chip chip--lesson">Lesson</span><span className="chip chip--framework">Framework</span><span className="chip chip--slides">Slides</span><span className="chip chip--guide">Guide</span></div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── CARDS ──────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Cards & Elevation</h2>
          <p className="sg-section-desc">Add <code>.card--z{'{'}n{'}'}</code> class for the elevation shadow level.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 'var(--space-8)' }}>
            <div className="card card--z1">
              <span className="chip chip--soft chip--primary chip--sm" style={{ marginBottom: 'var(--space-4)' }}>Lesson</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Mental Models</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Z1 — flat, minimal lift</p>
            </div>
            <div className="card card--z4 card--interactive">
              <span className="chip chip--soft chip--success chip--sm" style={{ marginBottom: 'var(--space-4)' }}>Framework</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Journey Mapping</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Z4 — default card shadow</p>
            </div>
            <div className="card card--z8 card--interactive">
              <span className="chip chip--soft chip--info chip--sm" style={{ marginBottom: 'var(--space-4)' }}>Guide</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Design Critique</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Z8 — dropdown/popover level</p>
            </div>
            <div className="card card--z12 card--interactive">
              <span className="chip chip--soft chip--warning chip--sm" style={{ marginBottom: 'var(--space-4)' }}>Slides</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>IA Workshop</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Z12 — strong hover state</p>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── AVATARS ────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Avatars</h2>
          <p className="sg-section-desc">Icon, letter, image types with status dots and grouping.</p>

          <div className="sg-group">
            <div className="sg-group-title">Sizes</div>
            <div className="avatar-demo-row">
              <div style={{ textAlign: 'center' }}><div className="avatar avatar--xs"><div className="avatar__inner">W</div></div><div className="elevation-meta">xs · 24</div></div>
              <div style={{ textAlign: 'center' }}><div className="avatar avatar--sm"><div className="avatar__inner">W</div></div><div className="elevation-meta">sm · 32</div></div>
              <div style={{ textAlign: 'center' }}><div className="avatar avatar--md"><div className="avatar__inner">W</div></div><div className="elevation-meta">md · 40</div></div>
              <div style={{ textAlign: 'center' }}><div className="avatar avatar--lg"><div className="avatar__inner">W</div></div><div className="elevation-meta">lg · 48</div></div>
              <div style={{ textAlign: 'center' }}><div className="avatar avatar--xl"><div className="avatar__inner">W</div></div><div className="elevation-meta">xl · 64</div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Colors (Letter)</div>
            <div className="avatar-demo-row">
              <div className="avatar avatar--md avatar--purple"><div className="avatar__inner">W</div></div>
              <div className="avatar avatar--md avatar--yellow"><div className="avatar__inner">W</div></div>
              <div className="avatar avatar--md avatar--success"><div className="avatar__inner">W</div></div>
              <div className="avatar avatar--md avatar--error"><div className="avatar__inner">W</div></div>
              <div className="avatar avatar--md avatar--warning"><div className="avatar__inner">W</div></div>
              <div className="avatar avatar--md avatar--info"><div className="avatar__inner">W</div></div>
              <div className="avatar avatar--md avatar--dark"><div className="avatar__inner">W</div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">With Status</div>
            <div className="avatar-demo-row">
              <div style={{ textAlign: 'center' }}>
                <div className="avatar avatar--md avatar--purple"><div className="avatar__inner">W</div><div className="avatar__status avatar__status--online"></div></div>
                <div className="elevation-meta">Online</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="avatar avatar--md avatar--yellow"><div className="avatar__inner">N</div><div className="avatar__status avatar__status--busy"></div></div>
                <div className="elevation-meta">Busy</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="avatar avatar--md"><div className="avatar__inner">T</div><div className="avatar__status avatar__status--away"></div></div>
                <div className="elevation-meta">Away</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="avatar avatar--md"><div className="avatar__inner">V</div><div className="avatar__status avatar__status--offline"></div></div>
                <div className="elevation-meta">Offline</div>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Grouped</div>
            <div className="avatar-demo-row">
              <div className="avatar-group">
                <div className="avatar avatar--md avatar--purple"><div className="avatar__inner">W</div></div>
                <div className="avatar avatar--md avatar--yellow"><div className="avatar__inner">N</div></div>
                <div className="avatar avatar--md avatar--info"><div className="avatar__inner">T</div></div>
                <div className="avatar avatar--md avatar-group__count">+8</div>
              </div>
              <div className="avatar-group">
                <div className="avatar avatar--sm avatar--purple"><div className="avatar__inner">W</div></div>
                <div className="avatar avatar--sm avatar--success"><div className="avatar__inner">N</div></div>
                <div className="avatar avatar--sm avatar--error"><div className="avatar__inner">T</div></div>
                <div className="avatar avatar--sm" style={{ width: '32px', height: '32px', fontSize: '11px', background: 'var(--gray-100)', color: 'var(--text-secondary)', boxShadow: '0 0 0 2px var(--surface-base)', marginLeft: '-8px' }}>+4</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── DIALOG ─────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Dialog</h2>
          <div><button className="btn btn--contained btn--primary btn--md" onClick={(e) => { document.getElementById('demo-modal').classList.add('open') }}>Open Dialog</button></div>
        </section>

        {/* Demo modal */}
        <div className="modal-overlay" id="demo-modal" onClick={(e) => { if(e.target===e.currentTarget)e.currentTarget.classList.remove('open') }}>
          <div className="modal">
            <button className="modal-close" onClick={(e) => { document.getElementById('demo-modal').classList.remove('open') }}>✕</button>
            <svg className="modal__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>
            <h2>Title goes here</h2>
            <div className="modal__body">In today's design-led world it has become essential for any product team to have a shared language for how components should look and behave across the product.</div>
            <div className="modal__actions">
              <button className="btn btn--text btn--primary btn--md" onClick={(e) => { document.getElementById('demo-modal').classList.remove('open') }}>Action</button>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <button className="btn btn--contained btn--primary btn--md" onClick={(e) => { document.getElementById('demo-modal').classList.remove('open') }}>Action</button>
                <button className="btn btn--outlined btn--primary btn--md" onClick={(e) => { document.getElementById('demo-modal').classList.remove('open') }}>Secondary</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="sg-divider"/>

        {/* ── SIDESHEET ─────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Sidesheet</h2>
          <p className="sg-section-desc">Slides in from the right (or left) edge. Three widths · right and left placement · interactive demo.</p>

          {/* Size comparison — side-by-side static previews */}
          <div className="sg-group">
            <div className="sg-group-title">Size</div>
            <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start', flexWrap: 'wrap' }}>

              {/* Narrow 360 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span className="sg-label">Narrow (360px)</span>
                <div style={{ width: '260px', height: '480px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-z8)', border: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', background: 'var(--surface-base)' }}>
                  <div className="sidesheet__header"><h3 className="sidesheet__title">Title</h3><button className="sidesheet__close">✕</button></div>
                  <div className="sidesheet__body" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>Content goes here</div>
                  <div className="sidesheet__footer"><button className="btn btn--contained btn--primary btn--md">Action</button><button className="btn btn--outlined btn--primary btn--md">Cancel</button></div>
                </div>
              </div>

              {/* Default 480 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span className="sg-label">Default (480px)</span>
                <div style={{ width: '340px', height: '480px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-z8)', border: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', background: 'var(--surface-base)' }}>
                  <div className="sidesheet__header"><h3 className="sidesheet__title">Title</h3><button className="sidesheet__close">✕</button></div>
                  <div className="sidesheet__body" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>Content goes here</div>
                  <div className="sidesheet__footer"><button className="btn btn--contained btn--primary btn--md">Action</button><button className="btn btn--outlined btn--primary btn--md">Cancel</button></div>
                </div>
              </div>

              {/* Wide 720 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span className="sg-label">Wide (720px)</span>
                <div style={{ width: '480px', height: '480px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-z8)', border: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', background: 'var(--surface-base)' }}>
                  <div className="sidesheet__header"><h3 className="sidesheet__title">Title</h3><button className="sidesheet__close">✕</button></div>
                  <div className="sidesheet__body" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>Content goes here</div>
                  <div className="sidesheet__footer"><button className="btn btn--contained btn--primary btn--md">Action</button><button className="btn btn--outlined btn--primary btn--md">Cancel</button></div>
                </div>
              </div>

            </div>
          </div>

          {/* Live demos */}
          <div className="sg-group">
            <div className="sg-group-title">Interactive</div>
            <div className="sg-row">
              <button className="btn btn--contained btn--primary btn--md" onClick={(e) => { document.getElementById('ss-right').classList.add('open') }}>Open Right →</button>
              <button className="btn btn--outlined btn--primary btn--md" onClick={(e) => { document.getElementById('ss-left').classList.add('open') }}>← Open Left</button>
              <button className="btn btn--soft btn--primary btn--md" onClick={(e) => { document.getElementById('ss-wide').classList.add('open') }}>Open Wide</button>
            </div>
          </div>
        </section>

        {/* Sidesheet overlays (live) */}
        <div className="sidesheet-overlay" id="ss-right" onClick={(e) => { if(e.target===e.currentTarget)e.currentTarget.classList.remove('open') }}>
          <div className="sidesheet">
            <div className="sidesheet__header">
              <h3 className="sidesheet__title">Sidesheet Title</h3>
              <button className="sidesheet__close" onClick={(e) => { document.getElementById('ss-right').classList.remove('open') }}>✕</button>
            </div>
            <div className="sidesheet__body">
              <p>This is a default right-side sidesheet (480px wide). It slides in over the page content with a dimmed backdrop.</p>
              <p style={{ marginTop: '16px' }}>Great for detail panels, filters, settings, or secondary workflows that don't need a full page.</p>
            </div>
            <div className="sidesheet__footer">
              <button className="btn btn--outlined btn--primary btn--md" onClick={(e) => { document.getElementById('ss-right').classList.remove('open') }}>Cancel</button>
              <button className="btn btn--contained btn--primary btn--md" onClick={(e) => { document.getElementById('ss-right').classList.remove('open') }}>Save changes</button>
            </div>
          </div>
        </div>

        <div className="sidesheet-overlay sidesheet-overlay--left" id="ss-left" onClick={(e) => { if(e.target===e.currentTarget)e.currentTarget.classList.remove('open') }}>
          <div className="sidesheet sidesheet--narrow">
            <div className="sidesheet__header">
              <h3 className="sidesheet__title">Navigation</h3>
              <button className="sidesheet__close" onClick={(e) => { document.getElementById('ss-left').classList.remove('open') }}>✕</button>
            </div>
            <div className="sidesheet__body">
              <p>Left-side narrow sidesheet (360px). Useful for navigation drawers or context panels on the left.</p>
            </div>
            <div className="sidesheet__footer">
              <button className="btn btn--outlined btn--primary btn--md" onClick={(e) => { document.getElementById('ss-left').classList.remove('open') }}>Close</button>
            </div>
          </div>
        </div>

        <div className="sidesheet-overlay" id="ss-wide" onClick={(e) => { if(e.target===e.currentTarget)e.currentTarget.classList.remove('open') }}>
          <div className="sidesheet sidesheet--wide">
            <div className="sidesheet__header">
              <h3 className="sidesheet__title">Detail View</h3>
              <button className="sidesheet__close" onClick={(e) => { document.getElementById('ss-wide').classList.remove('open') }}>✕</button>
            </div>
            <div className="sidesheet__body">
              <p>Wide sidesheet (720px). Ideal for rich content like forms, data tables, media, or step-by-step flows that need more horizontal space.</p>
            </div>
            <div className="sidesheet__footer">
              <button className="btn btn--outlined btn--primary btn--md" onClick={(e) => { document.getElementById('ss-wide').classList.remove('open') }}>Cancel</button>
              <button className="btn btn--contained btn--primary btn--md" onClick={(e) => { document.getElementById('ss-wide').classList.remove('open') }}>Confirm</button>
            </div>
          </div>
        </div>

        <hr className="sg-divider"/>

        {/* ── FORM INPUTS ────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Text Input</h2>
          <p className="sg-section-desc">Outlined style with floating label. States, adornments, help text, sizes.</p>

          <div className="sg-group">
            <div className="sg-group-title">State</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', maxWidth: '700px' }}>
              {/* Default (placeholder visible = no value) */}
              <div className="input-field">
                <input type="text" id="sg-f1" placeholder=" "/>
                <label htmlFor="sg-f1">Label</label>
              </div>
              {/* Filled (has value) */}
              <div className="input-field">
                <input type="text" id="sg-f2" placeholder=" " value="Value"/>
                <label htmlFor="sg-f2">Label</label>
              </div>
              {/* Hovered (simulated with thick border) */}
              <div className="input-field">
                <input type="text" id="sg-f3" placeholder=" " value="Hovered" style={{ borderColor: 'var(--border-strong)', borderWidth: '2px' }}/>
                <label htmlFor="sg-f3" style={{ top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Label</label>
              </div>
              {/* Focused (simulated) */}
              <div className="input-field">
                <input type="text" id="sg-f4" placeholder=" " value="Focused |" style={{ borderColor: 'var(--gray-900)', borderWidth: '2px' }}/>
                <label htmlFor="sg-f4" style={{ top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Label</label>
              </div>
              {/* Error */}
              <div className="input-field input-field--error">
                <input type="text" id="sg-f5" placeholder=" " value="Incorrect"/>
                <label htmlFor="sg-f5" style={{ top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)' }}>Label</label>
              </div>
              {/* Disabled */}
              <div className="input-field input-field--disabled">
                <input type="text" id="sg-f6" placeholder="Disabled" disabled/>
                <label htmlFor="sg-f6">Label</label>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Adornment</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', maxWidth: '700px' }}>
              <div className="input-field input-field--start-adornment input-field--end-adornment">
                <span className="input-field__adornment input-field__adornment--start">$</span>
                <input type="text" id="sg-fa1" placeholder=" " value="Value"/>
                <label htmlFor="sg-fa1" style={{ left: '44px', top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Label</label>
                <span className="input-field__adornment input-field__adornment--end">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </span>
              </div>
              <div className="input-field input-field--start-adornment input-field--end-adornment">
                <span className="input-field__adornment input-field__adornment--start">♥</span>
                <input type="text" id="sg-fa2" placeholder=" " value="Value"/>
                <label htmlFor="sg-fa2" style={{ left: '44px', top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Label</label>
                <span className="input-field__adornment input-field__adornment--end">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </span>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Help Text</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', maxWidth: '700px' }}>
              <div>
                <div className="input-field">
                  <input type="text" id="sg-fh1" placeholder=" "/>
                  <label htmlFor="sg-fh1">Label</label>
                </div>
                <div className="input-field__helper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="white" d="M12 7v2m0 4v4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>{' '}Caption text, description, notification{' '}</div>
              </div>
              <div>
                <div className="input-field input-field--error">
                  <input type="text" id="sg-fh2" placeholder=" " value="Incorrect"/>
                  <label htmlFor="sg-fh2" style={{ top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)' }}>Label</label>
                </div>
                <div className="input-field__helper input-field__helper--error">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path fill="white" d="M12 9v4m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>{' '}Caption text, description, notification{' '}</div>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Size</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', maxWidth: '700px' }}>
              <div className="input-field">
                <input type="text" id="sg-fsm1" placeholder=" " value="Medium"/>
                <label htmlFor="sg-fsm1" style={{ top: '0', transform: 'translateY(-50%)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Label</label>
              </div>
              <div className="input-field input-field--sm">
                <input type="text" id="sg-fsm2" placeholder=" " value="Small"/>
                <label htmlFor="sg-fsm2" style={{ top: '0', transform: 'translateY(-50%)', fontSize: '10px', color: 'var(--text-secondary)' }}>Label</label>
              </div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── CHECKBOX ───────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Checkbox</h2>

          <div className="sg-group">
            <div className="sg-group-title">Default</div>
            <div className="sg-row">
              <label className="checkbox checkbox--primary"><input type="checkbox"/><span className="checkbox__control"></span><span className="checkbox__label">UnChecked</span></label>
              <label className="checkbox checkbox--primary"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Checked</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Color</div>
            <div className="sg-row">
              <label className="checkbox"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Default</span></label>
              <label className="checkbox checkbox--primary"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Primary</span></label>
              <label className="checkbox checkbox--info"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Info</span></label>
              <label className="checkbox checkbox--success"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Success</span></label>
              <label className="checkbox checkbox--warning"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Warning</span></label>
              <label className="checkbox checkbox--error"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Error</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">States</div>
            <div className="sg-row">
              <label className="checkbox checkbox--primary"><input type="checkbox"/><span className="checkbox__control"></span><span className="checkbox__label">UnChecked</span></label>
              <label className="checkbox checkbox--primary"><input type="checkbox" disabled/><span className="checkbox__control"></span><span className="checkbox__label">Disabled</span></label>
              <label className="checkbox checkbox--primary"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Checked</span></label>
              <label className="checkbox checkbox--primary"><input type="checkbox" checked disabled/><span className="checkbox__control"></span><span className="checkbox__label">Disabled</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Size</div>
            <div className="sg-row">
              <label className="checkbox checkbox--primary"><input type="checkbox"/><span className="checkbox__control"></span><span className="checkbox__label">Medium</span></label>
              <label className="checkbox checkbox--primary"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Checked</span></label>
              <label className="checkbox checkbox--primary checkbox--sm"><input type="checkbox"/><span className="checkbox__control"></span><span className="checkbox__label">Small</span></label>
              <label className="checkbox checkbox--primary checkbox--sm"><input type="checkbox" checked/><span className="checkbox__control"></span><span className="checkbox__label">Checked</span></label>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── TOGGLE ─────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Toggle</h2>

          <div className="sg-group">
            <div className="sg-group-title">Default</div>
            <div className="sg-row">
              <label className="toggle toggle--primary"><input type="checkbox"/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">UnChecked</span></label>
              <label className="toggle toggle--primary"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Checked</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Color</div>
            <div className="sg-row">
              <label className="toggle"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Default</span></label>
              <label className="toggle toggle--primary"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Primary</span></label>
              <label className="toggle toggle--secondary"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Secondary</span></label>
              <label className="toggle toggle--info"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Info</span></label>
              <label className="toggle toggle--success"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Success</span></label>
              <label className="toggle toggle--warning"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Warning</span></label>
              <label className="toggle toggle--error"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Error</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">States</div>
            <div className="sg-col" style={{ gap: 'var(--space-3)' }}>
              <div className="sg-row">
                <label className="toggle toggle--primary"><input type="checkbox"/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">UnChecked</span></label>
                <label className="toggle toggle--primary"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Checked</span></label>
              </div>
              <div className="sg-row">
                <label className="toggle toggle--primary"><input type="checkbox" disabled/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Disabled</span></label>
                <label className="toggle toggle--primary"><input type="checkbox" checked disabled/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Disabled</span></label>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Size & Position</div>
            <div className="sg-row">
              <label className="toggle toggle--primary toggle--sm"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Small</span></label>
              <label className="toggle toggle--primary"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">Medium</span></label>
              <label className="toggle toggle--primary toggle--end"><input type="checkbox" checked/><span className="toggle__track"><span className="toggle__thumb"></span></span><span className="toggle__label">End</span></label>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── RADIO ──────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Radio</h2>

          <div className="sg-group">
            <div className="sg-group-title">Default</div>
            <div className="sg-row">
              <label className="radio radio--primary"><input type="radio" name="sg-r0"/><span className="radio__control"></span><span className="radio__label">UnChecked</span></label>
              <label className="radio radio--primary"><input type="radio" name="sg-r0" checked/><span className="radio__control"></span><span className="radio__label">Checked</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Color</div>
            <div className="sg-row">
              <label className="radio"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Default</span></label>
              <label className="radio radio--primary"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Primary</span></label>
              <label className="radio radio--secondary"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Secondary</span></label>
              <label className="radio radio--info"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Info</span></label>
              <label className="radio radio--success"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Success</span></label>
              <label className="radio radio--warning"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Warning</span></label>
              <label className="radio radio--error"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Error</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">States</div>
            <div className="sg-row">
              <label className="radio radio--primary"><input type="radio" name="sg-rs"/><span className="radio__control"></span><span className="radio__label">UnChecked</span></label>
              <label className="radio radio--primary"><input type="radio" name="sg-rs" disabled/><span className="radio__control"></span><span className="radio__label">Disabled</span></label>
              <label className="radio radio--primary"><input type="radio" name="sg-rs2" checked/><span className="radio__control"></span><span className="radio__label">Checked</span></label>
              <label className="radio radio--primary"><input type="radio" name="sg-rs3" checked disabled/><span className="radio__control"></span><span className="radio__label">Disabled</span></label>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Size</div>
            <div className="sg-row">
              <label className="radio radio--primary"><input type="radio"/><span className="radio__control"></span><span className="radio__label">Medium</span></label>
              <label className="radio radio--primary"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Checked</span></label>
              <label className="radio radio--primary radio--sm"><input type="radio"/><span className="radio__control"></span><span className="radio__label">Small</span></label>
              <label className="radio radio--primary radio--sm"><input type="radio" checked/><span className="radio__control"></span><span className="radio__label">Checked</span></label>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── ACCORDION ──────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Accordion</h2>

          <div className="sg-group">
            <div className="sg-group-title">Simple</div>
            <div className="accordion" style={{ maxWidth: '600px' }}>
              <div className="accordion__item accordion__item--open">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 1</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.</p></div>
              </div>
              <div className="accordion__item">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 2</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Content for item 2.</p></div>
              </div>
              <div className="accordion__item">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 3</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Content for item 3.</p></div>
              </div>
              <div className="accordion__item">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 4</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Content for item 4.</p></div>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Controlled (with subtitle)</div>
            <div className="accordion" style={{ maxWidth: '600px' }}>
              <div className="accordion__item accordion__item--open">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 1</span><span className="accordion__trigger-meta">I am an accordion</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt.</p></div>
              </div>
              <div className="accordion__item">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 2</span><span className="accordion__trigger-meta">I am an accordion</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Content for item 2.</p></div>
              </div>
              <div className="accordion__item">
                <button className="accordion__trigger" onClick={(e) => { e.currentTarget.parentElement.classList.toggle('accordion__item--open') }}>
                  <span>Item 3</span><span className="accordion__trigger-meta">I am an accordion</span><span className="accordion__icon"></span>
                </button>
                <div className="accordion__content"><p>Content for item 3.</p></div>
              </div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── ALERT ──────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Alert</h2>

          <div className="sg-group">
            <div className="sg-group-title">Filled</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: '800px' }}>
              <div className="alert alert--filled alert--info">
                <span className="alert__icon">ℹ</span>
                <span className="alert__message">This is an Info alert — check it out!</span>
                <div className="alert__actions"><button className="alert__action">Action</button><button className="alert__dismiss">Dismiss</button></div>
                <button className="alert__close">✕</button>
              </div>
              <div className="alert alert--filled alert--success">
                <span className="alert__icon">✓</span>
                <span className="alert__message">This is a Success alert — check it out!</span>
                <div className="alert__actions"><button className="alert__action">Action</button><button className="alert__dismiss">Dismiss</button></div>
                <button className="alert__close">✕</button>
              </div>
              <div className="alert alert--filled alert--warning">
                <span className="alert__icon">▲</span>
                <span className="alert__message">This is a Warning alert — check it out!</span>
                <div className="alert__actions"><button className="alert__action">Action</button><button className="alert__dismiss">Dismiss</button></div>
                <button className="alert__close">✕</button>
              </div>
              <div className="alert alert--filled alert--error">
                <span className="alert__icon">!</span>
                <span className="alert__message">This is an Error alert — check it out!</span>
                <div className="alert__actions"><button className="alert__action">Action</button><button className="alert__dismiss">Dismiss</button></div>
                <button className="alert__close">✕</button>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Outlined</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: '800px' }}>
              <div className="alert alert--outlined alert--info">
                <span className="alert__icon">ℹ</span>
                <span className="alert__message">This is an Info alert — check it out!</span>
                <button className="alert__close">✕</button>
              </div>
              <div className="alert alert--outlined alert--success">
                <span className="alert__icon">✓</span>
                <span className="alert__message">This is a Success alert — check it out!</span>
                <button className="alert__close">✕</button>
              </div>
              <div className="alert alert--outlined alert--warning">
                <span className="alert__icon">▲</span>
                <span className="alert__message">This is a Warning alert — check it out!</span>
                <button className="alert__close">✕</button>
              </div>
              <div className="alert alert--outlined alert--error">
                <span className="alert__icon">!</span>
                <span className="alert__message">This is an Error alert — check it out!</span>
                <button className="alert__close">✕</button>
              </div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── TABS ───────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Tabs</h2>

          <div className="sg-group">
            <div className="sg-group-title">Basic (text only)</div>
            <div className="tabs" style={{ maxWidth: '600px' }}>
              <div className="tabs__list" role="tablist">
                <button className="tabs__tab tabs__tab--active" onClick={(e) => { switchTab(e.currentTarget,'tab-basic') }}>Profile</button>
                <button className="tabs__tab" onClick={(e) => { switchTab(e.currentTarget,'tab-basic') }}>Followers</button>
                <button className="tabs__tab" onClick={(e) => { switchTab(e.currentTarget,'tab-basic') }}>Friends</button>
                <button className="tabs__tab" onClick={(e) => { switchTab(e.currentTarget,'tab-basic') }}>Gallery</button>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">With Icons</div>
            <div className="tabs" style={{ maxWidth: '600px' }}>
              <div className="tabs__list" role="tablist">
                <button className="tabs__tab tabs__tab--active">
                  <span className="tabs__tab-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6m-6 4h6m-6 4h4"/></svg>
                  </span>Profile{' '}</button>
                <button className="tabs__tab">
                  <span className="tabs__tab-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                  </span>Followers{' '}</button>
                <button className="tabs__tab">
                  <span className="tabs__tab-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                  </span>Friends{' '}</button>
                <button className="tabs__tab">
                  <span className="tabs__tab-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                  </span>Gallery{' '}</button>
              </div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Pill style</div>
            <div className="tabs tabs--pill" style={{ maxWidth: '400px' }}>
              <div className="tabs__list" role="tablist">
                <button className="tabs__tab tabs__tab--active">Profile</button>
                <button className="tabs__tab">Followers</button>
                <button className="tabs__tab">Friends</button>
                <button className="tabs__tab">Gallery</button>
              </div>
            </div>
          </div>
        </section>

        {/* Tab JS helper */}
  

        <hr className="sg-divider"/>

        {/* ── CHARTS ─────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Charts</h2>
          <p className="sg-section-desc">SVG-based data visualisation components using the chart token series. Radar, Pie, Donut/Ring, and Line.</p>

          {/* RADAR ─────────────────────────────────── */}
          <div className="sg-group">
            <div className="sg-group-title">Radar</div>
            <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {/* Single series */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Single series</div>
                <div className="chart-card" style={{ width: '280px' }}>
                  <div className="chart-body">
                    <svg id="radar-1" width="280" height="240" viewBox="0 0 280 240"></svg>
                  </div>
                  <div className="chart-legend">
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#6B3FEE' }}></span>Score</div>
                  </div>
                </div>
              </div>
              {/* Two series */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Two series</div>
                <div className="chart-card" style={{ width: '280px' }}>
                  <div className="chart-body">
                    <svg id="radar-2" width="280" height="240" viewBox="0 0 280 240"></svg>
                  </div>
                  <div className="chart-legend">
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#6B3FEE' }}></span>Term 1</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#F5A623' }}></span>Term 2</div>
                  </div>
                </div>
              </div>
              {/* Three series */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Three series</div>
                <div className="chart-card" style={{ width: '280px' }}>
                  <div className="chart-body">
                    <svg id="radar-3" width="280" height="240" viewBox="0 0 280 240"></svg>
                  </div>
                  <div className="chart-legend">
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#6B3FEE' }}></span>Term 1</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#F5A623' }}></span>Term 2</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#EF4444' }}></span>Term 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PIE ──────────────────────────────────── */}
          <div className="sg-group">
            <div className="sg-group-title">Pie</div>
            <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>3 segments</div>
                <div className="chart-card" style={{ width: '220px' }}>
                  <div className="chart-body" style={{ display: 'flex', justifyContent: 'center' }}>
                    <svg id="pie-1" width="180" height="180" viewBox="0 0 180 180"></svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>4 segments</div>
                <div className="chart-card" style={{ width: '220px' }}>
                  <div className="chart-body" style={{ display: 'flex', justifyContent: 'center' }}>
                    <svg id="pie-2" width="180" height="180" viewBox="0 0 180 180"></svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>5 segments with labels</div>
                <div className="chart-card" style={{ width: '240px' }}>
                  <div className="chart-body" style={{ display: 'flex', justifyContent: 'center' }}>
                    <svg id="pie-3" width="220" height="220" viewBox="0 0 220 220"></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DONUT / RING ─────────────────────────── */}
          <div className="sg-group">
            <div className="sg-group-title">Donut &amp; Ring</div>
            <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {/* Single track donut */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Single track</div>
                <div className="chart-card" style={{ width: '200px' }}>
                  <div className="chart-body" style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
                    <svg width="160" height="160" viewBox="0 0 160 160">
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#E0DCE9" strokeWidth="14"/>
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#22C55E" strokeWidth="14" stroke-dasharray="329" stroke-dashoffset="46" strokeLinecap="round" transform="rotate(-90 80 80)"/>
                    </svg>
                    <div className="chart-donut-center">
                      <span className="chart-donut-center__label">Total</span>
                      <span className="chart-donut-center__value">10,989</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Double track donut */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Double track</div>
                <div className="chart-card" style={{ width: '200px' }}>
                  <div className="chart-body" style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
                    <svg width="160" height="160" viewBox="0 0 160 160">
                      <circle cx="80" cy="80" r="62" fill="none" stroke="#E0DCE9" strokeWidth="10"/>
                      <circle cx="80" cy="80" r="62" fill="none" stroke="#22C55E" strokeWidth="10" stroke-dasharray="390" stroke-dashoffset="55" strokeLinecap="round" transform="rotate(-90 80 80)"/>
                      <circle cx="80" cy="80" r="48" fill="none" stroke="#E0DCE9" strokeWidth="10"/>
                      <circle cx="80" cy="80" r="48" fill="none" stroke="#F5A623" strokeWidth="10" stroke-dasharray="302" stroke-dashoffset="90" strokeLinecap="round" transform="rotate(-90 80 80)"/>
                    </svg>
                    <div className="chart-donut-center">
                      <span className="chart-donut-center__label">Total</span>
                      <span className="chart-donut-center__value">10,989</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gauge */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Gauge</div>
                <div className="chart-card" style={{ width: '220px' }}>
                  <div className="chart-body" style={{ position: 'relative', width: '180px', height: '110px', margin: '0 auto', overflow: 'hidden' }}>
                    <svg width="180" height="180" viewBox="0 0 180 180" style={{ marginTop: '-2px' }}>
                      {/* Track */}
                      <path d="M 20 90 A 70 70 0 0 1 160 90" fill="none" stroke="#E0DCE9" strokeWidth="14" strokeLinecap="round"/>
                      {/* Value — 86.6% of the arc */}
                      <path d="M 20 90 A 70 70 0 0 1 160 90" fill="none" stroke="#22C55E" strokeWidth="14" strokeLinecap="round" stroke-dasharray="220" stroke-dashoffset="29"/>
                      {/* Center value */}
                      <text x="90" y="80" text-anchor="middle" font-family="var(--font-display)" font-size="22" font-weight="700" fill="#1A1325">86.6%</text>
                      {/* 0 / 100 labels */}
                      <text x="16" y="108" text-anchor="middle" font-family="var(--font-mono)" font-size="10" fill="#9A94A5">0</text>
                      <text x="164" y="108" text-anchor="middle" font-family="var(--font-mono)" font-size="10" fill="#9A94A5">100</text>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Multi-series donut */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Multi-series (Total)</div>
                <div className="chart-card" style={{ width: '200px' }}>
                  <div className="chart-body" style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
                    <svg id="donut-multi" width="160" height="160" viewBox="0 0 160 160"></svg>
                    <div className="chart-donut-center">
                      <span className="chart-donut-center__label">Total</span>
                      <span className="chart-donut-center__value">9,990</span>
                    </div>
                  </div>
                  <div className="chart-legend" style={{ justifyContent: 'center', marginTop: '12px' }}>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#6B3FEE' }}></span>A</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#F5A623' }}></span>B</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#22D3C8' }}></span>C</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#EF4444' }}></span>D</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LINE ─────────────────────────────────── */}
          <div className="sg-group">
            <div className="sg-group-title">Line</div>
            <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {/* Standard card */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>With header + legend</div>
                <div className="chart-card" style={{ width: '480px' }}>
                  <div className="chart-header">
                    <div className="chart-header__text">
                      <h4 className="chart-title">Heading</h4>
                    </div>
                    <button className="chart-action">+</button>
                  </div>
                  <div className="chart-legend chart-legend--top">
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#6B3FEE' }}></span>Label 1</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#F5A623', opacity: '.6' }}></span>Label 2</div>
                  </div>
                  <div className="chart-body">
                    <svg id="line-1" width="100%" height="200" viewBox="0 0 440 200" preserveaspectratio="none"></svg>
                  </div>
                </div>
              </div>
              {/* Compact card */}
              <div>
                <div className="sg-label" style={{ marginBottom: 'var(--space-3)' }}>Compact</div>
                <div className="chart-card" style={{ width: '320px' }}>
                  <div className="chart-header">
                    <div className="chart-header__text">
                      <h4 className="chart-title">Heading</h4>
                    </div>
                    <button className="chart-action">⋮</button>
                  </div>
                  <div className="chart-legend chart-legend--top">
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#6B3FEE' }}></span>Label 1</div>
                    <div className="chart-legend__item"><span className="chart-legend__dot" style={{ background: '#F5A623', opacity: '.6' }}></span>Label 2</div>
                  </div>
                  <div className="chart-body">
                    <svg id="line-2" width="100%" height="160" viewBox="0 0 300 160" preserveaspectratio="none"></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chart rendering script */}
  

      </div>

      <footer>
        <div className="footer-inner">
          <p>Winnie Nguyen Mentoring Design System v2</p>
          <span>tokens.css + components.css</span>
        </div>
      </footer>
    </>
  )
}
