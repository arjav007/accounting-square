'use client'
// components/sections/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'
import { STATS } from '@/lib/data'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const TICKER_ITEMS = [
  { type: 'usp',      text: '✓ Day 5 Management Accounts' },
  { type: 'service',  text: 'Bookkeeping' },
  { type: 'usp',      text: '✓ 99% Client Retention' },
  { type: 'service',  text: 'Controller Services' },
  { type: 'usp',      text: '✓ Board Packs by Day 8' },
  { type: 'industry', text: 'SaaS' },
  { type: 'service',  text: 'Financial Reporting' },
  { type: 'usp',      text: '✓ 40+ Global Clients' },
  { type: 'industry', text: 'Real Estate' },
  { type: 'service',  text: 'Management Accounting' },
  { type: 'usp',      text: '✓ Same-day Response' },
  { type: 'industry', text: 'Private Equity' },
  { type: 'cred',     text: 'IFRS Compliant' },
  { type: 'service',  text: 'Payroll' },
  { type: 'usp',      text: '✓ 3 Time Zones' },
  { type: 'industry', text: 'Professional Services' },
]

// Duplicate for seamless loop
const TICKER = [...TICKER_ITEMS, ...TICKER_ITEMS]

export default function Hero() {
  const countersStarted = useRef(false)
  const globeCanvasRef = useRef<HTMLCanvasElement>(null)

  // STATS ANIMATION
  useEffect(() => {
    const band = document.getElementById('statsBand')
    if (!band) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted.current) {
        countersStarted.current = true
        document.querySelectorAll<HTMLElement>('.sbi-counter').forEach(el => {
          const isYear = el.classList.contains('sbi-year')
          const target = parseInt(el.dataset.target || '0', 10)

          if (isYear) {
            el.textContent = String(target)
            return
          }

          const duration = 1400
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            el.textContent = String(Math.round(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      }
    }, { threshold: 0.3 })

    observer.observe(band)
    return () => observer.disconnect()
  }, [])

  // 3D GLOBE INITIALIZATION
  useEffect(() => {
    if (!globeCanvasRef.current) return
    const canvas = globeCanvasRef.current
    const container = canvas.parentElement
    if (!container) return

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)

    // Use SRGB output so the photo texture's ocean blue renders at full vibrancy
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    camera.position.set(0, 0.10, 5.2)

    // ---------- Lighting — matched to reference HTML values ----------
    scene.add(new THREE.AmbientLight(0xffffff, 1.55))
    const sun = new THREE.DirectionalLight(0xffffff, 0.70)
    sun.position.set(3.2, 1.4, 3)
    scene.add(sun)
    const rim = new THREE.DirectionalLight(0xa8c8e8, 0.30)
    rim.position.set(-3, 0.5, -2)
    scene.add(rim)

    // ---------- Earth ----------
    const earthMat = new THREE.MeshPhongMaterial({
      color: 0x1a3a5c,
      shininess: 0,
      specular: new THREE.Color(0x000000)
    })
    const earthGeo = new THREE.SphereGeometry(1, 96, 96)
    const earth = new THREE.Mesh(earthGeo, earthMat)
    earth.rotation.z = 0.41
    scene.add(earth)

    // Procedural dotted-globe fallback
    function buildDotTexture() {
      const c = document.createElement('canvas')
      c.width = 2048; c.height = 1024
      const g = c.getContext('2d')
      if (!g) return null
      g.fillStyle = '#0e2a47'; g.fillRect(0, 0, c.width, c.height)
      g.fillStyle = '#7fb8e6'
      for (let lat = -88; lat <= 88; lat += 2.6) {
        const circ  = Math.cos(lat * Math.PI / 180)
        const count = Math.max(2, Math.floor(160 * circ))
        for (let i = 0; i < count; i++) {
          const lng = -180 + (i + 0.5) * 360 / count
          const x = (lng + 180) / 360 * c.width
          const y = (90 - lat) / 180 * c.height
          g.beginPath(); g.arc(x, y, 2.4, 0, Math.PI * 2); g.fill()
        }
      }
      const tex = new THREE.CanvasTexture(c)
      tex.anisotropy = 8
      return tex
    }

    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'
    let generatedTexture: THREE.CanvasTexture | null = null

    loader.load(
      'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
      function(tex) {
        tex.anisotropy = 8
        tex.colorSpace = THREE.SRGBColorSpace
        earthMat.map = tex
        earthMat.color.setHex(0xffffff)
        earthMat.needsUpdate = true
      },
      undefined,
      function() {
        generatedTexture = buildDotTexture()
        if (generatedTexture) {
          earthMat.map = generatedTexture
          earthMat.color.setHex(0xffffff)
          earthMat.needsUpdate = true
        }
      }
    )

    // ---------- Three crossed atom-orbits (brand green) ----------
    const ringColor = 0x30b843
    const orbitDefs = [
      {tilt:[1.30, 0, -0.20], radius:1.30, speed: 0.55, sats:[Math.PI*0.30]},
      {tilt:[1.30, 0, -1.25], radius:1.30, speed:-0.42, sats:[Math.PI*1.15]},
      {tilt:[1.30, 0,  0.85], radius:1.30, speed: 0.32, sats:[Math.PI*0.70]}
    ]

    const orbitGeometries: THREE.TorusGeometry[] = []
    const orbitMaterials: THREE.MeshBasicMaterial[] = []
    const satGeometries: THREE.SphereGeometry[] = []
    const satMaterials: THREE.MeshBasicMaterial[] = []

    const orbits = orbitDefs.map(function(def) {
      const group = new THREE.Group()
      group.rotation.order = 'ZYX'
      group.rotation.set(def.tilt[0], def.tilt[1], def.tilt[2])

      const ringGeo = new THREE.TorusGeometry(def.radius, 0.008, 12, 240)
      const ringMat = new THREE.MeshBasicMaterial({color: ringColor, transparent: true, opacity: 0.95})
      orbitGeometries.push(ringGeo)
      orbitMaterials.push(ringMat)

      const ring = new THREE.Mesh(ringGeo, ringMat)
      group.add(ring)

      const sats = def.sats.map(function(phase) {
        const satGeo = new THREE.SphereGeometry(0.07, 24, 24)
        const satMat = new THREE.MeshBasicMaterial({color: ringColor})
        satGeometries.push(satGeo)
        satMaterials.push(satMat)

        const sat = new THREE.Mesh(satGeo, satMat)
        group.add(sat)
        return {mesh: sat, phase: phase}
      })
      scene.add(group)
      return {group: group, sats: sats, radius: def.radius, speed: def.speed}
    })

    // ---------- Smooth, clip-free responsive sizing ----------
    let resizeObserver: ResizeObserver | null = null

    function resize() {
      const rect = container?.getBoundingClientRect()
      if (!rect) return
      const w = Math.max(1, rect.width), h = Math.max(1, rect.height)
      renderer.setSize(w, h, false)
      camera.aspect = w / h

      const Rext = 1.35
      const fov = camera.fov * Math.PI / 180
      const tanHalf = Math.tan(fov / 2)
      const frac = 0.90
      const zHeight = Rext / (frac * tanHalf)
      const zWidth  = (Rext * h) / (frac * w * tanHalf)
      let z = Math.max(zWidth, zHeight)
      z = Math.max(3.6, Math.min(11, z))

      camera.position.z = z
      camera.updateProjectionMatrix()
    }

    if (typeof window !== 'undefined' && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(resize)
      if (container) resizeObserver.observe(container)
    } else {
      window.addEventListener('resize', resize)
    }
    resize()

    // ---------- Animate ----------
    let t = 0
    let lastTime = performance.now()
    let reqId: number

    function tick(now: number) {
      const dt = Math.min(0.05, (now - lastTime) / 1000)
      lastTime = now
      t += dt
      earth.rotation.y += dt * 0.10

      orbits.forEach(function(o) {
        o.sats.forEach(function(s) {
          const a = s.phase + t * o.speed
          s.mesh.position.set(Math.cos(a) * o.radius, Math.sin(a) * o.radius, 0)
        })
      })

      renderer.render(scene, camera)
      reqId = requestAnimationFrame(tick)
    }
    reqId = requestAnimationFrame(tick)

    // ---------- Cleanup on Unmount ----------
    return () => {
      cancelAnimationFrame(reqId)
      if (resizeObserver) resizeObserver.disconnect()
      window.removeEventListener('resize', resize)

      earthGeo.dispose()
      earthMat.dispose()
      if (earthMat.map) earthMat.map.dispose()
      if (generatedTexture) generatedTexture.dispose()

      orbitGeometries.forEach(geo => geo.dispose())
      orbitMaterials.forEach(mat => mat.dispose())
      satGeometries.forEach(geo => geo.dispose())
      satMaterials.forEach(mat => mat.dispose())

      renderer.dispose()
    }
  }, [])

  return (
    <section className="hero" id="home" style={{ paddingTop: 'clamp(100px, 15vh, 140px)' }}>
      <div className="hero-bg-orb orb-1" />
      <div className="hero-bg-orb orb-2" />

      <div className="hero-top">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Precision Accounting · Global Reach
          </div>
          <h1 className="hero-headline">
            <span style={{ display: 'block' }}>Financial clarity</span>
            <span style={{ display: 'block' }}>for businesses</span>
            <span style={{ display: 'block' }}>building <em>across</em></span>
            <span style={{ display: 'block' }}>borders.</span>
          </h1>
          <p className="hero-sub">
            Management accounting, bookkeeping, and controller services for founder-led
            and PE-backed companies across 12+ countries. Day 5 management accounts.
            Every month. No exceptions.
          </p>

          {/* Buttons */}
          <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <Link href="/contact" className="btn-primary">
              Start a Conversation <span className="btn-arrow">→</span>
            </Link>
            <a
              href="#services"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Our Services <span className="btn-arrow">→</span>
            </a>
          </div>

          {/* Certificate/Ticker Bar */}
          <div className="hero-ticker-row" style={{ overflow: 'hidden', width: '100%', borderRadius: '8px', maxWidth: '650px' }}>
            <div className="htr-track">
              <div className="htr-inner">
                {TICKER.map((item, i) => (
                  <span key={i} className={`htr-item htr-${item.type}`}>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Three.js Canvas Container */}
        <div className="hero-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{ 
            position: 'relative', 
            width: 'min(620px, 100vw)', 
            height: 'min(620px, 60vh)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            transform: 'translateX(-6%)' /* 👇 This shifts the globe to the left */
          }}>
            <canvas
              ref={globeCanvasRef}
              id="heroGlobe"
              aria-label="Rotating 3D globe with orbital paths"
              role="img"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                outline: 'none',
                filter: 'drop-shadow(0 24px 56px rgba(20,54,91,.22)) drop-shadow(0 4px 12px rgba(20,54,91,.12))'
              }}
            />
          </div>
        </div>
      </div>
      {/* Stats Band */}
      <div className="stats-band" id="statsBand">
        <div className="stats-band-bg" />
        <div className="stats-band-inner">
          {STATS.map((s) => {
            const isYearValue = s.value > 2000
            return (
              <div className="stats-band-item" key={s.label}>
                <div className="sbi-eyebrow">{s.eyebrow}</div>
                <div className="sbi-num-row">
                  <div className="sbi-num">
                    <span
                      className={`sbi-counter ${isYearValue ? 'sbi-year' : ''}`}
                      data-target={s.value}
                    >
                      {isYearValue ? s.value : '0'}
                    </span>
                    {s.suffix && <sup>{s.suffix}</sup>}
                  </div>
                  <div className="sbi-label">{s.label}</div>
                </div>
                <div className="sbi-detail">{s.detail}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}