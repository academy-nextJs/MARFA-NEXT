import CategoryCarousel2 from "@/components/common/Card/CardCategorySlider/CategoryCarousel2";
import DreamSection from "@/components/common/dreamDestination/dreamSectionContainer";
import InfiniteCarousel from "@/components/common/InfiniteCarousel";
import { SectionTop } from "@/components/common/sectionTop";
import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
import CategoryCarousel from "@/components/HomeContainer/landingCategory/categoryCarousel";
<<<<<<< HEAD
import api from "@/utils/service/api";
export default async function Home() {
  const { data } = await api.get('/categories');
  
=======
import { dataFocusVisibleClasses } from "@nextui-org/react";

export default function Home() {
>>>>>>> A-landing-swiper2-4
  return (
    <>
      <main>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
          <HeroSection />
        </div>
        <div className="flex justify-center items-center m-10 mx-auto text-4xl">
<<<<<<< HEAD
            <CategoryCarousel data={data}/>
=======
          <CategoryCarousel data={dataFocusVisibleClasses} />
>>>>>>> A-landing-swiper2-4
        </div>
        <div >
          <DreamSection/>
          <section>
         <SectionTop
          mainText={['نظرات کاربران درباره آلفا']} // Still supports string with \n
          subText={[
            'تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .',
          ]}
        />
        <InfiniteCarousel/>
         </section>
         
          
        </div>
      </main>
    </>
  );
}
