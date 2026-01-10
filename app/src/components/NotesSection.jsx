import { Link } from "react-router-dom";
import { notes } from "../data/notes";

const NotesSection = () => {
    return (
        <section id="notes" className="py-24 bg-neutral-100 dark:bg-neutral-950 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-semibold">Notes</h2>
                    <p className="max-w-2xl mx-auto text-sm opacity-70">
                        Structured learning notes I keep while studying different technologies — written mainly for my future self.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(notes).map(([key, topic]) => (
                        <Link
                            key={key}
                            to={`/notes/${key}`}
                            className="group flex gap-5 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 transition hover:-translate-y-0.5"
                        >
                            <div className="flex-shrink-0 text-3xl text-neutral-700 dark:text-neutral-300">
                                <i className={topic.icon} />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-semibold group-hover:underline">{topic.title}</h3>
                                    <span className="text-sm opacity-40 group-hover:opacity-70 transition">→</span>
                                </div>

                                <p className="text-sm opacity-70 leading-relaxed">{topic.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NotesSection;
