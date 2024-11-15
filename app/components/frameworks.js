import react from "/public/icons/react.png"
import pytest from "/public/icons/pytest.png"
import dotnet from "/public/icons/dotnet.png"
import flask from "/public/icons/flask.png"
import spring from "/public/icons/Spring.png"
import sqlalchemy from "/public/icons/SQLAlchemy.png"
import junit from "/public/icons/JUnit.png"
import tailwind from "/public/icons/tailwind.png";
import jquery from "/public/icons/jquery.png";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";
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
]
export default function Framwork() {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: true,
    }, [
        AutoScroll({
            playOnInit: true,
            delay: 3150,
            stopOnInteraction: false,
        }),
    ]);

return (
    <section className="flex flex-col items-center mt-16 space-y-8">
        <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
            Frameworks
        </h2>
        <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md">
            <div className="embla w-full overflow-hidden" ref={emblaRef}>
                <div
                    className="embla__container flex items-center"
                    style={{
                        display: "flex",
                        gap: "100px",
                    }}
                >
                    {frameworksData.map((slide, index) => (
                        <div
                            className="embla__slide flex flex-col items-center"
                            key={index}
                            style={{
                                flex: "0 0 auto",
                                width: "160px",
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
                            <p className="text-sm font-medium text-nav_t_Color dark:text-nav_t_color-dark">
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