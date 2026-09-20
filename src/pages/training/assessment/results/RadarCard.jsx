import { memo, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { SKILLS, TARGET_LEVELS, SHORT_LABELS } from '../data.js'
import { hexToRgba } from '../scoring.js'

let radarChart = null

// Called when the results screen becomes visible, so the chart picks up its real size.
export function resizeRadar() {
  if (radarChart) requestAnimationFrame(() => radarChart.resize())
}

function drawRadar(canvas, s) {
  // Read the active theme's colours so the chart matches whichever tokens file is loaded.
  const cs = getComputedStyle(document.documentElement)
  const purple = (cs.getPropertyValue('--purple') || '#6B3FEE').trim()
  const yellowDeep = (cs.getPropertyValue('--yellow-deep') || '#C9A400').trim()
  const fontBody = (cs.getPropertyValue('--font-body') || "'Public Sans', system-ui").trim() || "'Public Sans', system-ui"
  const textSecondary = (cs.getPropertyValue('--text-secondary') || '#6B6084').trim()

  const labels = SKILLS.map((sk) => SHORT_LABELS[sk.id] || sk.name.split(' ').slice(0, 2).join(' '))
  const selfData = SKILLS.map((sk) => s.skills[sk.id] || 0)
  const tv = TARGET_LEVELS[s.target] || 2
  if (radarChart) radarChart.destroy()
  radarChart = new Chart(canvas.getContext('2d'), {
    type: 'radar',
    data: {
      labels,
      datasets: [
        { label: 'Your rating', data: selfData, backgroundColor: hexToRgba(purple, 0.2), borderColor: hexToRgba(purple, 0.9), borderWidth: 2.5, pointBackgroundColor: purple, pointRadius: 4 },
        { label: 'Target', data: SKILLS.map(() => tv), backgroundColor: hexToRgba(yellowDeep, 0.08), borderColor: yellowDeep, borderWidth: 2, borderDash: [5, 4], pointBackgroundColor: yellowDeep, pointRadius: 3 },
      ],
    },
    options: {
      responsive: true,
      scales: { r: { min: 0, max: 4, ticks: { stepSize: 1, display: false }, grid: { color: 'rgba(0,0,0,0.06)' }, angleLines: { color: 'rgba(0,0,0,0.06)' }, pointLabels: { font: { family: fontBody, size: 11, weight: '500' }, color: textSecondary } } },
      plugins: { legend: { display: false } },
      animation: { duration: 800 },
    },
  })
}

// The canvas element itself never re-renders: Chart.js owns it, and the PDF export reads it by id.
const Canvas = memo(function Canvas() {
  return <canvas id="radarChart"></canvas>
})

export default function RadarCard({ s }) {
  useEffect(() => {
    if (s) drawRadar(document.getElementById('radarChart'), s)
  }, [s])
  return (
    <div className="chart-card">
      <Canvas />
      <div className="chart-legend">
        <span><span className="legend-dot" style={{ background: 'var(--purple)' }}></span>Your rating</span>
        <span><span className="legend-dot" style={{ background: 'var(--yellow)', border: '2px dashed var(--yellow-deep)' }}></span>Target level</span>
      </div>
    </div>
  )
}
