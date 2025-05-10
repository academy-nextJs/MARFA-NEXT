import Image from "next/image";

interface PropertyInfoProps {
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  price: number;
  oldPrice?: number;
}

export const PropertyInfo2: React.FC<PropertyInfoProps> = ({
  title,
  location,
  bedrooms,
  bathrooms,
  guests,
  price,
  oldPrice,
}) => {
  return (
    <div className="p-4 space-y-2 text-sm dark:text-white  text-gray-800">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="flex gap-2 text-base font-medium  whitespace-nowrap dark:text-white  text-[#000000]">
        <Image src="/Frame 12.png" alt="frameLocation" width={25} height={25} />
        {location}
      </div>
      <div className="flex items-center justify-between text-xs mt-2">
        <span className="flex items-center justify-center text-base font-medium dark:text-white  text-black gap-2">
          <Image src="/Frame 14.png" alt="bedroom" width={25} height={25} />
          {bedrooms} خواب
        </span>
        <span className="flex items-center justify-center text-base font-medium dark:text-white  text-black gap-2">
          <Image src="/Frame 15.png" alt="bath" width={25} height={25} />
          {bathrooms} حمام
        </span>
        <span className="flex items-center justify-center text-base font-medium dark:text-white  text-black gap-2">
          <Image src="/Frame 16.png" alt="peopele" width={25} height={25} />
          {guests} نفر
        </span>
      </div>
      <div className="text-right space-y-1 flex gap-4 items-center justify-center">
        <div className="text-xl text-[#A6A6A6] flex items-center justify-center gap-1">
          <span className="relative inline-block ">
            {oldPrice?.toLocaleString("fa-IR")}
            <span
              className="absolute left-0 top-1/2 w-full h-[1px] bg-red-600"
              style={{ transform: "rotate(-10deg)" }}
            />
          </span>
          {/* <span className="text-xs">تومان</span>{" "} */}
        </div>
        <div className="text-[#1E1E1E] font-bold text-xl">
          {price.toLocaleString("fa-IR")} 
        </div>
          <span className="text-xs">تومان</span>
      </div>
    </div>
  );
};
