const Footer = () => {
    return (
        <footer className="py-12 bg-neutral-200 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-400 border-t border-black/10 dark:border-white/10 transition-colors">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Uzy</p>

                <div className="flex space-x-6">
                    <a href="https://github.com/Uzy777" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                        GitHub
                    </a>
                </div>

                <p>Built with React & Tailwind ⚡</p>
            </div>
        </footer>
    );
};

export default Footer;
