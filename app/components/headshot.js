"use client";
import { useState } from "react";
import HeadshotImg from "/public//headshot.JPG";
import Image from "next/image";

const accomplishments = [
    {
        title: "Problem-solving",
        description: "I developed the ability to approach intricate challenges from diverse viewpoints, identifying effective solutions that aligned with organizational objectives."
    },
    {
        title: "Collaboration",
        description: "Working in close proximity with cross-functional teams fostered robust communication and teamwork abilities, crucial for leading diverse groups of individuals."
    },
    {
        title: "Adaptability",
        description: "The rapidly evolving fintech landscape necessitated adaptability and a willingness to embrace novel technologies and methodologies. This experience has equipped me to navigate the ever-changing demands of management roles."
    }
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
                    objectFit={"cover"}
                    className="rounded-full"
                />
            </div>
            <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark">
                <p className="text-lg leading-relaxed font-light text-left">
                    As a forthcoming software engineer with a robust technical foundation and a burgeoning interest in
                    leadership, I aspire to transition into management positions within the technology industry. My
                    recent summer internship at Cambridge Investment Research provided invaluable insights into the
                    dynamic convergence of finance and technology, reinforcing my conviction in my potential to make
                    a substantial contribution to the success of future employers.

                    During my internship, I had the privilege of working on a fully functional payment processing
                    portal that clients could utilize for payment transactions. These experiences not only enhanced my
                    technical proficiency but also honed essential management skills, including:
                </p>

                <div className="flex flex-col items-center space-y-4 my-4">
                    {accomplishments.map((item, index) => (
                        <p key={index} className="text-center text-lg font-light">
                            <strong className="font-bold">{item.title}:</strong><br/> {item.description}
                        </p>
                    ))}
                </div>

                <p className="text-lg leading-relaxed font-light text-left">
                    Through my internship, I developed a profound appreciation for the transformative impact of
                    technology on the financial sector. I am eager to leverage my technical expertise and leadership
                    acumen to drive innovation and deliver value to organizations that are shaping the future of
                    finance.
                </p>
            </div>
        </div>
    );
}
