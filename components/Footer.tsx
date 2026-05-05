'use client'
// components/Footer.tsx
import Link from 'next/link'
import { LogoMark } from './Loader'

const scrollTo = (anchor: string) => {
  const el = document.getElementById(anchor)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  else window.location.href = `/#${anchor}`
}

export default function Footer() {
  return (
    <footer className="footer-rich">
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <div className="footer-logo-wrap">
            <div style={{ width: 36, height: 36, background: 'var(--ink-soft)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <LogoMark size={20} />
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 500, color: 'var(--cream)' }}>
              Accounting Square
            </span>
          </div>
          <p className="footer-tagline">Precision accounting for businesses building across borders.</p>
          <div className="footer-certs">
            <span className="footer-cert">🇬🇧 ICAEW</span>
            <span className="footer-cert">🇺🇸 CPA</span>
            <span className="footer-cert">🇨🇦 CPA Ontario</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-col-links">
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Management Accounting</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Bookkeeping</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Controller Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-col-links">
            <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process') }}>How It Works</a></li>
            <li><a href="#team"    onClick={(e) => { e.preventDefault(); scrollTo('team') }}>Our Team</a></li>
            <li><a href="#promise" onClick={(e) => { e.preventDefault(); scrollTo('promise') }}>Our Promise</a></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">Get in Touch</div>
          <div className="footer-contact-items">
            <a href="mailto:aspl0305@gmail.com" className="footer-contact-item">
              <EmailIcon /> aspl0305@gmail.com
            </a>
            
            {/* FIXED: Changed outer wrapper from <a> to <div> to prevent nested link errors */}
            <div className="footer-contact-item">
              <PhoneIcon />
              <span>
                <a href="tel:+919029281052" style={{ color: 'inherit' }}>+91-90292-81052</a>
                {' / '}
                <a href="tel:+918369052938" style={{ color: 'inherit' }}>+91-83690-52938</a>
              </span>
            </div>

            <a href="https://maps.google.com/?q=101+Subhshree+Arcade+Opp+Shivaji+Chowk+Zakaria+Road+Malad+West+Mumbai+400064" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <MapIcon /> 101, Subhshree Arcade, Zakaria Road, Malad West, Mumbai 400064
            </a>
            {/*<a href="https://maps.google.com/?q=14+Bldg+No+3+Sagar+City+Behind+Shalimar+Hotel+Waliv+Vasai+East+Palghar+401208" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <MapIcon /> 14, Bldg No.3, Sagar City, Waliv, Vasai East, Palghar 401208
  </a>*/}
            {/* <div className="footer-social">
  <a href="https://linkedin.com/company/accountingsquare" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>
</div> 
*/}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © {new Date().getFullYear()} Accounting Square Private Limited. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

// Inline SVG helpers
const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.42 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const MapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)