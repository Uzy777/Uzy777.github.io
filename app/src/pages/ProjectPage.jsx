import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/common/MarkdownRenderer";

const ProjectPage = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/content/projects/${slug}.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [slug]);

    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <Link to="/#projects" className="inline-block mb-8 text-sm opacity-70 hover:opacity-100 transition">
                ← Back to projects
            </Link>

            {content ? <MarkdownRenderer content={content} /> : <p className="opacity-70">Loading...</p>}
        </section>
    );
};

export default ProjectPage;
