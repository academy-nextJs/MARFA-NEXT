"use client";

import Link from "next/link";
import React, { useState } from "react";

type TProps = {
  children: React.ReactNode;
  index: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export function ButtonHomeHeder({
  children,
  index,
  selectedIndex,
  onSelect,
}: TProps) {
  const isSelected = index === selectedIndex;

  return (
    <button
      onClick={() => onSelect(index)}
      className={`bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full px-5 py-3 flex-row flex ${
        isSelected ? "bg-gray-300 dark:bg-gray-600 shadow-md" : ""
      }`}
    >
      {isSelected && (
        <span className="w-2 h-2 bg-black rounded-full ml-2 mt-2" />
      )}
      {children}
    </button>
  );
}

export function ButtonHederSelected() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1); // ابتدا هیچ دکمه ای انتخاب نشده است.

  const handleSelect = (index: number) => {
    setSelectedIndex(index); // با انتخاب دکمه، ایندکس انتخابی را تغییر می‌دهیم.
  };

  return (
    <div className="flex gap-4 items-center">
      <ButtonHomeHeder
        index={0}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      >
        خانه
      </ButtonHomeHeder>
      <Link href="/reserve">
        <ButtonHomeHeder
          index={1}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        >
          مقالات
        </ButtonHomeHeder>
      </Link>
      <Link href="/rental">
      
      <ButtonHomeHeder
        index={2}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      >
        درباره الفا
      </ButtonHomeHeder>
      </Link>
    </div>
  );
}
