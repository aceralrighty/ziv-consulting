const projects = [
    {
        title: "Flash Back",
        description: "This game was created for Byte Jam 2024 competition. In collaboration with 5 other students",
        technologies: "Teams, Github, C#, GDScript, Krita",
        link: "https://github.com/Time-Techies/time_techies_team.git",
    },
    {
        title: "Python Project (Incomplete)",
        description: "This is incomplete but the majority of work is there",
        technologies: "Github, Flask, Python, Discord, Jinja2",
        link: "https://github.com/aceralrighty/python_final.git"
    },
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
    }
    ,
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
        title: "Calling an API",
        description: "This project is me getting more comfortable making calls to API's",
        technologies: "Github, Java, Maven, Spring Boot",
        link: "https://github.com/aceralrighty/UFCAPI"
    },
    {
        title: "Web Scraping(Work In Progress)",
        description: "In this project I use a library i've never used before in order to scrape a website",
        technologies: "Github, Java, Maven, JSoup",
        link: "https://github.com/aceralrighty/WebScraper"
    },
    {
      title: "My Simple Web Server",
      description: "In this project i'm creating a simple web server that serves a single static web page(not full CRUD)",
      technologies: "Github, Java, Maven, Jackson, JUnit, Lombok",
      link: "https://github.com/aceralrighty/HttpServer"
    }

];

export default function Projects() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 ">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                My Projects
            </h2>
            <div
                className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-nav_t_Color dark:text-nav_t_color-dark">
                                {project.title}
                            </h3>
                            <p className="text-sm font-light mb-2 text-body_t_Color dark:text-body_t_color-dark">
                                {project.description}
                            </p>
                            <p className="text-sm font-semibold mb-2 text-body_t_Color dark:text-body_t_color-dark">
                                Technologies: {project.technologies}
                            </p>
                            <a
                                href={project.link}
                                className="text-blue-500 hover:underline dark:text-blue-400"
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
