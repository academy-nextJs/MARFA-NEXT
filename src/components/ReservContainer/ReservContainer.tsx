// "use client";
// import { useState } from "react";
// import dynamic from "next/dynamic";
// import ReserveCard from "./ReserveCard";
// import ReservFilter from "./ReservFilter";
// import "@/app/(main)/globals.css";
// import CustomBreadcrumbs from "../RentalComponent/CustomBreadcrumbs";
// import SearchInput from "../common/inputs/SearchInput";
// import { ClientButton } from "../common/ClientUi";

// const MapComponent = dynamic(() => import("../common/map/MapComponent"), {
//   ssr: false,
// });

// const items = [
//   { label: "خانه", href: "/" },
//   { label: "املاک", href: "/properties" },
//   { label: "رزرو" },
// ];

// export default function ReservContainer() {
//   const [showMap, setShowMap] = useState(false);

//   const mockCards = Array.from({ length: 10 }, (_, i) => ({
//     id: i + 1,
//     title: `کارت ${i + 1}`,
//   }));

//   return (
//     <div className="w-full p-4 flex flex-col gap-4 bg-gray-700">
//       {/* card & map */}
//       {/* card */}
//       <div className="w-full h-[40rem] flex flex-col xl:flex-row gap-2 bg-white relative">
//         <div className="relative w-full xl:w-[46%] h-full">
//           <div className='w-full pr-4 my-4 flex justify-start'>
//             <CustomBreadcrumbs items={items} />
//           </div>
//           <div className='flex flex-row pr-4 w-full justify-start gap-4'>
//             <div className=''>
//             <ClientButton
//               size="lg"
//               className="inline-flex font-yekan text-medium bg-[#7575FE] text-white"
//             >
//              فیلتر هـا
//             </ClientButton>

//             </div>
//             <div className='w-2/4'>

//             <SearchInput />
//             </div>
//           </div>
//           <div className="h-full overflow-y-auto scroll-thin-blue flex flex-wrap gap-4 p-2">
//             {mockCards.map((card) => (
//               <div
//                 key={card.id}
//                 className="bg-white dark:bg-gray-900 rounded-xl p-2 w-full md:w-[calc(50%-0.5rem)]"
//               >
//                 <ReserveCard showMap={showMap} setShowMap={setShowMap} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* map */}
//         <div className="w-full xl:w-[54%] h-full bg-blue-200 dark:bg-gray-900 rounded-xl overflow-hidden">
//           <MapComponent />
//         </div>
//       </div>

//       {/* filter */}
//       <div className="bg-white dark:bg-gray-900 mt-6 rounded-l-xl p-4 w-full xl:w-[44%] h-[35rem] shadow-md">
//         <ReservFilter />
//       </div>
//     </div>
//   );
// }

// // *************************************
"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import ReserveCard from "./ReserveCard";
import ReservFilter from "./ReservFilter";
import "@/app/(main)/globals.css";
import CustomBreadcrumbs from "../RentalComponent/CustomBreadcrumbs";
import SearchInput from "../common/inputs/SearchInput";
import { ClientButton } from "../common/ClientUi";

const MapComponent = dynamic(() => import("../common/map/MapComponent"), {
  ssr: false,
});

const items = [
  { label: "خانه", href: "/" },
  { label: "املاک", href: "/properties" },
  { label: "رزرو" },
];

export default function ReservContainer() {
  const [showMap, setShowMap] = useState(false);
  const [showFilter , setShowFilter] = useState<boolean>(false)

  const mockCards = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `کارت ${i + 1}`,
  }));

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {/* card & map */}
      <div className="w-full flex flex-col xl:flex-row gap-4">
        {/* card */}
        <div className="relative w-full xl:w-[46%] flex flex-col gap-4">
          <div className="w-full pr-4 my-4 flex justify-start">
            <CustomBreadcrumbs items={items} />
          </div>
          <div className="flex flex-row pr-4 w-full justify-start gap-4">
            <ClientButton
              size="lg"
              className="inline-flex font-yekan text-medium bg-[#7575FE] text-white"
              onClick={() => setShowFilter(!showFilter)}
            >
              فیلتر هـا
            </ClientButton>
            <div className="w-2/4">
              <SearchInput />
            </div>
          </div>
          <div className="h-[35rem] overflow-y-auto scroll-thin-blue flex flex-wrap gap-2 p-2">
            {mockCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-900 rounded-xl p-2 w-full md:w-[calc(50%-0.5rem)]"
              >
                <ReserveCard showMap={showMap} setShowMap={setShowMap} />
              </div>
            ))}
          </div>
        </div>

        {/* map */}
        <div className="w-full xl:w-[54%]  bg-blue-200 dark:bg-gray-900 rounded-xl overflow-hidden">
          <MapComponent />
        </div>
      </div>

      {/* filter */}
      {showFilter && 
      <div className="bg-white dark:bg-gray-900 rounded-xl mt-5 p-4 w-full xl:w-[46%] shadow-md">
        <ReservFilter />
      </div>
      }
    </div>
  );
}

