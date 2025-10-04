import React from 'react'

const PromotionalSection = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#F5F5DC'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6">
          {/* Order Now Button */}
          <button 
            className="text-white px-8 py-4 rounded-full text-lg font-medium transition-colors hover:opacity-90"
            style={{backgroundColor: '#1A73E8'}}
          >
            Order Now
          </button>
          
          {/* Learn More Button */}
          <button 
            className="bg-white text-gray-800 px-10 py-4 rounded-full text-lg font-medium border border-gray-300 transition-colors hover:bg-gray-50 shadow-sm"
            style={{color: '#3C4043', borderColor: '#DADCE0'}}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromotionalSection