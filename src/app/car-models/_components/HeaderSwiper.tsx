'use client';

import React, { useState, useEffect } from 'react';
import { Image } from '@nextui-org/react';
import swipeImg1 from '@/assets/images/asset-swipe-1.webp';
import swipeImg2 from '@/assets/images/asset-swipe-2.webp';
import swipeImg3 from '@/assets/images/asset-swipe-3.webp';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function HeaderSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className=" ">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Image src={swipeImg1.src} alt="Swiper 1" className="w-full object-cover" removeWrapper radius="none" />
            <div className="container p-4 md:p-8 absolute inset-0 flex flex-col justify-center z-20">
              <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white">
                Explore Our <br /> Premium Selection
              </h1>
            </div>
          </div>

          <div className="keen-slider__slide">
            <Image src={swipeImg2.src} alt="Swiper 2" className="w-full object-cover" removeWrapper radius="none" />

            <div className="container p-4 md:p-8 absolute inset-0 flex flex-col items-center justify-center z-20">
              <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white text-center">
                Luxury Cars <br /> for Every Journey
              </h1>
            </div>
          </div>

          <div className="keen-slider__slide">
            <Image src={swipeImg3.src} alt="Swiper 3" className="w-full object-cover" removeWrapper radius="none" />

            <div className="container p-4 md:p-8 absolute inset-0 flex flex-col items-end justify-center z-20">
              <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white text-right">
                Affordable & Reliable <br /> Options
              </h1>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots-hero absolute bottom-0  left-1/2 -translate-x-1/2 z-10">
            <div className="dots-hero">
              {Array.from(
                {
                  length: instanceRef.current.track.details.slides.length,
                },
                (_, idx) => (
                  <button key={idx} onClick={() => instanceRef.current?.moveToIdx(idx)} className={'dot-hero' + (currentSlide === idx ? ' active ' : '')}></button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
