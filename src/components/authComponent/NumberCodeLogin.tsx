"use client";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const OtpInputComponent = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="flex my-6  w-full max-w-md mx-auto flex-col items-center rounded-lg  p-4">
      <p className="text-right w-full pr-4 font-semibold text-sm mb-2">کد تایید</p>
      <div className="flex gap-5 justify-center">
        {otp.map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            className="w-14 h-14 text-center text-2xl rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <div className="flex items-center mt-4 text-sm gap-4">
        بعد از اتمام ۲ دقیقه ارسال مجدد فعال می‌شود
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
          {`${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(
            timer % 60
          ).padStart(2, "0")}`}
        </span>
      </div>
    </div>
  );
};

export default OtpInputComponent;
