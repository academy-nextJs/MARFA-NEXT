"use client";
import React from "react";
// import { Button } from "@heroui/react";
import Image from "next/image";
import UserCommentsReserv from "../UserCommentsReserv";
import ChipText from "../../common/chipLabel/ChipText";

export default function BuyDetailsLeft() {
  return (
    <div className="bg-white font-yekan dark:bg-slate-900 p-4  rounded-lg  space-y-4 w-full md:w-[60%]">
      <ChipText ChipText={"درباره ملک"} />
      {/* <h2 className="text-xl font-semibold">چرا هتل همایون رو انتخاب کنیم؟</h2> */}
      <p className="text-gray-600 dark:text-white text-sm leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <ChipText ChipText={"موقعیت مکانی "} />
      <span>نقشه جااااااااااااااااااااااای</span>
      <div className="pt-16">
        <ChipText ChipText={"نظرات کاربران "} />
        <span className="text-[#7575FE] mr-10">+ نظر شما </span>
        <UserCommentsReserv />
      </div>
    </div>
  );
}
