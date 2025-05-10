"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

type TProps = {
  children: React.ReactNode;
};

export function ButtonCourses({ children }: TProps) {
  const [Click, setClick] = useState(false);
  return (
    <div className="flex gap-4 items-center ">
      <Button
        onPress={() => setClick(!Click)}
        radius="full"
        className="bg-gray-200  dark:bg-gray-700 dark:text-white rounded-full px-5 py-3 flex-row flex"
      >
        {Click ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="size-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
        {children}
      </Button>
    </div>
  );
}

export function ButtonSelected({ children }: TProps) {
  const [select, setSelect] = useState(true);

  return (
    <div className="flex gap-4 items-center ">
      <Button
        onPress={() => setSelect(!select)}
        radius="full"
        className="bg-gray-200  dark:bg-zinc-800 dark:text-white rounded-full px-5 py-3 flex-row flex"
      >
        {children}
        {select ? <span className="w-2 h-2 bg-black rounded-full" /> : ""}
      </Button>
    </div>
  );
}
export function ButtonBack({ children }: TProps) {
  const [select, setSelect] = useState(true);

  return (
    <div className="flex gap-4 items-center ">
      <Button
        onPress={() => setSelect(!select)}
        radius="full"
        className="bg-gray-200  dark:bg-gray-700 dark:text-white rounded-full px-5 py-3 flex-row flex"
      >
        {children}
        <Image src="/image/back.png" alt="back" width={5} height={5} />
      </Button>
    </div>
  );
}
export function ButtonEmpty({ children }: TProps) {
  // const [select, setSelect] = useState(true);

  return (
    <div className="flex gap-4 items-center ">
      <button
        // onPress={() => setSelect(!select)}
        
        // radius="full"
        className="bg-white/20 flex-row flex  justify-center items-center w-10 h-10 rounded-full"
      >
        {children}
      </button>
    </div>
  );
}

