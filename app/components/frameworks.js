import react from "/public/icons/react.png"
import pytest from "/public/icons/pytest.png"
import dotnet from "/public/icons/dotnet.png"
import flask from "/public/icons/flask.png"
import spring from "/public/icons/Spring.png"
import sqlalchemy from "/public/icons/SQLAlchemy.png"
import junit from "/public/icons/JUnit.png"
import tailwind from "/public/icons/tailwind.png";
import jquery from "/public/icons/jquery.png";
import kafka from "/public/icons/Apache Kafka.png"
import Slider from "react-slick";
import "../globals.css";
import Image from "next/image";

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
]
export default function Framework() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2600,
        autoplaySpeed: 2600,
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
            Frameworks
        </h2>
        <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md">
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
                        <p className="text-sm font-medium text-nav_t_Color dark:text-nav_t_color-dark mt-2">
                            {framework.name}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
);
}