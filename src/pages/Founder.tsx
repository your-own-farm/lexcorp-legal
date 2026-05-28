import { Link } from 'react-router-dom'

const milestones = [
  { year: '1995', text: 'Graduated top of class, Government Law College, Mumbai. Awarded the Bar Council Gold Medal.' },
  { year: '1997', text: 'Joined Chambers of Justice S.K. Nair, gaining foundational corporate litigation experience.' },
  { year: '2001', text: 'Elevated to Senior Associate at Mehta & Associates, leading SEBI compliance mandates.' },
  { year: '2004', text: 'Founded LexCorp Legal & Compliance with a vision for integrity-first legal advisory.' },
  { year: '2009', text: 'Expanded to New Delhi, establishing the first inter-state regulatory practice.' },
  { year: '2015', text: 'Recognized in the Legal 500 India rankings for M&A and Corporate Governance.' },
  { year: '2020', text: 'Launched the LexCorp Pro Bono Initiative, providing free counsel to 100+ startups annually.' },
  { year: '2024', text: 'Celebrated the firm\'s 20th anniversary, with 45 lawyers across three Indian cities.' },
]

const quotes = [
  '"The law is not a shield from accountability — it is a framework for principled action."',
  '"A lawyer\'s greatest asset is not their knowledge of statute, but their judgment in applying it."',
  '"Compliance is not a burden. It is the foundation of sustainable business."',
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
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Meet Our Founder
          </h1>
          <p style={{ marginTop: '0.75rem' }}>
            The vision, values, and journey of the person who built LexCorp from the ground up.
          </p>
        </div>
      </div>

      {/* ─── Founder profile ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>

            {/* Portrait card */}
            <div>
              <div style={{
                background: 'linear-gradient(160deg, var(--navy) 0%, var(--navy-light) 100%)',
                borderRadius: 'var(--radius-lg)', padding: '2.5rem 2rem',
                textAlign: 'center', marginBottom: '1.5rem',
              }}>
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'rgba(184,144,26,.2)',
                  border: '3px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontFamily: 'Georgia, serif', fontWeight: 800,
                  fontSize: '2.5rem', color: 'var(--gold)',
                }}>AS</div>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Adv. Arjun Sharma
                </h2>
                <div style={{ color: 'var(--gold-light)', fontSize: '0.82rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 600, marginBottom: '1.2rem' }}>
                  Founder &amp; Managing Partner
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: 'left' }}>
                  {[
                    { label: 'Enrolled', value: '1995, Bar Council of Maharashtra' },
                    { label: 'Education', value: 'GLC Mumbai · LLM (LSE, London)' },
                    { label: 'Experience', value: '30+ years in practice' },
                    { label: 'Languages', value: 'English, Hindi, Marathi' },
                  ].map(d => (
                    <div key={d.label} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', minWidth: 80, paddingTop: '0.1rem' }}>{d.label}</span>
                      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.5 }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="mailto:arjun.sharma@lexcorplegal.in" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.84rem' }}>
                  ✉ Direct Contact
                </a>
                <Link to="/contact" className="btn-outline-navy" style={{ justifyContent: 'center', fontSize: '0.84rem' }}>
                  Request a Meeting
                </Link>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="section-label">Biography</span>
              <h2 className="section-title" style={{ marginBottom: '0' }}>Arjun Sharma</h2>
              <div style={{
                display: 'inline-block', fontFamily: 'Segoe UI, system-ui, sans-serif',
                fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}>
                Founder &amp; Managing Partner · 30 Years in Practice
              </div>
              <div className="gold-rule" />

              <p style={{ lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: '1.2rem' }}>
                Advocate Arjun Sharma is one of India's most respected corporate and compliance lawyers.
                With over three decades of practice, he has advised governments, multinational
                corporations, and India's most ambitious startups — from their first shareholder
                agreement to billion-dollar cross-border transactions.
              </p>
              <p style={{ lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: '1.2rem' }}>
                Arjun began his career in the chambers of Justice S.K. Nair, developing a rigorous
                foundation in corporate litigation before moving to Mehta &amp; Associates where he
                led several landmark SEBI enforcement matters. The experience taught him that
                most corporate crises begin as compliance oversights — a conviction that became
                the philosophical core of LexCorp.
              </p>
              <p style={{ lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: '1.2rem' }}>
                He holds a Bachelor of Laws from Government Law College Mumbai, where he
                graduated first in his class and received the Bar Council Gold Medal. He
                subsequently completed an LLM at the London School of Economics with a
                specialisation in International Corporate Law.
              </p>
              <p style={{ lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: '2rem' }}>
                Outside of practice, Arjun is a faculty member at NLSIU Bengaluru,
                a published author on India's Companies Act, and an active advocate
                for access to legal aid through the National Legal Services Authority.
                He lives in Mumbai with his family.
              </p>

              {/* Quotes */}
              <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
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

      {/* ─── Career milestones ────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Career Journey</span>
            <h2 className="section-title">Milestones Along the Way</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            {/* vertical line */}
            <div style={{
              position: 'absolute', left: 64, top: 0, bottom: 0,
              width: 2, background: 'linear-gradient(180deg, var(--gold), transparent)',
            }} />

            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 64, textAlign: 'right',
                  fontFamily: 'Georgia, serif', fontSize: '0.9rem', fontWeight: 700,
                  color: 'var(--gold)', paddingTop: '0.2rem',
                }}>{m.year}</div>
                <div style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: 'var(--gold)', border: '3px solid var(--white)',
                  boxShadow: '0 0 0 2px var(--gold)',
                  flexShrink: 0, marginTop: '0.35rem',
                }} />
                <div style={{
                  background: 'var(--cream)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1rem 1.2rem', flex: 1,
                }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.65, margin: 0 }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
