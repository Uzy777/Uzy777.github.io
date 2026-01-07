import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownRenderer = ({ content }) => {
    return (
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:shadow-sm prose-img:my-6 prose-hr:border-neutral-300 dark:prose-hr:border-neutral-700 prose-hr:my-12">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </article>
    );
};

export default MarkdownRenderer;
