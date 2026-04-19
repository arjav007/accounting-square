// ============================================================
// components/sections/TrustBar.tsx
// ============================================================
'use client'

const COUNTRIES = [
  { name: 'United Kingdom', flag: <UKFlag /> },
  { name: 'India',          flag: <IndiaFlag /> },
  { name: 'UAE',            flag: <UAEFlag /> },
  { name: 'Canada',         flag: <CanadaFlag /> },
  { name: 'Singapore',      flag: <SingaporeFlag /> },
  { name: 'Australia',      flag: <AustraliaFlag /> },
  { name: 'United States',  flag: <USFlag /> },
  { name: 'New Zealand',    flag: <NZFlag /> },
]

export function TrustBar() {
  // Duplicate for seamless scroll
  const items = [...COUNTRIES, ...COUNTRIES]
  return (
    <div className="trust-bar">
      <div className="trust-bar-label">Trusted by businesses in</div>
      <div className="trust-bar-flags">
        <div className="trust-flags-track">
          {items.map((c, i) => (
            <div className="trust-flag-pill" key={i}>
              <div className="trust-flag-icon">{c.flag}</div>
              {c.name}
            </div>
          ))}
        </div>
      </div>
      <div className="trust-bar-cert">
        <div className="trust-cert-badge"><span>✓</span> ICAEW Member</div>
        <div className="trust-cert-badge"><span>✓</span> IFRS Compliant</div>
      </div>
    </div>
  )
}

// Flag SVGs
function UKFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="22" fill="#012169"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#fff" strokeWidth="3.5"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#C8102E" strokeWidth="2.2"/><path d="M11,0 V22 M0,11 H22" stroke="#fff" strokeWidth="5.5"/><path d="M11,0 V22 M0,11 H22" stroke="#C8102E" strokeWidth="3.3"/></svg>
}
function IndiaFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="7.33" fill="#FF9933"/><rect y="7.33" width="22" height="7.34" fill="#fff"/><rect y="14.67" width="22" height="7.33" fill="#138808"/></svg>
}
function UAEFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="7.33" fill="#00732F"/><rect y="7.33" width="22" height="7.34" fill="#fff"/><rect y="14.67" width="22" height="7.33" fill="#000"/></svg>
}
function CanadaFlag() {
  return <svg viewBox="0 0 22 22"><rect width="7.33" height="22" fill="#FF0000"/><rect x="7.33" width="7.34" height="22" fill="#fff"/><rect x="14.67" width="7.33" height="22" fill="#FF0000"/><circle cx="11" cy="11" r="3.5" fill="#FF0000"/></svg>
}
function SingaporeFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="11" fill="#EF3340"/><rect y="11" width="22" height="11" fill="#fff"/></svg>
}
function AustraliaFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="22" fill="#00008B"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#fff" strokeWidth="3.5"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#FF0000" strokeWidth="2.2"/><path d="M11,0 V22 M0,11 H22" stroke="#fff" strokeWidth="5.5"/><path d="M11,0 V22 M0,11 H22" stroke="#FF0000" strokeWidth="3.3"/></svg>
}
function USFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="22" fill="#B22234"/><rect y="1.69" width="22" height="1.69" fill="#fff"/><rect y="5.08" width="22" height="1.69" fill="#fff"/><rect y="8.46" width="22" height="1.69" fill="#fff"/><rect y="11.85" width="22" height="1.69" fill="#fff"/><rect width="10" height="11.85" fill="#3C3B6E"/></svg>
}
function NZFlag() {
  return <svg viewBox="0 0 22 22"><rect width="22" height="11" fill="#00247D"/><rect y="11" width="22" height="11" fill="#CC0000"/></svg>
}

export default TrustBar


// ============================================================
// NOTE: The remaining section files (Services, HowItWorks,
// Promise, Testimonials, FAQ, CTA, ServiceModals) follow
// the same pattern. Each is a 'use client' component that:
//  - Imports its data from @/lib/data
//  - Uses useEffect + IntersectionObserver for .revealed animations
//  - Uses the CSS classes defined in globals.css
//
// For brevity, the pattern for FAQ is shown below as a complete example.
// All others follow the identical structure.
// ============================================================
