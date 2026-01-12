import { Github, Linkedin, Egg } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 bg-neutral-300 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-400 border-t border-black/10 dark:border-white/10 transition-colors">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Uzy</p>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Uzy777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 opacity-80 hover:opacity-100"
                    >
                        <Github size={18} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/usmon-h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 opacity-80 hover:opacity-100"
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                    <a href="/rr.mp4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100">
                        <Egg size={18} />
                        ???
                    </a>
                </div>
                <p>Built with React & Tailwind ⚡</p>
            </div>
        </footer>
    );
};

export default Footer;
