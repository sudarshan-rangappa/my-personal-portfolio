"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [selectedTheme, setSelectedTheme] = useState("blue");

  const themes = [
    {
      id: "blue",
      label: "Blue Teamer",
      bg: "bg-blue-500",
      text: "text-blue-100",
    },
    { id: "red", label: "Red Teamer", bg: "bg-red-500", text: "text-red-100" },
  ];

  const getThemeClasses = () => {
    switch (selectedTheme) {
      case "red":
        return {
          bg: "bg-gradient-to-br from-red-900 via-red-800 to-red-900",
          accent: "text-red-400",
          glow: "shadow-red-500/20",
        };
      default:
        return {
          bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
          accent: "text-blue-400",
          glow: "shadow-blue-500/20",
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div
      className={`transition-all duration-700 ${themeClasses.bg}`}
    >
      <nav className="relative">
        {/* Glassmorphism backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm border-b border-white/10"></div>

        <div className="relative lg:container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo with glow effect */}
            <div className="relative">
              <h1
                className={`text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl ${themeClasses.glow} transition-all duration-500`}
              >
                Sudarshan.io
              </h1>
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${themeClasses.accent} opacity-20 blur-xl -z-10 transition-all duration-500`}
              ></div>
            </div>

            {/* Theme Pills Container */}
            <div className="relative">
              <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-2 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-2 relative">
                  {themes.map((theme, index) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`
                        relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden
                        ${
                          selectedTheme === theme.id
                            ? `${theme.bg} ${theme.text} shadow-lg scale-105 shadow-${theme.id}-500/30`
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {/* Pill background animation */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-r ${
                          theme.bg
                        } opacity-0 transition-opacity duration-300
                        ${
                          selectedTheme === theme.id
                            ? "opacity-100"
                            : "group-hover:opacity-20"
                        }
                      `}
                      ></div>

                      {/* Pill content */}
                      <span className="relative z-10 flex items-center gap-2">
                        <div
                          className={`
                          w-2 h-2 rounded-full transition-all duration-300
                          ${
                            selectedTheme === theme.id
                              ? "bg-white"
                              : `${theme.bg} opacity-60`
                          }
                        `}
                        ></div>
                        {theme.label}
                      </span>

                      {/* Hover glow effect */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-r ${
                          theme.bg
                        } opacity-0 blur-sm transition-all duration-300
                        ${
                          selectedTheme === theme.id
                            ? "opacity-30"
                            : "group-hover:opacity-10"
                        }
                      `}
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
