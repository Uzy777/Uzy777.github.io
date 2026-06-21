import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const LiveProjects = () => {
    const liveProjects = projects.filter((project) => project.demo && project.featuredDemo);

    if (liveProjects.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-neutral-200 text-neutral-900 dark:bg-black dark:text-neutral-100 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-semibold">Live Projects</h2>

                    <p className="text-sm opacity-65">Try a selection of deployed applications directly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {liveProjects.map((project) => (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/5 dark:hover:bg-white/5"
                        >
                            <article
                                key={project.slug}
                                className="h-full rounded-xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-neutral-900/60"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold">{project.title}</h3>

                                        <p className="text-sm leading-relaxed opacity-75">{project.description}</p>
                                    </div>

                                    <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
                                        Live
                                    </span>
                                </div>

                                {/* <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                                    >
                                        Demo
                                    </a>

                                    {project.hasDetails && (
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-black text-white hover:bg-neutral-800 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                                    >
                                        Project details
                                    </Link>
                                )}
                                </div> */}
                            </article>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveProjects;
