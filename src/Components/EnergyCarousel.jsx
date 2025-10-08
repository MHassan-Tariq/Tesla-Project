import React, { useEffect, useState } from 'react'

const EnergyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      id: 1,
      title: 'Solar Panels',
      subtitle: 'Use Solar Energy to Power Your Home and Charge Your Tesla',
      image: '/img/h11.jpeg',
    },
    {
      id: 2,
      title: 'Powerwall',
      subtitle: 'Keep Your Lights On During Outages',
      image: '/img/h12.jpeg',
    },
    {
      id: 3,
      title: 'Solar Roof',
      subtitle: 'Generate Clean Energy With Your Roof',
      image: '/img/h13.jpeg',
    },
    {
      id: 4,
      title: 'Megapack',
      subtitle: 'Massive Batteries for Massive Energy Support',
      image: '/img/h14.jpg',
    },
  ]

  // mimic first slider auto-play
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((v) => (v + 1) % slides.length), 3000)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => {
                const nextIndex = (index + 1) % slides.length
                const nextSlide = slides[nextIndex]
                return (
                  <div key={slide.id} className="w-full flex-shrink-0 pl-4 pr-0">
                    <div className="flex gap-6 justify-between items-stretch">
                      <div className="w-2/3">
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                          <div className="w-full h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${slide.image}')` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                              <h3 className="text-5xl font-bold mb-3">{slide.title}</h3>
                              <p className="text-xl mb-6 text-gray-200 max-w-xl">{slide.subtitle}</p>
                              <div className="flex gap-4">
                                <a href="/order" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors">Order Now</a>
                                <a href="/learn" className="bg-white text-gray-900 px-6 py-3 rounded-lg text-base font-medium border border-gray-300 hover:bg-gray-100 transition-colors">Learn More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3 ml-auto">
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                          <div className="w-full h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${nextSlide.image}')` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                              <h4 className="text-4xl font-bold">{nextSlide.title}</h4>
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
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, i) => (
              <span key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full cursor-pointer ${i === currentSlide ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnergyCarousel
