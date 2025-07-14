"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState('blue');
  useEffect(() => {
    const savedTheme = localStorage.getItem('team-theme');
    if (savedTheme && (savedTheme === 'blue' || savedTheme === 'red')) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('team-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'red') {
      root.style.setProperty('--theme-primary', '#ef4444');
      root.style.setProperty('--theme-primary-dark', '#dc2626');
      root.style.setProperty('--theme-primary-darker', '#b91c1c');
      root.style.setProperty('--theme-primary-light', '#f87171');
      root.style.setProperty('--theme-primary-lighter', '#fca5a5');
      root.style.setProperty('--theme-bg-start', '#7f1d1d');
      root.style.setProperty('--theme-bg-middle', '#991b1b');
      root.style.setProperty('--theme-bg-end', '#7f1d1d');
      root.style.setProperty('--theme-accent', '#f87171');
      root.style.setProperty('--theme-glow', 'rgba(239, 68, 68, 0.2)');
      root.style.setProperty('--theme-shadow', 'rgba(239, 68, 68, 0.3)');
    } else {
      root.style.setProperty('--theme-primary', '#3b82f6');
      root.style.setProperty('--theme-primary-dark', '#2563eb');
      root.style.setProperty('--theme-primary-darker', '#1d4ed8');
      root.style.setProperty('--theme-primary-light', '#60a5fa');
      root.style.setProperty('--theme-primary-lighter', '#93c5fd');
      root.style.setProperty('--theme-bg-start', '#1e3a8a');
      root.style.setProperty('--theme-bg-middle', '#1e40af');
      root.style.setProperty('--theme-bg-end', '#1e3a8a');
      root.style.setProperty('--theme-accent', '#60a5fa');
      root.style.setProperty('--theme-glow', 'rgba(59, 130, 246, 0.2)');
      root.style.setProperty('--theme-shadow', 'rgba(59, 130, 246, 0.3)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'blue' ? 'red' : 'blue');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const getThemeClasses = (theme: any) => {
  switch (theme) {
    case "red":
      return {
        bg: "bg-gradient-to-br from-red-900 via-red-800 to-red-900",
        accent: "text-red-400",
        glow: "shadow-red-500/20",
        primary: "bg-red-500",
        primaryHover: "hover:bg-red-600",
        primaryText: "text-red-100",
        border: "border-red-500",
        ring: "ring-red-500",
      };
    default:
      return {
        bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
        accent: "text-blue-400",
        glow: "shadow-blue-500/20",
        primary: "bg-blue-500",
        primaryHover: "hover:bg-blue-600",
        primaryText: "text-blue-100",
        border: "border-blue-500",
        ring: "ring-blue-500",
      };
  }
};