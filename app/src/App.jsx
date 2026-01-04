import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <Hero />
                <About />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}
