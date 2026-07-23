import React from 'react'

function HeroSlider({ items }) {
  const slides = [...items, ...items]

  return (
    <div className="hero-slider mt-10 lg:mt-14 overflow-hidden max-md:px-6" aria-hidden="true">
      <div className="hero-slider-track flex items-end w-max gap-4 md:gap-5">
        {slides.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="hero-slider-item shrink-0 h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden"
            style={{ aspectRatio: `${item.width} / ${item.height}` }}
          >
            <img
              src={encodeURI(item.img)}
              alt={item.title}
              className="h-full w-full object-cover"
              loading={idx < 2 ? 'eager' : 'lazy'}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
