"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef } from "react";
import SliderButtonsCard from "@/components/common/Button/SliderButtonsCard";

interface ImageSliderProps {
  images: string[];
  rating?: number;
  discountPercent?: number;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  rating,
  discountPercent,
}) => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
      {(rating || discountPercent) && (
        <div className="absolute top-2 left-1 flex gap-2 z-10 rounded-3xl">
          {discountPercent && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 flex items-center justify-center gap-2 rounded-full shadow-md">
              %{discountPercent}-
            </span>
          )}
          {rating && (
            <span className="bg-[#7575FE] text-white text-xs px-2 py-1 flex items-center justify-center gap-2 rounded-full shadow-md">
              {rating.toFixed(1)}{" "}
              <Image src="/Frame (3).png" alt="love" width={24} height={24} />
            </span>
          )}
        </div>
      )}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        className="h-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`slide-${i}`}
              width={800}
              height={500}
              className="w-full rounded-3xl h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه‌های ناوبری سفارشی */}
  
      <SliderButtonsCard onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};
