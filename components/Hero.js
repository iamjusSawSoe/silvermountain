"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  { id: 1, image: "/assets/home/1.jpg", title: "Slide 1" },
  { id: 2, image: "/assets/home/2.jpg", title: "Slide 2" },
  { id: 3, image: "/assets/home/3.jpg", title: "Slide 3" },
];

const Hero = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} className="h-[90dvh] w-full">
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-[90dvh] w-full bg-cover bg-center text-white text-left font-bold"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="w-[76%] mx-auto pt-40 grid grid-cols-[80%,20%]">
              <div>
                <h3 className="text-[2.75rem] leading-4 tracking-[0.02rem]">
                  Welcome To
                </h3>
                <h1 className="mt-16 text-[6.5rem]  tracking-[0.02rem] leading-4">
                  Silver Mountain
                </h1>
                <p className="mt-16 text-lg ">
                  Standing as a global leader in wholesale trading and logistics
                  solutions, Silver mountain delivers unmatched excellence
                  across suply chains worldwide. Our comprehensive services
                  extends to products such as Oil and its Products, Natural
                  Rubber, and Wood Pellets.
                </p>
                <p className="mt-6 text-lg">
                  Partner with Silver Mountain and experience the future of
                  logistics -- where precision meets performance, and global
                  commerce knows no bounds.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
