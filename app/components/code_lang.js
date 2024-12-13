import Slider from "react-slick";
import csharp from "/public/icons/csharp.png";
import html from "/public/icons/html.png";
import python from "/public/icons/python.png";
import java from "/public/icons/java.png";
import javascript from "/public/icons/javascript.png";
import sql from "/public/icons/sql.png";
import css from "/public/icons/css.png";
import xml from "/public/icons/xml.png";
import php from "/public/icons/PHP.png";
import cobol from "/public/icons/cobol-language-svgrepo-com.png";
import "../globals.css";
import Image from "next/image";
import {useEffect, useState} from "react";

// Data for slides
const slidesData = [
    { icon: python, name: "Python" },
    { icon: csharp, name: "C#" },
    { icon: java, name: "Java" },
    { icon: sql, name: "SQL" },
    { icon: javascript, name: "JavaScript" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: xml, name: "XML" },
    { icon: php, name: "PHP" },
    { icon: cobol, name: "Cobol" },
];

export default function Code() {
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
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                Languages
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md">
                <Slider {...settings}>
                    {slidesData.map((slide, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={slide.icon}
                                alt={slide.name}
                                width={50}
                                height={50}
                                className="dark:filter dark:brightness-75"
                                priority
                            />
                            <p
                                className="text-sm font-medium text-nav_t_Color dark:text-nav_t_color-dark mt-4"
                                style={{marginLeft: "10px"}}
                            >
                                {slide.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    );
}
