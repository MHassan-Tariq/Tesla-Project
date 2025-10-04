import React from 'react'

const VideoAndFeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Full Self-Driving Video (2/3 width) */}
          <div className="lg:col-span-2 relative bg-gray-200 rounded-lg overflow-hidden shadow-sm h-[500px]">
            {/* Background Image/Video */}
            <img 
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Full Self-Driving (Supervised)" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Video Pause Button - Top Right */}
            <div className="absolute top-4 right-4 z-20">
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              </button>
            </div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Text and Buttons - Bottom Left */}
            <div className="absolute bottom-8 left-8 z-10 text-white">
              <h2 className="text-4xl font-bold mb-6">
                Full Self-Driving (Supervised)
              </h2>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                  Demo Drive
                </button>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-medium border border-gray-300 hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Features That Come Standard (1/3 width) */}
          <div className="lg:col-span-1 relative bg-gray-200 rounded-lg overflow-hidden shadow-sm h-[500px]">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Features That Come Standard" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Text and Button - Bottom Left */}
            <div className="absolute bottom-8 left-8 z-10 text-white">
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                Features That <br /> Come Standard
              </h2>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoAndFeaturesSection
