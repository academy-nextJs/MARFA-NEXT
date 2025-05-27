'use client';



// import { useTheme } from "@/utils/service/TanstakProvider";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function DarkSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flez items-center gap-2">
      <button
        className="p-2 rounded-full transition-colors duration-200 bg-gray-200 dark:bg-gray-700"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          <SunIcon className="h-6 w-6 text-orange-300" />
        ) : (
          <MoonIcon className="h-6 w-6 text-slate-900" />
        )}
      </button>
    </div>
  );
}
