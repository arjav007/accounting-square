'use client'
// components/sections/Promise.tsx
import { useEffect } from 'react'
import { PROMISES } from '@/lib/data'

export default function Promise() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.promise-item[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = parseInt((e.target as HTMLElement).dataset.delay || '0')
          setTimeout(() => e.target.classList.add('revealed'), delay)
        }
      }),
      { threshold: 0.15 }
    )
    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="promise-section" id="promise">
      <div className="promise-outer">
        <div className="promise-bg" />

        {/* Left */}
        <div className="promise-left">
          <div className="promise-eyebrow">Our Promise</div>
          <h2 className="promise-headline">
            Not just an accountant.<br /><em>Your partner.</em>
          </h2>
          <p className="promise-body">
            We built Accounting Square because growing businesses deserve more than
            number-crunching. They deserve a financial partner who is proactive, precise,
            and genuinely invested in their success.
          </p>
          <p className="promise-body" style={{ marginBottom: 36 }}>
            These are the three commitments we make to every client &mdash; from the first
            conversation, through every month we work together.
          </p>
          <div className="promise-founders">
            <div className="promise-avatars">
              <div className="pf-av pf-a">AJ</div>
              <div className="pf-av pf-b">DD</div>
            </div>
            <div>
              <div className="pft-names">Ankur Madanlal Jain &amp; Dhwani Doshi</div>
              <div className="pft-title">Founders, Accounting Square</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="promise-right">
          <div className="promise-items">
            {PROMISES.map((p, i) => (
              <div
                className="promise-item"
                data-reveal
                data-delay={i * 120}
                key={p.num}
              >
                <div className="promise-num">{p.num}</div>
                <div>
                  <div
                    className="promise-title"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
                  <p
                    className="promise-text"
                    dangerouslySetInnerHTML={{ __html: p.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
