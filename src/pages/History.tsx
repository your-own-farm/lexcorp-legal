import { Link } from 'react-router-dom'

const eras = [
  { era: 'The Founding Era', period: '2004 – 2008', accent: '#b8901a',
    events: [
      { year: '2004', title: 'LexCorp Founded', desc: 'Advocate Arjun Sharma opens LexCorp in a single-room office on Marine Drive with two lawyers and one conviction: integrity-first legal advisory.' },
      { year: '2005', title: 'First Major Mandate', desc: 'Retained as compliance counsel to a Mumbai-listed manufacturer navigating a complex SEBI enforcement matter. Won. The firm\'s reputation for regulatory work is born.' },
      { year: '2006', title: 'Meera Krishnan Joins', desc: 'The second partner brings FEMA and cross-border expertise. The firm grows to eight lawyers and relocates to Nariman Point.' },
      { year: '2007', title: 'First M&A Deal', desc: 'LexCorp advises on its first acquisition — a mid-market textiles deal. Closes without litigation, setting a template for future M&A work.' },
    ],
  },
  { era: 'Growth & Recognition', period: '2009 – 2014', accent: '#244078',
    events: [
      { year: '2009', title: 'Delhi Office Opened', desc: 'Second office in Connaught Place gives LexCorp a national footprint and direct access to regulatory bodies at the national capital.' },
      { year: '2010', title: '50 Clients Milestone', desc: 'Crosses 50 active client relationships. Launches the LexCorp Quarterly Compliance Review, now read by 3,000+ legal professionals.' },
      { year: '2012', title: 'Dispute Resolution Launched', desc: 'Vikram Bose joins as Partner heading a new Dispute Resolution practice. Within 18 months the firm appears in its first Supreme Court matter.' },
      { year: '2014', title: 'First Legal 500 Mention', desc: 'Mentioned in Legal 500 India for the first time, recognising growing stature in corporate compliance and M&A.' },
    ],
  },
  { era: 'Scaling Impact', period: '2015 – 2019', accent: '#1a3560',
    events: [
      { year: '2015', title: 'Legal 500 India Ranked', desc: 'Formally ranked in Legal 500 India in M&A and Corporate Governance — a watershed moment in national recognition.' },
      { year: '2016', title: 'IP Practice Launched', desc: 'Tanvir Sheikh joins as Partner leading a dedicated IP practice, responding to growing demand in the tech and pharma sectors.' },
      { year: '2017', title: 'Bengaluru Office', desc: 'Third office opens in UB City, Bengaluru — placing LexCorp at the heart of India\'s startup and technology ecosystem.' },
      { year: '2019', title: '200+ Clients, 35 Lawyers', desc: 'Serves over 200 active clients across 35 lawyers. Revenue crosses ₹15 crore for the first time. Chambers Asia-Pacific recommends the firm.' },
    ],
  },
  { era: 'Modern Era', period: '2020 – Present', accent: '#0f2044',
    events: [
      { year: '2020', title: 'Pro Bono Initiative', desc: 'Commits 500 hours annually to free legal counsel for registered startups and social enterprises. 100+ beneficiaries in year one.' },
      { year: '2021', title: 'Agri-Legal Practice', desc: 'Dedicated Agriculture & Land Law practice established — directly inspired by India\'s landmark farm legislation and the needs of agri-businesses.' },
      { year: '2022', title: 'Next Generation Partners', desc: 'Kavya Reddy and Rohan Joshi elevated to Associate Partner — the youngest in the firm\'s history, marking a commitment to next-gen leadership.' },
      { year: '2024', title: '20th Anniversary', desc: '45 lawyers. 500+ clients served. ₹2,400 Cr+ in transactions advised. The founding values remain unchanged.' },
    ],
  },
]

const awards = [
  { year: '2014', award: 'Legal 500 India — First mention, Corporate Compliance' },
  { year: '2015', award: 'Legal 500 India — Ranked, M&A and Corporate Governance' },
  { year: '2017', award: 'India Business Law Journal — Dispute Resolution Firm of the Year (Regional)' },
  { year: '2019', award: 'Chambers Asia-Pacific — Recommended Firm, Corporate/M&A' },
  { year: '2021', award: 'Asia Legal Awards — Rising Firm of the Year, India' },
  { year: '2023', award: 'Legal 500 India — Tier 2, Regulatory & Compliance' },
  { year: '2024', award: 'Economic Times Legal Awards — Compliance Firm of the Year (Finalist)' },
]

export default function History() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Our History</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Two Decades of Excellence</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Our History
          </h1>
          <p style={{ marginTop: '0.9rem' }}>
            From a single room on Marine Drive to a 45-lawyer national firm —
            twenty years in the making.
          </p>
        </div>
      </div>

      {/* ─── Era timeline ─────────────────────────────────────── */}
      {eras.map((era, ei) => (
        <section key={era.era} className="section" style={{ background: ei % 2 === 0 ? 'var(--cream)' : '#fff' }}>
          <div className="container">
            {/* Era badge */}
            <div className="anim" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{
                background: era.accent, borderRadius: 'var(--radius)',
                padding: '0.8rem 1.4rem', flexShrink: 0,
                boxShadow: `0 4px 20px ${era.accent}44`,
              }}>
                <div style={{ fontSize: '0.62rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: '0.15rem' }}>{era.period}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>{era.era}</div>
              </div>
              <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${era.accent}55, transparent)` }} />
            </div>

            {/* 2×2 event grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {era.events.map((ev, j) => (
                <div key={ev.year} className={`card anim d-${j % 2 === 0 ? 100 : 200}`} style={{ padding: '1.8rem' }}>
                  <div style={{
                    display: 'inline-block',
                    background: era.accent + '18', color: era.accent,
                    fontFamily: 'Georgia, serif', fontWeight: 800, fontSize: '0.92rem',
                    padding: '0.22rem 0.75rem', borderRadius: 4, marginBottom: '0.85rem',
                    border: `1px solid ${era.accent}30`,
                  }}>{ev.year}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{ev.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.78 }}>{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── Awards ───────────────────────────────────────────── */}
      <section className="section" style={{
        background: 'linear-gradient(-45deg, #0f2044, #1a3560, #0c1e42)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 14s ease infinite',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label anim" style={{ color: 'var(--gold-light)' }}>Recognition</span>
            <h2 className="section-title anim d-100" style={{ color: '#fff' }}>Awards &amp; Rankings</h2>
            <div className="gold-rule anim d-200" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {awards.map((a, i) => (
              <div key={a.year + a.award} className={`anim d-${i * 50 + 100}`} style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 'var(--radius)', padding: '1.1rem 1.5rem',
                transition: 'background .25s, border-color .25s, transform .25s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = 'rgba(184,144,26,.1)'; el.style.borderColor = 'rgba(184,144,26,.25)'; el.style.transform = 'translateX(6px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = 'rgba(255,255,255,.05)'; el.style.borderColor = 'rgba(255,255,255,.1)'; el.style.transform = 'translateX(0)' }}
              >
                <span style={{ fontFamily: 'Georgia, serif', fontWeight: 800, color: 'var(--gold)', minWidth: 44, fontSize: '0.95rem' }}>{a.year}</span>
                <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.12)' }} />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,.8)' }}>🏆 {a.award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold-pale)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container anim" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Be Part of the Next Chapter</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Join the hundreds of businesses that have trusted LexCorp for their most important legal moments.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  )
}
