import { useEffect } from "react";

export default function ParticlesBackground() {
    useEffect(() => {
        if (window.particlesJS) {
            initParticles();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;

        script.onload = () => {
            initParticles();
        };

        document.body.appendChild(script);

        function initParticles() {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 70, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 5, random: true },
                    move: { enable: true, speed: 1.2 },
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { particles_nb: 4 },
                    },
                },
                retina_detect: true,
            });
        }

        return () => {
            const el = document.getElementById("particles-js");
            if (el) el.innerHTML = "";
        };
    }, []);

    return <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none" />;
}
