"use client";

import React, { useState } from "react";
import { FiMapPin, FiHeart, FiSend } from "react-icons/fi";
import { Button, Avatar } from "@heroui/react";

export default function HotelTitle({ name, address, location }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // هندل کردن کلیک روی دکمه ذخیره
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="ml-14 mr-14 flex flex-col md:flex-row items-center justify-between w-[95%]  dark:bg-slate-900 py-4 rounded-md gap-4">
      {/* اطلاعات هتل */}
      <div className="flex items-center gap-3">
        <Avatar
          src={location || "https://via.placeholder.com/40"}
          alt="Hotel Logo"
          size="md"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex items-center text-sm text-gray-500 dark:text-white gap-1">
            <FiMapPin className="text-gray-500 dark:text-white" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      {/* دکمه‌های ذخیره و ارسال */}
      <div className="flex items-center gap-2">
        {/* دکمه ذخیره */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
          onClick={handleFavorite}
          aria-label="ذخیره به علاقه‌مندی‌ها"
        >
          <FiHeart
            className={`text-2xl transition-colors ${
              isFavorite ? "text-red-500 fill-red-500" : " dark:text-white text-gray-400"
            }`}
            style={{ fill: isFavorite ? "currentColor" : "none" }}
          />
        </button>

        {/* دکمه ارسال */}
        <Button
          variant="solid"
          colorScheme="blue"
          className="flex items-center gap-1"
        >
          <FiSend className="text-xl" />
          ارسال
        </Button>
      </div>
    </div>
  );
}
