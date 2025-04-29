particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 5, random: true },
    move: { enable: true, speed: 6, direction: "none" },
  },
  interactivity: {
    detect_on: "window", 
    events: {
      onhover: { enable: true, mode: "repulse" }, // Particles should move away from cursor
      onclick: { enable: true, mode: "push" }, // Clicking adds new particles
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
