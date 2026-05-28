import { Link } from 'react-router-dom'

const values = [
  { icon: '⚖️', title: 'Integrity First', desc: 'Every recommendation we make is grounded in ethics. We never advise a path we would not walk ourselves.' },
  { icon: '🎯', title: 'Precision', desc: 'Legal details matter enormously. Our work is precise, thorough, and backed by research before it reaches a client.' },
  { icon: '🤝', title: 'Partnership', desc: 'We treat clients as long-term partners, not transactions. Our deepest relationships span decades.' },
  { icon: '💡', title: 'Commercial Sense', desc: 'Good legal advice serves business objectives. We balance legal risk with commercial pragmatism.' },
  { icon: '🔒', title: 'Discretion', desc: 'Absolute confidentiality is non-negotiable. Every client matter is treated with the utmost privacy.' },
  { icon: '📈', title: 'Continuous Growth', desc: 'Regulatory landscapes evolve. Our team invests constantly in keeping ahead of every development.' },
]

const team = [
  { name: 'Arjun Sharma', role: 'Founder & Managing Partner', area: 'Corporate Law, M&A' },
  { name: 'Meera Krishnan', role: 'Senior Partner', area: 'Regulatory Compliance' },
  { name: 'Vikram Bose', role: 'Partner', area: 'Dispute Resolution' },
  { name: 'Tanvir Sheikh', role: 'Partner', area: 'Intellectual Property' },
  { name: 'Kavya Reddy', role: 'Associate Partner', area: 'Cross-Border Advisory' },
  { name: 'Rohan Joshi', role: 'Associate Partner', area: 'Banking & Finance' },
]

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>About Us</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Who We Are</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            About LexCorp Legal &amp; Compliance
          </h1>
          <p style={{ marginTop: '0.75rem' }}>
            Two decades of trusted legal counsel, built on the principles of integrity,
            expertise, and unwavering commitment to our clients.
          </p>
        </div>
      </div>

      {/* ─── Mission ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Law in Service of Business, Always Ethically</h2>
              <div className="gold-rule" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                LexCorp was founded on a simple belief: that exceptional legal counsel should
                be accessible, understandable, and commercially aligned. Too often, legal
                advisory is reactive and opaque. We built this firm to be the opposite.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                Our mission is to be the strategic legal partner that helps businesses
                navigate India's complex regulatory environment with confidence — anticipating
                risks before they become crises, and structuring transactions to hold up
                under the most demanding scrutiny.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>
                From a two-partner practice in South Mumbai, we have grown to a 45-lawyer
                firm with offices in Mumbai, Delhi, and Bengaluru — and an unbroken
                commitment to the values that defined us from day one.
              </p>
            </div>

            <div>
              <div style={{
                background: 'var(--navy)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                color: '#fff',
              }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1.5rem' }}>
                  The LexCorp Commitment
                </div>
                {[
                  'Senior partner involvement on every file',
                  'Transparent fee structures — no billing surprises',
                  '48-hour response guarantee on all client communications',
                  'Dedicated relationship partner for each client',
                  'Proactive regulatory update briefings quarterly',
                  'Absolute confidentiality under all circumstances',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    <span style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Core Values</span>
            <h2 className="section-title">What Guides Every Decision We Make</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {values.map(v => (
              <div key={v.title} className="card">
                <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Team</span>
            <h2 className="section-title">The Partners Behind LexCorp</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {team.map(m => (
              <div key={m.name} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  fontFamily: 'Georgia, serif', fontWeight: 800,
                  fontSize: '1.4rem', color: 'var(--gold)',
                }}>
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{m.name}</h3>
                <div style={{ fontSize: '0.8rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.4rem' }}>{m.role}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold-pale)', padding: '4.5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Work With Us</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Let's discuss how LexCorp can support your business goals.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
