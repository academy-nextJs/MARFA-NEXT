import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
// import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
import LandingPage from "./landing/page";
// import CardsSwiper from "@/components/Swiper/CardsSwiper";
export default function Home() {
  return (
<>
    <main>
      
      <div className="flex justify-center items-center m-10 mx-auto text-4xl">
        <HeroSection/>;
        
        </div>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
        
        {/* <CardsSwiper/>; */}
        <LandingPage/>
        
   
        </div>
    </main>
    </>
  );
}
