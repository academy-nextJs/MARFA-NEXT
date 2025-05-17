"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  {
    id: 1,
    src: "/image/heropic.jpg",
    alt: "Main Image",
  },
  {
    id: 2,
    src: "/image/register1.png",
    alt: "Thumbnail 1",
  },
  {
    id: 3,
    src: "/image/heropic.jpg",
    alt: "Thumbnail 2",
  },
  {
    id: 4,
    src: "/image/register1.png",
    alt: "Thumbnail 3",
  },
  {
    id: 5,
    src: "/image/heropic.jpg",
    alt: "Thumbnail 4",
  },
];

export default function Gallery() {
  return (
    <div className="w-[95%] ml-14 mr-14 h-[680px] flex my-12 flex-col  justify-center items-center mx-auto md:flex-row gap-4">
      {/* سمت راست - گالری کوچک */}
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 md:flex-1 h-60 md:h-full">
        {galleryImages.slice(1).map((image, index) => (
          <div
            key={image.id}
            className={`relative h-28 md:h-auto rounded-3xl  overflow-hidden ${
              index === 3 ? "order-last" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            {index === 3 && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm">
                +12 عکس دیگر
              </div>
            )}
          </div>
        ))}
      </div> */}
       <div className="grid grid-cols-2 grid-rows-2 gap-4 md:flex-1 h-60 md:h-full">
      {galleryImages.slice(1).map((image, index) => (
        <div
          key={image.id}
          className={`relative h-28 md:h-auto rounded-3xl overflow-hidden ${index === 2 ? 'order-4' : index === 3 ? 'order-3' : ''}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          {index === 3 && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm">
              +12 عکس دیگر
            </div>
          )}
        </div>
      ))}
    </div>
      {/* سمت چپ - عکس اصلی */}
      <div className="relative h-60 md:h-full md:flex-1 rounded-md overflow-hidden">
        <Image
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
