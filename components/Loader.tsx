'use client'
// components/Loader.tsx
import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="pageLoader" className={hidden ? 'hidden' : ''}>
      <div className="loader-logo">
        <div className="loader-mark">
          <LogoMark size={20} />
        </div>
        Accounting Square
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <div className="loader-tag">Global Financial Excellence</div>
    </div>
  )
}

export function LogoMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" width={size} height={size}>
      <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#F2F7FC" />
      <rect x="10" y="2" width="6" height="6" rx="1.5" fill="#F2F7FC" opacity=".5" />
      <rect x="2" y="10" width="6" height="6" rx="1.5" fill="#F2F7FC" opacity=".5" />
      <rect x="10" y="10" width="6" height="6" rx="1.5" fill="#F2F7FC" opacity=".3" />
    </svg>
  )
}
