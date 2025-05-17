"use client";
import { HeroUIProvider } from "@heroui/react";
import { NextUIProvider } from "@nextui-org/react";
import './(main)/globals.css';


export default function ProviderNextUI({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>


    <HeroUIProvider>
      <div>
        {children}
      </div>
    </HeroUIProvider>
    </NextUIProvider>
   
  );
}
