// app/contact/page.tsx
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <main>
      <div className="contact-hero">
        {/* Left: info */}
        <div>
          <h1 className="contact-title">
            Let’s start a<br /><em>conversation.</em>
          </h1>
          <p className="contact-desc">
            Tell us about your business and what you’re looking for. We’ll respond
            within one business day with a clear path forward.
          </p>
          <div className="contact-methods">
            <div className="contact-method" style={{ cursor: 'default' }}>
              <div className="cm-icon cm-parch">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="cm-label">Our Offices</div>
                <div className="cm-value">
                  <a href="https://maps.google.com/?q=101+Subhshree+Arcade+Zakaria+Road+Malad+West+Mumbai+400064" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    101, Subhshree Arcade, Zakaria Road,<br />Malad West, Mumbai 400064
                  </a>
                  <br /><br />
                  <a href="https://maps.google.com/?q=14+Bldg+No+3+Sagar+City+Waliv+Vasai+East+Palghar+401208" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    14, Bldg No.3, Sagar City,<br />Waliv, Vasai East, Palghar 401208
                  </a>
                </div>
              </div>
            </div>

            <a href="mailto:aspl0305@gmail.com" className="contact-method">
              <div className="cm-icon cm-sage">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="cm-label">Email us directly</div>
                <div className="cm-value">aspl0305@gmail.com</div>
              </div>
            </a>

            <div className="contact-method" style={{ cursor: 'default' }}>
              <div className="cm-icon cm-parch">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <div className="cm-label">Call us</div>
                <div className="cm-value">
                  <a href="tel:+919029281052" style={{ color: 'inherit', textDecoration: 'none' }}>+91-90292-81052</a>,{' '}
                  <a href="tel:+918369052938" style={{ color: 'inherit', textDecoration: 'none' }}>+91-83690-52938</a>
                </div>
              </div>
            </div>

            <div className="contact-method" style={{ cursor: 'default' }}>
              <div className="cm-icon cm-parch">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <div className="cm-label">Response time</div>
                <div className="cm-value">Within 1 business day — usually same day</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </main>
  )
}