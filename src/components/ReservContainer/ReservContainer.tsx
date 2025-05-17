"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import ReserveCard from "./ReserveCard";
import ReservFilter from "./ReservFilter";
import "@/app/(main)/globals.css";

const MapComponent = dynamic(() => import("../common/map/MapComponent"), {
  ssr: false,
});

export default function ReservContainer() {
  const [showMap, setShowMap] = useState(false);

  const mockCards = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `کارت ${i + 1}`,
  }));

  return (
    <div className="w-full mx-14 p-4 flex flex-col gap-4 bg-gray-800">
      {/* card & map */}
      <div className="w-full h-[35rem] flex flex-col xl:flex-row gap-2 bg-white relative">
        {/* card */}
        <div className="relative w-full xl:w-[46%] h-full">
          <div className="h-full overflow-y-auto scroll-thin-blue flex flex-wrap gap-4 p-2">
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
        <div className="w-full xl:w-[54%] h-full bg-blue-200 dark:bg-gray-900 rounded-xl overflow-hidden">
          <MapComponent />
        </div>
      </div>

      {/* filter */}
      <div className="bg-white dark:bg-gray-900 mt-4 rounded-l-xl p-4 w-full xl:w-[44%] h-[35rem] shadow-md">
        <ReservFilter />
      </div>
    </div>
  );
}
