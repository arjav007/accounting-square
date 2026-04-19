'use client'
// components/sections/Services.tsx
import { useEffect, useRef } from 'react'

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)
const BarChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/>
    <line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/>
    <line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
  </svg>
)

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.service-card[data-reveal]')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-intro">
        <div>
          <div className="section-label">Our Services</div>
          <h2 className="section-title">Built for <em>modern</em><br />financial complexity</h2>
        </div>
        <p style={{ color: 'var(--stone)', fontSize: '.95rem', lineHeight: 1.8, alignSelf: 'end' }}>
          Three core disciplines, deeply integrated. Whether you&rsquo;re scaling fast or seeking
          strategic clarity, our services adapt to where you are.
        </p>
      </div>

      <div className="services-bento">
        {/* Featured — Management Accounting */}
        <div className="service-card featured" data-reveal onClick={() => openModal('mgmt')}>
          <div className="sc-hint">↗</div>
          <div>
            <div className="service-tag">Strategic Core</div>
            <div className="service-name">Management Accounting</div>
            <p className="service-desc">
              Transform raw financial data into strategic intelligence. Decision-ready insights that
              guide leadership &mdash; budgeting, variance analysis, forecasting, and KPI management
              calibrated to your business.
            </p>
            <ul className="service-list">
              <li>Budget planning &amp; variance analysis</li>
              <li>Management reporting &amp; dashboards</li>
              <li>Cash flow modelling &amp; forecasting</li>
              <li>KPI frameworks &amp; performance tracking</li>
            </ul>
          </div>
          <div>
            <div className="rt-wrap">
              <div className="rt-title">Reporting Timeline</div>
              <div className="rt-row"><span className="rt-label">Monthly close</span><span className="rt-badge">Day 5</span></div>
              <div className="rt-row"><span className="rt-label">Board pack ready</span><span className="rt-badge">Day 8</span></div>
              <div className="rt-row"><span className="rt-label">Forecast update</span><span className="rt-badge">Day 10</span></div>
            </div>
            {/* Logic: Stop propagation so the card click doesn't trigger twice */}
            <div 
              className="service-link" 
              style={{ cursor: 'pointer' }}
              onClick={(e) => { e.stopPropagation(); openModal('mgmt'); }}
            >
               Explore this service →
            </div>
          </div>
        </div>

        {/* Bookkeeping */}
        <div className="service-card" data-reveal onClick={() => openModal('bk')}>
          <div className="service-card-bg card-bg-1" />
          <div className="sc-hint">↗</div>
          <div className="service-icon icon-sage" style={{ color: 'var(--sage-deep)' }}>
            <BookIcon />
          </div>
          <div className="service-tag">Foundation</div>
          <div className="service-name">Bookkeeping</div>
          <p className="service-desc">
            Meticulous, real-time bookkeeping that keeps your financial records impeccable.
            We handle the fundamentals so your team can focus on growth.
          </p>
          <div 
            className="service-link" 
            style={{ marginTop: 20, cursor: 'pointer' }} 
            onClick={(e) => { e.stopPropagation(); openModal('bk'); }}
          >
            Learn more →
          </div>
        </div>

        {/* Controller Services */}
        <div className="service-card" data-reveal onClick={() => openModal('ctrl')}>
          <div className="service-card-bg card-bg-2" />
          <div className="sc-hint">↗</div>
          <div className="service-icon icon-gold" style={{ color: 'var(--gold)' }}>
            <BarChartIcon />
          </div>
          <div className="service-tag">Oversight</div>
          <div className="service-name">Controller Services</div>
          <p className="service-desc">
            Fractional controller expertise &mdash; CFO-level financial oversight and compliance
            rigour for growing companies at the right cost.
          </p>
          <div 
            className="service-link" 
            style={{ marginTop: 20, cursor: 'pointer' }} 
            onClick={(e) => { e.stopPropagation(); openModal('ctrl'); }}
          >
            Learn more →
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Helper — calls the global openModal defined in ServiceModals.tsx
 * Since we added ServiceModals to layout.tsx, this will trigger the popup.
 */
function openModal(id: string) {
  if (typeof window !== 'undefined' && (window as any).__openServiceModal) {
    (window as any).__openServiceModal(id)
  }
}