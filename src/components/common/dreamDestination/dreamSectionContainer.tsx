'use client';
import React from 'react';
import { motion } from 'framer-motion';
import DreamSectionTop from './dreamSectionTop';
import DreamCarousel from './dreamCarousel';

export default function DreamSection() {
  return (
    <div className="relative bg-[#F9F9F9] dark:bg-darkMode p-14 rounded-3xl">
      <div
        className="top-16 -left-0 absolute overflow-hidden"
        // animate={{
        //   y: [-50, 100],
        // }}
        // transition={{
        //   duration: 2,
        //   repeat: Infinity,
        //   repeatType: 'reverse',
        //   ease: 'linear',
        // }}
      >
        <div className="-ml-32 circle"></div>
      </div>
      <DreamSectionTop />
      <div className="mt-12 -ml-[56px]">
        <DreamCarousel />
      </div>
      <div className="right-0 bottom-0 absolute rounded-3xl overflow-hidden">
        <div className="quarter-circle" />
      </div>
    </div>
  );
}
