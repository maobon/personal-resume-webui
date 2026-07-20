"use client";

import {useEffect, useRef} from "react";

const DOT_GAP = 24;
const GLOW_RADIUS = 340;

export default function CursorGlow() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) {
            return;
        }

        let frameId = 0;
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
            currentX += (targetX - currentX) * 0.18;
            currentY += (targetY - currentY) * 0.18;

            context.clearRect(0, 0, width, height);

            const glow = context.createRadialGradient(
                currentX,
                currentY,
                0,
                currentX,
                currentY,
                GLOW_RADIUS * 1.45,
            );
            glow.addColorStop(0, "rgb(29 78 216 / 0.16)");
            glow.addColorStop(0.45, "rgb(29 78 216 / 0.07)");
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
                    const variation = 0.45 + Math.abs(Math.sin(x * 12.9898 + y * 78.233)) * 0.55;
                    const alpha = strength * strength * variation * 0.82;
                    const dotSize = 1.5 + strength * variation * 1.5;

                    context.fillStyle = `rgb(148 163 184 / ${alpha})`;
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
