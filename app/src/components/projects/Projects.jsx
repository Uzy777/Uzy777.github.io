import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import { projects as baseProjects } from "../../data/projects";
import { getLastCommitDate, formatCommitDate } from "../../utils/github";

const Projects = () => {
    const [filter, setFilter] = useState(() => localStorage.getItem("projectsFilter") || "all");
    const [visibleCount, setVisibleCount] = useState(6);
    const [projectItems, setProjectItems] = useState(baseProjects);
    const [sortBy, setSortBy] = useState("date-desc");

    const filteredProjects = filter === "all" ? projectItems : projectItems.filter((p) => p.type === filter);

    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (sortBy === "alpha-asc") {
            return a.title.localeCompare(b.title);
        }

        if (sortBy === "alpha-desc") {
            return b.title.localeCompare(a.title);
        }

        if (sortBy === "date-asc") {
            return new Date(a.lastUpdated) - new Date(b.lastUpdated);
        }

        if (sortBy === "date-desc") {
            return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        }

        return 0;
    });

    const visibleProjectsCount = Math.min(visibleCount, filteredProjects.length);

    useEffect(() => {
        localStorage.setItem("projectsFilter", filter);
    }, [filter]);

    useEffect(() => {
        const loadProjectDates = async () => {
            const updatedProjects = await Promise.all(
                baseProjects.map(async (project) => {
                    if (!project.repo) {
                        return project;
                    }
                    try {
                        const commitDate = await getLastCommitDate(project.repo, project.path);

                        return {
                            ...project,
                            lastUpdated: formatCommitDate(commitDate),
                            isFallback: false,
                        };
                    } catch (error) {
                        return {
                            ...project,
                            lastUpdated: project.lastUpdated,
                            isFallback: true,
                        };
                    }
                }),
            );

            setProjectItems(updatedProjects);
        };

        loadProjectDates();
    }, []);

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

                <div className="flex justify-center items-center gap-3 text-sm">
                    <label htmlFor="project-sort" className="opacity-70">
                        Sort by
                    </label>

                    <select
                        id="project-sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="rounded border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-1.5 text-neutral-900 dark:text-neutral-100 opacity-80 hover:opacity-100 transition"
                    >
                        <option value="date-desc">Date (newest first)</option>
                        <option value="date-asc">Date (oldest first)</option>
                        <option value="alpha-asc">Alphabetical (A–Z)</option>
                        <option value="alpha-desc">Alphabetical (Z–A)</option>
                    </select>
                </div>

                <p className="text-center text-sm opacity-70">
                    Showing {visibleProjectsCount} of {filteredProjects.length} projects
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedProjects.slice(0, visibleCount).map((p) => (
                        <ProjectCard key={p.slug || p.title} {...p} />
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
