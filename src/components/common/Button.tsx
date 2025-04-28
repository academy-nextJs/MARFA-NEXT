"use client"


import { Button } from "@heroui/react";
import { useState } from "react";

type TProps = {
  children: React.ReactNode;
};

export function HeroSearchButton({ children }: TProps) {
  const [Click, setClick] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Button
        onPress={() => setClick(!Click)}
        radius="full"
        className="flex flex-row bg-gray-200 px-5 py-3 rounded-full"
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
            className="size-3"
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
    <div className="flex items-center gap-4">
      <Button
        onPress={() => setSelect(!select)}
        radius="full"
        className="flex flex-row bg-gray-200 px-5 py-3 rounded-full"
      >
        {children}
        {select ? <span className="bg-black rounded-full w-2 h-2" /> : ""}
      </Button>
    </div>
  );
}