import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Terms Text */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            1 Terms subject to change. <span className="underline cursor-pointer">Learn more.</span>
          </p>
        </div>

        {/* Copyright and Navigation Links */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <span>Tesla © 2025</span>
            <span className="cursor-pointer hover:text-gray-800">Privacy & Legal</span>
            <span className="cursor-pointer hover:text-gray-800">Vehicle Recalls</span>
            <span className="cursor-pointer hover:text-gray-800">Contact</span>
            <span className="cursor-pointer hover:text-gray-800">News</span>
            <span className="cursor-pointer hover:text-gray-800">Get Updates</span>
            <span className="cursor-pointer hover:text-gray-800">Locations</span>
            <span className="cursor-pointer hover:text-gray-800">Learn</span>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer