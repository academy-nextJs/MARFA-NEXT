import InfiniteCarousel from "@/components/HomeContainer/CommeNtUserComponent-08/InfiniteCarousel";
import { SectionTop } from "@/components/common/sectionTop";
import BrilliantHistory from "@/components/HomeContainer/BrilliantHistory-06/BrilliantHistory";
import CategoryCarousel from "@/components/HomeContainer/landingCategory-03/categoryCarousel";
import api from "@/utils/service/api";
import PlaceDreamsComponent from "@/components/HomeContainer/PlaceDreams-05/PlaceDreamsComponent";
import OffBuySellComponent from "@/components/HomeContainer/LandingBuySellSection-04/OffBuySellComponent";
import BuySellComponent from "@/components/HomeContainer/BuySellHote-07/BuySellHote";
import HeroSection from "@/components/HomeContainer/HeroSectionComponent-02/HeroSection";
import CommeNtUserComponent from "@/components/HomeContainer/CommeNtUserComponent-08/CommeNtUserComponent";

export default async function Home() {
  const { data } = await api.get("/categories");

  const { data: offer } = await api.get(
    "/houses?limit=8&sort=price&order=DESC&transactionType="
  );
  if (!offer)
    throw new Error(
      "Failed to fetch Discounted Houses, Please try again later."
    );

  return (
    <>
      <main>
        <HeroSection />
        <CategoryCarousel data={data} />

        <OffBuySellComponent offer={offer} />

        <PlaceDreamsComponent />
        <BrilliantHistory />
        <BuySellComponent offer={offer} />

        {/* <section className="my-10">
          <SectionTop
            mainText={["نظرات کاربران درباره آلفا"]}
            subText={[
              "تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .",
            ]}
          />
          <InfiniteCarousel />
        </section> */}
        <CommeNtUserComponent />
      </main>
    </>
  );
}
