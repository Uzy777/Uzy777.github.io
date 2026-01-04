const About = () => {
    return (
        <section id="about" className="py-24 bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 transition-colors">
            <div className="max-w-3xl mx-auto px-6 space-y-6 text-center">
                <h2 className="text-3xl font-semibold">About</h2>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    I'm a junior software developer focused on learning and building modern web applications, with a growing interest in full-stack development.
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    I enjoy learning by working on hands-on projects and courses. Most of my current work revolves around frontend development with React,
                    alongside exploration using Python and related frameworks.
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Outside of coding, I enjoy learning about cars and spending time driving. I also like ricing (themeing) my Arch + Hyprland environment.
                </p>
            </div>
        </section>
    );
};

export default About;
