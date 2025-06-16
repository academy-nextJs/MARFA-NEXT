"use client";
import React, { useState } from "react";
// import DashboardSideRight from "./SlidersComponents/DashboardSideRight";
// import HeaderDashboard from "./HederDashboard/HeaderDashbooard";
import { Providers } from "@/utils/service/TanstakProvider";
import DashboardSideRight from "@/components/ComponentsDashboards/Mainpart/SlidersComponents/DashboardSideRight";
import HeaderDashboard from "@/components/ComponentsDashboards/Mainpart/HederDashboard/HeaderDashbooard";
import ProviderNextUI from "@/app/RootLayout";
import DashboardSideBuyer from "@/components/ComponentsDashboards/Mainpart/SlidersComponents/DashboardSideBuyer";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [view, setView] = useState(1);

  return (
    <html lang="fa" dir="RTL" className="font-yekan">
      <body className="max-w-[1920px] bg-[ #F0F0F0] mx-auto dark:bg-gray-900 dark:text-white px-4 py-4 overflow-x-hidden">
    <ProviderNextUI>
      <Providers>
        <div className="bg-[#ECECEC] dark:bg-gray-900 h-dvh p-4 gap-5 flex">
          <DashboardSideBuyer view={view} setView={setView} />
          <div className="w-full max-xl:w-full flex flex-col gap-5">
            <HeaderDashboard customer="خریدار" name="امیر محمد مولایی" />
            <div className="flex-1 max-md:mb-[50px] overflow-y-auto pr-2 custom-scrollbar">
              {children}
            </div>
          </div>
        </div>
      </Providers>
    </ProviderNextUI>
    </body>
    </html>
  );
};

export default Layout;
