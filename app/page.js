"use client";

import { useState } from "react";
import MyHead from "./components/headshot";
import Experience from "./components/experience";
import Education from "./components/education";
import Languages from "./components/languages";
import Award from "./components/awards";
import Form from "./components/form";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Code from "./components/code_lang";
import Tools from "./components/tools";
import Framework from "./components/frameworks";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import ThemeToggle from "./components/themeToggle";

export default function Home() {
    const [hovered, setHovered] = useState(false);
    const [hoveredContact, setHoveredContact] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-global_bg dark:bg-global_bg_dark dark:text-body_t_color-dark text-body_t_Color">
            {menuOpen && (
                <div className="fixed inset-0 bg-global_bg dark:bg-global_bg_dark opacity-95 transition-opacity duration-300 z-10"></div>
            )}

            <nav className="sticky top-0 z-20 flex items-center justify-between px-4 mt-4 bg-global_bg dark:bg-global_bg_dark shadow-md">
                <div className="font-instruItalic px-4">
                    <p className="text-nav_t_Color dark:text-nav_t_color-dark text-2xl">
                        Ziv Consulting
                    </p>
                </div>


                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <XIcon className="h-8 w-8 text-nav_t_Color dark:text-nav_t_color-dark" />
                        ) : (
                            <MenuIcon className="h-8 w-8 text-nav_t_Color dark:text-nav_t_color-dark" />
                        )}
                    </button>
                </div>


                <div
                    className={`${
                        menuOpen ? "flex" : "hidden"
                    } md:flex md:space-x-4 flex-col md:flex-row items-center font-instruItalic px-4 transition-transform duration-300 ease-in-out`}
                >
                    <ThemeToggle />

                    <a
                        href="#about"
                        className={`mt-2 md:mt-0 text-nav_t_Color dark:text-nav_t_color-dark text-2xl transition-all duration-300 ${
                            hovered ? "drop-shadow-lg scale-105" : "scale-100"
                        }`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className={`mt-2 md:mt-0 text-nav_t_Color dark:text-nav_t_color-dark text-2xl transition-all duration-300 ${
                            hoveredContact ? "drop-shadow-lg scale-105" : "scale-100"
                        }`}
                        onMouseEnter={() => setHoveredContact(true)}
                        onMouseLeave={() => setHoveredContact(false)}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            </nav>


            <div>
                <MyHead />
                <Code />
                <Tools />
                <Framework />
                <Projects />
                <Experience />
                <Education />
                <Award />
                <Languages />
                <Form />
                <Footer />
            </div>
        </div>
    );
}
