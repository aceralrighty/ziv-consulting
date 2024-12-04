"use client";
import {useState} from "react";
import HeadshotImg from "/public/headshot.jpg";
import Image from "next/image";

const accomplishments = [
    {
        title: "Problem-solving",
        description: " I learned to approach complex challenges from multiple angles, finding solutions that aligned with the company's goals."
    },
    {
        title: "Collaboration",
        description: "By working closely with cross-functional teams, I gained experience in communication and teamwork—skills that are vital for working in or eventually leading diverse groups."
    },
    {
        title: "Adaptability",
        description: "The fast-paced nature of fintech required me to quickly adjust to new technologies and methods, preparing me for the flexibility needed in future leadership roles."
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
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        handleInteraction(x, y, width, height);
    };

    const handleTouchStart = (e) => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - left - width / 2;
        const y = touch.clientY - top - height / 2;
        handleInteraction(x, y, width, height);
    };

    const handleInteractionEnd = () => {
        setShadowStyle({boxShadow: "0 0 25px rgba(0, 0, 0, 0.5)"});
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
                    style={{objectFit: "cover"}}
                    className="rounded-full"
                />
            </div>
            <div
                className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark"
                id="about">
                <p className="text-lg leading-relaxed font-light text-left">
                    As an emerging software engineer with a solid technical foundation and growing interest in
                    leadership. I am excited to build my career in the technology industry with a long-term goal of
                    taking on management responsibilities. My recent internship at Cambridge Investment Research offered
                    valuable insights into the intersection of finance and technology, strengthening my belief in my
                    ability to contribute meaningfully to future employers' success.

                    During my internship, I had the opportunity to work on a fully functional payment processing portal
                    that clients could use for transactions. This hands-on experience not only sharpened my technical
                    skills but also gave me a glimpse into the importance of developing soft skills, such as:
                </p>

                <div className="flex flex-col items-center space-y-4 my-4">
                    {accomplishments.map((item, index) => (
                        <div key={index} className="text-center text-lg font-light">
                            <strong className="block font-bold">{item.title}</strong>
                            <span className="block text-left">{item.description}</span>
                        </div>
                    ))}
                </div>

                <p className="text-lg leading-relaxed font-light text-left">
                    This internship deepened my appreciation for how technology is transforming the financial industry,
                    and I am excited to continue developing my skills in both technical and leadership areas, so I can
                    contribute to the growth and innovation of organizations in the future.
                </p>
            </div>
        </div>
    );
}
