import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

const offices = [
  {
    city: 'Mumbai',
    badge: 'Head Office',
    address: '14th Floor, Prestige Tower\nNariman Point, Mumbai — 400 021',
    phone: '+91 22 6600 4400',
    email: 'mumbai@lexcorplegal.in',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM IST',
  },
  {
    city: 'New Delhi',
    badge: 'Branch Office',
    address: '8th Floor, Statesman House\nConnaught Place, New Delhi — 110 001',
    phone: '+91 11 4600 2200',
    email: 'delhi@lexcorplegal.in',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM IST',
  },
  {
    city: 'Bengaluru',
    badge: 'Branch Office',
    address: '12th Floor, Concorde Tower\nUB City, Bengaluru — 560 001',
    phone: '+91 80 4600 8800',
    email: 'bangalore@lexcorplegal.in',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM IST',
  },
]

const enquiryTypes = [
  'Corporate Law',
  'Regulatory Compliance',
  'Mergers & Acquisitions',
  'Intellectual Property',
  'Dispute Resolution',
  'Cross-Border Advisory',
  'Banking & Finance',
  'Startup Advisory',
  'Agriculture & Land Law',
  'Other / General Enquiry',
]

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  type: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', company: '', type: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with real API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Contact Us</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Reach Us</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Get in Touch
          </h1>
          <p style={{ marginTop: '0.75rem' }}>
            Every enquiry is reviewed by a partner and responded to within 48 hours.
            All communications are strictly confidential.
          </p>
        </div>
      </div>

      {/* ─── Contact form + sidebar ───────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Form */}
            <div className="card" style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>Message Received</h3>
                  <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
                    Thank you for reaching out. A member of our team will respond within 48 business hours.
                    For urgent matters, please call our main line directly.
                  </p>
                  <button
                    className="btn-outline-navy"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', type: '', message: '' }) }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                    Send Us a Message
                  </h2>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    All fields marked * are required. Your information is kept strictly confidential.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          className="form-input" name="name" required
                          placeholder="Rahul Verma"
                          value={form.name} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          className="form-input" name="email" type="email" required
                          placeholder="rahul@company.in"
                          value={form.email} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          className="form-input" name="phone" type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Company / Organisation</label>
                        <input
                          className="form-input" name="company"
                          placeholder="Acme Pvt. Ltd."
                          value={form.company} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Area of Enquiry *</label>
                      <select
                        className="form-select" name="type" required
                        value={form.type} onChange={handleChange}
                      >
                        <option value="">— Select a practice area —</option>
                        {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message *</label>
                      <textarea
                        className="form-textarea" name="message" required
                        placeholder="Please describe your legal matter or question in brief. All details are kept confidential."
                        value={form.message} onChange={handleChange}
                      />
                    </div>

                    <div style={{
                      background: 'var(--gold-pale)', border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)', padding: '0.85rem 1rem',
                      fontSize: '0.8rem', color: 'var(--text-mid)',
                      display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                    }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>🔒</span>
                      <span>Your enquiry is protected by attorney-client privilege from the moment we receive it. We will never share your details.</span>
                    </div>

                    <button type="submit" className="btn-primary" disabled={loading} style={{ alignSelf: 'flex-start' }}>
                      {loading ? 'Sending…' : 'Send Enquiry →'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Response promise */}
              <div className="card" style={{ background: 'var(--navy)', border: 'none' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1rem' }}>Our Promise</div>
                {[
                  { icon: '⏱', text: '48-hour response guarantee on all enquiries' },
                  { icon: '🤝', text: 'Reviewed directly by a senior partner' },
                  { icon: '🔒', text: 'Attorney-client privilege from first contact' },
                  { icon: '🆓', text: 'Initial consultation at no charge' },
                ].map(p => (
                  <div key={p.text} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.9rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,.78)', lineHeight: 1.5 }}>{p.text}</span>
                  </div>
                ))}
              </div>

              {/* Direct contacts */}
              <div className="card">
                <div style={{ fontSize: '0.7rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Direct Lines</div>
                {[
                  { label: 'General Enquiries', value: '+91 22 6600 4400' },
                  { label: 'Email', value: 'contact@lexcorplegal.in' },
                  { label: 'Urgent Matters', value: '+91 98200 44001' },
                ].map(d => (
                  <div key={d.label} style={{ marginBottom: '0.9rem' }}>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{d.label}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--navy)' }}>{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Offices ──────────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Offices</span>
            <h2 className="section-title">Find Us Across India</h2>
            <div className="gold-rule" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {offices.map(o => (
              <div key={o.city} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>{o.city}</h3>
                  <span style={{
                    fontSize: '0.65rem', fontFamily: 'Segoe UI, system-ui, sans-serif', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: 'var(--gold-pale)', color: 'var(--gold)',
                    padding: '0.18rem 0.55rem', borderRadius: 4,
                  }}>{o.badge}</span>
                </div>
                {[
                  { icon: '📍', text: o.address },
                  { icon: '📞', text: o.phone },
                  { icon: '✉️', text: o.email },
                  { icon: '🕐', text: o.hours },
                ].map(d => (
                  <div key={d.icon} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, fontSize: '0.9rem', marginTop: '0.1rem' }}>{d.icon}</span>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{d.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
