import Army from "/public/Military.png";
import Image from "next/image";

const experience = [
    {
        title: "Full-Stack Engineer Intern",
        company: "Hydra Communications",
        length: "Feb 2025 - Current",
        where: "Remote | Iowa",
        duties: "At Hydra Communications, I'm architecting a production-ready, enterprise-grade CRUD system for a real bakery client, leveraging Spring Boot and Java to build robust, HTTPS-secured RESTful APIs that handle critical business operations including inventory management, order processing, and customer data. My development workflow encompasses comprehensive testing strategies—from unit and integration testing to full API validation—ensuring bulletproof system reliability. To enhance customer engagement, I developed real-time web push notifications using Firebase Cloud Messaging (FCM), delivering instant updates on exclusive deals and order status changes directly to customers' devices.\n" +
            "Working within our proprietary, self-hosted Version Control System, I manage product backlogs and prioritize backlog items (PBIs) in an agile environment that thrives on autonomy and innovation. The culture here is refreshingly collaborative—I'm empowered to dive deep into problem-solving, explore creative solutions independently, and engage in strategic discussions with the team to align technical implementation with the evolving vision. Nothing is set in stone, which means every day brings new opportunities to innovate and make meaningful impact."
    },
    {
        title: "Software Developer Intern",
        company: "Cambridge Investment Research",
        length: "May 2024 - August 2024",
        where: "Fairfield, Iowa",
        duties:
            "As a key member of the development team, I played a pivotal role in the creation of a comprehensive payment processing portal from its inception. Utilizing ReactJS for the front-end and C# for the back-end, we effectively integrated Braintree for secure payment processing. To ensure product stability, I contributed significantly by writing unit tests for both the front-end and back-end components. I gained valuable experience working within an Agile and LeSS Scrum framework. Moreover, I demonstrated a commitment to community involvement by volunteering with the Cambridge organization for Ragbrai 2024.",
    },
    {
        title: "Assembly Operator",
        company: "Ashley Furniture Industries",
        length: "Nov 2021 - March 2023",
        where: "Mesquite, Texas",
        duties:
            "Collaborated with an eight-person team in a fast-paced environment to construct high-end furniture, ensuring meticulous attention to detail and exceptional quality.",
    },
    {
        title: "Information Operator",
        company: "Madix, Inc.",
        length: "Feb 2020 - Nov 2021",
        where: "Terrell, Texas",
        duties:
            "I was in charge of logging and guiding 4 production lines to produce a given number of product each day as well as guide forklift operators to place said product in the correct areas of the warehouse.",
    },
    {
        title: "Hydraulic Mechanic",
        company: "IDF ~ Israeli Defense Force",
        length: "August 2018 - April 2019",
        where: "Israel",
        duties:
            "Completed basic training with a Certificate of Excellence\nMaintained and serviced rescue vehicle cranes, ensuring operational readiness and preventing in-field failures, even under challenging conditions",
    },
];

export default function Experience() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Experience
            </h2>
            {/* The text color is now inherited and the background uses your theme colors */}
            <div
                className="w-11/12 md:w-2/3 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md text-body-t dark:text-body-t-dark">
                <div className="flex flex-col space-y-8">
                    {experience.slice(0, -1).map((item, index) => (
                        /* Replaced hardcoded 'bg-white' and 'dark:bg-gray-800' with theme colors */
                        <div key={index} className="bg-global-bg dark:bg-global-bg-dark p-4 rounded-lg shadow-sm">
                            <p className="text-lg leading-relaxed font-light text-body-t dark:text-body-t-dark">
                                {/* Added base classes for light mode to all <strong> and <span> tags */}
                                <strong className="font-bold text-nav-t dark:text-nav-t-dark">{item.title}</strong>
                                <br/>
                                <strong
                                    className="font-instru-italic text-nav-t dark:text-nav-t-dark">{item.company}</strong>
                                <br/>
                                <strong
                                    className="font-semibold text-body-t dark:text-body-t-dark">{item.length}</strong>
                                <br/>
                                <strong className="font-serif text-body-t dark:text-body-t-dark">{item.where}</strong>
                                <br/>
                                <span className="text-body-t dark:text-body-t-dark">{item.duties}</span>
                            </p>
                        </div>
                    ))}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start mt-8 gap-4">
                        <div className="w-64 h-64 rounded-lg overflow-hidden hidden sm:block">
                            <Image
                                src={Army}
                                alt="Army"
                                width={256}
                                height={256}
                                style={{objectFit: "cover"}}
                            />
                        </div>
                        <div className="text-left w-full sm:w-auto">
                            <p className="text-lg leading-relaxed font-light text-body-t dark:text-body-t-dark">
                                {/* Added base classes for light mode to all <strong> and <span> tags */}
                                <strong className="font-bold text-nav-t dark:text-nav-t-dark">
                                    {experience[experience.length - 1].title}
                                </strong>
                                <br/>
                                <strong className="font-instru-italic text-nav-t dark:text-nav-t-dark">
                                    {experience[experience.length - 1].company}
                                </strong>
                                <br/>
                                <strong className="font-semibold text-body-t dark:text-body-t-dark">
                                    {experience[experience.length - 1].length}
                                </strong>
                                <br/>
                                <strong className="font-serif text-body-t dark:text-body-t-dark">
                                    {experience[experience.length - 1].where}
                                </strong>
                                <br/>
                                <span className="text-body-t dark:text-body-t-dark">
                                    {experience[experience.length - 1].duties}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}