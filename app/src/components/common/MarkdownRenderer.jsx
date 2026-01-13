import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownRenderer = ({ content }) => {
    return (
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:bg-black/10 dark:prose-code:bg-white/10 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-800 prose-pre:text-neutral-100 prose-pre:rounded-lg prose-pre:p-4 prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:shadow-sm prose-img:my-6 prose-hr:border-neutral-300 dark:prose-hr:border-neutral-700 prose-hr:my-12">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </article>
    );
};

export default MarkdownRenderer;
