import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
import Swiper from "@/components/Swiper/Swiper";
// import CategoryCarousel from "./landing/page";

export default function Home() {
  return (
  <>
  <div className="flex justify-center items-center m-10 mx-auto text-4xl">
     <HeroSection/>;
     {/* <CategoryCarousel/>; */}
    </div>
    <main>
      <Swiper/>
    </main>
    </>
  );
}
