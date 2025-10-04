import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const VehicleShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const vehicleCards = [
    {
      id: 1,
      category: "Sports Sedan",
      model: "Model 3",
      apr: "2.99% APR Available",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      category: "Midsize SUV",
      model: "Model Y",
      apr: "3.99% APR Available",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      category: "Luxury Sedan",
      model: "Model S",
      apr: "4.99% APR Available",
      image: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      category: "Luxury SUV",
      model: "Model X",
      apr: "5.99% APR Available",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      category: "Pickup Truck",
      model: "Cybertruck",
      apr: "6.99% APR Available",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vehicleCards.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [vehicleCards.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vehicle Cards Container */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {vehicleCards.map((vehicle, index) => (
                <div key={vehicle.id} className="w-full flex-shrink-0">
                  <div className="flex gap-6 px-4">
                    {/* Current Vehicle Card */}
                    <div className="flex-shrink-0 w-full max-w-4xl">
                      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Background Image */}
                        <div 
                          className="w-full h-96 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url('${vehicle.image}')`
                          }}
                        >
                          {/* Text Overlays */}
                          <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            {/* Top Left - Category */}
                            <div className="text-left">
                              <p className="text-white text-lg font-normal">{vehicle.category}</p>
                            </div>
                            
                            {/* Bottom Left - Model Name and Details */}
                            <div className="text-left">
                              <h2 className="text-white text-5xl font-bold mb-2">{vehicle.model}</h2>
                              <p className="text-white text-xl font-normal mb-6 underline decoration-white decoration-1 underline-offset-4">
                                {vehicle.apr}
                              </p>
                              
                               {/* Buttons */}
                               <div className="flex gap-4">
                                 <Link 
                                   to="/order"
                                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors"
                                 >
                                   Order Now
                                 </Link>
                                 <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-base font-medium border border-gray-300 transition-colors">
                                   Learn More
                                 </button>
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next Vehicle Card (if not last) */}
                    {index < vehicleCards.length - 1 && (
                      <div className="flex-shrink-0 w-full max-w-4xl">
                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                          {/* Background Image */}
                          <div 
                            className="w-full h-96 bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url('${vehicleCards[index + 1].image}')`
                            }}
                          >
                            {/* Text Overlays */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                              {/* Top Left - Category */}
                              <div className="text-left">
                                <p className="text-white text-lg font-normal">{vehicleCards[index + 1].category}</p>
                              </div>
                              
                              {/* Bottom Left - Model Name and Details */}
                              <div className="text-left">
                                <h2 className="text-white text-5xl font-bold mb-2">{vehicleCards[index + 1].model}</h2>
                                <p className="text-white text-xl font-normal mb-6 underline decoration-white decoration-1 underline-offset-4">
                                  {vehicleCards[index + 1].apr}
                                </p>
                                
                               {/* Buttons */}
                               <div className="flex gap-4">
                                 <Link 
                                   to="/order"
                                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors"
                                 >
                                   Order Now
                                 </Link>
                                 <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-base font-medium border border-gray-300 transition-colors">
                                   Learn More
                                 </button>
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {vehicleCards.map((_, index) => (
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

export default VehicleShowcase