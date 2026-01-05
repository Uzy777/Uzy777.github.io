import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Country Explorer 🌍",
        description: "Browse countries using an external API with filters, dynamic views and leaflet maps integration.",
        tech: ["React", "REST API", "Leaflet", "Data Filtering"],
        type: "project",
        link: "https://github.com/Uzy777/Mini-Projects/tree/main/React/country-explorer",
        lastUpdated: "December 18 2025",
        status: "Completed",
    },
    {
        title: "Full Stack Open 🎓",
        description:
            "An introduction to modern web application development with JavaScript. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. The course also contains a section on GraphQL, a modern alternative to REST APIs.",
        tech: ["React", "Rest APIs", "Node.js", "GraphQL", "TypeScript", "CI/CD", "Containers", "Relational Databases"],
        type: "course",
        link: "https://github.com/Uzy777/FullStackOpen",
    },
    {
        title: "FreeCodeCamp - Certified Full Stack Developer 🤖",
        description:
            "Provides a comprehensive pathway to becoming a Certified Full Stack Developer, covering all the essential technologies required to build modern, scalable web applications from start to finish.",
        tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python", "Relational Database", "APIs"],
        type: "course",
        link: "https://github.com/Uzy777/freeCodeCamp-Projects/tree/main/Certified%20Full%20Stack%20Developer%20Curriculum",
    },
    {
        title: "Python API Development 🌐",
        description:
            "Built a robust API using FastAPI, covering essential concepts like routing, schema validation, and database integration. The project also includes automated testing with pytest and a CI/CD pipeline set up through GitHub Actions for seamless deployment.",
        tech: ["Python", "FastAPI", "Docker", "SQL", "Pytest", "CI/CD Pipelines"],
        type: "course",
        link: "https://github.com/Uzy777/Python-API-Development",
    },
    {
        title: "Harvard University CS50x 🏫",
        description: "Introduction to the intellectual enterprises of computer science and the art of programming.",
        tech: ["C", "Python", "SQL", "HTML", "CSS", "JavaScript", "Flask"],
        type: "course",
        link: "https://github.com/Uzy777/CS50x",
    },
    {
        title: "Python Crash Course 🐍",
        description: "Followed the Python Crash Course [Third Edition] Book by Eric Matthes.",
        tech: ["Python"],
        type: "course",
        link: "https://github.com/Uzy777/Python-Crash-Course",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState(() => {
        return localStorage.getItem("projectsFilter") || "all";
    });
    const [visibleCount, setVisibleCount] = useState(4);

    const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter);

    const visibleProjectsCount = Math.min(visibleCount, filteredProjects.length);

    useEffect(() => {
        localStorage.setItem("projectsFilter", filter);
    }, [filter]);

    return (
        <section className="py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
                <h2 className="text-3xl font-semibold text-center">Projects</h2>

                <div className="flex justify-center gap-4 text-sm">
                    {[
                        { label: "All", value: "all" },
                        { label: "Mini Projects", value: "project" },
                        { label: "Courses", value: "course" },
                    ].map((item) => (
                        <button
                            key={item.value}
                            onClick={() => {
                                setFilter(item.value);
                                setVisibleCount(4);
                            }}
                            className={`px-3 py-1 rounded border border-black/10 dark:border-white/10 transition ${
                                filter === item.value ? "bg-black text-white dark:bg-white dark:text-black" : "opacity-70 hover:opacity-100"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <p className="text-center text-sm opacity-70">
                    Showing {visibleProjectsCount} of {filteredProjects.length} projects
                </p>

                {filteredProjects.length === 0 && <p className="text-center opacity-70">No projects found for this filter.</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.slice(0, visibleCount).map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>

            {visibleCount < filteredProjects.length && (
                <div className="text-center mt-8">
                    <button className="text-sm underline opacity-70 hover:opacity-100 transition" onClick={() => setVisibleCount((prev) => prev + 4)}>
                        Show more
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
