const projects = [
    {
        title: "Project Title",
        description: "Brief description of the project.",
        technologies: "Tech stack used",
        link: "#"
    },

];

export default function Projects() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 ">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                My Projects
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark">
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
                            <a href={project.link} className="text-blue-500 hover:underline dark:text-blue-400">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
