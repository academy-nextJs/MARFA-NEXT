"use client";

import { PropertyCard } from "./CardProperty";

const dummyImages = [
  "/cardSlider2.png",
  "/cardSlider2.png",
  "/cardSlider2.png",

];

export default function SpecialDiscountCard() {
  return (
    <div className="flex justify-center  gap-4 w-[303px] h-[463px]">
      <PropertyCard
        images={dummyImages}
        title="آپارتمان لوکس زعفرانیه"
        location="تهران، زعفرانیه"
        bedrooms={2}
        bathrooms={2}
        guests={4}
        price={150000000}
        oldPrice={2000000}
      />
    </div>
  );
}
