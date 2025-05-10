'use client';


// import { useTheme } from "next-themes";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
// import { useState, useEffect } from "react";

// export default function DarkSwitcher() {
//   const { theme, setTheme } = useTheme();
//   const [enabled, setEnabled] = useState(theme === "dark");

//   useEffect(() => {
//     setEnabled(theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     setEnabled(!enabled);
//     setTheme(enabled ? "light" : "dark");
//   };

//   return (
//     <div className="flex items-center">
//       <div
//         className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 cursor-pointer ${enabled ? 'bg-yellow-500' : 'bg-gray-400'}`}
//         onClick={toggleTheme}
//       >
//         <span
//           className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${enabled ? 'translate-x-8' : 'translate-x-0'}`}
//         >
//           {enabled ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-blue-600" />}
//         </span>
//       </div>
//     </div>
//   );
// }


import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function DarkSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
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
