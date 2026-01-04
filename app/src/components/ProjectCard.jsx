const ProjectCard = ({ title, description, tech, link }) => {
    return (
        <div className="border border-white/10 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-sm opacity-80">{description}</p>

            <div className="flex flex-wrap gap-2 text-xs opacity-60">
                {tech.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm underline opacity-80 hover:opacity-100">
                View project \u2192
            </a>
        </div>
    );
};

export default ProjectCard;
