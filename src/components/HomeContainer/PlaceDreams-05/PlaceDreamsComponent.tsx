'use client';
import React from 'react';
import PlaceDreamTop from './PlaceDreamTop';
import SwiperPlaceDreams from './SwiperDreams';

export default function PlaceDreamsComponent() {
  return (
    <div className="relative bg-[#F9F9F9]   dark:bg-gray-900 dark:text-white p-14 rounded-3xl">
      <div
        className="top-16 -left-0 absolute overflow-hidden"
      >
      <div className="-ml-32  circle"></div>
      </div>
      <PlaceDreamTop />
      <div className="mt-12 -ml-[56px]">
        <SwiperPlaceDreams />
      </div>
      <div className="right-0 bottom-0 absolute rounded-3xl overflow-hidden">
        <div className="quarter-circle" />
      </div>
    </div>
  );
}
