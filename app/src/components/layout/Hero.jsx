import { useState } from "react";

import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
            <ParticlesBackground />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Uzy.</h1>

                <h2 className="text-2xl font-medium mb-4 opacity-80">Junior Software Engineer</h2>

                {/* <p className="text-base opacity-70">I build things with ...</p> */}

                <div className="relative h-10 flex items-center justify-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    {/* Text */}
                    <p className={`transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-70"}`}>I build things with …</p>

                    {/* Icons */}
                    <div className={`absolute flex items-center justify-center gap-4 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
                        <img src="/devicons/react-original.svg" alt="React" className="w-8 h-8" />
                        <img src="/devicons/python-original.svg" alt="Python" className="w-8 h-8" />
                        <img src="/devicons/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
                        <img src="/devicons/vitejs-original.svg" alt="Vite" className="w-8 h-8" />
                        {/* <img src="/devicons/bash-original.svg" alt="Bash" className="w-8 h-8" /> */}
                        <img src="/devicons/html5-original.svg" alt="HTML" className="w-8 h-8" />
                        <img src="/devicons/css3-original.svg" alt="CSS" className="w-8 h-8" />
                        <img src="/devicons/tailwindcss-original.svg" alt="Tailwind" className="w-8 h-8" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <button
                    onClick={() => {
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <span className="text-2xl opacity-70 hover:opacity-100 transition-opacity" aria-label="Scroll to About section">
                        ↓
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
