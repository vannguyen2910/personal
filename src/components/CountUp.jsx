import { useEffect, useRef } from 'react'

// A stat number that counts up from 0 the first time it scrolls into view.
export default function CountUp({ target, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = prefix + Math.round(eased * target) + suffix
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, prefix, suffix, duration])

  return <div className="stat-number" ref={ref}>{prefix}{target}{suffix}</div>
}
