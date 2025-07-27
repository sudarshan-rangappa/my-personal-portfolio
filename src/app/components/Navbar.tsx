// components/Navbar.js
"use client";
import React from "react";
import { getThemeClasses } from "./ThemeProvider";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className={`${themeClasses.bg} font-mono`}>
      {/* Terminal-style bar */}
      <div className="bg-black/30 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          {/* Stack vertically on mobile, horizontal on larger screens */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            {/* Terminal prompt - responsive font size */}
            <div className="flex flex-wrap items-center text-xs sm:text-sm text-white gap-1">
              <span className="text-green-400 whitespace-nowrap">sudarshan@linux</span>
              <span className="text-white/70">:~$</span>
              <span className="text-white whitespace-nowrap">./rangappa_init.sh</span>
            </div>

            {/* Theme selector - full width on mobile */}
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => setTheme('blue')}
                className={`flex-1 sm:flex-none px-3 py-2 text-xs sm:text-sm rounded border transition-all ${
                  theme === 'blue'
                    ? 'border-blue-400 bg-blue-500/20 text-blue-300'
                    : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white'
                }`}
              >
                --mode=blue
              </button>
              <button
                onClick={() => setTheme('red')}
                className={`flex-1 sm:flex-none px-3 py-2 text-xs sm:text-sm rounded border transition-all ${
                  theme === 'red'
                    ? 'border-red-400 bg-red-500/20 text-red-300'
                    : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white'
                }`}
              >
                --mode=red
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;