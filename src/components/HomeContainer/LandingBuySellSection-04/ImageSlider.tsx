import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  rating?: number;
  discountPercent?: number;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  rating,
  discountPercent,
}) => {
  return (
    <div className="relative w-full h-[266px] rounded-xl overflow-hidden">
      {(rating || discountPercent) && (
        <div className="absolute top-2 left-1 flex gap-2 z-10">
          {discountPercent && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 flex items-center justify-center gap-2 rounded-full shadow-md">
              %{discountPercent}-
            </span>
          )}
          {rating && (
            <span className="bg-[#7575FE] text-white text-xs px-2 py-1 flex items-center justify-center gap-2 rounded-full shadow-md">
              {rating.toFixed(1)}{" "}
              <Image src="/Frame (3).png" alt="love" width={24} height={24} />
            </span>
          )}
        </div>
      )}

      <Swiper modules={[Navigation]} navigation loop className="h-full">
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`slide-${i}`}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
