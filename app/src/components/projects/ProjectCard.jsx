import { useState } from "react";
import { Link } from "react-router-dom";

const statusStyles = {
    Completed: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20",
    "In Progress": "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-400/10 dark:border-amber-400/20",
    Abandoned: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-400/10 dark:border-purple-400/20",
};

const ProjectCard = ({ title, slug, description, tech, link, hasDetails, status, lastUpdated, isFallback, previewImages = [] }) => {
    const [flipped, setFlipped] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const hasPreview = previewImages.length > 0;

    const nextImage = () => {
        setImageIndex((prev) => (prev === previewImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setImageIndex((prev) => (prev === 0 ? previewImages.length - 1 : prev - 1));
    };

    function getDaysAgoLabel(dateString) {
        if (!dateString) return null;

        const date = new Date(dateString);
        const now = new Date();

        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return null;
        if (diffDays > 90) return null;

        if (diffDays === 0) return "(today)";
        if (diffDays === 1) return "(1 day ago)";

        return `(${diffDays} days ago)`;
    }

    const daysAgoLabel = getDaysAgoLabel(lastUpdated);

    return (
        <div
            onClick={() => {
                if (hasPreview) {
                    setFlipped((prev) => !prev);
                }
            }}
            className={`group relative rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 p-6 transition ${
                hasPreview ? "cursor-pointer hover:-translate-y-0.5" : "cursor-default"
            }`}
        >
            <div className="relative">
                {/* FRONT */}
                <div
                    className={`space-y-4 transition-all duration-300 ease-out ${
                        flipped ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
                    }`}
                >
                    <h3 className="text-xl font-semibold">{title}</h3>

                    <p className="text-sm opacity-80 leading-relaxed">{description}</p>

                    <div className="flex flex-wrap items-center gap-3 ">
                        {tech.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-center w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                                title={item.name}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    title={item.name}
                                    className={`w-5 h-5 object-contain ${["Bash", "GitHub", "Flask"].includes(item.name) ? "dark:invert" : ""}`}
                                />
                            </div>
                        ))}
                    </div>

                    {(status || lastUpdated) && (
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            {status && <span className={`px-2 py-0.5 rounded-full border ${statusStyles[status] || ""}`}>{status}</span>}

                            {lastUpdated && (
                                <span className="opacity-60">
                                    Updated: {lastUpdated}
                                    {daysAgoLabel && <span className="ml-2 text-xs italic opacity-70">{daysAgoLabel}</span>}
                                    {isFallback && <span className="ml-2 text-xs italic text-blue-600 dark:text-blue-400">(stale)</span>}
                                </span>
                            )}
                        </div>
                    )}

                    <div className="flex items-center gap-4 text-sm">
                        {hasDetails && (
                            <Link to={`/projects/${slug}`} onClick={(e) => e.stopPropagation()} className="underline opacity-80 hover:opacity-100">
                                Read more
                            </Link>
                        )}

                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="underline opacity-70 hover:opacity-100"
                        >
                            View source
                        </a>
                    </div>

                    {hasPreview && (
                        <div className="absolute bottom-1 right-4 text-xs opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none">
                            Click to preview →
                        </div>
                    )}
                </div>

                {/* BACK */}
                <div
                    className={`absolute inset-0 space-y-4 transition-all duration-300 ease-out ${
                        flipped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                >
                    {previewImages.length > 0 ? (
                        <>
                            <div className="w-full h-40 rounded-md flex items-center justify-center bg-black/5 dark:bg-white/5">
                                <img src={previewImages[imageIndex]} alt={title} className="max-h-full max-w-full object-contain" />
                            </div>
                            <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-between text-sm">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                    className="px-3 py-2 rounded-md opacity-70 hover:opacity-100"
                                >
                                    ← Prev
                                </button>

                                <span className="opacity-50 text-xs">
                                    {imageIndex + 1} / {previewImages.length}
                                </span>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className="px-3 py-2 rounded-md opacity-70 hover:opacity-100"
                                >
                                    Next →
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-sm opacity-70">No preview available</p>
                    )}

                    {/* <p className="text-xs text-center opacity-60">Click anywhere to return</p> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
