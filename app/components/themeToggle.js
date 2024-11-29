"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
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
        <div className="flex items-center">
            {/* Mobile Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="block md:hidden text-nav_t_Color dark:text-nav_t_color-dark"
            >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>

            {/* Desktop Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:block text-nav_t_Color dark:text-nav_t_color-dark"
            >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
        </div>
    );
}
