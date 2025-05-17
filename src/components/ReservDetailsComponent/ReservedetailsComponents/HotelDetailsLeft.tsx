"use client";
import React from "react";
// import { Button } from "@heroui/react";
import Image from "next/image";
import UserCommentsReserv from "../UserCommentsReserv";
import ChipText from "../../common/chipLabel/ChipText";

export default function HotelDetailsLeft() {
  return (
    <div className="bg-white font-yekan dark:bg-slate-900 p-4  rounded-lg  space-y-4 w-full md:w-[60%]">
      <ChipText ChipText={"درباره هتل"} />

      <h2 className="text-xl font-semibold">چرا هتل همایون رو انتخاب کنیم؟</h2>
      <p className="text-gray-600 dark:text-white text-sm leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>

      {/* گالری تصاویر */}
      <div className="flex flex-cols justify-center  items-center gap-3">
        <Image
          src="/heropic.jpg"
          alt="Hotel Image 1"
          width={500}
          height={400}
          className="rounded-md"
        />
        <Image
          src="/image/heropic.jpg"
          alt="Hotel Image 2"
          width={500}
          height={400}
          className="rounded-md"
        />
      </div>

      <div className="pt-16">
        <ChipText ChipText={"نظرات کاربران "} />
        <span className="text-[#7575FE] mr-10">+ نظر شما </span>
        <UserCommentsReserv />
      </div>
    </div>
  );
}
