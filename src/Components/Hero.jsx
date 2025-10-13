import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Define the slider data with images and content
  const slides = [
    {
      id: 1,
      image: '/img/home-page image.png',
      title: 'Meet Model 3',
      subtitle: 'Electric Sport Sedan',
      alt: 'Tesla Model 3'
    },
    {
      id: 2,
      image: '/img/home-page image2.jpeg',
      title: 'Meet Model 3',
      subtitle: 'Electric Sport Sedan',
      alt: 'Tesla Model 3'
    }
  ]

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  // Handle manual slide selection
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-white">
      {/* Background Images with Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover object-center"
              style={{ 
                objectPosition: 'center 35%',
                objectFit: 'cover'
              }}
            />
            {/* Subtle gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 sm:pt-24 z-20">
        <div className="text-center px-4">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-1 tracking-tight transition-all duration-500">
            {slides[currentSlide].title}
          </h1>
          {/* Subtitle */}
          <p className="text-white/90 text-sm md:text-base mb-4 transition-all duration-500">
            {slides[currentSlide].subtitle}
          </p>
          
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
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero