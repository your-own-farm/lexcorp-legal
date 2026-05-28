import { Link } from 'react-router-dom'

const practiceAreas = [
  {
    icon: '🏢',
    title: 'Corporate Law',
    short: 'End-to-end corporate lifecycle advisory.',
    detail: 'From company incorporation and shareholder agreements to board governance, director liability, and corporate restructuring. We are trusted counsel to boards and promoters across sectors.',
    points: ['Company formation & structuring', 'Shareholder & joint venture agreements', 'Board governance & director advisory', 'Corporate restructuring & insolvency', 'Companies Act compliance'],
  },
  {
    icon: '📋',
    title: 'Regulatory Compliance',
    short: 'Sector-specific compliance frameworks.',
    detail: 'Navigating India\'s complex regulatory environment — SEBI, RBI, MCA, GST, FSSAI, and sector-specific authorities. We design, implement, and audit compliance programmes that hold up under scrutiny.',
    points: ['SEBI listing and insider trading', 'RBI FEMA & forex compliance', 'GST advisory & litigation', 'MCA annual compliance calendars', 'Sector-specific licensing'],
  },
  {
    icon: '🤝',
    title: 'Mergers & Acquisitions',
    short: 'Transaction advisory from LOI to closing.',
    detail: 'LexCorp advises buyers, sellers, and targets on the full M&A lifecycle — legal due diligence, SPA and ancillary document drafting, CCI approvals, and post-merger integration.',
    points: ['Legal due diligence', 'Share purchase agreement drafting', 'Competition Commission of India filings', 'Post-merger integration counsel', 'Valuation and escrow structures'],
  },
  {
    icon: '💡',
    title: 'Intellectual Property',
    short: 'Protect what differentiates your business.',
    detail: 'Patents, trademarks, copyrights, trade secrets, and licensing strategies — domestically registered and internationally protected. We defend IP under infringement and prosecute violators.',
    points: ['Patent filing & prosecution', 'Trademark registration & enforcement', 'Copyright and content licensing', 'Trade secret protection', 'IP litigation and infringement defence'],
  },
  {
    icon: '🏛️',
    title: 'Dispute Resolution',
    short: 'Efficient resolution — in or out of court.',
    detail: 'Commercial litigation before High Courts, the Supreme Court, and NCLT. Domestic and international arbitration under SIAC, ICC, and the Arbitration & Conciliation Act. We resolve disputes at the lowest possible cost.',
    points: ['Commercial litigation', 'Domestic & international arbitration', 'NCLT/NCLAT matters', 'Mediation and conciliation', 'Enforcement of foreign awards'],
  },
  {
    icon: '🌏',
    title: 'Cross-Border Advisory',
    short: 'International transactions and FDI counsel.',
    detail: 'Structuring inbound and outbound foreign direct investment, FEMA compliance, transfer pricing guidance, and global transaction support. We partner with leading international firms across 30 jurisdictions.',
    points: ['FDI structuring & FIPB approvals', 'FEMA and overseas investment', 'Transfer pricing documentation', 'Cross-border M&A', 'International arbitration'],
  },
  {
    icon: '🏦',
    title: 'Banking & Finance',
    short: 'Lending, security, and financial regulation.',
    detail: 'Loan documentation, security creation and perfection, SARFAESI proceedings, and regulatory advisory for NBFCs, banks, and fintechs. We act for both lenders and borrowers.',
    points: ['Loan & security documentation', 'SARFAESI and debt recovery', 'NBFC licensing and compliance', 'Fintech regulatory advisory', 'Debt restructuring'],
  },
  {
    icon: '🌱',
    title: 'Startup & VC Advisory',
    short: 'From seed to IPO — legal support at every stage.',
    detail: 'Founder-friendly counsel at every stage of the startup journey. ESOP structuring, term sheet review, Series A–D rounds, and pre-IPO readiness — we understand what early-stage companies need.',
    points: ['Incorporation & founder agreements', 'ESOP design and implementation', 'Term sheet and investment round advisory', 'DPIIT startup recognition', 'Pre-IPO legal readiness'],
  },
  {
    icon: '🌾',
    title: 'Agriculture & Land Law',
    short: 'Agri-sector legal advisory across India.',
    detail: 'Land acquisition, agricultural tenancy, APMC regulation, agribusiness structuring, and contract farming agreements. Deep expertise in state-specific agrarian laws across all 28 states.',
    points: ['Land acquisition & title verification', 'Agricultural tenancy laws', 'Contract farming agreements', 'APMC licensing & compliance', 'Agri-fintech regulatory advisory'],
  },
]

const process = [
  { step: '01', title: 'Initial Consultation', desc: 'Confidential 60-minute consultation with a senior partner to understand your legal need.' },
  { step: '02', title: 'Scope & Proposal', desc: 'A clear written scope of work with transparent fee estimate — no ambiguity.' },
  { step: '03', title: 'Engagement', desc: 'Your dedicated partner and team are assigned and begin work immediately.' },
  { step: '04', title: 'Delivery & Review', desc: 'Thorough legal work delivered on time, with plain-English explanations.' },
  { step: '05', title: 'Ongoing Support', desc: 'Post-delivery monitoring and proactive regulatory updates as your matter evolves.' },
]

export default function Services() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Services</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Practice Areas</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Our Legal Services
          </h1>
          <p style={{ marginTop: '0.75rem' }}>
            Nine practice areas, forty-five lawyers, one unwavering standard of excellence.
          </p>
        </div>
      </div>

      {/* ─── Practice areas grid ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {practiceAreas.map(p => (
              <div key={p.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>{p.title}</h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--gold)', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 600, marginBottom: '0.75rem' }}>{p.short}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '1.2rem' }}>{p.detail}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {p.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Engagement Process</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 1rem' }} />
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Clear, structured, and always with you in the loop.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
            {process.map((p, i) => (
              <div key={p.step} style={{ textAlign: 'center', position: 'relative' }}>
                {i < process.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 20, left: '60%', right: '-40%',
                    height: 2, background: 'linear-gradient(90deg, var(--gold), var(--border))',
                    zIndex: 0,
                  }} />
                )}
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--navy)', color: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Georgia, serif', fontWeight: 800, fontSize: '0.95rem',
                  margin: '0 auto 1rem', position: 'relative', zIndex: 1,
                }}>{p.step}</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need Legal Counsel?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Speak directly with a partner. No junior associates, no wait — just expert advice.
          </p>
          <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
