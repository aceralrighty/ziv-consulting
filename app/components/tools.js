import Slider from "react-slick";
import py from "/public/icons/pycharm.png";
import oracle from "/public/icons/oracle_apex.png";
import visual_studio from "/public/icons/visual_studio.png";
import vscode from "/public/icons/Visual Studio Code (VS Code).png";
import intellij from "/public/icons/intellij-idea.512x512.png";
import xcode from "/public/icons/Xcode.png";
import github from "/public/icons/GitHub.png";
import aws from "/public/icons/AWS.png";
import ado from "/public/icons/Azure Devops.png";
import rider from "/public/icons/Rider.png";
import webstorm from "/public/icons/WebStorm.png";
import mysql from "/public/icons/MySQL.png";
import sqlite from "/public/icons/SQLite.png";
import docker from "/public/icons/Docker.png";
import "../globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const toolsData = [
    { icon: py, name: "PyCharm" },
    { icon: intellij, name: "Intellij IDEA" },
    { icon: rider, name: "Rider" },
    { icon: webstorm, name: "WebStorm" },
    { icon: vscode, name: "VS Code" },
    { icon: docker, name: "Docker" },
    { icon: visual_studio, name: "Visual Studio" },
    { icon: xcode, name: "Xcode" },
    { icon: oracle, name: "Oracle Apex" },
    { icon: github, name: "GitHub" },
    { icon: sqlite, name: "SQLite" },
    { icon: mysql, name: "MySQL" },
    { icon: ado, name: "Azure DevOps" },
    { icon: aws, name: "AWS" },
];

export default function Tools() {
    const [settings, setSettings] = useState({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        speed: 2800,
        autoplaySpeed: 2800,
        cssEase: "linear",
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    useEffect(() => {
        setSettings((prev) => ({ ...prev, autoplay: true }));
    }, []);

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Tools
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md">
                <Slider {...settings}>
                    {toolsData.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={tool.icon}
                                alt={tool.name}
                                width={50}
                                height={50}
                                className="dark:filter dark:brightness-75"
                                priority
                            />
                            <p
                                className="text-sm font-medium text-nav-t-color dark:text-nav-t-color-dark mt-4"
                                style={{marginLeft: "10px"}}
                            >
                                {tool.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}