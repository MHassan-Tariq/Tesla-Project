import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-white">
      {/* Background Image (slightly cropped from bottom) */}
      <div className="absolute inset-0">
        <img 
          src="/img/home-page image.png" 
          alt="Tesla Model Y Performance" 
            className="w-full h-full object-cover object-center" 
            style={{ objectPosition: 'center 35%' }}
          />
        </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 z-20">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 tracking-wide leading-tight">
            New Model Y Performance
          </h1>
          
          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <Link 
              to="/order"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-sm text-sm font-semibold transition-colors duration-300"
            >
              Order Yours
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero