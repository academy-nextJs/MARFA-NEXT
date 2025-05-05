"use client"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
const slides = [
  { src: "/image/01.jpg", text: "به دنیای آلفا خوش آمدید" },
  { src: "/image/02.jpg", text: "با آلفا آینده را بسازید" },
  { src: "/image/03.jpg", text: "تجربه‌ای متفاوت با ثبت‌نام شما" },
];

const SliderRegister=()=> {
  const [index, setIndex] = useState(0);

  // تغییر خودکار عکس هر 5 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <Image
          src={slides[index].src}
          alt={`Slide ${index}`}
          fill
          className="opacity-70 w-full h-full object-cover transition-all duration-500"
          priority
        />
        <div className="absolute inset-0 flex justify-center items-center px-6 text-white text-center">
          <h2 className="bg-black/40 p-4 rounded-lg font-bold text-3xl">
            {slides[index].text}
          </h2>
        </div>
      </div>

      {/* دکمه‌های چپ و راست */}
      <div className="bottom-4 left-4 z-10 absolute flex gap-2">
        <Button isIconOnly onClick={prevSlide} variant="flat" size="sm">
          <FaChevronLeft />
        </Button>
        <Button isIconOnly onClick={nextSlide} variant="flat" size="sm">
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}
export default SliderRegister;
