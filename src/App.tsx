import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Founder from './pages/Founder'
import Services from './pages/Services'
import History from './pages/History'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Global scroll-trigger animation observer — re-runs after each route change
function AnimationObserver() {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )
      document.querySelectorAll('.anim:not(.visible)').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 80)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <AnimationObserver />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/founder"  element={<Founder />} />
          <Route path="/services" element={<Services />} />
          <Route path="/history"  element={<History />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
