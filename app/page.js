"use client"

import {useState} from "react";
import MyHead from "./components/headshot";
import Experience from "./components/experience";
import Education from "./components/education";
import Languages from "./components/languages";
import Award from "./components/awards";
import Form from "./components/form";
import Footer from "./components/footer";
import {MenuIcon, XIcon} from "@heroicons/react/solid";

export default function Home() {
    const [hovered, setHovered] = useState(false);
    const [hoveredContact, setHoveredContact] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            {menuOpen && (
                <div className="fixed inset-0 bg-gray-950 opacity-95 transition-opacity duration-300 z-10"></div>
            )}

            <nav className="relative z-20 flex items-center justify-between px-4 mt-4">
                <div className="font-instruItalic px-4">
                    <p className="text-nav_t_Color text-2xl">Ziv Consulting</p>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <XIcon className="h-8 w-8 text-nav_t_Color" />
                        ) : (
                            <MenuIcon className="h-8 w-8 text-nav_t_Color" />
                        )}
                    </button>
                </div>

                <div
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } md:flex md:space-x-4 font-instruItalic px-4 transition-transform duration-300 ease-in-out`}
                >
                    <a
                        href="#"
                        className={`mr-4 text-nav_t_Color text-2xl transition-all duration-300 ${
                            hovered ? "drop-shadow-lg scale-105" : "scale-100"
                        }`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className={`mr-4 text-nav_t_Color text-2xl transition-all duration-300 ${
                            hoveredContact ? "drop-shadow-lg scale-105" : "scale-100"
                        }`}
                        onMouseEnter={() => setHoveredContact(true)}
                        onMouseLeave={() => setHoveredContact(false)}
                    >
                        Contact
                    </a>
                </div>
            </nav>

            <MyHead/>
            <Experience/>
            <Education/>
            <Award/>
            <Languages/>
            <Form/>
            <Footer/>
        </>
    );
}
