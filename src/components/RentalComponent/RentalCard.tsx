"use client";
import React from "react";
import { Card, Chip, Image } from "@nextui-org/react";
import {
  BedIcon,
  CarIcon,
  BathIcon,
  MapPinIcon,
  ArrowLeftIcon,
} from "lucide-react";
import Link from "next/link";

interface RentalCardProps {
  title: string;
  rating: string;
  location: string;
  image: string;
  bedrooms: number;
  parking: number;
  baths: number;
  price: string;
  link: string;
}

export default function RentalCard({
  title,
  rating,
  location,
  image,
  bedrooms,
  parking,
  baths,
  price,
  link,
}: RentalCardProps) {
  return (
    <Card shadow="sm" className="w-full max-w-[600px] rounded-2xl p-4 font-yekan border-none shadow-none">
      <div className="flex flex-col md:flex-row gap-4">
        {/* تصویر */}
        <div className="w-full md:w-[230px] h-[230px] flex-shrink-0">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <Image
              alt="نمای ساختمان"
              src={image}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* متن‌ها */}
        <div className="flex flex-col justify-between gap-2 flex-1">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-1">{title}</h3>
            <Chip
              color="primary"
              variant="flat"
              startContent={<img src="/Framestar.svg" alt="" />}
              className="text-xs bg-[#7575FE] text-white font-semibold"
            >
              {rating}
            </Chip>
          </div>

          <div className="flex items-center text-sm text-gray-600 gap-1 truncate">
            <MapPinIcon size={16} />
            {location}
          </div>

          <div className="flex gap-4 text-sm text-gray-700 flex-wrap">
            <div className="flex items-center gap-1">
              <BedIcon size={16} /> {bedrooms} خواب
            </div>
            <div className="flex items-center gap-1">
              <CarIcon size={16} /> {parking} پارکینگ
            </div>
            <div className="flex items-center gap-1">
              <BathIcon size={16} /> {baths} حمام
            </div>
          </div>

          <div className="flex justify-between items-center pt-1">
            <span className="font-bold text-lg text-gray-800">{price} تومان</span>
            <Link
              href={link}
              className="text-primary text-sm font-medium flex items-center gap-1 transition-transform duration-200 hover:-translate-x-1"
            >
              مشاهده جزئیات
              <ArrowLeftIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}



