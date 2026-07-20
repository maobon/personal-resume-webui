"use client";

import {useEffect, useRef} from "react";

const DOT_GAP = 10;
const GLOW_RADIUS = 750;

export default function CursorGlow() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) {
            return;
        }

        let frameId = 0;
        let time = 0;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let currentX = width / 2;
        let currentY = height / 2;
        let targetX = currentX;
        let targetY = currentY;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * pixelRatio);
            canvas.height = Math.round(height * pixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        };

        const draw = () => {
            time += 0.02;
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;

            context.clearRect(0, 0, width, height);

            const glow = context.createRadialGradient(
                currentX,
                currentY,
                0,
                currentX,
                currentY,
                GLOW_RADIUS * 1.2,
            );
            glow.addColorStop(0, "rgba(255, 255, 255, 0.05)");
            glow.addColorStop(0.4, "rgba(255, 255, 255, 0.01)");
            glow.addColorStop(1, "transparent");
            context.fillStyle = glow;
            context.fillRect(0, 0, width, height);

            const startX = Math.max(0, Math.floor((currentX - GLOW_RADIUS) / DOT_GAP) * DOT_GAP);
            const endX = Math.min(width, currentX + GLOW_RADIUS);
            const startY = Math.max(0, Math.floor((currentY - GLOW_RADIUS) / DOT_GAP) * DOT_GAP);
            const endY = Math.min(height, currentY + GLOW_RADIUS);

            for (let x = startX; x <= endX; x += DOT_GAP) {
                for (let y = startY; y <= endY; y += DOT_GAP) {
                    const distance = Math.hypot(x - currentX, y - currentY);

                    if (distance > GLOW_RADIUS) {
                        continue;
                    }

                    const strength = 1 - distance / GLOW_RADIUS;

                    // Create a unique seed for each star based on its coordinates
                    const seed = (x * 12.9898 + y * 78.233);
                    const randomFactor = Math.abs(Math.sin(seed)) * 0.5 + 0.5;

                    // Per-star independent twinkling
                    // We use the seed to give each star a different speed and phase
                    const twinkleSpeed = 2.5 + (Math.sin(seed * 0.001) * 1.5);
                    const twinkle = Math.sin(time * twinkleSpeed + seed) * 0.5 + 0.5;

                    // Add "shimmer" - occasional brighter bursts
                    const shimmer = Math.pow(Math.max(0, Math.sin(time * 0.8 + seed * 2)), 7) * 0.7;

                    const alpha = Math.pow(strength, 3.2) * (twinkle + shimmer) * randomFactor * 1.0;
                    const dotSize = 0.5 + (strength * randomFactor * 0.5);

                    context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    context.fillRect(x - dotSize / 2, y - dotSize / 2, dotSize, dotSize);
                }
            }

            frameId = window.requestAnimationFrame(draw);
        };

        const handlePointerMove = (event: PointerEvent) => {
            targetX = event.clientX;
            targetY = event.clientY;
            canvas.dataset.visible = "true";
        };

        const handlePointerLeave = () => {
            canvas.dataset.visible = "false";
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("pointermove", handlePointerMove, {passive: true});
        document.documentElement.addEventListener("mouseleave", handlePointerLeave);
        frameId = window.requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("pointermove", handlePointerMove);
            document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="cursor-glow" data-visible="true" aria-hidden="true"/>;
}
