'use client'
// components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

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
          <div className="footer-logo-wrap" style={{ marginBottom: '12px', display: 'flex' }}>
            <Image 
              src="/Accsquare.svg" 
              alt="Accounting Square Logo" 
              width={180} 
              height={35} 
            />
          </div>
          <p className="footer-tagline">Precision accounting for businesses building across borders.</p>
        </div>

        {/* Services */}
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-col-links">
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Management Accounting</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Bookkeeping</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Controller Services</a></li>
            {/* Added Global Taxation here! */}
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Global Taxation</a></li>
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
            
            <div className="footer-contact-item">
              <PhoneIcon />
              <span>
                <a href="tel:+919029281052" style={{ color: 'inherit' }}>+91-90292-81052</a>
                {' / '}
                <a href="tel:+918369052938" style={{ color: 'inherit' }}>+91-83690-52938</a>
              </span>
            </div>

            <a href="https://maps.google.com/?q=101+Subhshree+Arcade+Opp+Shivaji+Chowk+Zakaria+Road+Malad+West+Mumbai+400064" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <MapIcon /> 101, Subhshree Arcade, Zakaria Road, Malad West, Mumbai 400064
            </a>
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