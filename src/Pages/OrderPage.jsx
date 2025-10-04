import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedPricing, setSelectedPricing] = useState('Performance All-Wheel Drive')
  const [selectedTab, setSelectedTab] = useState('Cash')
  const [selectedExteriorColor, setSelectedExteriorColor] = useState('Stealth Grey')
  const [selectedInteriorColor, setSelectedInteriorColor] = useState('All Black Interior')
  const [fullSelfDriving, setFullSelfDriving] = useState(false)
  const [homeCharger, setHomeCharger] = useState(false)
  const [selectedAccessories, setSelectedAccessories] = useState([])
  const [deliveryZip, setDeliveryZip] = useState('')

  const carImages = [
    '/img/ordernowslider-1.jpeg',
    '/img/ordernowslider-2.jpeg', 
    '/img/ordernowslider-3.jpeg'
  ]

  const pricingOptions = [
    {
      name: 'Long Range Rear-Wheel Drive',
      price: '$44,990'
    },
    {
      name: 'Long Range All-Wheel Drive', 
      price: '$48,990'
    },
    {
      name: 'Performance All-Wheel Drive',
      price: '$57,490'
    }
  ]

  const exteriorColors = [
    { name: 'Stealth Grey', color: '#4A4A4A' },
    { name: 'Pearl White', color: '#FFFFFF' },
    { name: 'Deep Blue', color: '#1E3A8A' },
    { name: 'Solid Black', color: '#000000' },
    { name: 'Silver', color: '#C0C0C0' }
  ]

  const interiorColors = [
    { name: 'All Black Interior', color: '#000000' },
    { name: 'White Interior', color: '#FFFFFF' }
  ]

  const accessories = [
    { name: 'Air Mattress', price: 225 },
    { name: 'All-Weather Interior Liners', price: 240 },
    { name: 'Roof Rack', price: 500 },
    { name: 'Platform Hitch Rack', price: 860 }
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carImages.length])

  const getCurrentPrice = () => {
    const option = pricingOptions.find(opt => opt.name === selectedPricing)
    const basePrice = option ? option.price : '$57,490'
    const fsdPrice = fullSelfDriving ? 8000 : 0
    const homeChargerPrice = homeCharger ? 450 : 0
    const accessoriesPrice = selectedAccessories.reduce((total, accessory) => total + accessory.price, 0)
    const totalPrice = parseInt(basePrice.replace(/[$,]/g, '')) + fsdPrice + homeChargerPrice + accessoriesPrice
    return `$${totalPrice.toLocaleString()}`
  }

  const toggleAccessory = (accessory) => {
    setSelectedAccessories(prev => 
      prev.find(item => item.name === accessory.name)
        ? prev.filter(item => item.name !== accessory.name)
        : [...prev, accessory]
    )
  }

  return (
    <div className="min-h-screen bg-white">
       {/* Top Banner */}
       <div className="py-2" style={{ background: 'linear-gradient(to right, #D97706, #FCD34D, #D97706)' }}>
         <div className="max-w-7xl mx-auto px-6">
           <p className="text-center text-black text-sm font-medium">
             Model Y Performance: Exterior and interior upgrades included
           </p>
         </div>
       </div>

          {/* Header */}
          <header className="bg-white px-6 py-3 h-24">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
              <Link to="/" className="flex-shrink-0">
                <img 
                  src="/img/tesla-logo.png" 
                  alt="Tesla" 
                  className="h-24 w-auto"
                />
              </Link>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-sm font-medium">US</span>
              </div>
            </div>
          </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Car Image */}
          <div className="lg:col-span-2 relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={carImages[currentImage]}
                alt="Tesla Model Y"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="lg:col-span-1 overflow-y-auto max-h-screen">
            <div className="space-y-8 pb-8">
              {/* Product Title */}
              <h1 className="text-4xl lg:text-5xl font-medium text-black text-center mb-8">
                Model Y
              </h1>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
                    <span className="text-2xl lg:text-3xl font-semibold">306</span>
                    <span className="text-base font-normal ml-1">mi</span>
                  </div>
                  <div className="text-sm text-gray-600 font-normal">Range (EPA est.)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
                    <span className="text-2xl lg:text-3xl font-semibold">155</span>
                    <span className="text-base font-normal ml-1">mph</span>
                  </div>
                  <div className="text-sm text-gray-600 font-normal">Top Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
                    <span className="text-2xl lg:text-3xl font-semibold">3.3</span>
                    <span className="text-base font-normal ml-1">sec</span>
                  </div>
                  <div className="text-sm text-gray-600 font-normal">0-60 mph</div>
                </div>
              </div>

              {/* Pricing Tabs */}
              <div className="flex justify-center border-b border-gray-200 mb-6">
                {['Cash', 'Lease', 'Finance'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      selectedTab === tab
                        ? 'text-black border-b-2 border-black'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Pricing Options */}
              <div className="space-y-3 mb-8">
                {pricingOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => setSelectedPricing(option.name)}
                    className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                      selectedPricing === option.name
                        ? 'border-gray-400 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-normal text-black text-sm">{option.name}</div>
                      </div>
                      <div className="text-lg font-semibold text-black">{option.price}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Customization Options */}
              <div className="space-y-8">
                {/* Exterior Color */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Included</div>
                    <div className="text-lg font-semibold text-black">{selectedExteriorColor}</div>
                  </div>
                  <div className="flex gap-3">
                    {exteriorColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedExteriorColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          selectedExteriorColor === color.name
                            ? 'border-gray-400'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Wheels */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Included</div>
                    <div className="text-lg font-semibold text-black">21" Arachnid 2.0 Wheels</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-sm text-gray-600">All-Season Tires</div>
                    <div className="text-sm text-gray-600">Range (EPA est.): 306mi</div>
                  </div>
                </div>

                {/* Tow Package */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Included</div>
                    <div className="text-lg font-semibold text-black">Tow Package</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Tow up to 3,500 lbs with a class II steel tow bar
                  </div>
                </div>

                {/* Interior */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Included</div>
                    <div className="text-lg font-semibold text-black">{selectedInteriorColor}</div>
                  </div>
                  <div className="flex gap-3">
                    {interiorColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedInteriorColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          selectedInteriorColor === color.name
                            ? 'border-gray-400'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.color }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Five Seat Interior</div>
                </div>

                {/* Full Self-Driving */}
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-semibold text-black">Full Self-Driving (Supervised)</div>
                    <div className="text-sm text-gray-600 mt-2">
                      Your car will be able to drive itself almost anywhere with minimal driver intervention
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={fullSelfDriving}
                          onChange={(e) => setFullSelfDriving(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-black">Full Self-Driving (Supervised)</span>
                      </div>
                      <div className="text-lg font-semibold text-black">$8,000</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    Currently enabled features require active driver supervision and do not make the vehicle autonomous. 
                    The activation and use of these features are dependent on development and regulatory approval, 
                    which may take longer in some jurisdictions.
                  </div>
                </div>

                {/* Charging Section */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-black mb-2">Charging</h2>
                    <p className="text-sm text-gray-600">
                      Every Tesla includes access to the largest global Supercharging network.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={homeCharger}
                        onChange={(e) => setHomeCharger(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-black">$450</div>
                        <div className="text-sm font-medium text-black">Home Charger</div>
                        <div className="text-xs text-gray-600">Up to 44 mi range/hr, install required</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Accessories Section */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-black mb-2">Accessories</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {accessories.map((accessory) => (
                      <div key={accessory.name} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedAccessories.some(item => item.name === accessory.name)}
                              onChange={() => toggleAccessory(accessory)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-black">{accessory.name}</span>
                          </div>
                          <div className="text-sm font-semibold text-black">${accessory.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                 {/* Order & Delivery Section */}
                 <div className="space-y-6">
                   <div className="text-center">
                     <h2 className="text-2xl font-bold text-black mb-2">Enter Delivery ZIP</h2>
                   </div>
                   
                   <div className="text-center">
                     <input
                       type="text"
                       placeholder="Enter Delivery ZIP"
                       value={deliveryZip}
                       onChange={(e) => setDeliveryZip(e.target.value)}
                       className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg text-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     />
                   </div>
                   
                   <div className="text-center">
                     <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center gap-1 mx-auto">
                       Show Pricing Details
                       <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M7 10l5 5 5-5z"/>
                       </svg>
                     </button>
                   </div>
                   
                   <div className="space-y-4">
                     <div className="flex justify-between items-start">
                       <div>
                         <div className="text-sm font-bold text-black">Est. Purchase Price</div>
                         <div className="text-xs text-gray-500 mt-1">Includes Destination and Order Fee</div>
                         <button className="text-xs text-blue-600 hover:text-blue-800 mt-1 underline">Edit Savings</button>
                       </div>
                       <div className="text-sm font-bold text-black">$59,130</div>
                     </div>
                     
                     <div className="flex justify-between items-start">
                       <div>
                         <div className="text-sm font-bold text-black">Due Today</div>
                         <div className="text-xs text-gray-500 mt-1">Non-refundable Order Fee</div>
                       </div>
                       <div className="text-sm font-bold text-black">$250</div>
                     </div>
                   </div>
                   
                   <button className="w-full bg-white border-2 border-black text-black py-4 px-6 rounded-lg text-base font-bold hover:bg-black hover:text-white transition-colors">
                     Order with Card
                   </button>
                 </div>
              </div>

              {/* Sticky Footer */}
              <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-black">{getCurrentPrice()}</div>
                    <div className="text-xs text-gray-600 mt-1">Vehicle Price</div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg shadow-lg transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.29 0 2.5-.3 3.6-.8l3.4 3.4c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-3.4-3.4c.5-1.1.8-2.31.8-3.6 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default OrderPage