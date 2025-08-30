import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const photos = [
  "../../assets/images/gallery1.jpg",
  "../../assets/images/gallery2.jpg",
  "../../assets/images/gallery5.jpg",
  "../../assets/images/gallery3.jpg",
  "../../assets/images/gallery4.jpg",
  "../../assets/images/gallery6.jpg",
  
];

export default function Gallery() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#a3755f]">
      <h2
        className="text-4xl uppercase beige mb-12"

      >
        Gallery
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {photos.map((src, i) => (
          <SwiperSlide key={i} className="aspect-square">
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
