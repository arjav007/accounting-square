'use client'
// components/Loader.tsx
import { useEffect, useState } from 'react'
import Image from 'next/image' // <-- Added Image import for your new logo

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="pageLoader" className={hidden ? 'hidden' : ''}>
      <div className="loader-logo" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Image 
          src="/Accsquare.svg" 
          alt="Accounting Square Logo" 
          width={200} // Slightly larger for the loading screen
          height={40} 
          priority 
        />
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <div className="loader-tag">Global Financial Excellence</div>
    </div>
  )
}