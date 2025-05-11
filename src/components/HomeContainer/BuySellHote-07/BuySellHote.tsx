import React from "react";
import LandingBuySellSection from "../LandingBuySellSection-04/LandingBuySellSection";
import SpecialDiscountCard2 from "@/components/HomeContainer/BuySellHote-07/SpecialDiscountCard2";

const BuySellComponent = ({ offer }) => {
  return (
    <>
      <LandingBuySellSection
        title="خرید و فروش "
        text1="  خرید و فروش های داغ "
        text2=" این هفته   "
      />
      <div className="flex justify-center mt-16 items-center gap-4">
        {offer?.map((offer: any) => (
          <SpecialDiscountCard2  key={offer.id ?? index} data={offer} />
        ))}
      </div>
    </>
  );
};

export default BuySellComponent;
