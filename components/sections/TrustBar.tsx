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
      <div className="trust-bar-label">Serving in Countries</div>
      <div className="trust-bar-flags">
        <div className="trust-flags-track">
          {items.map((c, i) => (
            <div className="trust-flag-pill" key={i}>
              {/* FIXED: Added inline styles here to force a perfect circle with a subtle border */}
              <div 
                className="trust-flag-icon" 
                style={{ 
                  width: '26px', 
                  height: '26px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0,0,0,0.08)' // Helps flags with white edges stand out
                }}
              >
                {c.flag}
              </div>
              {c.name}
            </div>
          ))}
        </div>
      </div>
      <div className="trust-bar-cert">
        
      </div>
    </div>
  )
}

// Flag SVGs
// Added style={{ width: '100%', height: '100%', objectFit: 'cover' }} to all to ensure they fill the circle perfectly
function UKFlag() {
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="22" fill="#012169"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#fff" strokeWidth="3.5"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#C8102E" strokeWidth="2.2"/><path d="M11,0 V22 M0,11 H22" stroke="#fff" strokeWidth="5.5"/><path d="M11,0 V22 M0,11 H22" stroke="#C8102E" strokeWidth="3.3"/></svg>
}
function IndiaFlag() {
  // Added the blue Ashoka Chakra circle for accuracy
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="7.33" fill="#FF9933"/><rect y="7.33" width="22" height="7.34" fill="#fff"/><rect y="14.67" width="22" height="7.33" fill="#138808"/><circle cx="11" cy="11" r="2.5" fill="none" stroke="#000080" strokeWidth="1"/><circle cx="11" cy="11" r="1" fill="#000080"/></svg>
}
function UAEFlag() {
  // Added the missing vertical red stripe for accuracy
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="7.33" fill="#00732F"/><rect y="7.33" width="22" height="7.34" fill="#fff"/><rect y="14.67" width="22" height="7.33" fill="#000"/><rect width="6" height="22" fill="#FF0000"/></svg>
}
function CanadaFlag() {
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="7.33" height="22" fill="#FF0000"/><rect x="7.33" width="7.34" height="22" fill="#fff"/><rect x="14.67" width="7.33" height="22" fill="#FF0000"/><circle cx="11" cy="11" r="3.5" fill="#FF0000"/></svg>
}
function SingaporeFlag() {
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="11" fill="#EF3340"/><rect y="11" width="22" height="11" fill="#fff"/></svg>
}
function AustraliaFlag() {
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="22" fill="#00008B"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#fff" strokeWidth="3.5"/><path d="M0,0 L22,22 M22,0 L0,22" stroke="#FF0000" strokeWidth="2.2"/><path d="M11,0 V22 M0,11 H22" stroke="#fff" strokeWidth="5.5"/><path d="M11,0 V22 M0,11 H22" stroke="#FF0000" strokeWidth="3.3"/></svg>
}
function USFlag() {
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="22" fill="#B22234"/><rect y="1.69" width="22" height="1.69" fill="#fff"/><rect y="5.08" width="22" height="1.69" fill="#fff"/><rect y="8.46" width="22" height="1.69" fill="#fff"/><rect y="11.85" width="22" height="1.69" fill="#fff"/><rect width="10" height="11.85" fill="#3C3B6E"/></svg>
}
function NZFlag() {
  return <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%' }}><rect width="22" height="11" fill="#00247D"/><rect y="11" width="22" height="11" fill="#CC0000"/></svg>
}

export default TrustBar