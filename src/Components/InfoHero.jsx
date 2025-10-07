import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const InfoHero = () => {
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Use a car image from your public/img folder for the header hero
  const bgStyle = { backgroundImage: "url('/img/model3.jpg')" }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={bgStyle}
        aria-hidden="true"
      />

      {/* Overlay gradient for readability near bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Transparent Navbar (absolute) */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <Link
              to="/"
              className="flex items-center text-white font-semibold tracking-[0.35em] text-sm hover:bg-white/20 hover:backdrop-blur-md px-2 py-1 rounded transition"
              aria-label="Tesla Home"
            >
              TESLA
            </Link>

            {/* Center: Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              {['Vehicles','Energy','Charging','Discover','Shop'].map((item) => (
                <button
                  key={item}
                  className="text-white/95 hover:text-white text-sm font-semibold px-3 py-1.5 rounded-md hover:bg-white/20 backdrop-blur-0 hover:backdrop-blur-md transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-2">
              {/* Help */}
              <Link
                to="/support"
                className="text-white hover:text-white px-2 py-1 rounded-md hover:bg-white/20 hover:backdrop-blur-md transition"
                aria-label="Help"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M9.25 9.5c.35-1.1 1.7-2 2.95-2 1.65 0 2.95 1 2.95 2.35 0 1.05-.9 1.85-1.95 2.15-.7.2-1.2.75-1.2 1.4v.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="16.5" r=".9" fill="currentColor"/>
                </svg>
              </Link>
              {/* Globe */}
              <button
                className="text-white hover:text-white px-2 py-1 rounded-md hover:bg-white/20 hover:backdrop-blur-md transition"
                aria-label="Language"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  <ellipse cx="12" cy="12" rx="5.5" ry="9" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </button>
              {/* Account */}
              <button
                className="text-white hover:text-white px-2 py-1 rounded-md hover:bg-white/20 hover:backdrop-blur-md transition"
                aria-label="Account"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.8 17.2c1.6-2 3.9-3.2 5.2-3.2s3.6 1.2 5.2 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Mobile Menu */}
              <button
                className="md:hidden text-white hover:text-white px-2 py-1 rounded-md hover:bg-white/20 hover:backdrop-blur-md transition"
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Sheet */}
          {mobileOpen && (
            <div className="md:hidden mt-2 rounded-lg bg-white/10 backdrop-blur-md p-2 space-y-1">
              {['Vehicles','Energy','Charging','Discover','Shop'].map((item) => (
                <button
                  key={item}
                  className="w-full text-left text-white/95 hover:text-white text-sm font-semibold px-3 py-2 rounded-md hover:bg-white/20 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Content (title/subtitle higher, metrics lower) */}
      <main className="relative z-10 h-full w-full">
        {/* Title + Subtitle near upper center */}
        <div
          className={[
            'absolute left-1/2 -translate-x-1/2 text-center text-white',
            'transition-all duration-700',
            'top-[18vh]',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
          ].join(' ')}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">Model 3</h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide underline decoration-white/80 decoration-2 underline-offset-8">2.99% APR Available</p>
        </div>

        {/* Metrics above the CTA buttons */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10 text-white text-center">
          <div className="min-w-[160px]">
            <div className="text-2xl sm:text-3xl font-bold">15 min</div>
            <div className="mt-1 text-xs sm:text-sm text-white/90 leading-snug">Recharge up to<br/>195 miles<span className="align-super text-[9px]">1</span></div>
          </div>
          <div className="min-w-[160px]">
            <div className="text-2xl sm:text-3xl font-bold">357 mi</div>
            <div className="mt-1 text-xs sm:text-sm text-white/90 leading-snug">Range (EPA est.)</div>
          </div>
          <div className="min-w-[160px]">
            <div className="text-2xl sm:text-3xl font-bold">AWD</div>
            <div className="mt-1 text-xs sm:text-sm text-white/90 leading-snug">Dual Motor</div>
          </div>
        </div>

        {/* CTA Buttons (bottom center) */}
        <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 sm:gap-6">
            {/* Order */}
            <Link
              to="/order"
              className="flex-1 sm:flex-none sm:min-w-[240px] text-center bg-[#3b82f6] hover:opacity-90 text-white font-semibold rounded-lg px-6 py-3 sm:px-10 sm:py-4 transition-all"
            >
              Order Now
            </Link>
            {/* Experience */}
            <Link
              to="/learn"
              className="flex-1 sm:flex-none sm:min-w-[240px] text-center bg-white hover:opacity-90 text-black font-semibold rounded-lg px-6 py-3 sm:px-10 sm:py-4 transition-all"
            >
              Experience Model 3
            </Link>
          </div>
        </div>
      </main>
    </section>
  )
}

// Distance/Range informational section (light background, right-aligned image on desktop)
const DistanceInfoSection = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/img/l1.jpg')" }}
        aria-hidden="true"
      />

      {/* Top and bottom dark gradients for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text content near upper center */}
      <div
        className={[
          'absolute left-1/2 -translate-x-1/2 text-center text-white',
          'transition-all duration-700',
          'top-[10vh] px-4',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        ].join(' ')}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
          Built for Distance
        </h2>
        <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-white/95">
          Go up to 357 miles (EPA est.) on a single charge with updated exterior styling
          optimized for maximum aerodynamics.
        </p>
      </div>
    </section>
  )
}

export default InfoHero
export { DistanceInfoSection }


