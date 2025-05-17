import GalleryHouses from "@/components/ReservDetailsComponent/GalleryHouses";
import HotelHeaderHousePage from "@/components/ReservDetailsComponent/HotelHeaderHousePage";
import React from "react";
import DetailHotelBuy from "@/components/ReservDetailsComponent/BuyDetailsComponents/DetailHotelBuy";
// import RoutPageurl from "@/components/common/RoutPageurl";

const ReservHours = () => {
  return (
    <div>
      {/* <RoutPageurl label={"خانه"} hrf={"/"} /> */}
      <GalleryHouses />
      <HotelHeaderHousePage />
      <DetailHotelBuy />
    </div>
  );
};

export default ReservHours;
