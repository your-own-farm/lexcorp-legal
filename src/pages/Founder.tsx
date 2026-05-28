import { Link } from 'react-router-dom'

const milestones = [
  { year: '1995', title: 'Gold Medallist', desc: 'Graduated top of class, Government Law College Mumbai. Awarded the Bar Council Gold Medal.' },
  { year: '1997', title: 'Entered Chambers', desc: 'Joined Chambers of Justice S.K. Nair, gaining foundational corporate litigation experience.' },
  { year: '2001', title: 'Senior Associate', desc: 'Elevated to Senior Associate at Mehta & Associates, leading landmark SEBI compliance mandates.' },
  { year: '2004', title: 'Founded LexCorp', desc: 'Opened LexCorp Legal & Compliance with a vision for integrity-first advisory. Two lawyers, one room, one conviction.' },
  { year: '2009', title: 'National Expansion', desc: 'Expanded to New Delhi, establishing the first inter-state regulatory practice under the LexCorp banner.' },
  { year: '2015', title: 'Legal 500 Recognition', desc: 'Recognised in the Legal 500 India rankings for M&A and Corporate Governance.' },
  { year: '2020', title: 'Pro Bono Initiative', desc: 'Launched LexCorp\'s Pro Bono Programme, delivering 500+ hours of free counsel to startups and social enterprises annually.' },
  { year: '2024', title: '20th Anniversary', desc: 'Celebrated two decades of practice — 45 lawyers, ₹2,400 Cr+ in transactions advised, founding values intact.' },
]

const quotes = [
  '"The law is not a shield from accountability — it is a framework for principled action."',
  '"A lawyer\'s greatest asset is not their knowledge of statute, but their judgment in applying it."',
  '"Compliance is not a burden. It is the foundation of sustainable business."',
]

const credentials = [
  { label: 'Enrolled', value: '1995, Bar Council of Maharashtra' },
  { label: 'Education', value: 'GLC Mumbai (Gold Medal) · LLM, LSE London' },
  { label: 'Experience', value: '30+ years in active practice' },
  { label: 'Languages', value: 'English, Hindi, Marathi' },
  { label: 'Teaching', value: 'Faculty, NLSIU Bengaluru (Companies Act)' },
  { label: 'Published', value: 'Author, Corporate Governance in India (2019)' },
]

export default function Founder() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Our Founder</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Leadership</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Meet Our Founder
          </h1>
          <p style={{ marginTop: '0.9rem' }}>
            The vision, values, and journey of the person who built LexCorp from the ground up.
          </p>
        </div>
      </div>

      {/* ─── Profile ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>

            {/* Profile card */}
            <div className="anim anim-left">
              <div style={{
                background: 'linear-gradient(160deg, var(--navy) 0%, var(--navy-mid) 100%)',
                borderRadius: 'var(--radius-lg)', padding: '2.5rem 2rem',
                textAlign: 'center', marginBottom: '1.2rem',
                boxShadow: '0 8px 40px rgba(15,32,68,.25)',
              }}>
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'rgba(184,144,26,.12)',
                  border: '3px solid var(--gold)',
                  boxShadow: '0 0 0 6px rgba(184,144,26,.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontFamily: 'Georgia, serif', fontWeight: 800,
                  fontSize: '2.5rem', color: 'var(--gold)',
                }}>AS</div>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>Adv. Arjun Sharma</h2>
                <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 600, marginBottom: '1.8rem' }}>
                  Founder &amp; Managing Partner
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', textAlign: 'left' }}>
                  {credentials.map(d => (
                    <div key={d.label} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{
                        fontSize: '0.62rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'var(--gold)', minWidth: 72, paddingTop: '0.12rem', flexShrink: 0,
                      }}>{d.label}</span>
                      <span style={{ fontSize: '0.81rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.5 }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <a href="mailto:arjun.sharma@lexcorplegal.in" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.84rem' }}>
                  ✉ Direct Email
                </a>
                <Link to="/contact" className="btn-outline-navy" style={{ justifyContent: 'center', fontSize: '0.84rem' }}>
                  Request a Meeting
                </Link>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="section-label anim">Biography</span>
              <h2 className="section-title anim d-100" style={{ marginBottom: '0.25rem' }}>Arjun Sharma</h2>
              <div className="anim d-150" style={{
                fontFamily: 'Segoe UI, system-ui, sans-serif',
                fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.2rem',
              }}>
                Founder &amp; Managing Partner · 30 Years in Practice
              </div>
              <div className="gold-rule anim d-200" />

              <p className="anim d-200" style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Advocate Arjun Sharma is one of India's most respected corporate and compliance
                lawyers. With over three decades of active practice, he has advised governments,
                multinational corporations, and India's most ambitious startups — from their first
                shareholder agreement to billion-rupee cross-border transactions.
              </p>
              <p className="anim d-300" style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Arjun began his career in the chambers of Justice S.K. Nair, developing a rigorous
                foundation in corporate litigation before moving to Mehta &amp; Associates where he
                led several landmark SEBI enforcement matters. That experience taught him that most
                corporate crises begin as compliance oversights — a conviction that became the
                philosophical core of LexCorp.
              </p>
              <p className="anim d-400" style={{ lineHeight: 1.85, marginBottom: '2rem' }}>
                He holds a Bachelor of Laws from Government Law College Mumbai (Gold Medal) and
                an LLM from the London School of Economics. He is a faculty member at NLSIU
                Bengaluru, a published author on India's Companies Act, and an active advocate
                for access to legal aid through the National Legal Services Authority.
              </p>

              {/* Pull quotes */}
              <div className="anim d-400" style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {quotes.map((q, i) => (
                  <blockquote key={i} style={{
                    fontStyle: 'italic', fontSize: '1rem', color: 'var(--navy)',
                    lineHeight: 1.65, fontFamily: 'Georgia, serif',
                  }}>
                    {q}
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline ─────────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label anim">Career Journey</span>
            <h2 className="section-title anim d-100">Milestones Along the Way</h2>
            <div className="gold-rule anim d-200" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 72, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, var(--gold), rgba(184,144,26,.1))',
            }} />

            {milestones.map((m, i) => (
              <div key={i} className={`anim d-${(i % 4) * 100 + 100}`} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 64, textAlign: 'right',
                  fontFamily: 'Georgia, serif', fontSize: '0.9rem', fontWeight: 700,
                  color: 'var(--gold)', paddingTop: '0.2rem',
                }}>{m.year}</div>
                <div style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: 'var(--gold)', border: '3px solid var(--white)',
                  boxShadow: '0 0 0 3px var(--gold), 0 0 0 6px rgba(184,144,26,.2)',
                  flexShrink: 0, marginTop: '0.3rem',
                }} />
                <div style={{
                  background: 'var(--cream)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: '1.2rem 1.5rem', flex: 1,
                  transition: 'box-shadow .25s, border-color .25s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = 'var(--shadow-md)'; el.style.borderColor = 'rgba(184,144,26,.3)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = 'none'; el.style.borderColor = 'var(--border)' }}
                >
                  <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.3rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontSize: '0.9rem' }}>{m.title}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
