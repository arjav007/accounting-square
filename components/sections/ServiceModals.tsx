'use client'
// components/sections/ServiceModals.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'

type ModalId = 'mgmt' | 'bk' | 'ctrl' | null

export default function ServiceModals() {
  const [activeModal, setActiveModal] = useState<ModalId>(null)

  // Expose open function to window so Services.tsx can call it
  useEffect(() => {
    (window as any).__openServiceModal = (id: ModalId) => {
      setActiveModal(id)
      document.body.style.overflow = 'hidden'
    }
    return () => { delete (window as any).__openServiceModal }
  }, [])

  const close = () => {
    setActiveModal(null)
    document.body.style.overflow = ''
  }

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close()
  }

  if (!activeModal) return null

  return (
    <div className={`svc-overlay${activeModal ? ' open' : ''}`} onClick={onOverlayClick}>
      <div className="svc-modal">
        {/* Management Accounting */}
        {activeModal === 'mgmt' && (
          <div className="svc-modal-inner">
            <div className="svc-modal-header" style={{ background: 'linear-gradient(135deg,#0D2340,#185887)' }}>
              <button className="svc-close" onClick={close}>✕</button>
              <div className="svc-modal-tag">Strategic Core</div>
              <div className="svc-modal-title">Management <em>Accounting</em></div>
              <p className="svc-modal-lead">
                We transform raw financial data into board-ready intelligence &mdash; giving leadership
                the clarity to act decisively. From monthly closes to rolling forecasts.
              </p>
              <div className="svc-modal-meta">
                <div className="svc-meta-chip">📅 Monthly close by Day 5</div>
                <div className="svc-meta-chip">🌍 Remote-first delivery</div>
                <div className="svc-meta-chip">🛡 IFRS &amp; US GAAP</div>
                <div className="svc-meta-chip">⚡ Onboarding in 2 weeks</div>
              </div>
            </div>
            <div className="svc-modal-body">
              <div className="svc-body-grid">
                <div>
                  <div className="svc-sec-label">What&rsquo;s Included</div>
                  <ul className="svc-deliverables">
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>📊</div><div className="svc-del-text"><strong>Monthly Management Accounts</strong><span>P&amp;L, balance sheet, cash flow &mdash; formatted for leadership review</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>🎯</div><div className="svc-del-text"><strong>Budget vs Actuals Analysis</strong><span>Variance reporting with narrative commentary and recommended actions</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>📈</div><div className="svc-del-text"><strong>Rolling Forecasts</strong><span>12-month forward view updated monthly, calibrated to your pipeline</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>💰</div><div className="svc-del-text"><strong>Cash Flow Modelling</strong><span>Weekly and monthly cash projections with scenario planning</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>📋</div><div className="svc-del-text"><strong>Board Pack Preparation</strong><span>Investor and board-ready packs, designed and delivered on schedule</span></div></li>
                  </ul>
                </div>
                <div>
                  <div className="svc-sec-label">Why It Matters</div>
                  <div className="svc-trust-items">
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(24,88,135,.1)' }}>🎯</div><div><div className="svc-trust-title">Decisions backed by data</div><div className="svc-trust-desc">Leadership teams that receive timely, accurate management accounts make faster, more confident decisions.</div></div></div>
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(48,184,67,.1)' }}>🏗</div><div><div className="svc-trust-title">Built around your business</div><div className="svc-trust-desc">Every report is scoped to your model &mdash; not a generic template. We learn your cost drivers, revenue lines, and what your board cares about.</div></div></div>
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(24,88,135,.1)' }}>🌍</div><div><div className="svc-trust-title">Delivered remotely, reliably</div><div className="svc-trust-desc">Clients in 12+ countries receive the same quality of reporting, on the same schedule, with a dedicated contact each month.</div></div></div>
                  </div>
                </div>
              </div>
              <div className="svc-process">
                <div className="svc-sec-label">How We Deliver</div>
                <div className="svc-steps">
                  <div className="svc-step"><div className="svc-step-dot">01</div><div className="svc-step-label">Data &amp; system access</div></div>
                  <div className="svc-step"><div className="svc-step-dot">02</div><div className="svc-step-label">Chart of accounts review</div></div>
                  <div className="svc-step"><div className="svc-step-dot">03</div><div className="svc-step-label">Month-end close</div></div>
                  <div className="svc-step"><div className="svc-step-dot">04</div><div className="svc-step-label">Reporting delivered</div></div>
                </div>
              </div>
              <div className="svc-modal-cta">
                <div><div className="svc-cta-title">Ready to get started?</div><div className="svc-cta-sub">Book a free 30-minute discovery call &mdash; no obligation.</div></div>
                <Link href="/contact" className="btn-primary" onClick={close} style={{ textDecoration: 'none' }}>Start the Conversation →</Link>
              </div>
            </div>
          </div>
        )}

        {/* Bookkeeping */}
        {activeModal === 'bk' && (
          <div className="svc-modal-inner">
            <div className="svc-modal-header" style={{ background: 'linear-gradient(135deg,#0D2340,#1a6b3a)' }}>
              <button className="svc-close" onClick={close}>✕</button>
              <div className="svc-modal-tag">Foundation</div>
              <div className="svc-modal-title"><em>Bookkeeping</em> Services</div>
              <p className="svc-modal-lead">
                Accurate, real-time bookkeeping is the foundation everything else is built on.
                We maintain your records with precision so data is always clean, current, and audit-ready.
              </p>
              <div className="svc-modal-meta">
                <div className="svc-meta-chip">🔄 Real-time reconciliation</div>
                <div className="svc-meta-chip">💱 Multi-currency support</div>
                <div className="svc-meta-chip">🔗 Xero, QBO, Sage</div>
                <div className="svc-meta-chip">✅ Audit-ready records</div>
              </div>
            </div>
            <div className="svc-modal-body">
              <div className="svc-body-grid">
                <div>
                  <div className="svc-sec-label">What&rsquo;s Included</div>
                  <ul className="svc-deliverables">
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>📖</div><div className="svc-del-text"><strong>Daily Transaction Coding</strong><span>All income and expenses coded, categorised, and reconciled in real time</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>🏠</div><div className="svc-del-text"><strong>Bank Reconciliation</strong><span>Monthly reconciliation of all bank, credit card, and payment accounts</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>📧</div><div className="svc-del-text"><strong>Accounts Payable &amp; Receivable</strong><span>Invoice tracking, supplier payments, and debtor management</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>💱</div><div className="svc-del-text"><strong>Multi-Currency Bookkeeping</strong><span>FX transactions handled accurately across USD, GBP, EUR, AED and more</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>📊</div><div className="svc-del-text"><strong>Monthly Trial Balance</strong><span>Clean, reviewed trial balance delivered on the 5th of each month</span></div></li>
                  </ul>
                </div>
                <div>
                  <div className="svc-sec-label">Why It Matters</div>
                  <div className="svc-trust-items">
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(48,184,67,.1)' }}>🧱</div><div><div className="svc-trust-title">The foundation for everything</div><div className="svc-trust-desc">Clean books are the prerequisite for good management accounts, smooth audits, and investor confidence.</div></div></div>
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(24,88,135,.1)' }}>⚡</div><div><div className="svc-trust-title">Real-time, not month-end</div><div className="svc-trust-desc">We code and reconcile continuously &mdash; so when you need a number, it&rsquo;s there immediately.</div></div></div>
                  </div>
                </div>
              </div>
              <div className="svc-modal-cta">
                <div><div className="svc-cta-title">Let&rsquo;s tidy up your books.</div><div className="svc-cta-sub">We&rsquo;ll assess your setup and outline exactly what&rsquo;s needed.</div></div>
                <Link href="/contact" className="btn-primary" onClick={close} style={{ textDecoration: 'none' }}>Start the Conversation →</Link>
              </div>
            </div>
          </div>
        )}

        {/* Controller Services */}
        {activeModal === 'ctrl' && (
          <div className="svc-modal-inner">
            <div className="svc-modal-header" style={{ background: 'linear-gradient(135deg,#0D2340,#2a5f7a)' }}>
              <button className="svc-close" onClick={close}>✕</button>
              <div className="svc-modal-tag">Oversight</div>
              <div className="svc-modal-title">Controller <em>Services</em></div>
              <p className="svc-modal-lead">
                Fractional controller expertise for businesses that need CFO-level rigour without
                the full-time overhead. We embed into your finance function and take ownership of
                controls, compliance, and reporting integrity.
              </p>
              <div className="svc-modal-meta">
                <div className="svc-meta-chip">🏛 CFO-level oversight</div>
                <div className="svc-meta-chip">📄 US GAAP &amp; IFRS</div>
                <div className="svc-meta-chip">🔒 Internal controls</div>
                <div className="svc-meta-chip">✅ Audit &amp; investor ready</div>
              </div>
            </div>
            <div className="svc-modal-body">
              <div className="svc-body-grid">
                <div>
                  <div className="svc-sec-label">What&rsquo;s Included</div>
                  <ul className="svc-deliverables">
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>🏛</div><div className="svc-del-text"><strong>Financial Controls &amp; Compliance</strong><span>Design and oversight of internal controls, policies, and approval frameworks</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>🔍</div><div className="svc-del-text"><strong>Audit Readiness</strong><span>Preparation and liaison for annual audits, interim reviews, and due diligence</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(24,88,135,.1)' }}>📐</div><div className="svc-del-text"><strong>Statutory Reporting</strong><span>Companies House filings, statutory accounts, and regulatory compliance</span></div></li>
                    <li><div className="svc-del-icon" style={{ background: 'rgba(48,184,67,.1)' }}>👥</div><div className="svc-del-text"><strong>Investor &amp; Lender Reporting</strong><span>Covenant reporting, PE portfolio packs, and lender compliance certificates</span></div></li>
                  </ul>
                </div>
                <div>
                  <div className="svc-sec-label">Why It Matters</div>
                  <div className="svc-trust-items">
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(24,88,135,.1)' }}>🏆</div><div><div className="svc-trust-title">CFO-grade rigour, fractional cost</div><div className="svc-trust-desc">Growing companies need financial controls long before they can justify a full-time hire. We fill that gap.</div></div></div>
                    <div className="svc-trust-item"><div className="svc-trust-icon" style={{ background: 'rgba(48,184,67,.1)' }}>🔒</div><div><div className="svc-trust-title">Audit-ready, always</div><div className="svc-trust-desc">We run your finance function to audit standard so when the time comes, there are no surprises.</div></div></div>
                  </div>
                </div>
              </div>
              <div className="svc-modal-cta">
                <div><div className="svc-cta-title">Need fractional controller support?</div><div className="svc-cta-sub">Let&rsquo;s discuss your compliance and oversight needs.</div></div>
                <Link href="/contact" className="btn-primary" onClick={close} style={{ textDecoration: 'none' }}>Start the Conversation →</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
