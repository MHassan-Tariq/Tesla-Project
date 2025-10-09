import React from 'react'

const VideoAndFeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Section: Full Self-Driving Video (2/3 width) */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[430px] sm:h-[520px]">
            {/* Background Image/Video */}
            <img 
              src="/img/h8.jpg"
              alt="Full Self-Driving (Supervised)" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Video Pause Button - Top Right (white rounded square) */}
            <div className="absolute top-3 right-3 z-20">
              <button className="bg-white/90 text-gray-900 h-8 w-8 rounded-md grid place-items-center shadow hover:bg-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              </button>
            </div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
            
            {/* Text and Buttons - Bottom Left */}
            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 z-10 text-white">
              <h2 className="text-[32px] sm:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
                Full Self-Driving
                <br className="sm:hidden" />
                <span className="sm:hidden">(Supervised)</span>
                <span className="hidden sm:inline"> (Supervised)</span>
              </h2>
              <div className="flex gap-3 sm:gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold transition-colors shadow">
                  Demo Drive
                </button>
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold border border-gray-200 transition-colors shadow">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Features That Come Standard (1/3 width) */}
          <div className="lg:col-span-1 relative rounded-3xl overflow-hidden h-[430px] sm:h-[520px]">
            {/* Background Image */}
            <img 
              src="/img/h9.jpeg"
              alt="Features That Come Standard" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
            
            {/* Text and Button - Bottom Left */}
            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 z-10 text-white">
              <h2 className="text-[28px] sm:text-4xl font-bold mb-3 sm:mb-6 leading-tight">
                Features That
                <br className="sm:hidden" />
                <span className="sm:hidden">Come Standard</span>
                <span className="hidden sm:inline"> Come Standard</span>
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold transition-colors shadow">
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
