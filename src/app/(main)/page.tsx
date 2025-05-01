import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
import api from "@/utils/service/api";
export default async function Home() {
  const { data } = await api.get('/categories');
  
  return (

<>
    <main>
      
      <div className="flex justify-center items-center m-10 mx-auto text-4xl">
        <HeroSection/>;
        
        </div>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
            <CategoryCarousel data={data}/>
        </div>
        
    </main>
    </>

  );
}
