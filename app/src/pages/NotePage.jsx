import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/common/MarkdownRenderer";

const NotePage = () => {
    const { topic, slug } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/content/notes/${topic}/${slug}.md`)
            .then((res) => res.text())
            .then(setContent);
    }, [topic, slug]);

    return (
        <section className="min-h-screen py-24 bg-neutral-100 dark:bg-neutral-950 transition-colors">
            <div className="max-w-3xl mx-auto px-6 space-y-8">
                <Link to={`/notes/${topic}`} className="text-sm opacity-70 hover:opacity-100 transition">
                    ← Back to {topic}
                </Link>

                {content ? <MarkdownRenderer content={content} /> : <p className="opacity-70">Loading…</p>}
            </div>
        </section>
    );
};

export default NotePage;
