import React from 'react'

const PromotionalCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Current Offers */}
          <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
            <div className="flex h-80">
              {/* Text Content - Left Side */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Current Offers
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Limited inventory. Take delivery today.
                </p>
                <button className="bg-white text-gray-900 px-10 py-3 rounded-lg text-base font-semibold border border-gray-300 hover:bg-gray-50 transition-colors w-fit">
                  Learn More
                </button>
              </div>
              
              {/* Image Content - Right Side */}
              <div className="w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tesla Vehicles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Annual Shareholder Meeting */}
          <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
            <div className="flex h-80">
              {/* Text Content - Left Side */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Annual Shareholder Meeting
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  The future of Tesla is in your hands. Learn why your vote matters.
                </p>
                <button className="bg-white text-gray-900 px-10 py-3 rounded-lg text-base font-semibold border border-gray-300 hover:bg-gray-50 transition-colors w-fit">
                  Learn More
                </button>
              </div>
              
              {/* Image Content - Right Side */}
              <div className="w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tesla Semi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionalCards
