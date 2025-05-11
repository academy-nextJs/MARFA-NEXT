"use client";

import { ImageSlider2 } from "./ImageSlider2";
import { PropertyInfo2 } from "./PropertyInfo2";


interface PropertyCardProps {
  images: string[];
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  price: number;
  oldPrice: number;
  rating: number;
}

export const CardProperty2: React.FC<PropertyCardProps> = (props) => {
  return (
    <div className=" h-[266px]  w-[287px] max-w-xs rounded-2xl">
      <ImageSlider2 images={props.images} />
      <PropertyInfo2
        title={props.title}
        location={props.location}
        bedrooms={props.bedrooms}
        bathrooms={props.bathrooms}
        guests={props.guests}
        price={props.price}
      />
    </div>
  );
};
