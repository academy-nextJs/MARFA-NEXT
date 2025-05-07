"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonEmpty } from "../common/Button/button";
import ClientComponents from "../common/Card/CommentsCard/ClientComponents";
import { TPropsClient } from "@/types/types";

const slides = [
  {
    src: "/image/register1.png",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیه دنیای آلفا خوش آمدید",
  },
  {
    src: "/image/register1.png",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیا آلفا آینده را بسازید",
  },
  {
    src: "/image/register1.png",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیتجربه‌ای متفاوت با ثبت‌نام شما",
  },
];

const SliderRegister = ({ isActive }: TPropsClient) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-[704px] h-[720px] rounded-[32px] overflow-hidden">
      <Image
        src={slides[index].src}
        alt={`Slide ${index}`}
        fill
        className="object-cover"
      />

      <div className="absolute bottom-24 w-full flex justify-center px-6">
        <h2 className="bg-black/40 backdrop-blur-sm rounded-xl text-white text-justify text-base p-4 max-w-[90%] leading-relaxed">
          {slides[index].text}
        </h2>
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-2">
        <ButtonEmpty className="bg-white/20 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/image/Vector(1).png" alt="prev" width={10} height={10} />
        </ButtonEmpty>
        <ButtonEmpty className="bg-white/20 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/image/Vector(2).png" alt="next" width={10} height={10} />
        </ButtonEmpty>
      </div>

      <div className="absolute bottom-6 right-6 text-white">
        <ClientComponents
          name="پارسا آقایی"
          date="12 مرداد 1403"
          isActive={isActive}
        />
      </div>
    </div>
  );
};

export default SliderRegister;
