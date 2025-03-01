import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesTs = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: 0,
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
                events: {
                    resize: { enable: true },
                },
                modes: {
                    bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
                    repulse: { distance: 400, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#ffffff" },
                move: {
                    enable: true,
                    speed: { min: 0.1, max: 1 },
                    direction: "none",
                    outModes: { default: "out" },
                },
                number: {
                    density: { enable: true, width: 1920, height: 1080 },
                    value: 160,
                },
                opacity: {
                    value: { min: 0.1, max: 1 },
                    animation: { enable: true, speed: 1, startValue: "random" },
                },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticlesTs;