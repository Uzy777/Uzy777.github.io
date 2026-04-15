import { experiences } from "../../data/experiences";

const Experience = () => {
    return (
        <section className="py-28 bg-neutral-200 text-neutral-900 dark:bg-black dark:text-neutral-100 transition-colors">
            <div className="max-w-6xl mx-auto px-6 space-y-24">
                <h2 className="text-3xl font-semibold text-center ">Experience</h2>

                <div className="space-y-16 border-l-2 border-black/20 dark:border-white/20 pl-10">
                    {experiences.map((experience) => (
                        <div key={`${experience.role}-${experience.company}`}>
                            <div className="relative flex gap-6 bg-white/60 dark:bg-neutral-900/60 rounded-xl p-6 hover:bg-white dark:hover:bg-neutral-900 transition">
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    className="w-12 h-12 object-contain rounded bg-white dark:bg-neutral-900 p-1"
                                />
                                <div className="space-y-3">
                                    <h4 className="text-xl font-medium">{experience.role}</h4>
                                    <p className="text-sm opacity-75">
                                        {experience.company} · {experience.type} · 📍 {experience.location}
                                    </p>
                                    <p className="text-xs opacity-60">
                                        {experience.start} - {experience.end}
                                    </p>
                                    {experience.bullets.map((bullet, index) => (
                                        <li key={index} className="text-sm leading-relaxed">
                                            {bullet}
                                        </li>
                                    ))}

                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {experience.tech.map((tech, index) => (
                                            <span key={index} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
