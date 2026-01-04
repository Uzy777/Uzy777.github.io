import { useEffect } from "react";

export default function ParticlesBackground() {
    useEffect(() => {
        if (!window.particlesJS) return;

        window.particlesJS("particles-js", {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 5, random: true },
                move: { enable: true, speed: 6 },
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                },
                modes: {
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                },
            },
            retina_detect: true,
        });
    }, []);

    return <div id="particles-js" className="absolute inset-0 -z-10" />;
}
