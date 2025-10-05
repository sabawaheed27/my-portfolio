"use client";
import { useEffect, useRef } from "react";

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let stars: { x: number; y: number; z: number; dx: number; dy: number }[] = [];
        const numStars = 900; // increase for denser starfield

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }
        resize();
        window.addEventListener("resize", resize);

        function initStars() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: (Math.random() - 0.5) * canvas.width,   // centered distribution
                    y: (Math.random() - 0.5) * canvas.height,  // centered distribution
                    z: Math.random() * canvas.width,
                    dx: (Math.random() - 0.5) * 0.2,
                    dy: (Math.random() - 0.5) * 0.2,
                });

            }
        }


        function animate() {
            ctx.fillStyle = "	#101011";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let star of stars) {
                star.z -= 0.1;
                star.x += star.dx;
                star.y += star.dy //  slow drift

                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = (Math.random() - 0.5);
                    star.y = (Math.random() - 0.5);
                }

                const k = 128.0 / star.z;
                const px = star.x * k + canvas.width / 2;
                const py = star.y * k + canvas.height / 2;

                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    const size = (1 - star.z / canvas.width) * 1.2; //stars size
                    ctx.fillStyle = "white"; //  only white stars
                    ctx.fillRect(px, py, size, size);
                }
            }
            requestAnimationFrame(animate);
        }
        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 block"
        />
    );
}


