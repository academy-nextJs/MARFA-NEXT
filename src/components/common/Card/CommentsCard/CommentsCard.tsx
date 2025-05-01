"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";

export default function CommentsCard({
<<<<<<< HEAD
  text = "",
=======
>>>>>>> 9636f9b1c7ee0a2036c35f5742bbb286da5fb3d3
  name = " پارسا آقایی",
  date = "12 مرداد 1403",
  isActive = false,
  isHidden = false,
}) {
<<<<<<< HEAD
  // const CardClassSelected = "max-w-[385px] rounded-[32px] p-7 bg-[#7575fe] text-[#FFFFFF]";
  // const CardBodyClassSelected = "text-base font-medium";
  // const TagPSelected = 'w-[338px] h-[312px] text-justify';
  ///////////////////////TAG P LOREM
=======
>>>>>>> 9636f9b1c7ee0a2036c35f5742bbb286da5fb3d3
  //   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
  //   استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
  //   ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
  //   کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
  //   در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
  //   طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
  //   الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
  //   صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
  //   شرایط سخت تایپ به پایان رسد
  const bgColor = isActive ? "bg-[#7575FE]" : "bg-[#F9F9F9] dark:bg-darkMode";
  const txtColor = isActive ? "white" : "";
  return (
    <Card
      className={`flex flex-col justify-between min-w-[350px] rounded-3xl p-2 h-[350px] aspect-square transition-colors duration-300 text-${txtColor} ${bgColor}`}
    >
      {!isHidden && (
        <CardBody className="font-medium text-xs leading-6">
          <p className="w-[247px] h-[192px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
          </p>
          <div className="flex gap-3">
            <div
              aria-label="computer"
              className="bg-[#A5A5A5] rounded-full w-12 h-12"
              role="img"
            ></div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-base">{name}</h1>
              <h1 className="font-medium text-[#595959] text-sm">{date} </h1>
            </div>
          </div>
        </CardBody>
      )}
    </Card>
  );
}