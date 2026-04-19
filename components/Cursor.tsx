'use client'
// components/Cursor.tsx
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let raf: number
    // Start off-screen so the cursor doesn't sit at 0,0 before the first mouse movement
    let tx = -100, ty = -100  
    let rx = -100, ry = -100  

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY
      dot.style.left  = tx + 'px'
      dot.style.top   = ty + 'px'
    }

    const animate = () => {
      rx += (tx - rx) * 0.12
      ry += (ty - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => document.body.classList.add('cursor-hover')
    const onLeave = () => document.body.classList.remove('cursor-hover')
    const onDown  = () => document.body.classList.add('cursor-active')
    const onUp    = () => document.body.classList.remove('cursor-active')

    // PERFORMANCE FIX: Event Delegation
    // Instead of attaching listeners to every element, we listen globally
    const selectors = 'a, button, [onclick], input, textarea, select, label'
    
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selectors)) onEnter()
    }
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selectors)) onLeave()
    }

    // Attach global listeners
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    raf = requestAnimationFrame(animate)

    return () => {
      // Clean up all listeners when component unmounts
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  id="cursorDot" />
      <div className="cursor-ring" ref={ringRef} id="cursorRing" />
    </>
  )
}