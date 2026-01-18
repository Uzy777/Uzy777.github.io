const Experience = () => {
    return (
        <section className="py-28 bg-neutral-200 text-neutral-900 dark:bg-black dark:text-neutral-100 transition-colors">
            <div className="max-w-6xl mx-auto px-6 space-y-24">
                <h2 className="text-3xl font-semibold text-center ">Experience</h2>

                <div className="space-y-16 border-l-2 border-black/20 dark:border-white/20 pl-10">
                    <div className="relative flex gap-6 bg-white/60 dark:bg-neutral-900/60 rounded-xl p-6 hover:bg-white dark:hover:bg-neutral-900 transition">
                        <img
                            src="/content/experience/tokio-marine-hcc.jpeg"
                            // src="https://media.licdn.com/dms/image/v2/C560BAQFdkIv19-6MJA/company-logo_200_200/company-logo_200_200/0/1631385264962?e=2147483647&v=beta&t=-mCLQp7NWYTO4ew33H1SVquK5dzQMfKjaVLtj7-IoQM"
                            alt="Tokio Marine logo"
                            className="w-12 h-12 object-contain rounded bg-white dark:bg-neutral-900 p-1"
                        />
                        <div className="space-y-3">
                            <h4 className="text-xl font-medium">Application Developer</h4>

                            <p className="text-sm opacity-75">Tokio Marine · Contract · 📍 Bridgend, Wales, United Kingdom · Hybrid</p>

                            <p className="text-xs opacity-60">Jan 2024 — Present</p>

                            <p className="text-sm leading-relaxed">TBA</p>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Pega (CRM)</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Front-End</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Azure</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex gap-6 bg-white/60 dark:bg-neutral-900/60 rounded-xl p-6 hover:bg-white dark:hover:bg-neutral-900 transition">
                        <img
                            src="/content/experience/github.jpeg"
                            alt="GitHub logo"
                            className="w-12 h-12 object-contain rounded bg-white dark:bg-neutral-900 p-1"
                        />
                        <div className="space-y-3">
                            <h4 className="text-xl font-medium">Programming Learning & Projects</h4>

                            <p className="text-sm opacity-75">GitHub · Independent · Remote</p>

                            <p className="text-xs opacity-60">Aug 2024 — Present</p>

                            <p className="text-sm leading-relaxed">
                                Actively working through projects and learning resources focused on full-stack development, documenting progress and experiments
                                through GitHub repositories.
                            </p>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Git</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Full-Stack</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex gap-6 bg-white/60 dark:bg-neutral-900/60 rounded-xl p-6 hover:bg-white dark:hover:bg-neutral-900 transition">
                        <img
                            src="/content/experience/voquis.jpeg"
                            alt="Voquis logo"
                            className="w-12 h-12 object-contain rounded bg-white dark:bg-neutral-900 p-1"
                        />
                        <div className="space-y-3">
                            <h4 className="text-xl font-medium">Junior Software Engineer</h4>

                            <p className="text-sm opacity-75">Voquis · Part-time · 📍 Winchester, England, United Kingdom · Remote</p>

                            <p className="text-xs opacity-60">Oct 2024 — Oct 2025</p>

                            <p className="text-sm leading-relaxed">TBA</p>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Git</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Expo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
