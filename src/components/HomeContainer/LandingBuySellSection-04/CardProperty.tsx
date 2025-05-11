"use client";

import { ImageSlider } from "./ImageSlider";
import { PropertyInfo } from "./PropertyInfo";


interface PropertyCardProps {
  images: string[];
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  price: number;
  oldPrice: number;
  rating : number;
}

export const CardProperty: React.FC<PropertyCardProps> = (props) => {
  return (
    <div className=" h-[266px]  w-[287px] max-w-xs rounded-2xl">
      <ImageSlider images={props.images} rating={props.rating} discountPercent={15} />
      <PropertyInfo
        title={props.title}
        location={props.location}
        bedrooms={props.bedrooms}
        bathrooms={props.bathrooms}
        guests={props.guests}
        price={props.price}
        oldPrice={props.oldPrice}

      />
    </div>
  );
};
