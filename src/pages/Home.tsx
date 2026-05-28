import { Link } from 'react-router-dom'

const stats = [
  { value: '20+', label: 'Years in Practice' },
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Case Success Rate' },
  { value: '12', label: 'Practice Areas' },
]

const services = [
  { icon: '⚖️', title: 'Corporate Law', desc: 'Company formation, board governance, shareholder agreements, and full lifecycle corporate advisory.' },
  { icon: '📋', title: 'Regulatory Compliance', desc: 'SEBI, RBI, MCA, and GST compliance frameworks tailored to your sector and scale.' },
  { icon: '🤝', title: 'Mergers & Acquisitions', desc: 'Due diligence, deal structuring, regulatory approvals, and post-merger integration counsel.' },
  { icon: '💡', title: 'Intellectual Property', desc: 'Patent, trademark, copyright, and trade-secret protection strategies for Indian and global markets.' },
  { icon: '🏛️', title: 'Dispute Resolution', desc: 'Litigation, arbitration, and mediation — resolving disputes efficiently and confidentially.' },
  { icon: '🌏', title: 'Cross-Border Advisory', desc: 'FDI structuring, FEMA compliance, and international transaction support for global businesses.' },
]

const testimonials = [
  {
    quote: 'LexCorp guided our Series B through a labyrinth of regulatory hurdles. Their precision and speed were unmatched.',
    name: 'Priya Mehta',
    role: 'CEO, AgriTech Innovations Pvt. Ltd.',
  },
  {
    quote: 'The compliance framework they built has saved us from significant exposure. They think three steps ahead.',
    name: 'Rajan Pillai',
    role: 'CFO, Coastal Exports Ltd.',
  },
  {
    quote: 'Outstanding counsel during our acquisition. Every detail was handled with professionalism and discretion.',
    name: 'Deepa Nair',
    role: 'Managing Director, Sunrise Manufacturing',
  },
]

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2044 0%, #1a3560 55%, #244078 100%)',
        display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8901a' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }} />
        {/* gold accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 4,
          background: 'linear-gradient(180deg, var(--gold), transparent)',
        }} />

        <div className="container" style={{ position: 'relative', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: 660 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(184,144,26,.15)', border: '1px solid rgba(184,144,26,.3)',
              borderRadius: 4, padding: '0.35rem 0.9rem', marginBottom: '1.5rem',
            }}>
              <span style={{ color: 'var(--gold)', fontSize: '0.72rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Established 2004 · Mumbai, India
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800,
              color: '#fff', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.5rem',
            }}>
              Principled Counsel.<br />
              <span style={{ color: 'var(--gold-light)' }}>Decisive Action.</span>
            </h1>

            <p style={{
              fontSize: '1.1rem', color: 'rgba(255,255,255,.75)',
              lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 520,
            }}>
              LexCorp Legal &amp; Compliance is a full-service law firm delivering
              trusted advisory to India's leading businesses — from regulatory
              compliance to high-stakes corporate transactions.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link to="/services" className="btn-outline">Our Practice Areas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
          }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,.85)', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 500, marginTop: '0.3rem', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About snippet ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">A Firm Built on Integrity and Expertise</h2>
              <div className="gold-rule" />
              <p className="section-sub" style={{ marginBottom: '1.2rem' }}>
                Founded in 2004 by Advocate Arjun Sharma, LexCorp has grown from a boutique
                corporate practice into one of India's most respected compliance-first law firms.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '2rem' }}>
                We combine deep sectoral knowledge with a partner-led approach — every client
                engagement receives senior attention from day one. Our team of 45 lawyers
                operates across Mumbai, Delhi, and Bengaluru.
              </p>
              <Link to="/about" className="btn-outline-navy">Learn More About Us</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '⚖️', title: 'Partner-Led Advice', desc: 'Every file is handled by a senior partner, not delegated down.' },
                { icon: '🔒', title: 'Strict Confidentiality', desc: 'Attorney-client privilege is the foundation of every engagement.' },
                { icon: '🌐', title: 'National Reach', desc: '3 offices across India — Mumbai, Delhi, and Bengaluru.' },
                { icon: '📊', title: 'Industry Depth', desc: 'Specialists in fintech, agri, manufacturing, and infrastructure.' },
              ].map(i => (
                <div key={i.title} className="card" style={{ padding: '1.4rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{i.icon}</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--navy)' }}>{i.title}</h4>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Practice Areas</span>
            <h2 className="section-title">Full-Spectrum Legal Services</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 1.2rem' }} />
            <p className="section-sub" style={{ margin: '0 auto' }}>
              We counsel clients across every stage of their business lifecycle —
              from incorporation to exit, and every compliance challenge in between.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {services.map(s => (
              <div key={s.title} className="card" style={{ padding: '1.8rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--navy)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-primary">View All Practice Areas</Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Client Voices</span>
            <h2 className="section-title" style={{ color: '#fff' }}>What Our Clients Say</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 'var(--radius-lg)', padding: '2rem',
              }}>
                <div style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontFamily: 'Segoe UI, system-ui, sans-serif', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)', fontFamily: 'Segoe UI, system-ui, sans-serif', marginTop: '0.2rem' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA band ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold-pale)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1rem', color: 'var(--navy)' }}>
            Ready to Discuss Your Legal Needs?
          </h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Our partners are available for a confidential consultation. Reach out today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Book a Consultation</Link>
            <a href="tel:+912266004400" className="btn-outline-navy">Call +91 22 6600 4400</a>
          </div>
        </div>
      </section>
    </>
  )
}
