import React from 'react'

const ChargingNetworkSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Section */}
        <div className="relative mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Tesla Charging Network Map" 
              className="w-full h-96 object-cover"
            />
            
            {/* Find Me Button - Bottom Left */}
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Find Me
              </button>
            </div>
            
            {/* Zoom Control Button - Bottom Right */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-200 text-gray-600 w-10 h-10 rounded-full shadow-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-8 lg:mx-16">
          {/* Left Column: Title, Subtitle, and Buttons */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-semibold text-black mb-6">
                Find Your Charge
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                View the network of Tesla Superchargers and Destination Chargers available near you.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-gray-800 text-white px-8 py-2 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors">
                View Network
              </button>
              <button className="bg-white text-black px-8 py-2 rounded-lg text-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="flex justify-between">
            {/* Superchargers Stat */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-5xl font-semibold text-black">29,273</span>
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
              <p className="text-base text-gray-600 font-normal">Superchargers</p>
            </div>

            {/* Destination Chargers Stat */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-5xl font-semibold text-black">9,382</span>
                <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-base text-gray-600 font-normal">Destination Chargers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChargingNetworkSection
