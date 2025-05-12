"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Button } from "@heroui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CommentsCard from "../../common/Card/CommentsCard/CommentsCard";
const testimonials = [
  {
    name: "پارسا اقایی ",
    date: "2 اردیبهشت 1403",
  },
  {
    name: "پارسا اقایی ",
    date: "2 اردیبهشت 1403",
  },
  {
    name: "پارسا اقایی ",
    date: "2 اردیبهشت 1403",
  },
  {
    name: "پارسا اقایی ",
    date: "2 اردیبهشت 1403",
  },
  {
    name: "پارسا اقایی ",
    date: "2 اردیبهشت 1403",
  },

  {
    name: "پارسا اقایی ",
    date: "2 اردیبهشت 1403",
  },
];

export default function InfiniteCarousel() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="relative mt-5  w-[full] ">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          swiper.slides.forEach((slide, index) => {
            const slideEl = slide as HTMLElement;
            const diff = index - swiper.activeIndex;
            slideEl.style.transition = "transform 0.3s";
            if (diff === 0) {
              slideEl.style.transform = "scale(1)";
              slideEl.style.zIndex = "3";
            } else if (diff === 1) {
              slideEl.style.transform = "scale(0.8) translateX( -80px)";
              slideEl.style.zIndex = "2";
            } else if (diff === -1) {
              slideEl.style.transform = "scale(0.8) translateX( 80px)";
              slideEl.style.zIndex = "2";
            } else if (diff === 2) {
              slideEl.style.transform = "scale(0.6) translateX( -80px)";
              slideEl.style.zIndex = "1";
            } else if (diff === -2) {
              slideEl.style.transform = "scale(0.6) translateX( 80px)";
              slideEl.style.zIndex = "1";
            } else {
              slideEl.style.transform = "scale(0.5)";
              slideEl.style.zIndex = "0";
            }
          });
        }}
        centeredSlides={true}
        loop={true}
        initialSlide={2}
        // className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 10, // reduced from 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20, // reduced from 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30, // reduced from 30
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 90, // reduced from 60
          },
        }}
      >
        {testimonials.map((testimonial, index) => {
          const diff = index - activeIndex;
          const isHidden = diff === 2 || diff === -2;

          return (
            <SwiperSlide
              key={index}
              //  className={styles.slide}
            >
              <CommentsCard
                name={testimonial.name}
                date={testimonial.date}
                isActive={index === activeIndex}
                isHidden={isHidden}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button
        size={isMobile ? "md" : "lg"}
        isIconOnly
        onPress={() => swiperRef.current?.slidePrev()}
        className="top-1/2 -right-2 md:right-[10%] z-10 absolute bg-white shadow-lg hover:shadow-xl rounded-full transition -translate-y-1/2"
      >
        <SlArrowRight color="black" size="1.5em" />
      </Button>
      <Button
        isIconOnly
        size={isMobile ? "md" : "lg"}
        onPress={() => swiperRef.current?.slideNext()}
        className="top-1/2 -left-2 md:left-[10%] z-10 absolute bg-white shadow-lg hover:shadow-xl rounded-full transition -translate-y-1/2"
      >
        <SlArrowLeft color="black" size="1.5em" />
      </Button>
    </div>
  );
}
