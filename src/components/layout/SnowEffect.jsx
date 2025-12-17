
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function SnowEffect() {
    useEffect(() => {
        let animationFrameId;
        const duration = Date.now() + 1000 * 60 * 60; // Just a safeguard, loop logic handles it

        // Skew to simulate wind
        let skew = 1;

        const frame = () => {
            // 60FPS roughly
            const timeLeft = duration - Date.now();

            // Randomly generate snow
            if (Math.random() > 0.85) { // Control density: higher threshold = less snow
                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: 300, // Float down slowly
                    origin: {
                        x: Math.random(),
                        // Start slightly above screen
                        y: -0.1
                    },
                    colors: ['#ffffff', '#e2e8f0', '#dbeafe'], // White, light gray, very light blue
                    shapes: ['circle'],
                    gravity: 0.2, // Very slow fall
                    scalar: Math.random() * 0.5 + 0.5, // Slightly larger
                    drift: (Math.random() - 0.5) * 0.8, // More sway
                    disableForReducedMotion: true,
                    zIndex: 100 // Ensure it's on top of most elements
                });
            }

            animationFrameId = requestAnimationFrame(frame);
        };

        frame();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Pointer events none to avoid blocking clicks
    // canvas-confetti creates its own canvas, we don't render anything DOM-wise here
    return null;
}
