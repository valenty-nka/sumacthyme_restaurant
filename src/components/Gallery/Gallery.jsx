import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import gallery0 from "../../assets/images/gallery/gallery0.jpg";
import gallery1 from "../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../assets/images/gallery/gallery6.jpg";
import gallery7 from "../../assets/images/gallery/gallery7.jpeg";
import gallery8 from "../../assets/images/gallery/gallery8.jpg";
import gallery9 from "../../assets/images/gallery/gallery9.jpg";
import gallery10 from "../../assets/images/gallery/gallery10.jpg";
import gallery11 from "../../assets/images/gallery/gallery11.jpg";
import gallery12 from "../../assets/images/gallery/gallery12.jpg";
import gallery13 from "../../assets/images/gallery/gallery13.jpg";
import gallery14 from "../../assets/images/gallery/gallery14.jpg";
import gallery15 from "../../assets/images/gallery/gallery15.jpg";



const photos = [gallery0, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15];

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
