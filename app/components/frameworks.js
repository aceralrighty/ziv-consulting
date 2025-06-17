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
import {useEffect, useState} from "react";

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
    {icon: kafka, name: "Apache Kafka"},
];

export default function Framework() {
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
        setSettings((prev) => ({...prev, autoplay: true}));
    }, []);

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Frameworks
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md">
                <Slider {...settings}>
                    {frameworksData.map((framework, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={framework.icon}
                                alt={framework.name}
                                width={50}
                                height={50}
                                className="dark:filter dark:brightness-75"
                                priority
                            />
                            <p
                                className="text-sm font-medium text-nav-t-color dark:text-nav-t-color-dark mt-4"
                                style={{marginLeft: "10px"}}
                            >
                                {framework.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
