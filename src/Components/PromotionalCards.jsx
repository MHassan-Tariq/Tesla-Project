import React from 'react'

const PromotionalCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Current Offers */}
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="flex flex-col sm:flex-row h-auto sm:h-80">
              {/* Image Top on mobile */}
              <div className="w-full sm:w-2/5 order-1 sm:order-2">
                <img 
                  src="/img/h6.jpg"
                  alt="Tesla Vehicles"
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="flex-1 order-2 sm:order-1 p-6 sm:p-8 flex flex-col justify-center text-left">
                <h2 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  Current Offers
                </h2>
                <p className="text-[13px] sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Limited inventory. Take delivery today.
                </p>
                <button className="w-full sm:w-auto bg-gray-100 text-gray-900 px-4 sm:px-8 py-3 rounded-md text-sm sm:text-base font-medium sm:font-semibold hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Annual Shareholder Meeting */}
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="flex flex-col sm:flex-row h-auto sm:h-80">
              {/* Image Top on mobile */}
              <div className="w-full sm:w-2/5 order-1 sm:order-2">
                <img 
                  src="/img/h7.jpg"
                  alt="Shareholder Meeting"
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="flex-1 order-2 sm:order-1 p-6 sm:p-8 flex flex-col justify-center text-left">
                <h2 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  Annual Shareholder Meeting
                </h2>
                <p className="text-[13px] sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  The future of Tesla is in your hands. Learn why your vote matters.
                </p>
                <button className="w-full sm:w-auto bg-gray-100 text-gray-900 px-4 sm:px-8 py-3 rounded-md text-sm sm:text-base font-medium sm:font-semibold hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionalCards
