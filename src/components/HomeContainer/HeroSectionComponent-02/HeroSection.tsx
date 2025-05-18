import RightHeroSection from "./RightHeroSection";
import LeftHeroSection from "./LeftHeroSection";
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row my-16 md:justify-around justify-center w-full md:h-[750px] items-center  mt-5">
      <div className="w-[97%]  md:ml-14 mr-14">
        <RightHeroSection />
      </div>
      <div className="w-full lg:w-1/2">
        <LeftHeroSection />
      </div>
    </div>
  )
}
export default HeroSection;