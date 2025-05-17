import ChipText from '@/components/common/chipLabel/ChipText';
import SpecialDiscountCard2 from '@/components/HomeContainer/BuySellHote-07/SpecialDiscountCard2';
import api from '@/utils/service/api';
import React from 'react'

const RecemendaitionComponent =async () => {
  const { data: offer } = await api.get(
    "/houses?limit=8&sort=price&order=DESC&transactionType="
  );
  if (!offer)
    throw new Error(
      "Failed to fetch Discounted Houses, Please try again later."
    );
  
  return (
    <div className="my-16">
           <ChipText ChipText={"اگهی های مشابه "} />
      
      <div className="flex justify-center mt-16 items-center gap-4">
        {offer?.map((offer: any) => (
          <SpecialDiscountCard2  key={offer.id ?? index} data={offer} />
        ))}
      </div>
    </div>
  )
}

export default RecemendaitionComponent



