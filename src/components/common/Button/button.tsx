"use client";

import { Button } from "@heroui/react";
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
        className="bg-gray-200 rounded-full px-5 py-3 flex-row flex"
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
        className="bg-gray-200 rounded-full px-5 py-3 flex-row flex"
      >
        {children}
        {select ? <span className="w-2 h-2 bg-black rounded-full" /> : ""}
      </Button>
    </div>
  );
}
