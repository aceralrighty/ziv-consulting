"use client";
import { useState } from "react";
import HeadshotImg from "/public/headshot.jpg";
import Image from "next/image";

const accomplishmentsUpdated = [
    {
        title: "Problem-solving",
        description:
            "I tackle challenges by digging deep and finding practical solutions that actually work in real projects.",
    },
    {
        title: "Collaboration",
        description:
            "Working closely with teammates is where I thrive, sharing ideas, reviewing code, and building better software together.",
    },
    {
        title: "Adaptability",
        description:
            "I pick up new tech quickly and adjust to changing requirements without losing focus or momentum.",
    },
];

export default function MyHead() {
    const [shadowStyle, setShadowStyle] = useState({});

    const handleInteraction = (x, y, width, height) => {
        const maxOffset = 15;
        const shadowX = (x / (width / 2)) * maxOffset;
        const shadowY = (y / (height / 2)) * maxOffset;
        setShadowStyle({
            boxShadow: `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.3)`,
        });
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        handleInteraction(x, y, width, height);
    };

    const handleTouchStart = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - left - width / 2;
        const y = touch.clientY - top - height / 2;
        handleInteraction(x, y, width, height);
    };

    const handleInteractionEnd = () => {
        setShadowStyle({ boxShadow: "0 0 25px rgba(0, 0, 0, 0.5)" });
    };

    return (
        <div className="flex flex-col items-center mt-16 space-y-4">
            <div
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl"
                style={shadowStyle}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleInteractionEnd}
            >
                <Image
                    src={HeadshotImg}
                    alt="headshot"
                    width={320}
                    height={320}
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                />
            </div>

            <div
                className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md text-body-t dark:text-body-t-dark"
                id="about"
            >
                <p className="text-lg leading-relaxed font-light text-left text-body-t-color dark:text-body-t-color-dark">
                    I’m a software engineer who loves building real, solid systems, from scalable backend APIs and modular
                    .NET monoliths to React frontends and cloud-powered projects. I’m comfortable jumping between Java,
                    C#, Python, and JavaScript, and I’m always digging into new tech to solve problems smarter and faster.
                </p>
                <p className="text-lg leading-relaxed font-light text-left text-body-t-color dark:text-body-t-color-dark mt-4">
                    I’ve worked on payment platforms, bakery order systems, and even thrown some machine learning into production
                    pipelines, yep, ML.NET with real data. I’m big on clean code, automation, and making sure everything I build
                    can actually run in the real world, with Docker, CI/CD, monitoring included.
                </p>
                <p className="text-lg leading-relaxed font-light text-left text-body-t-color dark:text-body-t-color-dark mt-4">
                    I’m aiming to keep growing not just technically, but as someone who can help guide teams and projects in the
                    future. Collaboration and learning from others is how I get better every day, and I’m excited to bring that
                    energy wherever I land next.
                </p>

                <div className="flex flex-col items-center space-y-4 my-6">
                    {accomplishmentsUpdated.map((item, index) => (
                        <div key={index} className="text-center text-lg font-light">
                            <strong className="block font-bold">{item.title}</strong>
                            <span className="block text-left">{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
