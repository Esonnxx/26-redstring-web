"use client";

import { useEffect, useRef, type CSSProperties } from "react";

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  className?: string;
  style?: CSSProperties;
}

interface Point {
  x: number;
  y: number;
  cursorX: number;
  cursorY: number;
  velocityX: number;
  velocityY: number;
}

const noise = (x: number, y: number) =>
  (Math.sin(x * 1.73 + y * 0.91) +
    Math.sin(x * 0.43 - y * 1.21) +
    Math.sin(x * 0.17 + y * 0.27)) /
  3;

export default function Waves({
  lineColor = "black",
  backgroundColor = "transparent",
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  className = "",
  style,
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !container || !context) return;

    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let lines: Point[][] = [];
    let frameId = 0;
    const mouse = {
      x: -10,
      y: 0,
      smoothX: 0,
      smoothY: 0,
      lastX: 0,
      lastY: 0,
      speed: 0,
      smoothSpeed: 0,
      angle: 0,
      initialized: false,
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const totalLines = Math.ceil((width + 200) / xGap);
      const totalPoints = Math.ceil((height + 30) / yGap);
      const startX = (width - xGap * totalLines) / 2;
      const startY = (height - yGap * totalPoints) / 2;

      lines = Array.from({ length: totalLines + 1 }, (_, lineIndex) =>
        Array.from({ length: totalPoints + 1 }, (_, pointIndex) => ({
          x: startX + xGap * lineIndex,
          y: startY + yGap * pointIndex,
          cursorX: 0,
          cursorY: 0,
          velocityX: 0,
          velocityY: 0,
        })),
      );
    };

    const updateMouse = (x: number, y: number) => {
      const rect = container.getBoundingClientRect();
      mouse.x = x - rect.left;
      mouse.y = y - rect.top;

      if (!mouse.initialized) {
        mouse.smoothX = mouse.x;
        mouse.smoothY = mouse.y;
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        mouse.initialized = true;
      }
    };

    const onMouseMove = (event: MouseEvent) =>
      updateMouse(event.clientX, event.clientY);
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };

    const draw = (time: number) => {
      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.1;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.1;
      const deltaX = mouse.x - mouse.lastX;
      const deltaY = mouse.y - mouse.lastY;
      mouse.speed = Math.hypot(deltaX, deltaY);
      mouse.smoothSpeed += (mouse.speed - mouse.smoothSpeed) * 0.1;
      mouse.smoothSpeed = Math.min(100, mouse.smoothSpeed);
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.angle = Math.atan2(deltaY, deltaX);

      context.clearRect(0, 0, width, height);
      context.strokeStyle = lineColor;
      context.lineWidth = 1;

      lines.forEach((points) => {
        context.beginPath();

        points.forEach((point, index) => {
          const wave =
            noise(
              (point.x + time * waveSpeedX) * 0.002,
              (point.y + time * waveSpeedY) * 0.0015,
            ) * 12;
          const distance = Math.hypot(
            point.x - mouse.smoothX,
            point.y - mouse.smoothY,
          );
          const radius = Math.max(175, mouse.smoothSpeed);

          if (distance < radius) {
            const strength = 1 - distance / radius;
            const force = Math.cos(distance * 0.001) * strength;
            point.velocityX +=
              Math.cos(mouse.angle) *
              force *
              radius *
              mouse.smoothSpeed *
              0.00065;
            point.velocityY +=
              Math.sin(mouse.angle) *
              force *
              radius *
              mouse.smoothSpeed *
              0.00065;
          }

          point.velocityX += -point.cursorX * tension;
          point.velocityY += -point.cursorY * tension;
          point.velocityX *= friction;
          point.velocityY *= friction;
          point.cursorX = Math.max(
            -maxCursorMove,
            Math.min(maxCursorMove, point.cursorX + point.velocityX * 2),
          );
          point.cursorY = Math.max(
            -maxCursorMove,
            Math.min(maxCursorMove, point.cursorY + point.velocityY * 2),
          );

          const x = point.x + Math.cos(wave) * waveAmpX + point.cursorX;
          const y = point.y + Math.sin(wave) * waveAmpY + point.cursorY;
          if (index === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        });

        context.stroke();
      });

      frameId = requestAnimationFrame(draw);
    };

    resize();
    frameId = requestAnimationFrame(draw);
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [
    friction,
    lineColor,
    maxCursorMove,
    tension,
    waveAmpX,
    waveAmpY,
    waveSpeedX,
    waveSpeedY,
    xGap,
    yGap,
  ]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        style={{ backgroundColor, ...style }}
        aria-hidden="true"
      />
    </div>
  );
}
