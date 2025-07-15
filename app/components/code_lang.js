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
import {useEffect, useState, useMemo} from "react";

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
    // Duplicate the array multiple times for better infinite scrolling
    const duplicatedSlides = useMemo(() => {
        return [...slidesData, ...slidesData, ...slidesData];
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
        setSettings((prev) => ({ ...prev, autoplay: true }));
    }, []);

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Languages
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md overflow-hidden">
                <Slider {...settings}>
                    {duplicatedSlides.map((slide, index) => (
                        <div key={`${slide.name}-${index}`} className="flex flex-col items-center px-4">
                            <div className="flex flex-col items-center justify-center h-20">
                                <Image
                                    src={slide.icon}
                                    alt={slide.name}
                                    width={50}
                                    height={50}
                                    className="dark:filter dark:brightness-75"
                                    priority
                                />
                            </div>
                            <p className="text-sm font-medium text-nav-t dark:text-nav-t-dark mt-2 text-center">
                                {slide.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}