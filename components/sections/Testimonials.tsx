'use client'
// components/sections/Testimonials.tsx
import { useEffect } from 'react'
import { TESTIMONIALS_INLINE } from '@/lib/data'

export default function Testimonials() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      '.testi-pull[data-reveal], .testi-inline[data-reveal]'
    )
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = parseInt((e.target as HTMLElement).dataset.delay || '0')
          setTimeout(() => e.target.classList.add('revealed'), delay)
        }
      }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testi-section">
      <div className="testi-header">
        <div className="section-label">Client Voices</div>
        <h2 className="section-title">
          Heard from the <em>people</em><br />we work with
        </h2>
      </div>

      <div className="testi-grid">
        {/* Featured pull quote */}
        <div className="testi-pull" data-reveal>
          <svg
            className="testi-pull-icon"
            width="40" height="32" viewBox="0 0 44 32" fill="none"
          >
            <path
              d="M0 32V19.2C0 8.533 5.867 2.4 17.6 0l2.133 3.733C13.6 5.333 10.4 8.8 9.6 14.4H16V32H0ZM24 32V19.2C24 8.533 29.867 2.4 41.6 0L43.733 3.733C37.6 5.333 34.4 8.8 33.6 14.4H40V32H24Z"
              fill="currentColor" opacity=".12"
            />
          </svg>
          <blockquote className="testi-pull-quote">
            Before Ankur, our management accounts were always two weeks late. Now
            they&rsquo;re ready by day five and our board meetings actually move forward.
          </blockquote>
          <div className="testi-pull-author">
            <div className="testi-pull-av">SL</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="testi-pull-name">Sarah L.</div>
                <div className="testi-pull-stars">★★★★★</div>
              </div>
              <div className="testi-pull-role">CEO, SaaS company &middot; London</div>
            </div>
          </div>
        </div>

        {/* Inline stack */}
        <div className="testi-stack">
          {TESTIMONIALS_INLINE.map((t) => (
            <div className="testi-inline" data-reveal data-delay={t.delay} key={t.name}>
              <div className="testi-inline-bar" />
              <div>
                <p className="testi-inline-quote">{t.quote}</p>
                <div className="testi-inline-author">
                  <span className={`tav ${t.cls}`}>{t.av}</span>
                  <span>
                    <strong>{t.name}</strong> &middot; {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
