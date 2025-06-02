"use client";
import { HeroUIProvider } from "@heroui/react";
import { NextUIProvider } from "@nextui-org/react";
import './(main)/globals.css';
import { Providers } from "@/utils/service/TanstakProvider";


export default function ProviderNextUI({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
    {/* <NextUIProvider> */}

    <HeroUIProvider>
      <div>
        {children}
      </div>
    </HeroUIProvider>
    {/* </NextUIProvider> */}
    </Providers>
   
  );
}
