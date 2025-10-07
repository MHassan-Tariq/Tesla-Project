import React, { useState } from 'react'
import InfoHero, { DistanceInfoSection } from '../Components/InfoHero'

const LearnPage = () => {
  const [activeFeature, setActiveFeature] = useState(1) // default to "Sublime Sound"
  const [chatOpen, setChatOpen] = useState(false)

  const features = [
    {
      title: 'Premium Materials',
      description:
        'Immerse yourself in softer, more sophisticated materials—executed with an elevated level of precision.',
    },
    {
      title: 'Sublime Sound',
      description:
        'Enjoy more immersive sound with an audio system designed by Tesla, with up to 17 speakers, dual subwoofers and dual amplifiers.',
    },
    {
      title: 'Rear Display',
      description:
        'Rear passengers have access to an 8" touchscreen with climate controls and entertainment.',
    },
    {
      title: 'Ventilated Seats',
      description:
        'Ventilate your front seats from your phone ahead of time or set them to adjust automatically with climate controls.',
    },
    {
      title: 'Wireless Charging',
      description:
        'Charge two phones at the same time and enjoy crystal-clear calls thanks to upgraded microphones.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* First section: Fullscreen hero */}
      <InfoHero />

      {/* Second section: Distance/Range informational block */}
      <DistanceInfoSection />

      {/* Third section: Product features (Upgraded Wheels, All-New Interior) */}
      <section className="bg-black text-white">
        {/* Upgraded Wheels */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/img/l2.jpg"
              alt="Upgraded Wheels"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
            {/* Pause icon overlay (visual match only) */}
            <button aria-label="Pause" className="absolute bottom-4 left-4 h-8 w-8 rounded bg-white/90 text-black grid place-items-center">
              <span className="block h-3 w-3 bg-black" style={{clipPath:'polygon(0 0, 35% 0, 35% 100%, 0 100%, 0 0, 65% 0, 65% 100%, 100% 100%, 100% 0, 65% 0)'}} />
            </button>
          </div>
          {/* Dots indicator */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">Upgraded Wheels</h3>
            <p className="mt-2 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-300">
              Enjoy new styling, increased range and less noise with upgraded tires and wheels.
            </p>
          </div>
        </div>

        {/* All-New Interior */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">All-New Interior</h3>
            <p className="mt-2 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-300">
              Settle into an all-new interior, featuring a wraparound styling that cocoons you inside. Customize ambient lighting to make it your own.
            </p>
          </div>
          <div className="relative mt-8 overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/img/l3.png"
              alt="All-New Interior"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
            <button aria-label="Pause" className="absolute bottom-4 left-4 h-8 w-8 rounded bg-white/90 text-black grid place-items-center">
              <span className="block h-3 w-3 bg-black" style={{clipPath:'polygon(0 0, 35% 0, 35% 100%, 0 100%, 0 0, 65% 0, 65% 100%, 100% 100%, 100% 0, 65% 0)'}} />
            </button>
          </div>
        </div>
      </section>
      

      {/* Fourth section: Feature grid + Quieter Cabin */}
      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Top image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/l4.jpg"
              alt="Interior top view"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Feature list (interactive) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {features.map((f, idx) => {
              const active = idx === activeFeature
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActiveFeature(idx)}
                  className={[
                    'text-left pb-4 transition-all duration-500',
                    active ? 'border-b-2 border-black' : 'border-b border-gray-300',
                  ].join(' ')}
                >
                  <h4
                    className={[
                      'text-[13px] md:text-sm',
                      active ? 'text-black font-semibold' : 'text-gray-700 font-medium hover:text-black',
                    ].join(' ')}
                  >
                    {f.title}
                  </h4>
                  <p
                    className={[
                      'mt-2 text-xs md:text-sm leading-5',
                      active ? 'text-gray-800' : 'text-gray-600',
                    ].join(' ')}
                  >
                    {f.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Quieter Cabin subsection */}
        <div className="max-w-6xl mx-auto px-6 pb-8 md:pb-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-black">A Quieter Cabin</h3>
            <p className="mt-2 max-w-3xl mx-auto text-sm md:text-base text-gray-600">
              Enjoy a whisper-quiet cabin, thanks to 360-degree acoustic glass. Take in the sky underneath an all-glass roof that lets in light while protecting you from harmful UV rays.
            </p>
      </div>
        </div>
      {/* Full-bleed image */}
        <div className="relative mt-2 overflow-hidden rounded-none shadow-none w-screen max-w-none ml-[calc(50%-50vw)]">
          <img
            src="/img/l5.jpg"
            alt="Quieter cabin glass roof"
            className="w-screen h-auto object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

    {/* Fifth section: Elegant Technology + Remote Access */}
    <section className="bg-white">
      <div className="w-full py-20 px-6 md:px-16 lg:px-28">
        {/* Elegant Technology */}
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/l6.jpg"
              alt="Center touchscreen"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mt-10">Elegant Technology</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4">
            Your favorite game, movie or song is just a few taps away. Use the center touchscreen to stream media, customize your vehicle, navigate to your destination and more.
          </p>
        </div>

        {/* Remote Access */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mt-20">Remote Access</h3>
          <p className="text-gray-600 text-center mt-2">Control everything from one do-it-all Tesla app.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              { title: 'Controls', desc: 'Remotely access and manage your vehicle.' },
              { title: 'Cabin Preconditioning', desc: 'Pre-heat or cool your cabin from anywhere.' },
              { title: 'Charging', desc: 'Plan your route with charging stops.' },
            ].map((item, i) => (
              <div key={item.title} className="text-center">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={["/img/l7.jpg", "/img/l8.jpg", "/img/l9.jpg"][i]}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
      </div>
    </section>

    {/* Sixth section: Modes + Charging + Demo Drive */}
    <section className="w-full bg-black py-20 md:py-28">
      {/* Choose Your Mode */}
      <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <img src="/img/l10.jpg" alt="Choose your mode" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 left-0 right-0 pt-12">
          <h3 className="text-white text-3xl md:text-4xl font-semibold text-center">Choose Your Mode</h3>
          <div className="flex justify-center space-x-2 text-gray-400 mt-4">
            <span className="text-xl">•</span>
            <span className="text-xl">•</span>
            <span className="text-xl">•</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <div className="text-white font-semibold text-lg">Dog Mode</div>
          <div className="text-gray-300 text-sm mt-1 max-w-sm">Keep your furry friends comfortable while you’re away from your vehicle.</div>
        </div>
      </div>

      {/* Convenient Charging */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-28">
        <h3 className="text-white text-3xl md:text-4xl font-semibold text-center mt-24">Convenient Charging</h3>
        <p className="text-gray-400 text-center mt-2">Fast, accessible, easy—anywhere with electricity</p>

        <img
          src="/img/l11.jpg"
          alt="Charging"
          className="rounded-2xl shadow-lg mx-auto mt-10 w-full md:w-4/5 object-cover"
          loading="lazy"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-300 mt-10 max-w-5xl mx-auto">
          <div>
            <div className="text-white/80 font-medium">At Home</div>
            <p className="text-gray-400 mt-2">Our most convenient and affordable way to charge.</p>
          </div>
          <div>
            <div className="text-white font-medium underline underline-offset-8">On the Road</div>
            <p className="text-white mt-2">Add up to 195 miles in just 15 minutes at one of 70,000+ global Superchargers.</p>
          </div>
          <div>
            <div className="text-white/80 font-medium">Where You Park</div>
            <p className="text-gray-400 mt-2">Plug in at your destination, whether it’s a hotel, park or somewhere else.</p>
          </div>
        </div>
      </div>

      {/* Demo Drive */}
      <div className="container mx-auto mt-24 max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-white text-3xl font-semibold mb-4">Demo Drive Model 3</h3>
            <p className="text-gray-400 mb-4">Enter an address to find Tesla showrooms near you:</p>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 transition">Next</button>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src="/img/l12.jpg" alt="Demo drive" className="rounded-2xl shadow-xl w-full object-cover" />
          </div>
      </div>
      </div>
    </section>

    {/* Seventh section: Safety + Autopilot Visualization */}
    <section className="w-full bg-black text-white py-20 md:py-28 px-6 md:px-16 lg:px-24">
      {/* Safety Image & Labels */}
      <div className="relative mx-auto w-full md:w-4/5 rounded-xl shadow-xl overflow-hidden">
        <img src="/img/l13.jpg" alt="Safety structure" className="w-full h-auto object-cover" />
        {/* Labels with pointer lines */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-medium text-white flex items-center gap-2">
          <span className="h-6 md:h-8 w-px bg-white/70" /> Rigid Structure
        </div>
        <div className="absolute top-[22%] left-[18%] text-[10px] md:text-xs font-medium text-white flex items-center gap-2">
          <span className="h-10 md:h-12 w-px bg-white/70" /> Impact Protection
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-medium text-white flex items-center gap-2">
          <span className="h-10 md:h-12 w-px bg-white/70" /> Very Low Rollover Risk
        </div>
      </div>

      {/* Engineered for Safety */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Engineered for Safety</h3>
        <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
          Model 3 benefits from the same features that make our other vehicles so safe: energy-absorbing side sills, a fortified battery pack mounted low in the vehicle to reduce rollover risk and a metal body structure that can withstand many times the car’s weight. Active safety features like automatic emergency braking come standard.
        </p>
        <button className="mt-6 border border-white text-white hover:bg-white hover:text-black transition font-medium px-6 py-2 rounded-md">Safety Overview</button>
      </div>

      {/* Autopilot Visualization */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-6 items-center gap-10 md:gap-16 max-w-7xl mx-auto">
        <div className="md:col-span-1 space-y-5">
          <div>
            <div className="text-2xl md:text-3xl font-semibold text-white">360°</div>
            <div className="text-gray-400 text-[10px] md:text-xs">Degrees of Visibility</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
            <div className="text-white text-xs md:text-sm font-medium">Tesla Vision</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-semibold text-white">250 m</div>
            <div className="text-gray-400 text-[10px] md:text-xs">Powerful Visual Processing</div>
          </div>
        </div>
        <div className="md:col-span-5">
          <img src="/img/l14.jpg" alt="Autopilot visualization" className="w-full rounded-xl shadow-xl object-cover" />
      </div>
      </div>

      {/* Arrive Refreshed */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Arrive Refreshed</h3>
        <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
          Autopilot enables your vehicle to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.
        </p>
      </div>
    </section>

    {/* Eighth section: Model 3 Specs */}
    <section className="w-full bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Model 3 Specs</h2>
        <div className="mt-6 flex items-center justify-center gap-12 text-sm md:text-base">
          <div className="border-b-2 border-white pb-1 cursor-pointer transition-all">Long Range AWD</div>
          <button className="text-white/70 hover:text-gray-300 cursor-pointer transition-all">Long Range RWD</button>
        </div>

        {/* Drive */}
        <div className="border-t border-gray-700 my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <div>
            <div className="text-gray-400 text-sm md:text-base">Battery</div>
            <div className="text-white font-medium mt-1">Long Range</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm md:text-base">Range (EPA est.)</div>
            <div className="text-white font-medium mt-1">346 mi</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm md:text-base">Acceleration</div>
            <div className="text-white font-medium mt-1">4.2 s 0–60 mph</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm md:text-base">Drive</div>
            <div className="text-white font-medium mt-1">Dual Motor All-Wheel Drive</div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="border-t border-gray-700 my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left spec grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-gray-400 text-sm">Weight (Curb Mass)</div>
              <div className="text-white font-medium mt-1">4,030 lbs</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Cargo</div>
              <div className="text-white font-medium mt-1">24 cu ft</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Wheels</div>
              <div className="text-white font-medium mt-1">18” or 19”</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Seating</div>
              <div className="text-white font-medium mt-1">5 Adults</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Displays</div>
              <div className="text-white font-medium mt-1">15.4” Center Touchscreen<br/>8” Rear Touchscreen</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Ground Clearance</div>
              <div className="text-white font-medium mt-1">5.4”</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Overall Width</div>
              <div className="text-white font-medium mt-1">Folded mirrors: 76.1”<br/>Extended mirrors: 82.2”</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Overall Height</div>
              <div className="text-white font-medium mt-1">56.7”</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Overall Length</div>
              <div className="text-white font-medium mt-1">185.8”</div>
            </div>
          </div>
          {/* Right image */}
          <div className="w-full mt-20 md:mt-28">
            <img src="/img/l15.png" alt="Model 3 dimensions" className="rounded-xl shadow-lg mx-auto w-full md:w-3/4 object-cover" />
          </div>
        </div>

        {/* Charging */}
        <div className="border-t border-gray-700 my-8" />
        <div>
          <h3 className="text-xl font-semibold mb-4">Charging</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-gray-400 text-sm">Supercharging</div>
              <div className="text-white font-medium mt-1">Max/Payment Type → 250 kW Max; Pay Per Use</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Charging Speed</div>
              <div className="text-white font-medium mt-1">Up to 185 miles added in 15 minutes</div>
            </div>
          </div>
        </div>

        {/* Warranty */}
        <div className="border-t border-gray-700 my-8" />
        <div>
          <h3 className="text-xl font-semibold mb-4">Warranty</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-white font-medium">Basic Vehicle</div>
              <div className="text-gray-400 mt-1">4 years or 50,000 mi, whichever comes first</div>
            </div>
            <div>
              <div className="text-white font-medium">Battery & Drive Unit</div>
              <div className="text-gray-400 mt-1">8 years or 120,000 mi, whichever comes first</div>
              <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">See Details</a>
            </div>
          </div>
        </div>

        {/* Other */}
        <div className="border-t border-gray-700 my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <a href="#" className="text-blue-400 hover:underline">Owner’s Manual</a>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Compare Models</a>
          </div>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed mt-6 max-w-4xl">
          Range added in 15 minutes is based on constant speed data*. Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. Learn more about Standard Connectivity and any limitations.
        </p>
      </div>
    </section>

    {/* Ninth section: Model 3 Order Hero */}
    <section className="relative w-full h-screen bg-black">
      <img src="/img/model3.jpg" alt="Tesla Model 3" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Model 3</h1>
        <p className="text-base md:text-lg font-light text-gray-200 mb-6 max-w-2xl">
          Design yours or get a trade-in estimate for your current vehicle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 ease-in-out cursor-pointer">
            Order Now
          </a>
          <a className="bg-neutral-800 hover:bg-neutral-700 hover:scale-105 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 ease-in-out cursor-pointer">
            Get an Estimate
          </a>
        </div>
      </div>

      {/* Footer links */}
      <footer className="absolute bottom-0 w-full bg-black/90 text-gray-400 text-xs py-4">
        <div className="flex flex-wrap justify-center gap-4">
          <span>Tesla © 2025</span>
          <a href="#" className="hover:text-white transition">Privacy & Legal</a>
          <a href="#" className="hover:text-white transition">Vehicle Recalls</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">News</a>
          <a href="#" className="hover:text-white transition">Get Updates</a>
          <a href="#" className="hover:text-white transition">Locations</a>
          <a href="#" className="hover:text-white transition">Learn</a>
        </div>
      </footer>
    </section>

    {/* Ask a Question section */}
    <section className="w-full bg-white py-6">
      <div className="max-w-6xl mx-auto flex justify-center">
        <button onClick={() => setChatOpen(true)} className="inline-flex items-center gap-3 bg-gray-100 text-gray-800 px-6 py-2 rounded-2xl shadow-sm border border-gray-300 select-none cursor-pointer hover:bg-gray-200 transition">
          <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-gray-700 text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4l3.5 3.5c.2.2.5.2.7 0L15 17h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
            </svg>
          </span>
          <span className="text-base font-medium tracking-tight">Ask a Question</span>
        </button>
      </div>
    </section>

    {chatOpen && (
      <>
        {/* Backdrop */}
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setChatOpen(false)} />
        {/* Chat panel */}
        <div className="fixed bottom-6 right-6 z-50 w-[420px] md:w-[520px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-center relative h-12 border-b border-gray-200">
            <button onClick={() => setChatOpen(false)} className="absolute left-4 h-7 w-7 rounded-full grid place-items-center text-gray-600 hover:bg-gray-100" aria-label="Close chat">
              <span className="text-xl leading-none">–</span>
            </button>
            <div className="text-gray-900 font-semibold">Tesla Assist</div>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4 max-h-[65vh] overflow-y-auto bg-white">
            <div className="flex items-start gap-3">
              <img src="/img/aichatprofile.png" alt="AI profile" className="h-8 w-8 rounded-full object-cover filter grayscale" />
              <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-3 w-full">Hello! How can I help you today?</div>
            </div>

            <div className="flex items-center gap-4 pl-11 text-gray-400 text-sm">
              <button className="hover:text-gray-600" aria-label="Like">👍</button>
              <button className="hover:text-gray-600" aria-label="Dislike">👎</button>
            </div>

            <div className="flex items-start gap-3">
              <img src="/img/aichatprofile.png" alt="AI profile" className="h-8 w-8 rounded-full object-cover filter grayscale" />
              <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-3 w-full">You have ended the chat. Re-open the chat to start a new session.</div>
            </div>

            <div className="text-gray-600 text-sm pl-11">4:02 PM&nbsp;&nbsp; Chat Session Ended</div>

            <div className="pl-11">
              <button className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 hover:bg-gray-50">Start new session</button>
            </div>
      </div>
        </div>
      </>
    )}

    </div>
  )
}

export default LearnPage


