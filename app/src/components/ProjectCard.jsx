const ProjectCard = ({ title, description, tech, link, lastUpdated, status }) => {
    return (
        <div className="bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 border border-black/10 dark:border-white/10 rounded-lg p-6 space-y-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-sm opacity-80 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 text-xs opacity-70">
                {tech.map((item) => (
                    <span key={item} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">
                        {item}
                    </span>
                ))}
            </div>

            {/* <p className="text-sm opacity-80 leading-relaxed"><b>Last Updated:</b> {lastUpdated}</p>

            <p className="text-sm opacity-80 leading-relaxed">Status: {status}</p> */}

            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm underline opacity-80 hover:opacity-100 transition-opacity">
                View project →
            </a>
        </div>
    );
};

export default ProjectCard;
