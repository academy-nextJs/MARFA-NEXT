"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import CardCategorySlider from "../common/Card/CardCategorySlider/CardCategorySlider";

const properties = [
  { id: 1, title: "ملک استخردار", image: "/image/10.png" },
  { id: 2, title: "ویلا جنگلی", image: "/image/10.png" },
  { id: 3, title: "آپارتمان شیک", image: "/image/10.png" },
  { id: 4, title: "ملک استخردار", image: "/image/10.png" },
  { id: 5, title: "ویلا جنگلی", image: "/image/10.png" },
  { id: 6, title: "آپارتمان شیک", image: "/image/10.png" },
];

export default function PropertySwiper() {
  return (
    <div dir="rtl" className="mx-auto px-4 py-10 w-full max-w-6xl">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {properties.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-black shadow-aum border rounded-xl h-auto overflow-hidden">
              {/* <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              /> */}
              <CardCategorySlider/>
              <div className="p-4 font-semibold text-gray-800 text-right">
                {/* {item.title} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



