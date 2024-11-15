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
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";
import "../globals.css";
import Image from "next/image";

// Data for slides
const slidesData = [
    {icon: python, name: "Python"},
    {icon: csharp, name: "C#"},
    {icon: java, name: "Java"},
    {icon: sql, name: "SQL"},
    {icon: javascript, name: "JavaScript"},
    {icon: html, name: "HTML"},
    {icon: css, name: "CSS"},
    {icon: xml, name: "XML"},
    {icon: php, name: "PHP"},
    {icon: cobol, name: "Cobol"},
];

export default function Code() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: true,
        },
        [
            AutoScroll({
                playOnInit: true,
                delay: 2850,
                stopOnInteraction: false,
            }),
        ]
    );

    return (
        <section className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                Languages
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md">
                <div className="embla w-full overflow-hidden" ref={emblaRef}>
                    <div
                        className="embla__container flex"
                        style={{
                            gap: "100px",
                        }}
                    >
                        {slidesData.map((slide, index) => (
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
