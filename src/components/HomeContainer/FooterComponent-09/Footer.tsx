import React from "react";

export default function Footer() {
  return (
    <main className="flex lg:flex-row  xl:flex-nowrap flex-wrap justify-between gap-y-8">
      <p className="lg:w-[55%] xl:w-[30%] md:w-full    dark:text-white text-black">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه
      </p>
      <div className="flex flex-col gap-3 text-[#AAAAAA] md:w-[30%] xl:w-[23%] xl:mr-12 font-light">
        <p className="text-2xl text-black  dark:text-white  font-medium">نحوه رزرو اقامتگاه</p>
        <span className="hover:text-black cursor-pointer">
          راهنمای رزرو اقامتگاه
        </span>
        <span className="hover:text-black  dark:text-white cursor-pointer">شیوه پرداخت</span>
        <span className="hover:text-black cursor-pointer">
          لغو رزرو اقامتگاه
        </span>
      </div>
      <div className="flex flex-col gap-3 dark:text-white text-[#AAAAAA] md:w-[30%] xl:w-[23%] font-light">
        <p className="text-2xl text-black  dark:text-white  font-medium">خدمات مشتریان</p>
        <span className="hover:text-black cursor-pointer">
          پرسش های متداول مهمان
        </span>
        <span className="hover:text-black cursor-pointer">
          پرسش های متداول میزبان
        </span>
        <span className="hover:text-black cursor-pointer">
          چطور اقامتگاه ثبت کنم ؟ dark:text-white 
        </span>
        <span className="hover:text-black cursor-pointer">
          حریم شخصی کاربران
        </span>
      </div>
      <div className="flex flex-col gap-3 text-[#AAAAAA] md:w-[30%] xl:w-[23%] font-light">
        <p className="text-2xl text-black  dark:text-white font-medium">راه ارتباطی آلفا </p>
        <span className="hover:text-black cursor-pointer text-right">
         09119134451 - 0911***5006  -  09199270177
        </span>
        <span className="hover:text-black cursor-pointer"> MARFA@gmail.com</span>
        <span className="hover:text-black cursor-pointer">
          گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده
        </span>
      </div>
    </main>
  );
}
