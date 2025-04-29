"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";

export default function CommentsCard() {
  // const CardClassSelected = "max-w-[385px] rounded-[32px] p-7 bg-[#7575fe] text-[#FFFFFF]";
  // const CardBodyClassSelected = "text-base font-medium";
  // const TagPSelected = 'w-[338px] h-[312px] text-justify';
  ///////////////////////TAG P LOREM
  //   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
  //   استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
  //   ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
  //   کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
  //   در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
  //   طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
  //   الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
  //   صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
  //   شرایط سخت تایپ به پایان رسد

  return (
    <Card className="max-w-[279px] rounded-[32px] px-auto max-h-[309px] bg-[#F9F9F9] text-[#1E1E1E]">
      <CardBody className="text-xs leading-6 font-medium">
        <p className="w-[247px] h-[192px] text-justify ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
        </p>
        <div className="flex gap-3 ">
          <div
            aria-label="computer"
            className=" w-12 h-12 rounded-full bg-[#A5A5A5]"
            role="img"
          ></div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-base"> پارسا آقایی</h1>
            <h1 className="font-medium text-sm text-[#595959]">
              
              12 مرداد 1403
            </h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
