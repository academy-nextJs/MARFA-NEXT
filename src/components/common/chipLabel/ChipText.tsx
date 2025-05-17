"use client";
import { Chip } from "@heroui/react";

type ChipLableProps = {
  ChipText: string;
};

export default function ChipText({ ChipText }: ChipLableProps) {
  return (
    <Chip className="bg-white border-1 dark:bg-gray-950  border-[#7575FE] px-2 py-4 text-[#7575FE]">
      {ChipText}
    </Chip>
  );
}
