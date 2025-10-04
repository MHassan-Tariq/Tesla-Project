import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/img/home-page-image.png" 
          alt="Tesla Model Y Performance" 
            className="w-full h-full object-cover"
          />
        </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 z-20">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide leading-tight">
            New Model Y Performance
          </h1>
          
          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <Link 
              to="/order"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm text-base font-medium transition-colors duration-300"
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