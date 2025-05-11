import React from "react";
import LandingBuySellSection from "./LandingBuySellSection";
import SpecialDiscountCard from "./SpecialDiscountCard";

const OffBuySellComponent = ({ offer }) => {
  return (
    <div className="mr-14 w-[97%]">
      <LandingBuySellSection
        title="تخفیفات "
        text1="  تخفیفات ویژه"
        text2=" برای شروع بهار "
      />
      <div className="flex justify-center mt-16 items-center gap-4">
        {offer?.map((offer: any) => (
          <SpecialDiscountCard key={offer.id ?? index} data={offer} />
        ))}
      </div>
    </div>
  );
};

export default OffBuySellComponent;
