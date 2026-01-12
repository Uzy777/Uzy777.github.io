const About = () => {
    return (
        <section id="about" className="py-24 bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 transition-colors">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
                <h2 className="text-3xl font-semibold text-center">About</h2>

                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <div className="flex justify-center">
                        <div className="relative w-48 h-48 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center"></div>
                    </div>

                    <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                        <p className="leading-relaxed">
                            I'm a junior software developer focused on learning and building modern web applications, with a growing interest in full-stack
                            development.
                        </p>

                        <p className="leading-relaxed">
                            I enjoy learning through hands-on projects and courses, mainly working with React while exploring Python and related frameworks.
                        </p>

                        <p className="leading-relaxed">Outside of coding, I enjoy cars, driving, and ricing my Arch + Hyprland environment.</p>

                        <div className="pt-4 flex flex-wrap gap-4 text-sm">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 opacity-80">
                                📍 Cardiff, United Kingdom
                            </span>
                            <a
                                href="mailto:hello@uzy777.dev"
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:opacity-100 opacity-80 transition"
                            >
                                ✉️ hello@uzy777.dev
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
