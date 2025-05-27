"use client";
import LayoutDashboard from "@/components/ComponentsDashboards/Mainpart/Layout";
import { Providers } from "@/utils/service/TanstakProvider";
import { SessionProvider } from "next-auth/react";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider>
          <Providers attribute="class" defaultTheme="dark">
      
      <LayoutDashboard>{children}</LayoutDashboard>
   </Providers>
    </SessionProvider>
  );
};

export default layout;
