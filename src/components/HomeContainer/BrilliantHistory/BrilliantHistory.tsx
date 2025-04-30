"use client";

import Image from "next/image";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";

export default function BrilliantHistory() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-around  md:px-16 overflow-hidden">

      {/************************/}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 text-right max-w-2xl md:pl-10"
      >
        <div
          className={cn(
            "absolute rounded-full blur-3xl bg-[#b8b8ff] opacity-50",
            "w-36 h-36 top-0 left-0 md:hidden"
          )}
        />
        <h4 className="text-sm text-[#7575fe] mb-2 border-2 border-[#7575fe] rounded-2xl w-[4.5rem] p-1 text-center">آلفا درخشان</h4>
        <h2 className="text-2xl font-bold text-[#444] mb-4">
          <span className="text-indigo-500 font-extrabold text-3xl">10+</span> سال سابقه درخشان
        </h2>
        <p className="text-gray-600 leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است...
        </p>
      </motion.div>
          {/* ************************/}
          <div className="relative">
          <div
        className={cn(
          "absolute rounded-full blur-3xl bg-[#b8b8ff] opacity-50",
          "w-96 h-96 top-[-4rem] left-[-4rem]",
          "md:block hidden"
        )}
      >
       {/* <Image
          src="/Ellipse 14.png"
          alt="10"
          width={220}
          height={220}
          priority
        /> */}
        </div>
      <div
        className={cn(
          "absolute rounded-full blur-3xl bg-[#b8b8ff] opacity-50",
          "w-80 h-80 bottom-[-4rem] right-[-12rem]",
          "md:block hidden"
        )}
      />


          <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden md:block relative z-10"
      >
        <Image
          src="/mosbate10.png"
          alt="10"
          width={420}
          height={420}
          priority
        />
      </motion.div>
          </div>
    </section>
  );
}
