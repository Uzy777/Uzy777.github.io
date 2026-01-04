import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Egg } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 bg-neutral-200 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-400 border-t border-black/10 dark:border-white/10 transition-colors">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Uzy</p>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Uzy777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/usmon-h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="/rr.mp4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <Egg size={18} />
                        <span>???</span>
                    </a>
                </div>

                <p>Built with React & Tailwind ⚡</p>
            </div>
        </footer>
    );
};

export default Footer;
