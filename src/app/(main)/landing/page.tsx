import SpecialDiscountCard from "@/components/common/Card/SpecialDiscountCard/SpecialDiscountCard";
import SpecialDiscountCard2 from "@/components/common/Card/SpecialDiscountCard/SpecialDiscountCard2";
import DreamSection from "@/components/common/dreamDestination/dreamSectionContainer";
import InfiniteCarousel from "@/components/common/InfiniteCarousel";
import { SectionTop } from "@/components/common/sectionTop";
import BrilliantHistory from "@/components/HomeContainer/BrilliantHistory/BrilliantHistory";
import LandingBuySellSection from "@/components/HomeContainer/LandingBuySellSection/LandingBuySellSection";
import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
import api from "@/utils/service/api";

export default async function LandingPage() {
  const { data } = await api.get("/categories");

  const { data: offer } = await api.get(
    "/houses?limit=8&sort=price&order=DESC&transactionType="
  );
  if (!offer)
    throw new Error(
      "Failed to fetch Discounted Houses, Please try again later."
    );

  return (
    <div>
      <div className="-left-20 flex justify-center mb-16 items-center text-xl">
        <CategoryCarousel data={data} />
      </div>
      {/* Offerrrrrrrrrrrrrrr */}
      <LandingBuySellSection
        title="تخفیفات "
        text1="  تخفیفات ویژه"
        text2=" برای شروع بهار "
      />
      <div className="flex justify-center mt-16 items-center gap-4">
        {offer?.map((offer: any) => (
          <SpecialDiscountCard data={offer} />
        ))}
      </div>

      <div>
        <DreamSection />
      </div>

    
      <div className="">
        <BrilliantHistory />
      </div>


      {/*  Buy && ........ */}
      <LandingBuySellSection
        title="خرید و فروش"
        text1="خرید و فروش های داغ"
        text2="این هفته"
      />
      <div className="flex justify-center items-center my-10 gap-4">
        {offer?.map((offer: any) => (
          <SpecialDiscountCard2 data={offer} />
        ))}
      </div>

      {/* commenttttttt */}

      <section className="my-10">
        <SectionTop
          mainText={["نظرات کاربران درباره آلفا"]}
          subText={[
            "تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .",
          ]}
        />
        <InfiniteCarousel />
      </section>
    </div>
  );
}
