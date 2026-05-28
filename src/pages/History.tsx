import { Link } from 'react-router-dom'

const eras = [
  {
    era: 'The Founding Era',
    period: '2004 – 2008',
    color: '#b8901a',
    events: [
      { year: '2004', title: 'LexCorp Founded', desc: 'Advocate Arjun Sharma opens LexCorp Legal & Compliance in a single-room office on Marine Drive, Mumbai, with two lawyers and a commitment to integrity-first practice.' },
      { year: '2005', title: 'First Major Mandate', desc: 'Retained as compliance counsel to a Mumbai-listed manufacturing firm, navigating a complex SEBI enforcement matter — and winning. The firm\'s reputation for regulatory work is born.' },
      { year: '2006', title: 'Team Expansion', desc: 'Meera Krishnan joins as the second partner, bringing expertise in FEMA and cross-border transactions. The firm grows to eight lawyers.' },
      { year: '2007', title: 'First M&A Deal', desc: 'LexCorp advises on its first merger — a mid-market textiles acquisition. The deal closes without litigation, setting a template for future M&A work.' },
    ],
  },
  {
    era: 'Growth & Recognition',
    period: '2009 – 2014',
    color: '#244078',
    events: [
      { year: '2009', title: 'Delhi Office Opened', desc: 'A second office in Connaught Place, New Delhi gives LexCorp a national footprint and access to regulatory bodies at the national capital.' },
      { year: '2010', title: '50 Clients Milestone', desc: 'The firm crosses 50 active client relationships — a milestone marked by the launch of the LexCorp Quarterly Compliance Review newsletter.' },
      { year: '2012', title: 'Vikram Bose Joins', desc: 'Senior litigator Vikram Bose joins as Partner, heading a new Dispute Resolution practice. Within 18 months the firm appears in its first Supreme Court matter.' },
      { year: '2014', title: 'First Legal 500 Mention', desc: 'LexCorp is mentioned in the Legal 500 India publication for the first time, recognising its growing stature in corporate compliance and M&A.' },
    ],
  },
  {
    era: 'Scaling Impact',
    period: '2015 – 2019',
    color: '#1a3560',
    events: [
      { year: '2015', title: 'Legal 500 India Ranked', desc: 'Formally ranked in Legal 500 India in M&A and Corporate Governance. A watershed moment in the firm\'s national recognition.' },
      { year: '2016', title: 'IP Practice Launched', desc: 'Tanvir Sheikh joins as Partner leading a dedicated Intellectual Property practice, responding to growing client demand in the tech and pharma sectors.' },
      { year: '2017', title: 'Bengaluru Office', desc: 'A third office opens in UB City, Bengaluru — placing LexCorp at the heart of India\'s startup and technology ecosystem.' },
      { year: '2019', title: '200+ Clients, 35 Lawyers', desc: 'The firm serves over 200 active clients and employs 35 lawyers across three offices. Revenue crosses ₹15 crore for the first time.' },
    ],
  },
  {
    era: 'Modern Era',
    period: '2020 – Present',
    color: '#0f2044',
    events: [
      { year: '2020', title: 'Pro Bono Initiative', desc: 'LexCorp launches its Pro Bono Initiative, committing 500 hours annually to free legal counsel for registered startups and social enterprises.' },
      { year: '2021', title: 'Agri-Legal Practice', desc: 'A dedicated Agriculture & Land Law practice is established — directly inspired by India\'s landmark farm legislation debates and the needs of agri-businesses.' },
      { year: '2022', title: 'Kavya Reddy & Rohan Joshi Elevated', desc: 'Two standout associates are elevated to Associate Partner — the youngest in the firm\'s history, signalling a commitment to building the next generation of leadership.' },
      { year: '2024', title: '20th Anniversary', desc: 'LexCorp marks two decades of practice with 45 lawyers, 500+ total clients served, and a renewed commitment to the founding values that built the firm.' },
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
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Our History
          </h1>
          <p style={{ marginTop: '0.75rem' }}>
            From a single room on Marine Drive to a 45-lawyer national firm — the LexCorp story.
          </p>
        </div>
      </div>

      {/* ─── Timeline by era ──────────────────────────────────── */}
      {eras.map((era, ei) => (
        <section
          key={era.era}
          className="section"
          style={{ background: ei % 2 === 0 ? 'var(--cream)' : '#fff' }}
        >
          <div className="container">
            {/* Era heading */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem',
            }}>
              <div style={{
                background: era.color, borderRadius: 'var(--radius)',
                padding: '0.75rem 1.2rem', flexShrink: 0,
              }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: '0.15rem' }}>{era.period}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>{era.era}</div>
              </div>
              <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${era.color}66, transparent)` }} />
            </div>

            {/* Events */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {era.events.map(ev => (
                <div key={ev.year} className="card" style={{ padding: '1.8rem' }}>
                  <div style={{
                    display: 'inline-block',
                    background: era.color + '18',
                    color: era.color,
                    fontFamily: 'Georgia, serif', fontWeight: 800,
                    fontSize: '0.9rem', padding: '0.2rem 0.7rem',
                    borderRadius: 4, marginBottom: '0.8rem',
                  }}>{ev.year}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{ev.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── Awards ───────────────────────────────────────────── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Recognition</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Awards &amp; Rankings</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {awards.map(a => (
              <div key={a.year + a.award} style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 'var(--radius)', padding: '1.1rem 1.5rem',
              }}>
                <span style={{ fontFamily: 'Georgia, serif', fontWeight: 800, color: 'var(--gold)', minWidth: 42 }}>{a.year}</span>
                <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.15)' }} />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,.8)' }}>🏆 {a.award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold-pale)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Be Part of the Next Chapter</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Join the hundreds of businesses that have trusted LexCorp to navigate their most important legal moments.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
