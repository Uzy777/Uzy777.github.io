const Experience = () => {
    return (
        <section className="py-24 bg-neutral-200 text-neutral-900 dark:bg-black dark:text-neutral-100 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-20">
                {/* <h2 className="text-3xl font-semibold text-center tracking-tight">Experience & Learning</h2> */}
                <h2 className="text-3xl font-semibold text-center tracking-tight">Experience</h2>

                <div className="space-y-10">
                    {/* <h3 className="text-xl font-medium">Work Experience</h3> */}
                    <div className="space-y-12 border-l border-black/20 dark:border-white/15 pl-6">
                        <div className="space-y-2">
                            <h4 className="text-lg font-medium">Application Developer</h4>
                            <p className="text-sm opacity-70">Tokio Marine · Contract</p>
                            <p className="text-xs opacity-60">Jan 2024 — Present</p>
                            <p className="text-sm leading-relaxed">TBA</p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Pega (CRM)</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Front-End Development</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Microsoft Azure</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-lg font-medium">Junior Software Engineer</h4>
                            <p className="text-sm opacity-70">Voquis · Part-time</p>
                            <p className="text-xs opacity-60">Oct 2024 — Present</p>
                            <p className="text-sm leading-relaxed">TBA</p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Git</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Expo Go</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-lg font-medium">Programming Learning & Projects</h4>
                            <p className="text-sm opacity-70">GitHub · Freelance</p>
                            <p className="text-xs opacity-60">Aug 2024 — Present</p>
                            <p className="text-sm leading-relaxed">
                                Working on various learning resources within the software realm. Diving into full stack development head on, and documenting
                                journey through GitHub Repos
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Git</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Full-Stack Development</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="space-y-10">
                    <h3 className="text-xl font-medium">Certifications & Courses</h3>
                    <div className="space-y-12 border-l border-black/20 dark:border-white/15 pl-6">
                        <div className="space-y-2">
                            <h4 className="text-lg font-medium">Course or Certification Name</h4>
                            <p className="text-sm opacity-70">Provider</p>
                            <p className="text-xs opacity-60">2024</p>
                            <p className="text-sm leading-relaxed">Brief explanation of what the course covered.</p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">APIs</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Testing</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Experience;
