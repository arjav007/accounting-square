'use client'
// components/sections/HowItWorks.tsx
import { useEffect, useRef } from 'react'
import { HOW_IT_WORKS } from '@/lib/data'

export default function HowItWorks() {
  const timelineRef  = useRef<HTMLDivElement>(null)
  const lineRef      = useRef<HTMLDivElement>(null)
  const fillRef      = useRef<HTMLDivElement>(null)
  const stepElRef    = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Reveal items on scroll
    const items = timelineRef.current?.querySelectorAll<HTMLElement>('.hiw-item[data-reveal]')
    if (items) {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
        { threshold: 0.2 }
      )
      items.forEach(it => observer.observe(it))
    }

    // Animated progress line + step counter
    const update = () => {
      const tl   = timelineRef.current
      const line = lineRef.current
      const fill = fillRef.current
      const stepEl = stepElRef.current
      if (!tl || !line) return

      const items = tl.querySelectorAll<HTMLElement>('.hiw-item')
      const r   = tl.getBoundingClientRect()
      const vh  = window.innerHeight
      const prog = Math.min(Math.max((vh * 0.6 - r.top) / r.height, 0), 1)
      line.style.height = (prog * 100) + '%'
      if (fill) fill.style.width = (prog * 100) + '%'

      let s = 0
      items.forEach((it, i) => {
        if (it.getBoundingClientRect().top < vh * 0.65) {
          s = i + 1
          it.classList.add('active')
        } else {
          it.classList.remove('active')
        }
      })
      if (stepEl) stepEl.textContent = String(Math.max(s, 1))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section id="process">
      <div className="hiw-inner">
        {/* Sticky left panel */}
        <div className="hiw-sticky">
          <div className="hiw-sticky-label">How It Works</div>
          <h2 className="hiw-sticky-title">
            A seamless onboarding,<br /><em>from day one</em>
          </h2>
          <p className="hiw-header-desc">
            Four clear steps from first conversation to ongoing financial clarity.
            No complexity, no surprises.
          </p>
          <div className="hiw-progress-wrap">
            <div className="hiw-progress-bar">
              <div className="hiw-progress-fill" ref={fillRef} />
            </div>
            <div className="hiw-progress-count">
              <span ref={stepElRef}>1</span> / 4 steps
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="hiw-timeline" ref={timelineRef}>
          <div className="hiw-tl-line" ref={lineRef} />
          {HOW_IT_WORKS.map((item, i) => (
            <div
              className="hiw-item"
              data-reveal
              data-step={i + 1}
              key={item.step}
            >
              <div><div className="hiw-dot">{item.step}</div></div>
              <div className="hiw-card">
                <div className="hiw-card-top">
                  <div className="hiw-card-title">{item.title}</div>
                  <span className="hiw-card-tag">{item.tag}</span>
                </div>
                <p className="hiw-card-desc">{item.desc}</p>
                <div className="hiw-card-detail">
                  {item.stats.map(s => (
                    <span className="hiw-card-stat" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
