"use client";

import { CardProperty2 } from "./CardProperty2";


const dummyImages = [
  "/cardSlider2.png",
  "/hero.png",
  "/cardSlider2.png",
];

export default function SpecialDiscountCard2({ data }) {
  return (
    <div className="flex justify-center   gap-4 w-[303px] h-[463px]">
      <CardProperty2
        images={dummyImages}
        title={data.title}
        location={data.address}
        bedrooms={data.rooms}
        bathrooms={data.bathrooms}
        guests={data.capacity}
        price={Number(data.price)}
        rating={Number(data.rate)}
      />
    </div>
  );
}
