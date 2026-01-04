const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12 text-white">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-4 text-center text-sm opacity-70">
                <p>copyright {new Date().getFullYear()} Uzy</p>

                <div className="flex space-x-6">
                    <a href="https://github.com/Uzy777" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                        GitHub
                    </a>
                </div>

                <p>Built with React & Tailwind</p>
            </div>
        </footer>
    );
};

export default Footer;
