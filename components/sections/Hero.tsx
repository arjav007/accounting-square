'use client'
// components/sections/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'
import { STATS } from '@/lib/data'
import { useEffect, useRef } from 'react'

const TICKER_ITEMS = [
  { type: 'usp',      text: '✓ Day 5 Management Accounts' },
  { type: 'service',  text: 'Bookkeeping' },
  { type: 'usp',      text: '✓ 99% Client Retention' },
  { type: 'service',  text: 'Controller Services' },
  { type: 'usp',      text: '✓ Board Packs by Day 8' },
  { type: 'industry', text: 'SaaS' },
  { type: 'service',  text: 'Financial Reporting' },
  { type: 'usp',      text: '✓ 40+ Global Clients' },
  { type: 'industry', text: 'Real Estate' },
  { type: 'service',  text: 'Management Accounting' },
  { type: 'usp',      text: '✓ Same-day Response' },
  { type: 'industry', text: 'Private Equity' },
  { type: 'cred',     text: 'IFRS Compliant' },
  { type: 'service',  text: 'Payroll' },
  { type: 'usp',      text: '✓ 3 Time Zones' },
  { type: 'industry', text: 'Professional Services' },
]

// Duplicate for seamless loop
const TICKER = [...TICKER_ITEMS, ...TICKER_ITEMS]

export default function Hero() {
  const countersStarted = useRef(false)

  useEffect(() => {
    // Trigger stat counters when stats band is in view
    const band = document.getElementById('statsBand')
    if (!band) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted.current) {
        countersStarted.current = true
        document.querySelectorAll<HTMLElement>('.sbi-counter').forEach(el => {
          // Check if this is a year (like 2015) vs a quantity
          const isYear = el.classList.contains('sbi-year')
          const target = parseInt(el.dataset.target || '0', 10)
          
          if (isYear) {
            // Instantly show the year, no animation needed
            el.textContent = String(target)
            return
          }

          const duration = 1400
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            el.textContent = String(Math.round(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      }
    }, { threshold: 0.3 })

    observer.observe(band)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="home" style={{ paddingTop: 'clamp(100px, 15vh, 140px)' }}>
      {/* Moved the comment inside the section to fix the JSX root element error */}
      <div className="hero-bg-orb orb-1" />
      <div className="hero-bg-orb orb-2" />

      <div className="hero-top">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Precision Accounting · Global Reach
          </div>
          <h1 className="hero-headline">
            <span style={{ display: 'block' }}>Financial clarity</span>
            <span style={{ display: 'block' }}>for businesses</span>
            <span style={{ display: 'block' }}>building <em>across</em></span>
            <span style={{ display: 'block' }}>borders.</span>
          </h1>
          <p className="hero-sub">
            Management accounting, bookkeeping, and controller services for founder-led
            and PE-backed companies across 12+ countries. Day 5 management accounts.
            Every month. No exceptions.
          </p>
          {/* Added flexWrap so buttons stack nicely on tiny mobile screens */}
          <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link href="/contact" className="btn-primary">
              Start a Conversation <span className="btn-arrow">→</span>
            </Link>
            <a
              href="#services"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Our Services <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="hero-img-card">
            <div className="hero-img-inner" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '250px' }}>
              <Image
                src="/start.png"
                alt="Global financial partner for ambitious businesses"
                fill
                style={{ objectFit: 'cover', borderRadius: '16px' }}
                priority
              />
            </div>
          </div>

          {/* Ticker - Added strict overflow hiding so ticks don't float around on mobile */}
          <div className="hero-ticker-row" style={{ overflow: 'hidden', width: '100%', borderRadius: '8px' }}>
            <div className="htr-track">
              <div className="htr-inner">
                {TICKER.map((item, i) => (
                  <span key={i} className={`htr-item htr-${item.type}`}>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Band */}
      <div className="stats-band" id="statsBand">
        <div className="stats-band-bg" />
        <div className="stats-band-inner">
          {STATS.map((s) => {
            const isYearValue = s.value > 2000
            return (
              <div className="stats-band-item" key={s.label}>
                <div className="sbi-eyebrow">{s.eyebrow}</div>
                <div className="sbi-num-row">
                  <div className="sbi-num">
                    <span 
                      className={`sbi-counter ${isYearValue ? 'sbi-year' : ''}`} 
                      data-target={s.value}
                    >
                      {isYearValue ? s.value : '0'}
                    </span>
                    {s.suffix && <sup>{s.suffix}</sup>}
                  </div>
                  <div className="sbi-label">{s.label}</div>
                </div>
                <div className="sbi-detail">{s.detail}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}