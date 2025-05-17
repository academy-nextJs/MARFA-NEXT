"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ButtonEmpty } from "../common/Button/button";
import ClientComponents from "../common/Card/CommentsCard/ClientComponents";
import { TPropsClient } from "@/types/types";

const slides = [
  {
    id:1,
    src: "/image/register1.png",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیه دنیای آلفا خوش آمدید",
  },
  {
    id:2,
    src: "/image/heropic.jpg",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیا آلفا آینده را بسازید",
  },
  {
    id:3,
    src: "/image/01.jpg",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیتجربه‌ای متفاوت با ثبت‌نام شما",
  },
  {
    id: 4,
    src: "/image/03.jpg",
    text: "  تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص"
  },
];

const SliderRegister = ({ isActive }: TPropsClient) => {
  const [index, setIndex] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const slideDuration = 10000; 
  const imageDuration = slideDuration / slides.length;
  const progressRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const startTimer = () => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      progressRef.current += 100;
      updateCircleAnimation();
      if (progressRef.current >= slideDuration) {
        progressRef.current = 0; 
      }

      setIndex(Math.floor((progressRef.current / slideDuration) * slides.length));
    }, 100);
  };

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const updateCircleAnimation = () => {
    if (circleRef.current) {
      const offset = circumference - (circumference * (progressRef.current / slideDuration));
      circleRef.current.style.strokeDashoffset = `${offset}`;
    }
  };

  const nextSlide = () => {
    clearTimer();
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    progressRef.current = (index + 1) * imageDuration;
    updateCircleAnimation();
    startTimer();
  };

  const prevSlide = () => {
    clearTimer();
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    progressRef.current = (index - 1 + slides.length) * imageDuration;
    updateCircleAnimation();
    startTimer();
  };

  return (
    <div className="relative w-[50%] h-[780px] rounded-[32px] overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, i) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={`Slide ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-24 w-full flex justify-center px-6">
        <h2 className="bg-black/40 backdrop-blur-sm rounded-xl text-white text-justify text-base p-4 max-w-[90%] leading-relaxed">
          {slides[index].text}
        </h2>
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-2">
        <ButtonEmpty onClick={prevSlide} className="bg-white/20 w-8 h-8 rounded-full">❮</ButtonEmpty>
        <ButtonEmpty onClick={nextSlide} className="bg-white/20 w-8 h-8 rounded-full">❯</ButtonEmpty>
      </div>

      <div className="absolute bottom-6 right-6 text-white">
        <ClientComponents name="پارسا آقایی" date="12 مرداد 1403" isActive={isActive} />
      </div>

      <div className="absolute bottom-5 left-32 flex gap-4 z-10">
        <svg width="45" height="45" className="-rotate-90 -scale-y-100">
          <circle stroke="#6c63ff" fill="transparent" strokeWidth="3" r={radius} cx="22" cy="22" />
          <circle
            ref={circleRef}
            stroke="#ccc"
            fill="transparent"
            strokeWidth="3"
            r={radius}
            cx="22" cy="22"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
      </div>
    </div>
  );
};

export default SliderRegister;


