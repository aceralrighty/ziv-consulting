import py from "/public/icons/pycharm.png"
import oracle from "/public/icons/oracle_apex.png"
import visual_studio from "/public/icons/visual_studio.png"
import vscode from "/public/icons/Visual Studio Code (VS Code).png"
import intellij from "/public/icons/intellij-idea.512x512.png"
import xcode from "/public/icons/Xcode.png"
import github from "/public/icons/GitHub.png"
import aws from "/public/icons/AWS.png"
import ado from "/public/icons/Azure Devops.png"
import rider from "/public/icons/Rider.png"
import webstorm from "/public/icons/WebStorm.png"
import mysql from "/public/icons/Mysql.png"
import sqlite from "/public/icons/Sqlite.png"
import docker from "/public/icons/Docker.png"
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";
import "../globals.css";
import Image from "next/image";

const toolsData = [
    {icon: py, name: "PyCharm"},
    {icon: intellij, name: "Intellij IDEA"},
    {icon: rider, name: "Rider"},
    {icon: webstorm, name: "WebStorm Code"},
    {icon: vscode, name: "VS Code"},
    {icon: docker, name: "Docker"},
    {icon: visual_studio, name: "Visual Studio"},
    {icon: xcode, name: "Xcode"},
    {icon: oracle, name: "Oracle Apex"},
    {icon: github, name: "Github"},
    {icon: sqlite, name: "Sqlite"},
    {icon: mysql, name: "Mysql"},
    {icon: ado, name: "Azure Devops"},
    {icon: aws, name: "AWS"},
];

export default function Tools() {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: true,
    }, [
        AutoScroll({
            playOnInit: true,
            delay: 3000,
            stopOnInteraction: false,
        }),
    ]);

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                Tools
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md">
                <div className="embla w-full overflow-hidden" ref={emblaRef}>
                    <div
                        className="embla__container flex items-center"
                        style={{
                            display: "flex",
                            gap: "90px",
                        }}
                    >
                        {toolsData.map((slide, index) => (
                            <div
                                className="embla__slide flex flex-col items-center"
                                key={index}
                                style={{
                                    flex: "0 0 auto",
                                    width: "150px",
                                }}
                            >
                                <Image
                                    src={slide.icon}
                                    alt={slide.name}
                                    width={50}
                                    height={50}
                                    className="dark:filter dark:brightness-75"
                                    priority
                                />
                                <p className="text-sm font-medium text-nav_t_Color dark:text-nav_t_color-dark mt-4"> {/* Increased margin-top for text */}
                                    {slide.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
