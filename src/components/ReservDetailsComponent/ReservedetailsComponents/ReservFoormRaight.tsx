"use client";

import React, { useState } from "react";
import { FiWifi, FiCoffee, FiTv, FiMapPin } from "react-icons/fi";
import HotelFacilities from "../HotelFacilities";
import LoginLogOutReserv from "./LoginLogOutReserv";

export default function ReservFoormRaight() {
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
      <h2 className="text-lg font-semibold text-blue-700">
        همین حالا رزرو کنید
      </h2>
      <LoginLogOutReserv />
      <button
        className="w-[95%] bg-blue-600 mx-auto text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => alert("رزرو شما با موفقیت ثبت شد!")}
      >
        همین الان رزرو کن
      </button>
    </div>
  );
}
