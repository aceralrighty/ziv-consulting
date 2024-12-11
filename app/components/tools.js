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
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Smaller devices
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                Tools
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md">
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
                            <p className="text-sm font-medium text-nav_t_Color dark:text-nav_t_color-dark mt-4">
                                {tool.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
