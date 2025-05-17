"use client";

import React from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Search } from "lucide-react";

export default function RentalFilter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 font-yekan">
      {/* Search (Right aligned on desktop) */}
      <div className="md:col-span-3 order-1 md:order-none">
        <label className="block mb-1 text-sm text-gray-950 font-semibold text-right">
          جستجو
        </label>
        <Input
          placeholder=" جستجو کنید ..."
          startContent={
            // <Search className="text-default-400 pointer-events-none flex-shrink-0" />
            <img src='/Frame 81.svg' className="w-10 h-10 relative -right-4"  />
          }
          className="w-full"
        />
        
      </div>

      {/* Sorting */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">
          مرتب سازی بر اساس
        </label>
        <Select placeholder="انتخاب کنید">
          <SelectItem key="1" value="date">
            تاریخ
          </SelectItem>
          <SelectItem key="2" value="price">
            قیمت
          </SelectItem>
        </Select>
      </div>

      {/* Location */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">محل مورد نظر</label>
        <Select placeholder="انتخاب کنید">
          <SelectItem key="1" value="rasht">
            رشت
          </SelectItem>
          <SelectItem key="2" value="tehran">
            تهران
          </SelectItem>
        </Select>
      </div>

      {/* Property Type */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">نوع ملک</label>
        <Select placeholder="انتخاب کنید">
          <SelectItem key="1" value="villa">
            ویلا
          </SelectItem>
          <SelectItem key="2" value="apartment">
            آپارتمان
          </SelectItem>
        </Select>
      </div>

      {/* Deal Type */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">نوع معامله</label>
        <Select placeholder="انتخاب کنید">
          <SelectItem key="1" value="rent">
            اجاره
          </SelectItem>
          <SelectItem key="2" value="sell">
            فروش
          </SelectItem>
        </Select>
      </div>

      {/* Empty for spacing on desktop */}
      {/* <div className="md:col-span-2 hidden md:block" /> */}

      {/* Max Price */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">حداکثر قیمت</label>
        <Input placeholder="وارد کنید" type="number" />
      </div>

      {/* Min Rent */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">حداقل اجاره</label>
        <Input placeholder="وارد کنید" type="number" />
      </div>

      {/* Max Rent */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">حداکثر اجاره</label>
        <Input placeholder="وارد کنید" type="number" />
      </div>

      {/* Min Area */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">حداقل متراژ</label>
        <Input placeholder="وارد کنید" type="number" />
      </div>

      {/* Max Area */}
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm text-gray-950 font-semibold">حداکثر متراژ</label>
        <Input placeholder="وارد کنید" type="number" />
      </div>
    </div>
  );
}
