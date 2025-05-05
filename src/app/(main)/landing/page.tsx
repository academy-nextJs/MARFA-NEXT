import SpecialDiscountCard from "@/components/common/Card/SpecialDiscountCard/SpecialDiscountCard";
import DreamSection from "@/components/common/dreamDestination/dreamSectionContainer";
import InfiniteCarousel from "@/components/common/InfiniteCarousel";
import { SectionTop } from "@/components/common/sectionTop";
import BrilliantHistory from "@/components/HomeContainer/BrilliantHistory/BrilliantHistory";
import LandingBuySellSection from "@/components/HomeContainer/LandingBuySellSection/LandingBuySellSection";
import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
import api from "@/utils/service/api";

export default async function LandingPage() {
  const { data } = await api.get("/categories");
  //   const { data } = await api.get('/categories');
  return (
    <div>
      <div className="-left-20 flex justify-center items-center text-xl">
        <CategoryCarousel data={data} />
      </div>
      <div>
        <DreamSection />
      </div>
      <LandingBuySellSection />
      <div className="flex justify-center items-center gap-4">
        <SpecialDiscountCard />
        <SpecialDiscountCard />
        <SpecialDiscountCard />
        <SpecialDiscountCard />
      </div>
      <section>
        <SectionTop
          mainText={["نظرات کاربران درباره آلفا"]}
          subText={[
            "تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .",
          ]}
        />
        <InfiniteCarousel />
      </section>
      <div className="">
        <BrilliantHistory />
      </div>
    </div>
  );
}
