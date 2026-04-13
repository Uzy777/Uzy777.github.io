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
                            <li className="text-sm leading-relaxed">
                                Enhanced the existing UI/UX of projects based on Pega Platform (React), taking ownership and sharing knowledge with other teams.
                            </li>
                            <li className="text-sm leading-relaxed">
                                Bringing change with a Python script integrating and creating REST APIs to help automate tedious daily monitoring tasks with a
                                single consolidated report sent via email.
                            </li>
                            <li className="text-sm leading-relaxed">
                                Collaboration with various stakeholders, bringing fresh ideas and solutions to the wider project teams.
                            </li>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Pega Platform (React)</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">UI/UX</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
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

                            <li className="text-sm leading-relaxed">
                                Worked through several online courses and books relating to full stack development, Python, Computer Science.
                            </li>
                            <li className="text-sm leading-relaxed">
                                Have actively been involved working on personal mini projects using technologies such as React, Python, Bash.
                            </li>
                            <li className="text-sm leading-relaxed">
                                Documenting journey and work through GitHub repositories ensuring to include polished and thoughtful README's.
                            </li>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Bash</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Docker</span>
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

                            <li className="text-sm leading-relaxed">
                                Polished elements of the frontend design ensuring compatibility across Android and IOS devices using React Native.
                            </li>
                            <li className="text-sm leading-relaxed">
                                Worked closely with the team to discuss approaches and issues in relation to the application, through meetings and stand ups.
                            </li>
                            <li className="text-sm leading-relaxed">
                                Committed and created several pull requests utilising Git, successfully completed and audited code reviews for other developers.
                            </li>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">React Native</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Expo</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Python</span>
                                <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Jira</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
