"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme
  useEffect(() => {
    // Force reset first (prevents stuck dark mode)
    document.documentElement.classList.remove("dark");

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border hover:scale-105 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 opacity-80 group-hover:opacity-100 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.64 13.65A9 9 0 1110.35 2.36a7 7 0 1011.29 11.29z"
          />
        </svg>
      ) : (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5M12 19.5V21M4.5 12H3m18 0h-1.5M6.364 6.364l-1.06-1.06m13.856 13.856l-1.06-1.06M6.364 17.636l-1.06 1.06m13.856-13.856l-1.06 1.06M12 8.25A3.75 3.75 0 1012 15.75 3.75 3.75 0 0012 8.25z"
          />
        </svg>
      )}
    </button>
  );
}
