import React, { useState, useEffect } from 'react'

const EnergyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Solar Panels",
      subtitle: "Use Solar Energy to Power Your Home and Charge Your Tesla",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      primaryButton: "Order Now",
      secondaryButton: "Learn More"
    },
    {
      id: 2,
      title: "Powerwall",
      subtitle: "Keep Your Lights On During Outages",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      primaryButton: "Order Now",
      secondaryButton: "Learn More"
    },
    {
      id: 3,
      title: "Solar Roof",
      subtitle: "Transform Your Roof Into a Solar Energy System",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      primaryButton: "Order Now",
      secondaryButton: "Learn More"
    },
    {
      id: 4,
      title: "Megapack",
      subtitle: "Utility-Scale Energy Storage for Grid Stability",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      primaryButton: "Order Now",
      secondaryButton: "Learn More"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 75}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-3/4 flex-shrink-0 relative mr-4">
                  {/* Background Image */}
                  <div className="relative h-96 lg:h-[500px]">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Content Overlay - Bottom Left */}
                    <div className="absolute bottom-8 left-8 z-10 text-white max-w-md">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg lg:text-xl mb-6 text-gray-100">
                        {slide.subtitle}
                      </p>
                      
                       {/* Buttons */}
                       <div className="flex gap-4">
                         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                           {slide.primaryButton}
                         </button>
                         <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                           {slide.secondaryButton}
                         </button>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gray-800' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnergyCarousel
