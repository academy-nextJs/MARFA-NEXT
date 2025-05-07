import { TPropsClient } from "@/types/types";
import React from "react";


const ClientComponents = ({ name, date ,isActive}:TPropsClient) => {
  const txtColor = isActive ? "white" : "";

  return (
    <>
      <div className={`flex gap-3 `}>
        <div
          aria-label="computer"
          className="bg-[#A5A5A5] rounded-full w-12 h-12"
          role="img"
        ></div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-base">{name}</h1>
          <h1 className={`font-medium text-sm text-${txtColor}`}>{date} </h1>
        </div>
      </div>
    </>
  );
};

export default ClientComponents;
