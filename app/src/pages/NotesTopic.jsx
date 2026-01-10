import { Link, useParams } from "react-router-dom";
import { notes } from "../data/notes";

const NotesTopic = () => {
    const { topic } = useParams();
    const data = notes[topic];

    if (!data) {
        return <p className="py-24 text-center opacity-70">Topic not found</p>;
    }

    return (
        <section className="min-h-screen py-24 bg-neutral-100 dark:bg-neutral-950 transition-colors">
            <div className="max-w-3xl mx-auto px-6 space-y-10">
                <Link to="/#notes" className="text-sm opacity-70 hover:opacity-100">
                    ← Back to notes
                </Link>

                <h1 className="text-3xl font-semibold">{data.title}</h1>
                <p className="opacity-70">{data.description}</p>

                <div className="space-y-4">
                    {data.items.map((note) => (
                        <Link
                            key={note.slug}
                            to={`/notes/${topic}/${note.slug}`}
                            className="block rounded border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5 transition"
                        >
                            {note.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NotesTopic;
