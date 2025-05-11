"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import LogoLight from "/public/AlFA.png";
import LogoDark from "/public/DarkLogo.png"; 

export default function LogoComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between p-4">
      <Image
        src={darkMode ? LogoDark.src : LogoLight.src}
        alt="Logo"
        width={78}
        height={78}
      />
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
    </header>
  );
}
