"use client";

import { CardProperty } from "./CardProperty";

const dummyImages = [
  "/cardSlider2.png",
  "/hero.png",
  "/cardSlider2.png",
];

export default function SpecialDiscountCard({data}) {
  return (
    <div className="flex justify-center  gap-4 w-[303px] h-[463px]">
      <CardProperty
        images={dummyImages}
        title={data.title}
        location= {data.address}
        bedrooms={data.rooms}
        rating={Number(data.rate)}
        bathrooms={data.bathrooms}
        guests={data.capacity}
        price={Number(data.price)}
        oldPrice={12000000}
      />
    </div>
  );
}
