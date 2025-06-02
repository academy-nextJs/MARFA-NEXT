"use client";
import { SlLocationPin } from "react-icons/sl";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  // Avatar,
} from "@heroui/react";

import {
  // MapPin,
  // Heart,
  // PercentCircle,
  BedDouble,
  CalendarCheck,
} from "lucide-react";

import Image from "next/image";

type showMapProps = {
  showMap: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ReserveCard({ showMap, setShowMap }: showMapProps) {
  return (
    <Card className="w-full max-w-[260px] sm:w-[260px] h-96 rounded-xl shadow-md overflow-hidden text-right font-bold font-yekan dark:bg-gray-900 mx-auto">
      <CardHeader className="relative p-0">
        <img
          src="/heropic.jpg"
          alt="house"
          className="w-full h-[180px] object-cover"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
            {/* <PercentCircle size={12} className="ml-1" /> */}
            ۱۵٪-
          </span>
          <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 cursor-pointer">
            {/* <Heart size={12} className="ml-1" /> */}
            ۴.۵
            <Image src="/Frame (3).png" alt="love" width={24} height={24} />
          </span>
        </div>

        {/* Map toggle button */}
        <div className="absolute bottom-2 left-2 ">
          <Button
            size="sm"
            className="text-xs px-3 py-1 bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => setShowMap(!showMap)}
          >
            <SlLocationPin />
            {showMap ? "بستن نقشه" : "نمایش داخل نقشه"}
          </Button>
        </div>
      </CardHeader>

      <CardBody className="space-y-2 px-4 pt-3 pb-0 text-right py-4">
        <h3 className="font-semibold text-base py-2">هتل سراوان رشت</h3>
        <div className="flex flex-wrap items-center justify-between text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> تهران، زعفرانیه
          </span>
          <span className="flex items-center gap-1">
            <CalendarCheck size={14} /> ۶ شب
          </span>
          <span className="flex items-center gap-1">
            {/* <MapPin size={14} /> */}
          </span>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between items-center px-4 pb-4 pt-2 font-bold">
        <span className="text-primary  text-sm">۱٬۵۰۰٬۰۰۰ تومان /</span>
        <span className="line-through text-gray-400 text-xs">
          ۲٬۵۰۰٬۰۰۰ تومان
        </span>
      </CardFooter>

      {/* نمایش نقشه */}
      {/* {showMap && (
        <div className="p-2">
          <iframe
            src="https://maps.google.com/maps?q=zaferaniyeh%20tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="150"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      )} */}
    </Card>
  );
}
