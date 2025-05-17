import DetailHotelReserve from "@/components/ReservDetailsComponent/ReservedetailsComponents/DetailHotelReserve";
import GalleryHouses from "@/components/ReservDetailsComponent/GalleryHouses";
import HotelHeaderHousePage from "@/components/ReservDetailsComponent/HotelHeaderHousePage";
import React from "react";

const ReservHours = () => {
  return (
    <div>
      <GalleryHouses />
      <HotelHeaderHousePage />
      <DetailHotelReserve />
    </div>
  );
};

export default ReservHours;
