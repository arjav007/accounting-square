'use client'
// components/sections/FAQ.tsx
import { useState } from 'react'
import Link from 'next/link'
import { FAQS } from '@/lib/data'

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        {/* Left sticky */}
        <div className="faq-left">
          <div className="section-label">Got questions?</div>
          <h2 className="section-title">
            Things clients<br />often <em>ask us</em>
          </h2>
          <p className="faq-intro">
            No jargon. Just honest answers about how we work and whether we&rsquo;re the right fit.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginTop: 32, display: 'inline-flex' }}
          >
            Ask us directly <span className="btn-arrow">→</span>
          </Link>
        </div>

        {/* FAQ list */}
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-q"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">
                  <ChevronIcon />
                </span>
              </button>
              <div className={`faq-a${openIndex === i ? ' open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
