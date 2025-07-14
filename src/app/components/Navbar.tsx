// components/Navbar.js
"use client";
import React from "react";
import { getThemeClasses } from "./ThemeProvider";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: "blue",
      label: "Blue Teamer",
      bg: "bg-blue-500",
      text: "text-blue-100",
    },
    {
      id: "red",
      label: "Red Teamer",
      bg: "bg-red-500",
      text: "text-red-100"
    },
  ];

  // Use utility function for complex gradients that are hard to replicate with CSS vars
  const themeClasses = getThemeClasses(theme);

  return (
    <div className={`transition-all duration-700 ${themeClasses.bg}`}>
      <nav className="relative">
        {/* Glassmorphism backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm border-b border-white/10"></div>

        <div className="relative lg:container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo with glow effect - Using CSS custom properties */}
            <div className="relative">
              <h1
                className="text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500"
                style={{
                  textShadow: `0 0 20px var(--theme-glow)`
                }}
              >
                Sudarshan.io
              </h1>
              <div
                className="absolute -inset-1 opacity-20 blur-xl -z-10 transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, var(--theme-accent), var(--theme-accent))`
                }}
              ></div>
            </div>

            {/* Theme Pills Container */}
            <div className="relative">
              <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-2 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-2 relative">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.id}
                      onClick={() => setTheme(themeOption.id)}
                      className={`
                        relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden
                        ${theme === themeOption.id
                          ? `${themeOption.bg} ${themeOption.text} shadow-lg scale-105`
                          : "text-white/70 hover:text-white hover:bg-white/10"
                        }
                      `}
                      style={{
                        boxShadow: theme === themeOption.id ? `0 4px 20px var(--theme-shadow)` : 'none'
                      }}
                    >
                      {/* Pill background animation */}
                      <div
                        className={`
                        absolute inset-0 opacity-0 transition-opacity duration-300
                        ${theme === themeOption.id
                            ? "opacity-100"
                            : "group-hover:opacity-20"
                          }
                      `}
                        style={{
                          background: `linear-gradient(to right, var(--theme-primary), var(--theme-primary-dark))`
                        }}
                      ></div>

                      {/* Pill content */}
                      <span className="relative z-10 flex items-center gap-2">
                        <div
                          className={`
                          w-2 h-2 rounded-full transition-all duration-300
                          ${theme === themeOption.id
                              ? "bg-white"
                              : `${themeOption.bg} opacity-60`
                            }
                        `}
                        ></div>
                        {themeOption.label}
                      </span>

                      {/* Hover glow effect */}
                      <div
                        className={`
                        absolute inset-0 opacity-0 blur-sm transition-all duration-300
                        ${theme === themeOption.id
                            ? "opacity-30"
                            : "group-hover:opacity-10"
                          }
                      `}
                        style={{
                          background: `linear-gradient(to right, var(--theme-primary), var(--theme-primary-dark))`
                        }}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;