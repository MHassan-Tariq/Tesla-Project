import React, { useState } from 'react'

const Navbar = () => {
  const [showVehiclesDropdown, setShowVehiclesDropdown] = useState(false)
  const [showEnergyDropdown, setShowEnergyDropdown] = useState(false)
  const [showChargingDropdown, setShowChargingDropdown] = useState(false)
  const [showDiscoverDropdown, setShowDiscoverDropdown] = useState(false)
  const [showShopDropdown, setShowShopDropdown] = useState(false)

  const handleVehiclesMouseEnter = () => {
    setShowVehiclesDropdown(true)
    setShowEnergyDropdown(false)
    setShowChargingDropdown(false)
    setShowDiscoverDropdown(false)
    setShowShopDropdown(false)
  }

  const handleVehiclesMouseLeave = () => {
    setShowVehiclesDropdown(false)
  }

  const handleEnergyMouseEnter = () => {
    setShowEnergyDropdown(true)
    setShowVehiclesDropdown(false)
    setShowChargingDropdown(false)
    setShowDiscoverDropdown(false)
    setShowShopDropdown(false)
  }

  const handleEnergyMouseLeave = () => {
    setShowEnergyDropdown(false)
  }

  const handleChargingMouseEnter = () => {
    setShowChargingDropdown(true)
    setShowVehiclesDropdown(false)
    setShowEnergyDropdown(false)
    setShowDiscoverDropdown(false)
    setShowShopDropdown(false)
  }

  const handleChargingMouseLeave = () => {
    setShowChargingDropdown(false)
  }

  const handleDiscoverMouseEnter = () => {
    setShowDiscoverDropdown(true)
    setShowVehiclesDropdown(false)
    setShowEnergyDropdown(false)
    setShowChargingDropdown(false)
    setShowShopDropdown(false)
  }

  const handleDiscoverMouseLeave = () => {
    setShowDiscoverDropdown(false)
  }

  const handleShopMouseEnter = () => {
    setShowShopDropdown(true)
    setShowVehiclesDropdown(false)
    setShowEnergyDropdown(false)
    setShowChargingDropdown(false)
    setShowDiscoverDropdown(false)
  }

  const handleShopMouseLeave = () => {
    setShowShopDropdown(false)
  }

  return (
    <>
      {/* Background Blur Overlay */}
      {(showVehiclesDropdown || showEnergyDropdown || showChargingDropdown || showDiscoverDropdown || showShopDropdown) && (
        <div className="fixed inset-0 backdrop-blur-sm z-30"></div>
      )}
      
      <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Tesla Logo */}
          <div className="flex-shrink-0 ml-4">
              <img 
                src="/img/tesla-logo.png" 
                alt="Tesla" 
                className="h-4 w-auto"
              />
            </div>

            {/* Center Navigation Links */}
            <div className="hidden md:flex items-center space-x-3">
              <div 
                onMouseEnter={handleVehiclesMouseEnter}
                onMouseLeave={handleVehiclesMouseLeave}
                className="relative"
              >
                <button className="text-black font-semibold text-sm px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Vehicles
                </button>
              </div>
              <div 
                onMouseEnter={handleEnergyMouseEnter}
                onMouseLeave={handleEnergyMouseLeave}
                className="relative"
              >
                <button className="text-black font-semibold text-sm px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Energy
                </button>
              </div>
              <div 
                onMouseEnter={handleChargingMouseEnter}
                onMouseLeave={handleChargingMouseLeave}
                className="relative"
              >
                <button className="text-black font-semibold text-sm px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Charging
                </button>
              </div>
              <div 
                onMouseEnter={handleDiscoverMouseEnter}
                onMouseLeave={handleDiscoverMouseLeave}
                className="relative"
              >
                <button className="text-black font-semibold text-sm px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Discover
                </button>
              </div>
              <div 
                onMouseEnter={handleShopMouseEnter}
                onMouseLeave={handleShopMouseLeave}
                className="relative"
              >
                <button className="text-black font-semibold text-sm px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Shop
                </button>
              </div>
          </div>

            {/* Right Side Utility Icons */}
            <div className="flex items-center space-x-3">
              {/* Help - circled question mark */}
              <button className="text-black hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M9.25 9.5c.35-1.1 1.7-2 2.95-2 1.65 0 2.95 1 2.95 2.35 0 1.05-.9 1.85-1.95 2.15-.7.2-1.2.75-1.2 1.4v.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="16.5" r=".9" fill="currentColor"/>
                </svg>
              </button>
              {/* Globe - circled grid */}
              <button className="text-black hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  <ellipse cx="12" cy="12" rx="5.5" ry="9" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </button>
              {/* Account - circled user */}
              <button className="text-black hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.8 17.2c1.6-2 3.9-3.2 5.2-3.2s3.6 1.2 5.2 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Vehicles Dropdown */}
      <div 
        className={`fixed top-16 left-0 w-full bg-white z-40 shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          showVehiclesDropdown 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full pointer-events-none'
        }`}
        onMouseEnter={handleVehiclesMouseEnter}
        onMouseLeave={handleVehiclesMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex">
            {/* Left Section - Vehicle Grid */}
            <div className="flex-1 pr-8">
              <div className="grid grid-cols-3 gap-6">
                {/* Model S */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Model S Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Model S</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Model 3 */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Model 3 Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Model 3</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Model Y */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Model Y Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Model Y</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Model X */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Model X Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Model X</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Cybertruck */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Cybertruck Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Cybertruck</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Inventory */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Inventory Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Inventory</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">New</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Pre-Owned</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Additional Options */}
            <div className="w-64 border-l border-gray-200 pl-8">
              <div className="space-y-3">
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Current Offers</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Demo Drive</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Trade-in</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Pre-Owned</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Features</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Help Me Choose</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Compare</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Workshops</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Help Me Charge</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Fleet</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Semi</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Roadster</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Dropdown */}
      <div 
        className={`fixed top-16 left-0 w-full bg-white z-40 shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          showEnergyDropdown 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full pointer-events-none'
        }`}
        onMouseEnter={handleEnergyMouseEnter}
        onMouseLeave={handleEnergyMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex">
            {/* Left Section - Energy Products Grid */}
            <div className="flex-1 pr-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Solar Panels */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Solar Panels Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Solar Panels</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Solar Roof */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Solar Roof Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Solar Roof</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Powerwall */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Powerwall Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Powerwall</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Megapack */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Megapack Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Megapack</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                  </div>
                </div>
          </div>
        </div>

            {/* Right Section - Additional Options */}
            <div className="w-64 border-l border-gray-200 pl-8">
              <div className="space-y-3">
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Schedule a Consultation</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Why Solar</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Incentives</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Support</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Partner with Tesla</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Commercial</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Utilities</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charging Dropdown */}
      <div 
        className={`fixed top-16 left-0 w-full bg-white z-40 shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          showChargingDropdown 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full pointer-events-none'
        }`}
        onMouseEnter={handleChargingMouseEnter}
        onMouseLeave={handleChargingMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex">
            {/* Left Section - Charging Products Grid */}
            <div className="flex-1 pr-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Wall Connector */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Wall Connector Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Wall Connector</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Mobile Connector */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Mobile Connector Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Mobile Connector</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Order</a>
                  </div>
                </div>

                {/* Supercharger */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Supercharger Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Supercharger</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Find Us</a>
                  </div>
                </div>

                {/* Destination Charging */}
                <div className="text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Destination Charging Image</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Destination Charging</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-sm text-black underline hover:no-underline">Learn</a>
                    <a href="#" className="text-sm text-black underline hover:no-underline">Find Us</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Additional Options */}
            <div className="w-64 border-l border-gray-200 pl-8">
              <div className="space-y-3">
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Charging Calculator</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Trip Planner</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Supercharger Voting</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Host a Supercharger</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Commercial Charging</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Home Charging Installation</a>
                <a href="#" className="block text-sm text-black font-medium hover:text-gray-600 transition-colors">Charging Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Dropdown */}
      <div 
        className={`fixed top-16 left-0 w-full bg-white z-40 shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          showDiscoverDropdown 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full pointer-events-none'
        }`}
        onMouseEnter={handleDiscoverMouseEnter}
        onMouseLeave={handleDiscoverMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between">
            {/* Column 1: Resources */}
            <div className="w-1/3 pr-12">
              <h3 className="font-semibold text-black text-base mb-6">Resources</h3>
              <div className="space-y-4">
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Demo Drive</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Insurance</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Current Offers</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Learn</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Video Guides</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Customer Stories</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Events</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Workshops</a>
              </div>
            </div>

            {/* Column 2: Location Services */}
            <div className="w-1/3 px-8 border-l border-gray-200">
              <h3 className="font-semibold text-black text-base mb-6">Location Services</h3>
              <div className="space-y-4">
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Find Us</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Find a Collision Center</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Find a Certified Installer</a>
              </div>
            </div>

            {/* Column 3: Company */}
            <div className="w-1/3 pl-12 border-l border-gray-200">
              <h3 className="font-semibold text-black text-base mb-6">Company</h3>
              <div className="space-y-4">
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">About</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Careers</a>
                <a href="#" className="block text-sm text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors">Investor Relations</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Dropdown */}
      <div 
        className={`fixed top-16 left-0 w-full bg-white z-40 shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          showShopDropdown 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full pointer-events-none'
        }`}
        onMouseEnter={handleShopMouseEnter}
        onMouseLeave={handleShopMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex">
            {/* Left Section - Product Categories */}
            <div className="flex-1 pr-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Charging */}
                <div className="text-center">
                  <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Wall Connector Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Charging</h3>
                  <a href="#" className="text-sm text-black underline hover:no-underline">Shop Now</a>
                </div>

                {/* Vehicle Accessories */}
                <div className="text-center">
                  <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Tesla Wheel Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Vehicle Accessories</h3>
                  <a href="#" className="text-sm text-black underline hover:no-underline">Shop Now</a>
                </div>

                {/* Apparel */}
                <div className="text-center">
                  <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Tesla Cap Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Apparel</h3>
                  <a href="#" className="text-sm text-black underline hover:no-underline">Shop Now</a>
                </div>

                {/* Lifestyle */}
                <div className="text-center">
                  <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Tesla Backpack Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Lifestyle</h3>
                  <a href="#" className="text-sm text-black underline hover:no-underline">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Right Section - Additional Options */}
            <div className="w-80 border-l border-gray-200 pl-8">
              <div className="space-y-4">
                <a href="#" className="block text-base text-black font-medium hover:text-gray-600 transition-colors">Gift Cards</a>
                <a href="#" className="block text-base text-black font-medium hover:text-gray-600 transition-colors">Electronics</a>
                <a href="#" className="block text-base text-black font-medium hover:text-gray-600 transition-colors">Home</a>
                <a href="#" className="block text-base text-black font-medium hover:text-gray-600 transition-colors">Kids</a>
                <a href="#" className="block text-base text-black font-medium hover:text-gray-600 transition-colors">Outdoor</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar