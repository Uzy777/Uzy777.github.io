const ThemeToggle = ({ theme, setTheme }) => {
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 z-50 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-sm backdrop-blur bg-white/70 dark:bg-black/70 hover:opacity-80 transition"
        >
            {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
    );
};

export default ThemeToggle;
