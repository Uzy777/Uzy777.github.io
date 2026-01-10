import { Link } from "react-router-dom";
import { notes } from "../data/notes";

const NotesIndex = () => {
    return (
        <section className="py-24 max-w-5xl mx-auto px-6 space-y-12">
            <h1 className="text-3xl font-semibold text-center">Notes</h1>

            <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(notes).map(([key, topic]) => (
                    <Link
                        key={key}
                        to={`/notes/${key}`}
                        className="rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 hover:-translate-y-0.5 transition"
                    >
                        <h2 className="text-xl font-semibold">{topic.title}</h2>
                        <p className="text-sm opacity-70 mt-2">{topic.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default NotesIndex;
