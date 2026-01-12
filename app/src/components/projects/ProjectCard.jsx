import { Link } from "react-router-dom";

const statusStyles = {
    Completed: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20",
    "In Progress": "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-400/10 dark:border-amber-400/20",
    Archived: "text-neutral-600 bg-neutral-100 border-neutral-200 dark:text-neutral-400 dark:bg-neutral-400/10 dark:border-neutral-400/20",
};

const ProjectCard = ({ title, slug, description, tech, link, lastUpdated, status, hasDetails }) => {
    return (
        <div className="bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 border border-black/10 dark:border-white/10 rounded-lg p-6 space-y-4 transition-all duration-200 hover:-translate-y-0.5">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-sm opacity-80 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 text-xs opacity-70">
                {tech.map((item) => (
                    <span key={item} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">
                        {item}
                    </span>
                ))}
            </div>

            {(status || lastUpdated) && (
                <div className="flex items-center gap-3 text-xs">
                    {status && <span className={`px-2 py-0.5 rounded-full border ${statusStyles[status] || ""}`}>{status}</span>}
                    {lastUpdated && <span className="opacity-60">Updated: {lastUpdated}</span>}
                </div>
            )}
            <div className="flex items-center gap-4 text-sm">
                {hasDetails && (
                    <Link to={`/projects/${slug}`} className="underline opacity-80 hover:opacity-100 transition">
                        Read more
                    </Link>
                )}

                <a href={link} target="_blank" rel="noopener noreferrer" className="underline opacity-70 hover:opacity-100 transition">
                    View source
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
