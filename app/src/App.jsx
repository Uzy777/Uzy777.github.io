import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <div className="bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <Hero />
                <About />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}
