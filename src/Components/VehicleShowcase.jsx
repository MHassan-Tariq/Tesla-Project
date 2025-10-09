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
      image: "/img/h1.jpeg"
    },
    {
      id: 2,
      category: "Midsize SUV",
      model: "Model Y",
      apr: "3.99% APR Available",
      image: "/img/h2.jpeg"
    },
    {
      id: 3,
      category: "Luxury Sedan",
      model: "Model S",
      apr: "4.99% APR Available",
      image: "/img/h3.jpeg"
    },
    {
      id: 4,
      category: "Luxury SUV",
      model: "Model X",
      apr: "5.99% APR Available",
      image: "/img/h4.jpeg"
    },
    {
      id: 5,
      category: "Pickup Truck",
      model: "Cybertruck",
      apr: "6.99% APR Available",
      image: "/img/h5.jpeg"
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
              {vehicleCards.map((vehicle) => {
                return (
                  <div key={vehicle.id} className="w-full flex-shrink-0 pr-0">
                    <div className="flex flex-col gap-4 justify-between items-stretch">
                      {/* Single full-width card */}
                      <div className="w-full">
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
                          <div
                            className="w-full h-[430px] sm:h-[520px] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${vehicle.image}')` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                            <div className="absolute inset-0 p-4 sm:p-8 pb-5 sm:pb-8 flex flex-col justify-between">
                              <div className="text-left">
                                <span className="inline-block text-[11px] sm:text-xs font-semibold text-white bg-black/70 rounded-md px-2 py-1 shadow">
                                  {`New ${vehicle.category}`}
                                </span>
                              </div>
                              <div className="text-left">
                                <h2 className="text-white text-[32px] sm:text-5xl font-bold mb-3 leading-tight">
                                  {vehicle.model}
                                  <br className="sm:hidden" />
                                  <span className="sm:hidden block">Standard</span>
                                </h2>
                                <p className="hidden sm:block text-white text-xl font-normal mb-6 underline decoration-white decoration-1 underline-offset-4">{vehicle.apr}</p>
                                <div className="flex gap-3 sm:gap-4">
                                  <Link to="/order" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors shadow">Order Now</Link>
                                  <Link to="/learn" className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold border border-gray-300 transition-colors shadow">Learn More</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 sm:mt-8 space-x-1.5">
            {vehicleCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gray-800' 
                    : 'bg-gray-400/70 hover:bg-gray-500'
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