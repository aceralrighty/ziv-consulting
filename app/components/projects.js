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
        description: "This is a comprehensive .NET 9.0 learning project built as a modular monolith with 8 independent modules (Auth, User, Address, Schedule, Service, Recommendation, StockPrediction, and Metrics), each having its own DbContext, repositories, and services. The standout feature is an advanced ML.NET stock prediction system that processes 619,040 records with 97.78% R² accuracy and 2.5% average prediction error, alongside a complete monitoring stack using Prometheus, Grafana, and OpenTelemetry. The architecture emphasizes enterprise-level patterns including generic repositories, comprehensive caching, extensive testing, and real-time metrics tracking across all modules. It's designed to demonstrate modern .NET development practices while providing a foundation for eventual microservices migration.",
        technologies: ".NET Framework, EntityFramework, Dapper(ORM), Azure SQL Server(containerized), ML.NET (Machine Learning library), CI Pipeline, Dockerized, Argon2 (award winning password hashing algorithm), Serilog, Prometheus, Grafana",
        link: "https://github.com/aceralrighty/UnamedCSharpProject.git"
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