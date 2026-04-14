import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/common/MarkdownRenderer";
import { projects } from "../data/projects";

const ProjectPage = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");

    const project = projects.find((p) => p.slug === slug);

    useEffect(() => {
        fetch(`/content/projects/${slug}/${slug}.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [slug]);

    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <div className="mb-8 space-y-4">
                <Link to="/#projects" className="inline-block text-sm opacity-70 hover:opacity-100 transition">
                    ← Back to projects
                </Link>

                <div className="flex flex-wrap items-center gap-3">
                    {project?.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
                        >
                            Live Demo
                        </a>
                    )}

                    {project?.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-black text-white hover:bg-neutral-800 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                        >
                            View Source
                        </a>
                    )}
                </div>
            </div>

            {content ? <MarkdownRenderer content={content} /> : <p className="opacity-70">Loading...</p>}
        </section>
    );
};

export default ProjectPage;
