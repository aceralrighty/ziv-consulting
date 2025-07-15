import react from "/public/icons/react.png";
import pytest from "/public/icons/pytest.png";
import dotnet from "/public/icons/dotnet.png";
import flask from "/public/icons/flask.png";
import spring from "/public/icons/Spring.png";
import sqlalchemy from "/public/icons/SQLAlchemy.png";
import junit from "/public/icons/JUnit.png";
import tailwind from "/public/icons/tailwind.png";
import jquery from "/public/icons/jquery.png";
import kafka from "/public/icons/Apache Kafka.png";
import Slider from "react-slick";

import Image from "next/image";
import {useEffect, useState, useMemo} from "react";

const frameworksData = [
    {icon: react, name: "React"},
    {icon: pytest, name: "PyTest"},
    {icon: dotnet, name: "Dotnet"},
    {icon: flask, name: "Flask"},
    {icon: spring, name: "Spring"},
    {icon: junit, name: "JUnit"},
    {icon: sqlalchemy, name: "SQLAlchemy"},
    {icon: tailwind, name: "Tailwind CSS"},
    {icon: jquery, name: "JQuery"},
    {icon: kafka, name: "Apache Kafka"}
];

export default function Framework() {
    // Duplicate the array multiple times for better infinite scrolling
    const duplicatedFrameworks = useMemo(() => {
        return [...frameworksData, ...frameworksData, ...frameworksData];
    }, []);

    const [settings, setSettings] = useState({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000, // Smooth transition speed
        autoplaySpeed: 1000, // Faster autoplay
        cssEase: "linear",
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        variableWidth: false,
        centerMode: false,
        lazyLoad: 'ondemand', // Improve performance
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
        setSettings((prev) => ({...prev, autoplay: true}));
    }, []);

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Frameworks
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md overflow-hidden">
                <Slider {...settings}>
                    {duplicatedFrameworks.map((framework, index) => (
                        <div key={`${framework.name}-${index}`} className="flex flex-col items-center px-4">
                            <div className="flex flex-col items-center justify-center h-20">
                                <Image
                                    src={framework.icon}
                                    alt={framework.name}
                                    width={50}
                                    height={50}
                                    className="dark:filter dark:brightness-75"
                                    priority
                                />
                            </div>
                            <p className="text-sm font-medium text-nav-t dark:text-nav-t-dark mt-2 text-center">
                                {framework.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}