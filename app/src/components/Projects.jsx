import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Country Explorer 🌍",
        description: "Browse countries using an external API with filters, dynamic views and leaflet maps integration.",
        tech: ["React", "REST API", "Leaflet", "Data Filtering"],
        link: "https://github.com/Uzy777/Mini-Projects/tree/main/React/country-explorer",
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
