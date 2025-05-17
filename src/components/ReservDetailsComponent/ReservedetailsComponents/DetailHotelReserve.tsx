import React from "react";
import HotelDetailsLeft from "./HotelDetailsLeft";
import ReservFoormRaight from "./ReservFoormRaight";
import RecemendaitionComponent from "./RecemendaitionComponent";

const DetailHotelReserve = () => {
  return (
   <>
    <div className="flex  flex-col gap-2 justify-between mx-auto w-[97%] md:flex-row ">
      <ReservFoormRaight/>
      <HotelDetailsLeft />
    </div>
    <div>
      {/* آگهی مشایه */}
      <RecemendaitionComponent/>
    </div>
   </>
  );
};

export default DetailHotelReserve;
