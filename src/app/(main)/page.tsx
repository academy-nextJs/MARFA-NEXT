import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
import { dataFocusVisibleClasses } from "@nextui-org/react";
export default function Home() {
  return (

<>
    <main>
      
      <div className="flex justify-center items-center m-10 mx-auto text-4xl">
        <HeroSection/>;
        
        </div>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
            <CategoryCarousel data={dataFocusVisibleClasses}/>
        </div>
        
    </main>
    </>

  );
}
