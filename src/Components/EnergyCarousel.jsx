import React from 'react'

const EnergyCarousel = () => {
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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Horizontal slider (scroll) that snaps; becomes 4-cols on large screens */}
          <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth px-1 -mx-1">
            {slides.map((slide) => (
              <article
                key={slide.id}
                className="snap-start w-[80%] sm:w-1/2 lg:w-auto flex-shrink-0"
              >
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight">{slide.title}</h3>
                    <p className="mt-2 text-sm lg:text-base text-gray-200 max-w-md">{slide.subtitle}</p>
                    <div className="mt-6 flex gap-4">
                      <a href="/order" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm lg:text-base font-semibold transition-colors">Order Now</a>
                      <a href="/learn" className="bg-white text-gray-900 px-6 py-2 rounded-lg text-sm lg:text-base font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">Learn More</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnergyCarousel
