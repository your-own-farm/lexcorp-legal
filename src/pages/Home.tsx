import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

/* ── Animated stat counter ─────────────────────────────────────────── */
function StatCounter({ prefix = '', end, suffix = '', label, duration = 1800 }: {
  prefix?: string; end: number; suffix?: string; label: string; duration?: number
}) {
  const [ref, visible] = useInView(0.3)
  const value = useCounter(end, duration, visible)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{ textAlign: 'center', padding: '0.5rem 1rem' }}>
      <div className="stat-num" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
        {prefix}{visible ? value.toLocaleString() : 0}{suffix}
      </div>
      <div style={{
        fontSize: '0.78rem', color: 'rgba(255,255,255,.8)',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontWeight: 600, marginTop: '0.4rem', letterSpacing: '0.04em',
      }}>{label}</div>
    </div>
  )
}

/* ── Testimonial carousel ──────────────────────────────────────────── */
const testimonials = [
  {
    quote: 'LexCorp guided our Series B through a maze of SEBI and FEMA requirements. They were faster, sharper, and more commercially minded than any firm we\'d worked with. Closed in 11 weeks.',
    name: 'Priya Mehta', role: 'CEO, AgriVentures India Pvt. Ltd.',
    result: 'Series B · ₹140 Cr · 11 weeks',
    initials: 'PM',
  },
  {
    quote: 'The compliance programme LexCorp built for our NBFC has withstood two RBI inspections without a single adverse finding. The ROI on their work was immediate and measurable.',
    name: 'Rajan Pillai', role: 'CFO, Coastal Finance Ltd.',
    result: 'NBFC Compliance · 2 clean RBI inspections',
    initials: 'RP',
  },
  {
    quote: 'Outstanding M&A counsel during a complex ₹380 Cr cross-border acquisition. Every issue was anticipated, every deadline met. I would not use anyone else for work of this magnitude.',
    name: 'Deepa Nair', role: 'MD, Sunrise Manufacturing Group',
    result: 'Cross-Border M&A · ₹380 Cr',
    initials: 'DN',
  },
  {
    quote: 'As a first-generation founder, I needed a law firm that spoke my language. LexCorp\'s startup practice did exactly that — from our ESOP structure to our pre-Series A term sheets.',
    name: 'Aryan Khanna', role: 'Founder & CEO, NexGen Agritech',
    result: 'Startup Advisory · ESOP + Series A prep',
    initials: 'AK',
  },
]

function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const advance = (dir: 1 | -1) => {
    setActive(i => (i + dir + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => advance(1), 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, active])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative' }}
    >
      {/* Cards */}
      <div className="carousel-wrap">
        <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {testimonials.map(t => (
            <div key={t.name} className="carousel-slide" style={{ padding: '0 1rem' }}>
              <div style={{
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: 'var(--radius-lg)', padding: '2.5rem',
                maxWidth: 760, margin: '0 auto',
              }}>
                <div style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--gold)', marginBottom: '1.2rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p style={{
                  fontSize: '1.05rem', color: 'rgba(255,255,255,.85)',
                  lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.8rem',
                }}>{t.quote}</p>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'rgba(184,144,26,.15)', border: '1px solid rgba(184,144,26,.3)',
                  borderRadius: 6, padding: '0.4rem 0.9rem', marginBottom: '1.5rem',
                  fontSize: '0.78rem', fontFamily: 'Segoe UI, system-ui, sans-serif',
                  fontWeight: 700, color: 'var(--gold-light)',
                }}>✓ {t.result}</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Georgia, serif', fontWeight: 800, color: '#fff', fontSize: '1rem',
                    flexShrink: 0,
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontFamily: 'Segoe UI, system-ui, sans-serif', fontSize: '0.92rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)', fontFamily: 'Segoe UI, system-ui, sans-serif', marginTop: '0.15rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      {(['prev', 'next'] as const).map(dir => (
        <button
          key={dir}
          onClick={() => advance(dir === 'next' ? 1 : -1)}
          style={{
            position: 'absolute', top: '50%',
            [dir === 'prev' ? 'left' : 'right']: '-1.5rem',
            transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)',
            color: '#fff', fontSize: '1.1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s, transform .2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(184,144,26,.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-50%) scale(1.1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,.1)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-50%)' }}
        >
          {dir === 'prev' ? '←' : '→'}
        </button>
      ))}

      {/* Dots */}
      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <button key={i} className={`carousel-dot${i === active ? ' active' : ''}`} onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  )
}

/* ── Page data ─────────────────────────────────────────────────────── */
const services = [
  { icon: '🏢', title: 'Corporate Law', desc: 'Company formation, board governance, shareholder agreements, and full-lifecycle advisory from seed to exit.' },
  { icon: '📋', title: 'Regulatory Compliance', desc: 'SEBI, RBI, MCA, and GST frameworks designed for your sector — audited, documented, built to hold.' },
  { icon: '🤝', title: 'Mergers & Acquisitions', desc: 'End-to-end M&A counsel — due diligence, SPA drafting, CCI filings, and post-merger integration.' },
  { icon: '💡', title: 'Intellectual Property', desc: 'Patents, trademarks, copyrights, and trade-secret protection for Indian and international markets.' },
  { icon: '🏛️', title: 'Dispute Resolution', desc: 'High Court, Supreme Court, NCLT litigation; SIAC and ICC arbitration — efficient, discreet resolution.' },
  { icon: '🌏', title: 'Cross-Border Advisory', desc: 'FDI structuring, FEMA compliance, and international transaction support across 30 jurisdictions.' },
]

const newsItems = [
  { date: 'May 2026', tag: 'Publication', title: 'LexCorp Insight: Navigating SEBI\'s New Insider Trading Norms', desc: 'Our regulatory team breaks down the January 2026 SEBI amendments and what they mean for listed companies and their insiders.' },
  { date: 'March 2026', tag: 'Recognition', title: 'LexCorp Ranked in Legal 500 India 2026 — Tier 2, Compliance', desc: 'For the fourth consecutive year, LexCorp has been ranked in Legal 500 India in Regulatory & Compliance and Corporate/M&A.' },
  { date: 'January 2026', tag: 'Pro Bono', title: '100 Startups Supported Under LexCorp\'s 2025 Pro Bono Programme', desc: 'Over 600 hours of free legal counsel were delivered to startups and social enterprises across India in 2025.' },
]

/* ── Floating hero decoration ──────────────────────────────────────── */
const decos = [
  { size: 80,  top: '12%', right: '8%',  anim: 'float 7s ease-in-out infinite',        delay: '0s',    opacity: 0.12, radius: '50%' },
  { size: 50,  top: '28%', right: '18%', anim: 'floatAlt 5s ease-in-out infinite',     delay: '1.2s',  opacity: 0.10, radius: '12px' },
  { size: 110, top: '55%', right: '5%',  anim: 'float 9s ease-in-out infinite',        delay: '0.6s',  opacity: 0.07, radius: '50%' },
  { size: 40,  top: '70%', right: '22%', anim: 'floatAlt 6s ease-in-out infinite',     delay: '2s',    opacity: 0.13, radius: '8px' },
  { size: 65,  top: '40%', right: '30%', anim: 'spinSlow 20s linear infinite',         delay: '0s',    opacity: 0.06, radius: '12px' },
]

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(-45deg, #0f2044, #1a3560, #0a1830, #1e3d72)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 14s ease infinite',
        display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)', position: 'relative', overflow: 'hidden',
      }}>
        {/* floating decorations */}
        {decos.map((d, i) => (
          <div key={i} style={{
            position: 'absolute', width: d.size, height: d.size,
            border: `1.5px solid rgba(184,144,26,${d.opacity})`,
            borderRadius: d.radius, top: d.top, right: d.right,
            animation: d.anim, animationDelay: d.delay,
            pointerEvents: 'none',
          }} />
        ))}
        {/* diagonal gold line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
          background: 'linear-gradient(180deg, var(--gold) 0%, rgba(184,144,26,.2) 60%, transparent 100%)',
        }} />

        <div className="container" style={{ position: 'relative', padding: '5rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '4rem', alignItems: 'center' }}>

            {/* left — text */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: 'rgba(184,144,26,.12)', border: '1px solid rgba(184,144,26,.28)',
                borderRadius: 4, padding: '0.35rem 0.9rem', marginBottom: '1.6rem',
                animation: 'fadeIn 0.8s ease both',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                <span style={{ color: 'var(--gold-light)', fontSize: '0.72rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Established 2004 · Mumbai, India
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.6rem, 4.8vw, 4rem)', fontWeight: 900,
                color: '#fff', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '1.6rem',
                animation: 'fadeUp 0.9s 0.2s ease both',
              }}>
                Principled Counsel.<br />
                <span className="text-shimmer">Decisive Action.</span>
              </h1>

              <p style={{
                fontSize: '1.08rem', color: 'rgba(255,255,255,.75)',
                lineHeight: 1.78, marginBottom: '2.5rem', maxWidth: 500,
                animation: 'fadeUp 0.9s 0.35s ease both',
              }}>
                LexCorp Legal &amp; Compliance is a full-service law firm delivering
                trusted advisory to India's leading businesses — from day-to-day
                regulatory compliance to billion-rupee corporate transactions.
              </p>

              <div style={{
                display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem',
                animation: 'fadeUp 0.9s 0.5s ease both',
              }}>
                <Link to="/contact" className="btn-primary" style={{ animation: 'goldPulse 2.5s 1.5s ease infinite' }}>
                  Schedule a Consultation →
                </Link>
                <Link to="/services" className="btn-outline">Explore Services</Link>
              </div>

              <div style={{
                display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
                animation: 'fadeUp 0.9s 0.65s ease both',
              }}>
                {[
                  { label: 'Mumbai HQ', val: '+91 22 6600 4400' },
                  { label: 'Email', val: 'contact@lexcorplegal.in' },
                ].map(c => (
                  <div key={c.label}>
                    <div style={{ fontSize: '0.62rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>{c.label}</div>
                    <div style={{ color: 'rgba(255,255,255,.85)', fontSize: '0.88rem', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>{c.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right — credential cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', animation: 'slideRight 0.9s 0.4s ease both' }}>
              {[
                { icon: '⚖️', title: 'Partner-Led Advisory', desc: 'Every mandate handled by a named senior partner — not delegated to juniors.' },
                { icon: '🏛️', title: 'National Presence', desc: 'Three offices: Mumbai (HQ), New Delhi & Bengaluru, covering all major courts.' },
                { icon: '🔒', title: 'Absolute Confidentiality', desc: 'Attorney-client privilege applies from the very first conversation.' },
                { icon: '🌐', title: '30+ Jurisdictions', desc: 'Cross-border mandates via our global law firm partner network.' },
              ].map((c, i) => (
                <div key={c.title} style={{
                  background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 10, padding: '1rem 1.25rem',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  transition: 'background .25s, border-color .25s, transform .25s',
                  animation: `fadeUp 0.7s ${0.5 + i * 0.1}s ease both`,
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = 'rgba(184,144,26,.1)'
                    el.style.borderColor = 'rgba(184,144,26,.3)'
                    el.style.transform = 'translateX(-4px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = 'rgba(255,255,255,.06)'
                    el.style.borderColor = 'rgba(255,255,255,.1)'
                    el.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{c.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.55 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          animation: 'fadeIn 1s 1.2s ease both',
        }}>
          <span style={{ fontSize: '0.65rem', fontFamily: 'Segoe UI, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(180deg, rgba(184,144,26,.8), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ─── Animated stats bar ───────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #b8901a 0%, #c9a028 50%, #b8901a 100%)',
        backgroundSize: '200% 100%',
        animation: 'gradientShift 6s ease infinite',
        padding: '3rem 0',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', alignItems: 'center' }}>
            <StatCounter end={20} suffix="+" label="Years in Practice" />
            <StatCounter end={500} suffix="+" label="Clients Served" duration={2200} />
            <StatCounter prefix="₹" end={2400} suffix=" Cr+" label="Transactions Advised" duration={2400} />
            <StatCounter end={98} suffix="%" label="Client Retention Rate" duration={1600} />
          </div>
        </div>
      </section>

      {/* ─── About snippet ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label anim">Who We Are</span>
              <h2 className="section-title anim d-100">Built on Integrity, Expertise and Trust</h2>
              <div className="gold-rule anim d-200" />
              <p className="anim d-200" style={{ lineHeight: 1.82, marginBottom: '1.25rem' }}>
                Founded in 2004 by Advocate Arjun Sharma, LexCorp has grown from a
                two-partner boutique practice in South Mumbai to a 45-lawyer national firm
                with offices in Mumbai, New Delhi, and Bengaluru.
              </p>
              <p className="anim d-300" style={{ lineHeight: 1.82, marginBottom: '2.2rem' }}>
                We combine deep sectoral knowledge with a partner-led approach — every
                client receives senior attention from day one, transparent fees, and
                proactive counsel rather than reactive fire-fighting.
              </p>
              <div className="anim d-400" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-outline-navy">About the Firm</Link>
                <Link to="/founder" className="btn-outline-navy" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>Meet Our Founder</Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '⚖️', title: 'Partner-Led Files', desc: 'No file is handled without a named senior partner taking direct responsibility.' },
                { icon: '🔒', title: 'Strict Confidentiality', desc: 'Attorney-client privilege is the non-negotiable foundation of every engagement.' },
                { icon: '🌐', title: 'National & Global Reach', desc: '3 offices across India and a 30-jurisdiction international partner network.' },
                { icon: '📊', title: 'Deep Sector Expertise', desc: 'Specialists in fintech, agri, manufacturing, pharma, and infrastructure.' },
              ].map((item, i) => (
                <div key={item.title} className={`card anim d-${(i + 1) * 100}`} style={{ padding: '1.4rem' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.7rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '0.93rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--navy)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{item.desc}</p>
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
            <span className="section-label anim">Practice Areas</span>
            <h2 className="section-title anim d-100">Full-Spectrum Legal Services</h2>
            <div className="gold-rule anim d-200" style={{ margin: '1rem auto 1.2rem' }} />
            <p className="section-sub anim d-200" style={{ margin: '0 auto' }}>
              Nine practice areas, forty-five lawyers, one standard — partner-level
              attention on every file, from incorporation to your most complex transaction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div key={s.title} className={`card anim d-${(i % 3) * 100 + 100}`} style={{ padding: '1.8rem' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'var(--gold-pale)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.1rem',
                  transition: 'background .25s, transform .25s',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.03rem', fontWeight: 700, marginBottom: '0.55rem', color: 'var(--navy)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-mid)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="anim" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-primary">View All 9 Practice Areas →</Link>
          </div>
        </div>
      </section>

      {/* ─── Why LexCorp ──────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(-45deg, #0f2044, #1a3560, #0c1e42, #1e3d72)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 16s ease infinite',
        padding: '6rem 0',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label anim" style={{ color: 'var(--gold-light)' }}>Why LexCorp</span>
            <h2 className="section-title anim d-100" style={{ color: '#fff' }}>The LexCorp Difference</h2>
            <div className="gold-rule anim d-200" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: '⏱', stat: '48 hrs', desc: 'Response guarantee on every client communication — no exceptions, no excuses.' },
              { icon: '🤝', stat: '1 Partner', desc: 'One named relationship partner per client for the life of the engagement.' },
              { icon: '📄', stat: 'Fixed Fee', desc: 'Transparent fixed-fee scopes available — no billing surprises, ever.' },
              { icon: '📈', stat: '20 Years', desc: 'Two decades of unbroken practice through every regulatory cycle India has seen.' },
            ].map((w, i) => (
              <div key={w.stat} className={`anim d-${i * 100 + 100}`} style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(184,144,26,.15)', border: '2px solid rgba(184,144,26,.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', margin: '0 auto 1rem',
                  transition: 'background .3s, transform .3s',
                }}>{w.icon}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontWeight: 800, fontSize: '1.7rem', color: 'var(--gold)', marginBottom: '0.6rem' }}>{w.stat}</div>
                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,.68)', lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonial carousel ─────────────────────────────── */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0f2044 0%, #1a3560 100%)',
      }}>
        <div className="container">
          <div className="anim" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Client Stories</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Results Our Clients Talk About</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>
          <div className="anim d-200">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ─── News & Insights ──────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label anim">Latest from LexCorp</span>
              <h2 className="section-title anim d-100" style={{ marginBottom: 0 }}>News &amp; Insights</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {newsItems.map((n, i) => (
              <div key={n.title} className={`card anim d-${i * 150 + 100}`} style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.64rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: 'var(--gold-pale)', color: 'var(--gold)',
                    padding: '0.22rem 0.65rem', borderRadius: 4,
                  }}>{n.tag}</span>
                  <span style={{ fontSize: '0.77rem', color: 'var(--text-muted)', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>{n.date}</span>
                </div>
                <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.42, marginBottom: '0.75rem' }}>{n.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.72 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold-pale)', padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="anim">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '1rem', color: 'var(--navy)' }}>
              Ready to Discuss Your Legal Needs?
            </h2>
            <p style={{ color: 'var(--text-mid)', marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 2.5rem' }}>
              Our partners are available for a confidential, no-obligation initial consultation.
              All communications are protected by attorney-client privilege.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Book a Consultation →
              </Link>
              <a href="tel:+912266004400" className="btn-outline-navy">
                ☎ +91 22 6600 4400
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
