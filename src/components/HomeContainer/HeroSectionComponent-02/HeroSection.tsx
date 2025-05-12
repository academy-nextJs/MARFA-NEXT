
// import Image from "next/image";
// // import {modalsearchfast} from "./SearchModal";
// import StatCard from "./Card";
// // import SearchModal from "./SearchModal";
// import FilterButton from "./SearchButton";


// const HeroSection = () => {
//   return (
//     // <div className="relative md:flex-row flex-col  gap-20 bg-white  w-[1900px] flex justify-center items-center m-10 text-2xl dark:bg-gray-900 dark:text-white  h-1/3 container">
//       <div className="flex relative mx-auto w-[97%] flex-col lg:flex-row justify-between gap-2 items-center mt-14">
//         <div className="relative  flex justify-center items-center  rounded-2xl h-[730px]  w-full md:w-1/2">
//           {/* <div className="relative  w-full md:w-[730px] "> */}
//             <Image
//               src="/hero.png"
//               alt="Modern apartment building"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-3xl"
//             />

//             <div className="top-1/2 left-2.5 absolute -translate-x-1/2 -translate-y-1/2 transform">
//               <FilterButton/>
//             </div>
//           {/* </div> */}
//         </div>
//         <div className="z-10 flex justify-center  px-6 py-12 md:py-20 md:pl-16 lg:pl-20 w-full md:w-1/2">
          
//             <div className=" h-[35.3125rem] w-full text-black dark:text-white ">
//             <h4 className="md:text-5xl text-2xl font-bold -mt-20 pr-8 pt-6">خانه ای که میخوای،
//                 <br />
//                 جایی که میخوای
//             </h4>
//             <p className="text-[#767676]  dark:text-white md:text-lg font-bold  text-sm pr-8 pt-4"> رزرو ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون
//                 <br />
//                 مثل آب خوردن فقط در دلتا
//             </p>
          
//               <div className="h-72 "></div>
//             <StatCard />
//           </div>
//         </div>
//       </div>
//     // </div>
//   );
// };

// export default HeroSection;


import RightHeroSection from "./RightHeroSection";
import LeftHeroSection from "./LeftHeroSection";
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row  mb-28 justify-around  w-full items-center  mt-14">
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