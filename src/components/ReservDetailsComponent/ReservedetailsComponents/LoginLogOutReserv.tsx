"use client";

import React, { useState } from "react";
// import React from 'react'

const LoginLogOutReserv = () => {
  const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [guests, setGuests] = useState(1);
  
    const calculatePrice = () => {
      const days =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      return days > 0 ? days * 150000 : 0; // قیمت هر شب: 150,000 تومان
    };
  return (
    <div className="space-y-4">
    <div className="flex justify-between gap-3 w-[95%] mx-auto items-center p-2">
      <div className="w-[50%]">
        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
          تاریخ ورود
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-[50%]">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          تاریخ خروج
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="flex justify-between gap-3 w-[95%] mx-auto items-center p-2">
      <div className="w-[50%]">
        <label className="block   text-sm font-medium text-gray-700 dark:text-white mb-1">
          تعداد نفرات
        </label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full w-[50%] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} نفر
            </option>
          ))}
        </select>
      </div>

      <div className="w-[50%]">
        <p className="text-gray-600 dark:text-white">مجموع:</p>
        <p className="text-lg font-semibold text-blue-700">
          {calculatePrice().toLocaleString()} تومان
        </p>
      </div>
    </div>
  </div>
  )
}

export default LoginLogOutReserv
