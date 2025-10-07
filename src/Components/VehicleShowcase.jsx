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
      <div className="max-w-7xl mx-auto px-0">
        {/* Vehicle Cards Container */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {vehicleCards.map((vehicle, index) => {
                const nextIndex = (index + 1) % vehicleCards.length
                const nextVehicle = vehicleCards[nextIndex]
                return (
                  <div key={vehicle.id} className="w-full flex-shrink-0 pl-4 pr-0">
                    <div className="flex gap-6 justify-between items-stretch">
                      {/* Full card (2/3 width) */}
                      <div className="w-2/3">
                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                          <div
                            className="w-full h-96 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${vehicle.image}')` }}
                          >
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                              <div className="text-left">
                                <p className="text-white text-lg font-normal">{vehicle.category}</p>
                              </div>
                              <div className="text-left">
                                <h2 className="text-white text-5xl font-bold mb-2">{vehicle.model}</h2>
                                <p className="text-white text-xl font-normal mb-6 underline decoration-white decoration-1 underline-offset-4">{vehicle.apr}</p>
                                <div className="flex gap-4">
                                  <Link to="/order" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors">Order Now</Link>
                                  <Link to="/learn" className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-base font-medium border border-gray-300 transition-colors">Learn More</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Peek card (1/3 width) */}
                      <div className="w-1/3 ml-auto">
                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                          <div
                            className="w-full h-96 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${nextVehicle.image}')` }}
                          >
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <div className="text-left">
                                <h3 className="text-white text-3xl font-bold">{nextVehicle.model}</h3>
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