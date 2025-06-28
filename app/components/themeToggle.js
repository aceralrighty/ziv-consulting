"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle({ setMenuOpen }) {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Get stored theme or default to system preference
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        let isDark = false;
        if (storedTheme === "dark") {
            isDark = true;
        } else if (storedTheme === "light") {
            isDark = false;
        } else {
            isDark = prefersDark;
        }

        setDarkMode(isDark);

        // Set data-theme attribute for Tailwind v4
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

        // Also set class for backward compatibility with your layout script
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        // Update data-theme attribute for Tailwind v4
        document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');

        // Update class for backward compatibility
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

        setMenuOpen?.(false);
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="flex items-center">
                <div className="h-6 w-6" />
            </div>
        );
    }

    return (
        <div className="flex items-center">
            <button
                onClick={toggleTheme}
                className="text-nav-t dark:text-nav-t-dark transition-all duration-200 hover:scale-110 transform"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
        </div>
    );
}