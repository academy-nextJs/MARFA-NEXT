"use client";
import ProviderNextUI from "@/app/RootLayout";
import LayoutDashboard from "@/components/ComponentsDashboards/Mainpart/Layout";
import { Providers } from "@/utils/service/TanstakProvider";
import React from "react";
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fa" dir="RTL" className="font-yekan">
      <body className="max-w-[1920px] bg-[ #F0F0F0] mx-auto dark:bg-gray-900 dark:text-white px-4 py-4 overflow-x-hidden">
  
    <ProviderNextUI>

    <LayoutDashboard>
      {children}
      </LayoutDashboard>;
    </ProviderNextUI>

      </body>
      </html>

    
  )
};

export default layout;
