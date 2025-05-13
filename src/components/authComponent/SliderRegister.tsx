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
        src: "/image/register1.png",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیتجربه‌ای متفاوت با ثبت‌نام شما",
      },
];


const SliderRegister = ({ isActive }: TPropsClient) => {
  const [index, setIndex] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.transition = "none";
      circleRef.current.style.strokeDashoffset = circumference.toString();
      setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.style.transition = "stroke-dashoffset 5s linear";
          circleRef.current.style.strokeDashoffset = "0";
        }
      }, 50);
    }
  }, [index]);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-[50%] h-[780px] rounded-[32px] overflow-hidden">
      <Image src={slides[index].src} alt={`Slide ${index}`} fill className="object-cover transition-opacity duration-500" />

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
          <circle ref={circleRef} stroke="#ccc" fill="transparent" strokeWidth="3" r={radius} cx="22" cy="22" strokeDasharray={circumference} strokeDashoffset={circumference} />
        </svg>
      </div>
    </div>
  );
};

export default SliderRegister;
