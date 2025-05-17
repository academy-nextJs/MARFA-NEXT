import React from "react";
import BuyFoormRaight from "./BuyFoormRaight";
import BuyDetailsLeft from "./BuyDetailsLeft";
import RecemendaitionComponent from "../ReservedetailsComponents/RecemendaitionComponent";

const DetailHotelBuy = () => {
  return (
    <>
      <div className="flex  flex-col gap-2 justify-between mx-auto w-[97%] md:flex-row ">
        <BuyFoormRaight />
        <BuyDetailsLeft />
      </div>
      <div>
        {/* آگهی مشایه */}
        <RecemendaitionComponent />
      </div>
    </>
  );
};

export default DetailHotelBuy;
