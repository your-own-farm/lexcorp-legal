import { Link } from 'react-router-dom'

const values = [
  { icon: '⚖️', title: 'Integrity First', desc: 'Every recommendation is grounded in ethics. We never advise a path we would not walk ourselves.' },
  { icon: '🎯', title: 'Precision', desc: 'Legal details matter enormously. Our work is precise, thorough, and backed by research before it reaches a client.' },
  { icon: '🤝', title: 'Partnership', desc: 'We treat clients as long-term partners, not transactions. Our deepest relationships span decades.' },
  { icon: '💡', title: 'Commercial Sense', desc: 'Good legal advice serves business objectives. We balance legal risk with commercial pragmatism.' },
  { icon: '🔒', title: 'Discretion', desc: 'Absolute confidentiality is non-negotiable. Every client matter is treated with the utmost privacy.' },
  { icon: '📈', title: 'Continuous Growth', desc: 'Regulatory landscapes evolve. Our team invests constantly in keeping ahead of every development.' },
]

const team = [
  { name: 'Arjun Sharma', role: 'Founder & Managing Partner', area: 'Corporate Law, M&A', exp: '30 yrs' },
  { name: 'Meera Krishnan', role: 'Senior Partner', area: 'Regulatory Compliance', exp: '22 yrs' },
  { name: 'Vikram Bose', role: 'Partner', area: 'Dispute Resolution', exp: '18 yrs' },
  { name: 'Tanvir Sheikh', role: 'Partner', area: 'Intellectual Property', exp: '15 yrs' },
  { name: 'Kavya Reddy', role: 'Associate Partner', area: 'Cross-Border Advisory', exp: '11 yrs' },
  { name: 'Rohan Joshi', role: 'Associate Partner', area: 'Banking & Finance', exp: '10 yrs' },
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
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            About LexCorp Legal &amp; Compliance
          </h1>
          <p style={{ marginTop: '0.9rem' }}>
            Two decades of trusted legal counsel, built on integrity, expertise,
            and an unwavering commitment to our clients.
          </p>
        </div>
      </div>

      {/* ─── Mission ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label anim">Our Mission</span>
              <h2 className="section-title anim d-100">Law in Service of Business, Always Ethically</h2>
              <div className="gold-rule anim d-200" />
              <p className="anim d-200" style={{ lineHeight: 1.82, marginBottom: '1.25rem' }}>
                LexCorp was founded on a simple belief: that exceptional legal counsel
                should be accessible, understandable, and commercially aligned.
                Too often, legal advisory is reactive and opaque. We built this firm
                to be the opposite.
              </p>
              <p className="anim d-300" style={{ lineHeight: 1.82, marginBottom: '1.25rem' }}>
                Our mission is to be the strategic legal partner that helps businesses
                navigate India's complex regulatory environment with confidence —
                anticipating risks before they become crises, and structuring
                transactions to hold up under the most demanding scrutiny.
              </p>
              <p className="anim d-400" style={{ lineHeight: 1.82 }}>
                From a two-partner practice in South Mumbai, we have grown to a
                45-lawyer firm with offices in Mumbai, Delhi, and Bengaluru —
                and an unbroken commitment to the values that defined us from day one.
              </p>
            </div>

            <div className="anim anim-right">
              <div style={{
                background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))',
                borderRadius: 'var(--radius-lg)', padding: '2.5rem',
              }}>
                <div style={{ fontSize: '0.68rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1.6rem' }}>
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
                  <div key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.1rem', alignItems: 'flex-start' }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'rgba(184,144,26,.2)', border: '1px solid var(--gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold)', fontSize: '0.65rem', flexShrink: 0, marginTop: '0.1rem',
                    }}>✓</span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.6 }}>{item}</span>
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
            <span className="section-label anim">Core Values</span>
            <h2 className="section-title anim d-100">What Guides Every Decision We Make</h2>
            <div className="gold-rule anim d-200" style={{ margin: '1rem auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={v.title} className={`card anim d-${(i % 3) * 100 + 100}`}>
                <div style={{
                  width: 50, height: 50, borderRadius: 12,
                  background: 'var(--gold-pale)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem',
                }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.72 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label anim">Our Team</span>
            <h2 className="section-title anim d-100">The Partners Behind LexCorp</h2>
            <div className="gold-rule anim d-200" style={{ margin: '1rem auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {team.map((m, i) => (
              <div key={m.name} className={`card anim d-${(i % 3) * 100 + 100}`} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{
                  width: 76, height: 76, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                  border: '3px solid var(--gold-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  fontFamily: 'Georgia, serif', fontWeight: 800,
                  fontSize: '1.4rem', color: 'var(--gold)',
                  transition: 'border-color .3s, transform .3s',
                }}>
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>{m.name}</h3>
                <div style={{ fontSize: '0.78rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.3rem' }}>{m.role}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>{m.area}</div>
                <div style={{
                  display: 'inline-block', fontSize: '0.7rem', fontFamily: 'Segoe UI, system-ui, sans-serif',
                  fontWeight: 700, background: 'var(--gold-pale)', color: 'var(--gold)',
                  padding: '0.2rem 0.6rem', borderRadius: 4,
                }}>{m.exp} experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold-pale)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container anim" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Work With Us</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Let's discuss how LexCorp can support your business goals.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  )
}
