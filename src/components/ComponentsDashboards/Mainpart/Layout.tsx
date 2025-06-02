"use client"
import React, { useState } from "react";
import DashboardSideRight from "./SlidersComponents/DashboardSideRight";
import HeaderDashboard from "./HederDashboard/HeaderDashbooard";
import { Providers } from "@/utils/service/TanstakProvider";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [view, setView] = useState(1);

  return (
    <Providers>
      <div className="bg-[#ECECEC] dark:bg-gray-900 h-dvh p-4 gap-5 flex">
        <DashboardSideRight view={view} setView={setView} />
        <div className="w-full max-xl:w-full flex flex-col gap-5">
          <HeaderDashboard />
          <div className="flex-1 max-md:mb-[50px] overflow-y-auto pr-2 custom-scrollbar">
            {children}
          </div>
        </div>
      </div>
     </Providers>
  );
};

export default Layout;
