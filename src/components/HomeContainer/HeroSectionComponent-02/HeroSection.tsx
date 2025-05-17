import RightHeroSection from "./RightHeroSection";
import LeftHeroSection from "./LeftHeroSection";
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row  mb-28 justify-around  w-full h-[750px] items-center  mt-14">
      <div className="w-[97%] lg:w-1/2 ml-14 mr-14 ">
        <RightHeroSection />
      </div>
      <div className="w-full lg:w-1/2">
        <LeftHeroSection />
      </div>
    </div>
  )
}
export default HeroSection;