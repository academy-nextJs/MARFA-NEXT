"use client";
import { HeroUIProvider } from "@heroui/react";
// import { NextUIProvider } from "@nextui-org/react";

export default function ProviderNextUI({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      <div>
        {children}
      </div>
    </HeroUIProvider>
  );
}
