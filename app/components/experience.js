import Army from "/public/Military.png";
import Image from "next/image";

const experience = [
    {
        title: "Software Developer Intern",
        company: "Cambridge Investment Research",
        length: "May 2024 - August 2024",
        where: " Fairfield, Iowa ",
        duties: " As a key member of the development team, I played a pivotal role in the creation of a comprehensive payment processing portal from its inception. Utilizing ReactJS for the front-end and C# for the back-end, we effectively integrated Braintree for secure payment processing. To ensure product stability, I contributed significantly by writing unit tests for both the front-end and back-end components. I gained valuable experience working within an Agile and LeSS Scrum framework. Moreover, I demonstrated a commitment to community involvement by volunteering with the Cambridge organization for Ragbrai 2024."
    },
    {
        title: "Assembly Operator",
        company: "Ashley Furniture Industries",
        length: "Nov 2021 - May 2023",
        where: " Mesquite, Texas ",
        duties: " Collaborated with an eight-person team in a fast-paced environment to construct high-end furniture, ensuring meticulous attention to detail and exceptional quality."
    },
    {
        title: "Scanner",
        company: "Madix, Inc.",
        length: "Feb 2020 - Nov 2021",
        where: " Terrell, Texas ",
        duties: " I was in charge of logging and guiding 4 production lines to produce a given number of product each day as well as guide forklift operators to place said product in the correct areas of the warehouse."
    },
    {
        title: "Hydraulic Mechanic",
        company: "IDF ~ Israeli Defense Force",
        length: "August 2018 - April 2019",
        where: " Israel ",
        duties: "Completed basic training with a Certificate of Excellence\n" +
            "Maintained and serviced rescue vehicle cranes, ensuring operational readiness and preventing in-field failures, even under challenging conditions\n"
    }
    
];

export default function Experience() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color">Experience</h2>
            <div className="w-3/4 md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md text-gray-800">
                <div className="flex flex-col space-y-8">
                    {experience.slice(0, -1).map((item, index) => (
                        <div key={index}>
                            <p className="text-lg leading-relaxed font-light text-left mb-4">
                                <strong className={"font-bold"}>{item.title}</strong><br/>
                                <strong className={"font-instruItalic align-middle "}>{item.company} </strong> <br/>
                                <strong className={"font-semibold"}>{item.length}</strong> <br/>
                                <strong className={"font-serif"}>{item.where}</strong> <br/>
                                <strong>{item.duties}</strong>
                            </p>
                        </div>
                    ))}

                    {experience.length > 0 && (
                        <div className="flex items-center mt-8 space-x-4">

                            <div className="w-64 h-64 rounded-lg overflow-hidden hidden sm:block">
                                <Image src={Army} alt="Army" width={256} height={256} objectFit="cover"/>
                            </div>

                            <div className="text-left">
                                <p className="text-lg leading-relaxed font-light">
                                    <strong className={"font-bold"}>{experience[experience.length - 1].title}</strong><br/>
                                    <strong>{experience[experience.length - 1].company}</strong> <br/>
                                    <strong className={"font-instruItalic align-middle "}>{experience[experience.length - 1].length}</strong> <br/>
                                    <strong className={"font-semibold"}>{experience[experience.length - 1].where}</strong> <br/>
                                    <strong className={"font-serif"}>{experience[experience.length - 1].duties}</strong>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}