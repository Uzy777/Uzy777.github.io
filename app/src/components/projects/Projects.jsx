import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
    const [filter, setFilter] = useState(() => localStorage.getItem("projectsFilter") || "all");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.type === filter);
    const visibleProjectsCount = Math.min(visibleCount, filteredProjects.length);

    useEffect(() => {
        localStorage.setItem("projectsFilter", filter);
    }, [filter]);

    return (
        <section id="projects" className="py-24 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
                <h2 className="text-3xl font-semibold text-center">Projects</h2>

                <div className="flex justify-center gap-4 text-sm">
                    {["all", "project", "course"].map((v) => (
                        <button
                            key={v}
                            onClick={() => {
                                setFilter(v);
                                setVisibleCount(6);
                            }}
                            className={`px-3 py-1 rounded border transition ${
                                filter === v ? "bg-black text-white dark:bg-white dark:text-black" : "opacity-70 hover:opacity-100"
                            }`}
                        >
                            {v === "all" ? "All" : v === "project" ? "Mini Projects" : "Courses"}
                        </button>
                    ))}
                </div>

                <p className="text-center text-sm opacity-70">
                    Showing {visibleProjectsCount} of {filteredProjects.length} projects
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.slice(0, visibleCount).map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>

                {visibleCount < filteredProjects.length && (
                    <div className="text-center">
                        <button onClick={() => setVisibleCount((v) => v + 4)} className="text-sm underline opacity-70 hover:opacity-100">
                            Show more
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
