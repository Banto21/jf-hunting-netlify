"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
];

const ImageCarousel = () => {
  return (
    <div className="flex w-dvw max-w-5xl place-self-center items-center  p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 300000000 }}
        breakpoints={{
          1024: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
        }}
        className="flex place-self-center items-center rounded-lg m-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex place-self-center items-center m-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="flex place-self-center items-center object-fill rounded-lg m-0"
            />
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
};

export default ImageCarousel;
