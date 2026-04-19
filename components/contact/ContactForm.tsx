'use client'
// components/contact/ContactForm.tsx
import { useState } from 'react'
import Link from 'next/link'
import { DIAL_CODES } from '@/lib/data'

type Step = 1 | 2 | 3 | 4 | 5

const REVENUE_OPTIONS  = ['Under $500K', '$500K – $1M', '$1M – $5M', '$5M – $20M', '$20M+']
const SYSTEM_OPTIONS   = ['Xero', 'QuickBooks', 'Sage', 'NetSuite', 'Other / None']
const SERVICE_OPTIONS  = ['Bookkeeping', 'Management Accounting', 'Controller Services', 'Financial Strategy', 'Not sure yet']

export default function ContactForm() {
  const [step,    setStep]    = useState<Step>(1)
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Added loading state
  const [dialOpen, setDialOpen] = useState(false)
  const [dial,    setDial]    = useState(DIAL_CODES[0])

  // Field state
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [phone,     setPhone]     = useState('')
  const [company,   setCompany]   = useState('')
  const [jobTitle,  setJobTitle]  = useState('')
  const [revenue,   setRevenue]   = useState('')
  const [system,    setSystem]    = useState('')
  const [services,  setServices]  = useState<string[]>([])
  const [message,   setMessage]   = useState('')

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({})

  const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
  const phoneOk = (v: string) => {
    const n = v.replace(/\D/g, '').length
    return n >= dial.min && n <= dial.max
  }

  const validate1 = () => {
    const e: Record<string, string> = {}
    if (!firstName.trim()) e.firstName = 'First name is required'
    if (!lastName.trim())  e.lastName  = 'Last name is required'
    if (!email.trim() || !emailOk(email)) e.email = 'Please enter a valid email address'
    if (!phone.trim() || !phoneOk(phone)) e.phone = 'Enter a valid phone number'
    setErrors(e)
    return Object.keys(e).length === 0
  }
  const validate2 = () => {
    const e: Record<string, string> = {}
    if (!company.trim())  e.company  = 'Company name is required'
    if (!jobTitle.trim()) e.jobTitle = 'Job title is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goNext = (from: Step) => {
    setErrors({})
    setStep((from + 1) as Step)
  }
  const goBack = (from: Step) => {
    setErrors({})
    setStep((from - 1) as Step)
  }

  const toggleService = (s: string) => {
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  // UPDATED: Functional Submit to Formspree
  const submit = async () => {
    setIsSubmitting(true)
    
    const formData = {
      firstName,
      lastName,
      email,
      phone: `${dial.label} ${phone}`,
      company,
      jobTitle,
      revenue,
      system,
      servicesRequested: services.join(', '),
      message
    }

    try {
      const response = await fetch('https://formspree.io/f/mpqkroyy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        alert("There was an issue sending your message. Please try again.")
      }
    } catch (err) {
      alert("Something went wrong. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setStep(1); setSuccess(false)
    setFirstName(''); setLastName(''); setEmail(''); setPhone('')
    setCompany(''); setJobTitle(''); setRevenue(''); setSystem('')
    setServices([]); setMessage(''); setErrors({})
  }

  const TOTAL = 5
  const dots = Array.from({ length: TOTAL }, (_, i) => i + 1)

  return (
    <div className="form-container">
      {/* Step dots */}
      <div className="step-dots">
        {dots.map(d => (
          <div
            key={d}
            className={`step-dot${d === step && !success ? ' active' : ''}${(d < step || success) ? ' done' : ''}`}
          />
        ))}
      </div>

      {success ? (
        <div className="form-success shown">
          <div className="success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div className="success-title">We&rsquo;ll be in touch soon.</div>
          <p className="success-msg">
            Thank you for reaching out. Ankur or Dhwani will respond within one business day.
            We look forward to learning more about your business.
          </p>
          <br />
          <Link href="/" className="btn-primary" style={{ margin: '0 auto', display: 'inline-flex' }} onClick={reset}>
            Return Home <span className="btn-arrow">→</span>
          </Link>
        </div>
      ) : (
        <>
          {/* STEP 1 */}
          {step === 1 && (
            <div className="form-step active">
              <div className="form-step-label">Step 1 of 5</div>
              <div className="form-question">Let&rsquo;s start with you.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="name-row">
                  <div>
                    <input className={`form-input${errors.firstName ? ' error' : ''}`} placeholder="First name *" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    {errors.firstName && <div className="form-error visible">{errors.firstName}</div>}
                  </div>
                  <div>
                    <input className={`form-input${errors.lastName ? ' error' : ''}`} placeholder="Last name *" value={lastName} onChange={e => setLastName(e.target.value)} />
                    {errors.lastName && <div className="form-error visible">{errors.lastName}</div>}
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <input className={`form-input${errors.email ? ' error' : ''}`} type="email" placeholder="Email address *" value={email} onChange={e => setEmail(e.target.value)} />
                  {emailOk(email) && <span style={{ position: 'absolute', right: 14, top: 13, fontSize: '.85rem', color: 'var(--gold)' }}>✓</span>}
                  {errors.email && <div className="form-error visible">{errors.email}</div>}
                </div>
                <div className="phone-row">
                  {/* Dial selector */}
                  <div className="cs-wrap" id="csWrap">
                    <button type="button" className={`cs-btn${dialOpen ? ' open' : ''}`} onClick={() => setDialOpen(v => !v)}>
                      <span>{dial.label}</span>
                      <svg className="cs-arrow" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                    </button>
                    {dialOpen && (
                      <div className="cs-dropdown open">
                        {DIAL_CODES.map(d => (
                          <div key={d.code} className={`cs-option${d.code === dial.code ? ' selected' : ''}`}
                            onClick={() => { setDial(d); setDialOpen(false) }}>
                            {d.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <input className={`form-input${errors.phone ? ' error' : ''}`} type="tel" placeholder="Phone number *" value={phone}
                      onChange={e => setPhone(e.target.value.replace(/[^\d\s\-()]/g, ''))} />
                    {phoneOk(phone) && phone.trim() && <span style={{ position: 'absolute', right: 14, top: 13, fontSize: '.85rem', color: 'var(--gold)' }}>✓</span>}
                  </div>
                </div>
                {errors.phone && <div className="form-error visible">{errors.phone}</div>}
              </div>
              <div className="form-actions">
                <div />
                <button className="btn-next" onClick={() => validate1() && goNext(1)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="form-step active">
              <div className="form-step-label">Step 2 of 5</div>
              <div className="form-question">Tell us about your business.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <input className={`form-input${errors.company ? ' error' : ''}`} placeholder="Company name *" value={company} onChange={e => setCompany(e.target.value)} />
                  {errors.company && <div className="form-error visible">{errors.company}</div>}
                </div>
                <div>
                  <input className={`form-input${errors.jobTitle ? ' error' : ''}`} placeholder="Your job title (e.g. CEO, Finance Director) *" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
                  {errors.jobTitle && <div className="form-error visible">{errors.jobTitle}</div>}
                </div>
              </div>
              <div className="form-actions">
                <button className="btn-back" onClick={() => goBack(2)}>← Back</button>
                <button className="btn-next" onClick={() => validate2() && goNext(2)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="form-step active">
              <div className="form-step-label">Step 3 of 5</div>
              <div className="form-question">A little more context.</div>
              <div className="form-field-label">Annual revenue</div>
              <div className="form-chips">
                {REVENUE_OPTIONS.map(o => (
                  <button key={o} className={`form-chip${revenue === o ? ' selected' : ''}`} onClick={() => setRevenue(o)}>{o}</button>
                ))}
              </div>
              <div className="form-field-label">Accounting system</div>
              <div className="form-chips">
                {SYSTEM_OPTIONS.map(o => (
                  <button key={o} className={`form-chip${system === o ? ' selected' : ''}`} onClick={() => setSystem(o)}>{o}</button>
                ))}
              </div>
              <div className="form-actions">
                <button className="btn-back" onClick={() => goBack(3)}>← Back</button>
                <button className="btn-next" onClick={() => goNext(3)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="form-step active">
              <div className="form-step-label">Step 4 of 5</div>
              <div className="form-question">What are you looking for?</div>
              <div className="form-chips">
                {SERVICE_OPTIONS.map(o => (
                  <button key={o} className={`form-chip${services.includes(o) ? ' selected' : ''}`} onClick={() => toggleService(o)}>{o}</button>
                ))}
              </div>
              <div className="form-actions">
                <button className="btn-back" onClick={() => goBack(4)}>← Back</button>
                <button className="btn-next" onClick={() => goNext(4)}>Continue →</button>
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="form-step active">
              <div className="form-step-label">Step 5 of 5</div>
              <div className="form-question">Anything else we should know?</div>
              <textarea
                className="form-input"
                placeholder="Share any context about your business, current challenges, or specific questions."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <div className="form-actions">
                <button className="btn-back" onClick={() => goBack(5)}>← Back</button>
                <button 
                  className="btn-next" 
                  onClick={submit} 
                  disabled={isSubmitting}
                  style={{ background: 'var(--sage-deep)', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Let\'s Connect ✓'}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}