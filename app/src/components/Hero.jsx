import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            <ParticlesBackground />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Uzy.</h1>

                <h2 className="text-2xl font-medium mb-4 opacity-80">Junior Software Engineer</h2>

                <p className="text-base opacity-70">I build things with ...</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <span className="text-2xl opacity-70">↓</span>
            </div>
        </section>
    );
};

export default Hero;
