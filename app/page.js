"use client"

import {useState} from "react";
import MyHead from "../app/headshot"

export default function Home() {
    const [hovered, setHovered] = useState(false);
    const [hoveredContact, setHoveredContact] = useState(false);
    return (
        <>
        <nav className="flex items-center justify-between px-4 mt-4">
            <div className={"font-instruItalic px-4"}>
                <p className={"text-nav_t_Color text-2xl"}>Ziv Consulting</p>
            </div>
            <div className="flex space-x-4 font-instruItalic px-4">
                <a href="#" className={`mr-4 text-nav_t_Color text-2xl ${hovered ? 'drop-shadow-lg' : ``}`}
                   onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>About</a>
                <a
                    href="#"
                    className={`mr-4 text-nav_t_Color text-2xl ${hoveredContact ? 'drop-shadow-lg' : ''}`}
                    onMouseEnter={() => setHoveredContact(true)}
                    onMouseLeave={() => setHoveredContact(false)}
                >
                    Contact
                </a>
            </div>
        </nav>
        <MyHead />
        </>
    );
}
