import { useState, useEffect } from "react";
import Hero from "./components/layout/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/projects/Projects";
import Footer from "./components/layout/Footer";
import ThemeToggle from "./components/layout/ThemeToggle";
import ProjectPage from "./pages/ProjectPage";

import NotesSection from "./components/notes/NotesSection";

import { Routes, Route } from "react-router-dom";

import NotesIndex from "./pages/NotesIndex";
import NotesTopic from "./pages/NotesTopic";
import NotePage from "./pages/NotePage";

export default function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <div className="bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
                <ThemeToggle theme={theme} setTheme={setTheme} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                                <Experience />
                                <Projects />
                                {/* <NotesSection /> */}
                                <Footer />
                            </>
                        }
                    />

                    <Route path="/projects/:slug" element={<ProjectPage />} />

                    <Route path="/notes" element={<NotesIndex />} />
                    <Route path="/notes/:topic" element={<NotesTopic />} />
                    <Route path="/notes/:topic/:slug" element={<NotePage />} />
                </Routes>
            </div>
        </div>
    );
}
