
"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 flex justify-between items-center shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
      <a href="#hero" className="text-xl font-bold text-blue-600 dark:text-white">MyPortfolio</a>
      <nav className="space-x-3 md:space-x-6 text-sm md:text-base">
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-2 px-2 py-1 border rounded text-xs md:text-sm dark:border-white border-gray-800"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button> */}
    </header>
  );
}

