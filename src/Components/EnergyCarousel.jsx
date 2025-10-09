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
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 pr-0">
                  <div className="flex flex-col gap-4 justify-between items-stretch">
                    <div className="w-full">
                      <div className="relative bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
                        <div className="w-full h-[430px] sm:h-[500px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${slide.image}')` }}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                          <div className="absolute inset-0 p-4 sm:p-8 pb-5 sm:pb-8 flex flex-col justify-between">
                            <div className="text-left">
                              <span className="inline-block text-[11px] sm:text-xs font-semibold text-white bg-black/70 rounded-md px-2 py-1 shadow">
                                {`New ${slide.title}`}
                              </span>
                            </div>
                            <div className="text-left text-white">
                              <h3 className="text-[32px] sm:text-5xl font-bold mb-3 leading-tight">{slide.title}</h3>
                              <p className="text-base sm:text-xl mb-6 text-gray-200 max-w-xl">{slide.subtitle}</p>
                              <div className="flex gap-3 sm:gap-4">
                                <a href="/order" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors shadow">Order Now</a>
                                <a href="/learn" className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold border border-gray-300 transition-colors shadow">Learn More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-8 space-x-1.5">
            {slides.map((_, i) => (
              <span key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer ${i === currentSlide ? 'bg-gray-800' : 'bg-gray-400/70 hover:bg-gray-500'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnergyCarousel
