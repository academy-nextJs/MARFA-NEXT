"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import ClientComponents from "./ClientComponents";

export default function CommentsCard({ isActive = false, isHidden = false }) {
  const bgColor = isActive ? "bg-[#7575FE]" : "bg-[#F9F9F9]  dark:bg-gray-900 dark:text-white";
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

       
          <ClientComponents name=" پارسا آقایی " date="12 مرداد 1403 " isActive={isActive} />
        </CardBody>
      )}
    </Card>
  );
}
