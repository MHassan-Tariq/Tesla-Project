import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/img/home-page image.png" 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 35%' }}
        />
        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 sm:pt-24 z-20">
        <div className="text-center px-4">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-1 tracking-tight">
            Meet Model 3
          </h1>
          {/* Subtitle */}
          <p className="text-white/90 text-sm md:text-base mb-4">Electric Sport Sedan</p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex justify-center gap-3">
            <Link 
              to="/order"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 rounded-sm text-sm font-semibold transition-colors duration-300"
            >
              Order Now
            </Link>
            <Link 
              to="/learn"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-2 rounded-sm text-sm font-semibold transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          <span className="h-2 w-2 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}

export default Hero