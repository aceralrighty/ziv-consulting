const projects = [
    {
        title: "Travel Oasis",
        description: "This project showed me how to built multi class projects in Java, with a super class and sub classes",
        technologies: "Github, Java, Maven",
        link: "https://github.com/aceralrighty/travel-oasis.git"
    },
    {
        title: "Library",
        description: "This was my project, with 2 super classes, 6 sub classes, 3 Enums and much more",
        technologies: "Github, Java, Maven",
        link: "https://github.com/aceralrighty/library.git"
    },
    {
        title: "My Portfolio",
        description: "This is my source code for the website you are currently viewing",
        technologies: "Github, Next.Js, TailwindCSS, SendGrid, CloudFlare, Vercel",
        link: "https://github.com/aceralrighty/ziv-consulting"
    },
    {
        title: "My experimental chat system(Work In Progress)",
        description: "This project is a part of my journey to learn about real-time messaging systems with Kafka as it's backbone",
        technologies: "Github, Java, Maven, Apache Kafka",
        link: "https://github.com/aceralrighty/kafkaChat"
    },
    {
        title: "Exposure to Modular Monolithic Architecture",
        description: "In this project I set out to learn about creating modules that can be independently developed and tested while still being called in a single application.",
        technologies: ".NET Framework, EntityFramework, Dapper(ORM), Azure SQL Server(containerized), ML.NET (Machine Learning library), CI Pipeline, Dockerized, Argon2 (award winning password hashing algorithm), Serilog (proper logging)",
        link: "https://github.com/aceralrighty/UnamedCSharpProject.git"
    },
    {
        title: "Bakery Business Management System(In Progress)",
        description: "As a backend engineer on this project for my friend's business, i've created a production-grade CRUD system for a real bakery using Spring Boot and Java, with 10+ RESTful APIs for\ninventory, orders, and customers. As well as integrating Stripe payments and Firebase JWT authentication with RBAC, ensuring secure, scalable operations. With push notifications set up through Firebase to update costumers on the status of their orders.",
        technologies: "Self-hosted Git server, Java, Spring Boot, Maven, Lombok, Angular, Firebase, OAuth, JUnit, GSON, TailwindCSS, JWT",
        link: "https://www.bauschbakeries.com"
    }
];

export default function Projects() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                My Projects
            </h2>
            {/* Removed hardcoded 'text-gray-800' */}
            <div
                className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md text-body-t dark:text-body-t-dark">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        /* Replaced 'bg-white' and 'dark:bg-gray-800' with theme colors */
                        <div key={index} className="bg-global-bg dark:bg-global-bg-dark p-4 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-nav-t dark:text-nav-t-dark">
                                {project.title}
                            </h3>
                            <p className="text-sm font-light mb-2 text-body-t dark:text-body-t-dark">
                                {project.description}
                            </p>
                            <p className="text-sm font-semibold mb-2 text-body-t dark:text-body-t-dark">
                                Technologies: {project.technologies}
                            </p>
                            {/* Replaced hardcoded blue colors with theme colors */}
                            <a
                                href={project.link}
                                className="text-nav-t hover:underline dark:text-nav-t-dark"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}