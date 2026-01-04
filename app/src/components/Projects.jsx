import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Country Explorer 🌍",
        description: "Browse countries using an external API with filters, dynamic views and leaflet maps integration.",
        tech: ["React", "REST API", "Leaflet", "Data Filtering"],
        link: "https://github.com/Uzy777/Mini-Projects/tree/main/React/country-explorer",
    },
    {
        title: "Python API Development - Course 🌐",
        description:
            "Built a robust API using FastAPI, covering essential concepts like routing, schema validation, and database integration. The project also includes automated testing with pytest and a CI/CD pipeline set up through GitHub Actions for seamless deployment.",
        tech: ["Python", "FastAPI", "Docker", "SQL", "Pytest", "CI/CD Pipelines"],
        link: "https://github.com/Uzy777/Python-API-Development",
    },
    {
        title: "Harvard University CS50x - Course 🏫",
        description: "Introduction to the intellectual enterprises of computer science and the art of programming.",
        tech: ["C", "Python", "SQL", "HTML", "CSS", "JavaScript", "Flask"],
        link: "https://github.com/Uzy777/CS50x",
    },
    {
        title: "Python Crash Course - Course 🐍",
        description: "Followed the Python Crash Course [Third Edition] Book by Eric Matthes.",
        tech: ["Python"],
        link: "https://github.com/Uzy777/Python-Crash-Course",
    },
];

const Projects = () => {
    return (
        <section className="py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
                <h2 className="text-3xl font-semibold text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
