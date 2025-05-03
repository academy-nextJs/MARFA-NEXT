import SpecialDiscountCard from "@/components/common/Card/SpecialDiscountCard/SpecialDiscountCard";
import DreamSection from "@/components/common/dreamDestination/dreamSectionContainer";
import InfiniteCarousel from "@/components/common/InfiniteCarousel";
import { SectionTop } from "@/components/common/sectionTop";
import BrilliantHistory from "@/components/HomeContainer/BrilliantHistory/BrilliantHistory";
import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
import LandingBuySellSection from "@/components/HomeContainer/HeroSectionComponent/landingSectionoffer/LandingBuySellSection/LandingBuySellSection";
import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
import api from "@/utils/service/api";
export default async function Home() {
  const { data } = await api.get("/categories");

  return (
    <>
      <main>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
          <HeroSection />
        </div>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
          <CategoryCarousel data={data} />
        </div>
        <div>
          <DreamSection />
          <div>
            <LandingBuySellSection/>
 
            </div>
            <div className="flex justify-center items-center gap-4">
            <SpecialDiscountCard/>
            <SpecialDiscountCard/>
            <SpecialDiscountCard/>
            <SpecialDiscountCard/>
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
            
            <BrilliantHistory/>
          </div>
        </div>
      </main>
    </>
  );
}
