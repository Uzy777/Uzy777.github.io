import { useState } from "react";
import { Link } from "react-router-dom";

const statusStyles = {
    Completed: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20",
    "In Progress": "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-400/10 dark:border-amber-400/20",
    Archived: "text-neutral-600 bg-neutral-100 border-neutral-200 dark:text-neutral-400 dark:bg-neutral-400/10 dark:border-neutral-400/20",
};

const ProjectCard = ({ title, slug, description, tech, link, hasDetails, status, lastUpdated, previewImages = [] }) => {
    const [flipped, setFlipped] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = () => {
        setImageIndex((prev) => (prev === previewImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setImageIndex((prev) => (prev === 0 ? previewImages.length - 1 : prev - 1));
    };

    return (
        <div
            onClick={() => setFlipped((prev) => !prev)}
            className="group cursor-pointer relative rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 p-6 transition hover:-translate-y-0.5"
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

                    {previewImages.length > 0 && (
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
                            <div className="w-full h-40 overflow-hidden rounded-md ">
                                <img src={previewImages[imageIndex]} alt={`${title}`} className="w-full h-full object-contain" />
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
