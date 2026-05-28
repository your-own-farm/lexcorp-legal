import { Link } from 'react-router-dom'

const stats = [
  { value: '20+', label: 'Years in Practice' },
  { value: '500+', label: 'Clients Served' },
  { value: '₹2,400 Cr+', label: 'Transactions Advised' },
  { value: '98%', label: 'Client Retention Rate' },
]

const services = [
  { icon: '🏢', title: 'Corporate Law', desc: 'Company formation, board governance, shareholder agreements, and full-lifecycle corporate advisory from seed to exit.' },
  { icon: '📋', title: 'Regulatory Compliance', desc: 'SEBI, RBI, MCA, and GST compliance frameworks designed for your sector — audited, documented, and built to hold under scrutiny.' },
  { icon: '🤝', title: 'Mergers & Acquisitions', desc: 'End-to-end M&A counsel — due diligence, SPA drafting, CCI approvals, and post-merger integration support.' },
  { icon: '💡', title: 'Intellectual Property', desc: 'Patents, trademarks, copyrights, and trade-secret protection for Indian and international markets.' },
  { icon: '🏛️', title: 'Dispute Resolution', desc: 'Litigation before High Courts and the Supreme Court; SIAC and ICC arbitration; NCLT matters — resolved efficiently and discreetly.' },
  { icon: '🌏', title: 'Cross-Border Advisory', desc: 'FDI structuring, FEMA compliance, and international transaction support across 30 partner jurisdictions.' },
]

const testimonials = [
  {
    quote: 'LexCorp guided our Series B through a maze of SEBI and FEMA requirements. They were faster, sharper, and more commercial than any firm we\'d worked with before. Closed in 11 weeks.',
    name: 'Priya Mehta',
    role: 'CEO, AgriVentures India Pvt. Ltd.',
    result: 'Series B · ₹140 Cr · Closed in 11 weeks',
  },
  {
    quote: 'The compliance programme LexCorp built for our NBFC has withstood two RBI inspections without a single adverse finding. The investment paid for itself within six months.',
    name: 'Rajan Pillai',
    role: 'CFO, Coastal Finance Ltd.',
    result: 'NBFC Compliance · 2 clean RBI inspections',
  },
  {
    quote: 'Outstanding M&A counsel during a complex cross-border acquisition. Every issue was anticipated, every timeline met. I would not use anyone else for work of this magnitude.',
    name: 'Deepa Nair',
    role: 'Managing Director, Sunrise Manufacturing Group',
    result: 'Cross-Border M&A · ₹380 Cr transaction',
  },
]

const newsItems = [
  {
    date: 'May 2026',
    tag: 'Publication',
    title: 'LexCorp Insight: Navigating SEBI\'s New Insider Trading Norms',
    desc: 'Our regulatory team breaks down the January 2026 SEBI amendments and what they mean for listed companies and their insiders.',
  },
  {
    date: 'March 2026',
    tag: 'Recognition',
    title: 'LexCorp Ranked in Legal 500 India 2026 — Tier 2, Compliance',
    desc: 'For the fourth consecutive year, LexCorp has been ranked in Legal 500 India in Regulatory & Compliance and Corporate/M&A.',
  },
  {
    date: 'January 2026',
    tag: 'Pro Bono',
    title: '100 Startups Supported Under LexCorp\'s 2025 Pro Bono Programme',
    desc: 'Over 600 hours of free legal counsel were delivered to registered startups and social enterprises across India in 2025.',
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
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23b8901a' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #b8901a, transparent)' }} />

        <div className="container" style={{ position: 'relative', padding: '5rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(184,144,26,.15)', border: '1px solid rgba(184,144,26,.3)',
                borderRadius: 4, padding: '0.35rem 0.9rem', marginBottom: '1.5rem',
              }}>
                <span style={{ color: '#d4a832', fontSize: '0.72rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Established 2004 · Mumbai, India
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 800,
                color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem',
              }}>
                Principled Counsel.<br />
                <span style={{ color: '#d4a832' }}>Decisive Action.</span>
              </h1>

              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,.78)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 500 }}>
                LexCorp Legal &amp; Compliance is a full-service law firm delivering trusted
                advisory to India's leading businesses — from day-to-day regulatory compliance
                to billion-rupee corporate transactions.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Link to="/contact" className="btn-primary">Schedule a Consultation →</Link>
                <Link to="/services" className="btn-outline">Our Practice Areas</Link>
              </div>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Mumbai HQ', val: '+91 22 6600 4400' },
                  { label: 'Email', val: 'contact@lexcorplegal.in' },
                ].map(c => (
                  <div key={c.label}>
                    <div style={{ fontSize: '0.65rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8901a', marginBottom: '0.2rem' }}>{c.label}</div>
                    <div style={{ color: 'rgba(255,255,255,.85)', fontSize: '0.9rem', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>{c.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '⚖️', title: 'Partner-Led Advisory', desc: 'Every mandate is handled by a named senior partner — not delegated to juniors.' },
                { icon: '🏛️', title: 'National Presence', desc: 'Three offices: Mumbai (HQ), New Delhi & Bengaluru — covering all major courts and regulators.' },
                { icon: '🔒', title: 'Absolute Confidentiality', desc: 'Attorney-client privilege applies from the very first conversation.' },
                { icon: '🌐', title: '30+ Jurisdictions', desc: 'Cross-border mandates supported via our global law firm network.' },
              ].map(c => (
                <div key={c.title} style={{
                  background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: 10, padding: '1rem 1.2rem',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{c.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.55 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ────────────────────────────────────────── */}
      <section style={{ background: '#b8901a', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center', padding: '0.5rem' }}>
                <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,.85)', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 500, marginTop: '0.3rem' }}>{s.label}</div>
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
              <h2 className="section-title">A Firm Built on Integrity, Expertise and Trust</h2>
              <div className="gold-rule" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                Founded in 2004 by Advocate Arjun Sharma, LexCorp has grown from a two-partner
                boutique practice in South Mumbai to a 45-lawyer national firm with offices in
                Mumbai, New Delhi, and Bengaluru.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '2rem' }}>
                We combine deep sectoral knowledge with a partner-led approach — every
                client receives senior attention from day one, transparent fees, and
                proactive updates rather than reactive fire-fighting.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-outline-navy">About the Firm</Link>
                <Link to="/founder" className="btn-outline-navy" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>Meet the Founder</Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '⚖️', title: 'Partner-Led Files', desc: 'No file is ever handled without a named senior partner taking responsibility.' },
                { icon: '🔒', title: 'Strict Confidentiality', desc: 'Attorney-client privilege is the non-negotiable foundation of every engagement.' },
                { icon: '🌐', title: 'National & Global Reach', desc: '3 offices across India and a 30-jurisdiction international partner network.' },
                { icon: '📊', title: 'Deep Sector Expertise', desc: 'Specialists in fintech, agri, manufacturing, pharma, and infrastructure.' },
              ].map(i => (
                <div key={i.title} className="card" style={{ padding: '1.4rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{i.icon}</div>
                  <h4 style={{ fontSize: '0.93rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--navy)' }}>{i.title}</h4>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{i.desc}</p>
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
              Nine practice areas, forty-five lawyers, one unwavering standard of excellence —
              from incorporation to your most complex cross-border transaction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {services.map(s => (
              <div key={s.title} className="card" style={{ padding: '1.8rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--navy)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-mid)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-primary">View All 9 Practice Areas →</Link>
          </div>
        </div>
      </section>

      {/* ─── Why LexCorp band ─────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Why LexCorp</span>
            <h2 className="section-title" style={{ color: '#fff' }}>The LexCorp Difference</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: '🕐', stat: '48 hrs', desc: 'Response guarantee on every client communication — no exceptions.' },
              { icon: '🤝', stat: '1 Partner', desc: 'Every client has one named relationship partner throughout the engagement.' },
              { icon: '📄', stat: 'Fixed Fee', desc: 'Transparent fixed-fee scopes available — no billing surprises, ever.' },
              { icon: '📈', stat: '20 Years', desc: 'Two decades of unbroken practice — through every regulatory cycle India has seen.' },
            ].map(w => (
              <div key={w.stat} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{w.icon}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontWeight: 800, fontSize: '1.6rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>{w.stat}</div>
                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">Results Our Clients Talk About</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.name} className="card" style={{ padding: '2rem', borderTop: '3px solid var(--gold)' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.78, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{
                  background: 'var(--gold-pale)', borderRadius: 6,
                  padding: '0.55rem 0.85rem', fontSize: '0.75rem',
                  fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700,
                  color: 'var(--gold)', marginBottom: '1.2rem',
                }}>
                  ✓ {t.result}
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', fontFamily: 'Segoe UI, system-ui, sans-serif', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'Segoe UI, system-ui, sans-serif', marginTop: '0.2rem' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── News / Insights ──────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Latest from LexCorp</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>News &amp; Insights</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {newsItems.map(n => (
              <div key={n.title} className="card" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.65rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: 'var(--gold-pale)', color: 'var(--gold)',
                    padding: '0.2rem 0.6rem', borderRadius: 4,
                  }}>{n.tag}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>{n.date}</span>
                </div>
                <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '0.75rem' }}>{n.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{n.desc}</p>
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
            Our partners are available for a confidential, no-obligation initial consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Book a Consultation →</Link>
            <a href="tel:+912266004400" className="btn-outline-navy">☎ +91 22 6600 4400</a>
          </div>
        </div>
      </section>
    </>
  )
}
