"use client";

import React, { useState } from "react";
import { FiWifi, FiCoffee, FiTv, FiMapPin } from "react-icons/fi";
import HotelFacilities from "../HotelFacilities";
import LoginLogOutReserv from "../ReservedetailsComponents/LoginLogOutReserv";
import ChipText from "@/components/common/chipLabel/ChipText";

export default function BuyFoormRaight() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState(1);

  const calculatePrice = () => {
    const days =
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
    return days > 0 ? days * 150000 : 0; // قیمت هر شب: 150,000 تومان
  };

  return (
    <div className="bg-white  dark:bg-slate-900 font-yekan p-4 pr-0 rounded-lg  ml-14 mr-14 mx-auto  gap-5 space-y-4 w-full  md:w-[40%] ">
      <div>
        <HotelFacilities />
      </div>

      <ChipText ChipText={" قیمت رهن و اجاره و اطلاعات تماس"} />
      <div className="border-r-1 space-y-3 flex flex-col p-3 my-2">
        <span className=" text-blue-700">قیمت رهن از</span>
        <span>1200000</span>
      </div>
      <div className="flex  justify-between items-center ">
        <div className="border-r-1 space-y-3 flex flex-col p-3 my-2">
          <span>عباس بهبودی</span>
          <span>تاریخ 15 اردیبهشت </span>
        </div>

        <button
          className="w-1/2 bg-blue-600 mx-auto text-white h-12 rounded-full hover:bg-blue-700 transition"
          onClick={() => alert("رزرو شما با موفقیت ثبت شد!")}
        >
          شماره تماس 09111114455
        </button>
      </div>
    </div>
  );
}
