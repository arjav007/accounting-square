'use client'
// components/sections/Team.tsx
import Image from 'next/image'
import { useEffect } from 'react'
import { TEAM_MEMBERS } from '@/lib/data'

const LinkedInIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Team() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.team-card[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="team-section" id="team">
      <div className="team-section-bg" />

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end', marginBottom: '60px', position: 'relative', zIndex: 1 }}
        className="team-intro-header"
      >
        <div>
          <div className="section-label">The Team</div>
          <h2 className="section-title">Experts you can <em>build with</em></h2>
        </div>
        <p className="team-intro-sub">
          Two senior practitioners with deep international expertise, dedicated to financial clarity for every client.
        </p>
      </div>

      <div className="team-grid">
        {TEAM_MEMBERS.map((member) => (
          <div className="team-card" data-reveal key={member.id}>
            <div className="tc-inner">
              {/* Photo */}
              <div className="tc-left">
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(24,88,135,.12) 0%, transparent 70%)', zIndex: 1 }} />
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: member.photoPosition }}
                  sizes="(max-width: 600px) 100vw, 240px"
                />
              </div>

              {/* Content */}
              <div className="tc-right">
                <div className="tc-header">
                  <div>
                    <div className="tc-name">{member.name}</div>
                    <div className="tc-role-badge">
                      <span className="tc-role-dot" />
                      {member.role}
                    </div>
                  </div>
                  
                  {/* FIXED: Added noreferrer to the target="_blank" link */}
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="tc-linkedin">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </div>

                <div className="tc-quote">&ldquo;{member.quote}&rdquo;</div>
                <p className="tc-bio">{member.bio}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="tc-stat-pills">
                    {member.stats.map((s) => (
                      <span
                        key={s.label}
                        className="tc-stat-pill"
                        style={s.highlight ? { background: 'rgba(48,184,67,.08)', borderColor: 'rgba(48,184,67,.2)', color: 'rgba(144,220,158,.85)' } : undefined}
                      >
                        {s.value && <strong>{s.value}</strong>} {s.label}
                      </span>
                    ))}
                  </div>
                  <div className="tc-tags">
                    {member.tags.map((t) => (
                      <span key={t.label} className={`tc-tag${t.highlight ? ' tc-tag-hl' : ''}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}