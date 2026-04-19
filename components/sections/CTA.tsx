'use client'
// components/sections/CTA.tsx
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CTA() {
  useEffect(() => {
    const card = document.querySelector<HTMLElement>('.cta-card[data-reveal]')
    if (!card) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.2 }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta-section">
      <div className="cta-inner">
        {/* Left */}
        <div className="cta-left">
          <div className="cta-badge">Ready to begin?</div>
          <h2 className="cta-title">
            Let&rsquo;s build something <em>clear</em> together.
          </h2>
          <p className="cta-sub">
            Whether you need structured bookkeeping or strategic financial guidance &mdash;
            we&rsquo;re ready to listen.
          </p>

          <div className="cta-chips">
            <div className="cta-chip"><span className="cta-chip-dot" />Free 30-min discovery call</div>
            <div className="cta-chip-sep" />
            <div className="cta-chip"><span className="cta-chip-dot" />No obligation, ever</div>
            <div className="cta-chip-sep" />
            <div className="cta-chip"><span className="cta-chip-dot" />Response within 24 hours</div>
          </div>

          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Start the Conversation <span className="btn-arrow">→</span>
            </Link>
            <a href="mailto:aspl0305@gmail.com" className="btn-secondary">
              aspl0305@gmail.com
            </a>
          </div>

          <div className="cta-proof">
            <div className="cta-proof-avs">
              <div className="cpa-dot">AJ</div>
              <div className="cpa-dot">DD</div>
            </div>
            <span className="cta-proof-text">
              Ankur &amp; Dhwani respond personally &mdash; <strong>usually same day</strong>
            </span>
          </div>
        </div>

        {/* Right card */}
        <div className="cta-card" data-reveal>
          <div style={{
            width: '100%', 
            aspectRatio: '4/3', 
            position: 'relative',
            overflow: 'hidden', 
            borderRadius: 'var(--r-xl)',
            boxShadow: '0 20px 60px rgba(10,24,48,.18)'
          }}>
            <Image
              src="/contact.png"
              alt="Accounting Square consultation"
              fill
              style={{ objectFit: 'cover' }}
            />
            
            {/* The exact glassy status pill you provided, converted to JSX */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              background: 'rgba(12,32,64,.75)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,.12)',
              borderRadius: '100px',
              padding: '6px 13px',
              fontSize: '.7rem',
              color: 'rgba(244,248,250,.82)',
              letterSpacing: '.04em',
              zIndex: 10
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--gold)',
                animation: 'nodePulse 2.8s ease-out infinite',
                flexShrink: 0
              }}></span>
              Available for new clients worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}