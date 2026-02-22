"use client";
import { useState } from "react";
import HeadshotImg from "../../public/headshot.jpg";
import Image from "next/image";

const accomplishmentsUpdated = [
    {
        title: "Problem-Solving",
        description:
            "I dive into complex systems, optimize performance, and deliver practical solutions that hold up under real production demands.",
    },
    {
        title: "Collaboration",
        description:
            "I work closely with engineers and stakeholders across domains, sharing ideas, reviewing code, and building stronger systems together.",
    },
    {
        title: "Adaptability",
        description:
            "I learn new technologies quickly and adjust to evolving requirements without sacrificing quality, clarity, or delivery momentum.",
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
                    I’m a full-stack software engineer focused on building scalable backend APIs, modular .NET systems, and clean React frontends that ship confidently to production. I work across C#, Java, Python, and JavaScript, designing secure, maintainable applications backed by Docker, CI/CD pipelines, and monitoring.
                </p>

                <p className="text-lg leading-relaxed font-light text-left text-body-t-color dark:text-body-t-color-dark mt-4">
                    From payment platforms to event-driven order systems and ML.NET pipelines running on real data, I care about performance, reliability, and clean architecture. I build systems that are fast, resilient, and designed to scale.
                </p>

                <p className="text-lg leading-relaxed font-light text-left text-body-t-color dark:text-body-t-color-dark mt-4">
                    I’m continuing to grow not just technically, but in ownership and leadership, helping guide systems and teams toward thoughtful, well-engineered solutions.
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
