import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
            <ParticlesBackground />

            <h1 className="text-6xl font-bold mb-4 z-10">WIP (Work In Progress)</h1>

            <p className="text-lg z-10 opacity-80">Want a cookie?</p>
        </div>
    );
}
