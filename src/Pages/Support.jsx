import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

const Support = () => {
  const heroBg = {
    backgroundImage: "url('/img/support1.jpeg')",
  }

  const topics = [
    'Add a Vehicle',
    'Supercharging Credits',
    'Leasing',
    'IRA Clean Vehicle Report',
    'Cost of Solar',
    'Troubleshoot Solar',
  ]

  const [activeTab, setActiveTab] = useState('Vehicles')

  return (
    <div className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <header className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center" style={heroBg} />
        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        {/* Left overlay links: Shop, Account, Menu (overlay on hero) */}
        <div className="absolute top-20 md:top-24 left-6 md:left-8 z-20 text-white">
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="text-sm md:text-base font-semibold px-3 py-1 rounded-md hover:bg-white/20 backdrop-blur-sm transition">Shop</a>
            <a href="#" className="text-sm md:text-base font-semibold px-3 py-1 rounded-md hover:bg-white/20 backdrop-blur-sm transition">Account</a>
            <a href="#" className="text-sm md:text-base font-semibold px-3 py-1 rounded-md hover:bg-white/20 backdrop-blur-sm transition">Menu</a>
          </div>
        </div>

        {/* Centered search */}
        <section className="relative z-10 h-full w-full flex items-center justify-center">
          <div className="w-full max-w-3xl px-6 md:px-0 animate-fadein">
            <div className="flex items-center w-full bg-white/95 backdrop-blur rounded-xl shadow-md border border-black/5 px-4 md:px-5 py-3 md:py-4">
              {/* Magnifying glass icon (inline SVG to avoid deps) */}
              <svg className="w-5 h-5 text-gray-500 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search Support"
                className="w-full bg-transparent placeholder-gray-500 text-gray-900 outline-none text-sm md:text-base"
              />
            </div>
          </div>
        </section>
      </header>

      {/* Trending Topics */}
      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-10 md:mb-12">
            Trending Topics
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {topics.map((t) => (
              <a key={t} href="#" className="text-base md:text-lg text-black font-medium hover:underline underline-offset-4 decoration-2 transition-all">
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      
      {/* Category Tabs: Vehicles / Energy */}
      <section className="bg-white w-full">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-14">
          {/* Tabs with container underline */}
          <div className="relative mb-8 md:mb-10">
            <div className="grid grid-cols-2 items-end text-center">
              {['Vehicles','Energy'].map((tab) => (
                <div key={tab} className="flex justify-center">
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-lg md:text-xl font-semibold tracking-wide transition-colors ${
                      activeTab === tab ? 'text-[#171A20]' : 'text-gray-500 hover:text-gray-700'
                    }`}
                    aria-pressed={activeTab === tab}
                  >
                    {tab}
                  </button>
                </div>
              ))}
            </div>
            {/* full underline and centered active bar */}
            <div className="mt-1">
              <div className="relative h-px w-full bg-gray-200">
                <span
                  className={`absolute -top-[1px] left-0 h-[2px] w-1/2 bg-black transition-transform duration-300 ${
                    activeTab === 'Vehicles' ? 'translate-x-0' : 'translate-x-full'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Content */}
            <div className="mt-4">
            {/* Vehicles */}
            <div className={`${activeTab === 'Vehicles' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'} transition-opacity duration-300 w-full`}> 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-[#171A20] text-left">
                {/* Column 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Features and Charging</h3>
                  <ul className="space-y-4 text-base">
                    {['FSD (Supervised)','Software Updates','Upgrades','Supercharging','Home Charging','Security Features'].map(i => (
                      <li key={i}><a href="#" className="font-semibold hover:underline hover:text-blue-600">{i}</a></li>
                    ))}
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Service and Collision Repair</h3>
                  <ul className="space-y-4 text-base">
                    {[
                      'Do It Yourself Guides',
                      'Schedule a Service Visit',
                      'Find a Collision Center',
                      'Roadside Assistance',
                      'Vehicle Warranty',
                      'Tire Care and Repair',
                      'Service Portal',
                      'Vehicle Protection Plans',
                    ].map(i => (
                      <li key={i}><a href="#" className="font-semibold hover:underline hover:text-blue-600">{i}</a></li>
                    ))}
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Tesla Account</h3>
                  <ul className="space-y-4 text-base">
                    {['Add a Vehicle','Account Support','Tesla App','Refer and Earn','Financing & Leasing'].map(i => (
                      <li key={i}><a href="#" className="font-semibold hover:underline hover:text-blue-600">{i}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Energy */}
            <div className={`${activeTab === 'Energy' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'} transition-opacity duration-300 w-full`}> 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-[#171A20] text-left">
                {/* Powerwall */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Powerwall</h3>
                  <ul className="space-y-4 text-base">
                    {[
                      'How Powerwall Works',
                      'System Design',
                      'Prepare for Installation',
                      'Tesla App for Energy',
                      'Get Help and Schedule Service',
                      'Documents',
                    ].map(i => (
                      <li key={i}><a href="#" className="font-semibold hover:underline hover:text-blue-600">{i}</a></li>
                    ))}
                  </ul>
                  <a href="/learn" className="mt-6 inline-block underline underline-offset-4 text-base font-semibold hover:text-blue-600">Learn More</a>
                </div>
                {/* Solar Roof */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Solar Roof</h3>
                  <ul className="space-y-4 text-base">
                    {[
                      'Why Solar Roof',
                      'Installation Overview',
                      'Installation Process',
                      'Troubleshooting Your System',
                      'Frequently Asked Questions',
                      'Monitoring',
                    ].map(i => (
                      <li key={i}><a href="#" className="font-semibold hover:underline hover:text-blue-600">{i}</a></li>
                    ))}
                  </ul>
                  <a href="/learn" className="mt-6 inline-block underline underline-offset-4 text-base font-semibold hover:text-blue-600">Learn More</a>
                </div>
                {/* Solar Panels */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Solar Panels</h3>
                  <ul className="space-y-4 text-base">
                    {[
                      'Why Tesla Solar',
                      'Solar Panel Sizing and Design',
                      'Turn On Your System',
                      'Billing',
                      'Troubleshooting Your System',
                      'Transferring Ownership of Your Solar System',
                    ].map(i => (
                      <li key={i}><a href="#" className="font-semibold hover:underline hover:text-blue-600">{i}</a></li>
                    ))}
                  </ul>
                  <a href="/learn" className="mt-6 inline-block underline underline-offset-4 text-base font-semibold hover:text-blue-600">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Guides / Getting Started */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-20 space-y-24">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <img
              src="/img/support2.jpeg"
              alt="Support visuals"
              className="w-full rounded-lg object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#171A20] mb-4">Video Guides</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Explore interactive videos designed to give you a more in-depth look at your vehicle and its features.
              </p>
              <a href="#" className="font-semibold underline underline-offset-4 hover:text-blue-600">Explore Interactive Videos</a>
              <p className="text-gray-600 leading-relaxed mt-6 mb-2">
                Watch the Meet Your Tesla video series to learn the fundamentals of your Tesla vehicle.
              </p>
              <a href="#" className="font-semibold underline underline-offset-4 hover:text-blue-600">Watch Series</a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#171A20] mb-3">Getting Started</h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
                Learn about your Tesla ownership experience – including designing and taking delivery of your vehicle.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Ordering a New Vehicle',
                  'Ordering a Used Vehicle',
                  'Prepare for Delivery Day',
                  'Taking Delivery',
                  'After Taking Delivery',
                  'Find Us',
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="font-semibold hover:text-blue-600 underline underline-offset-4 md:no-underline md:hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/img/support3.jpeg"
              alt="Support info"
              className="order-1 md:order-2 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Page-only Support Footer (not global) */}
      <section className="w-full">
        {/* Get Personalized Support */}
        <div className="w-full bg-[#f5f5f5]">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#171A20]">Get Personalized Support</h2>
            <p className="mt-4 text-sm md:text-base text-[#5C5E62] leading-relaxed">
              Discover how to get the help you need. Tesla Assist in the Tesla app offers personalized support for your
              vehicle and energy products. Alternatively, sign in and use our web form to ask about a variety of topics.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black text-[#171A20] bg-white hover:bg-gray-100 transition" type="button">
                Explore Contact Options
              </button>
            </div>
          </div>
        </div>

        {/* Dark footer block for Support page only */}
        <footer className="w-full bg-[#1E1E1E] text-gray-300">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Left: location text */}
              <div className="order-2 lg:order-1">
                <p className="text-sm md:text-base text-[#d1d5db]">Your closest Store and Service Center is Dubai Sheikh Zayed Road</p>
              </div>

              {/* Center: Map */}
              <div className="order-1 lg:order-2">
                <h3 className="text-sm text-gray-400 mb-3">Almaty Supercharger</h3>
                <div className="w-full h-56 bg-[#2A2A2A] rounded-md overflow-hidden">
                  <iframe
                    title="map"
                    className="w-full h-full"
                    src="https://maps.google.com/maps?q=Almaty%20Supercharger&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </div>

              {/* Right: Links */}
              <div className="order-3 lg:order-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
                <ul className="space-y-2 text-[#d1d5db]">
                  {["Model S","Model 3","Model X","Model Y","Cybertruck","Energy","Roadster","Semi"].map((i) => (
                    <li key={i}><a href="#" className="hover:underline hover:opacity-90 transition">{i}</a></li>
                  ))}
                </ul>
                <ul className="space-y-2 text-[#d1d5db]">
                  {["Order a Tesla","Incentives","Test drive events","Accessories & apparel","Vehicle Recalls"].map((i) => (
                    <li key={i}><a href="#" className="hover:underline hover:opacity-90 transition">{i}</a></li>
                  ))}
                </ul>
                <ul className="space-y-2 text-[#d1d5db]">
                  {["About","Careers","Get Newsletter","Contact","Tesla Account","Investors","Suppliers"].map((i) => (
                    <li key={i}><a href="#" className="hover:underline hover:opacity-90 transition">{i}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#2a2a2a] mt-10 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-xs md:text-sm">
                <span className="tracking-tight">Tesla © 2025</span>
                <a href="#" className="hover:underline">Privacy &amp; Legal</a>
              </div>
            </div>
          </div>
        </footer>
      </section>

      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadein { animation: fadein .6s ease-out both; }
      `}</style>
    </div>
  )
}

export default Support


