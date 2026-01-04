import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "xxx",
        description: "aadf",
        tech: ["React", "Hooks"],
        link: "https://github.com/Uzy777/...",
    },
];

const Projects = () => {
    return (
        <section className="bg-black py-24 text-white">
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
