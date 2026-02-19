"use client";

import { useEffect, useRef } from "react";

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Start off-screen so there's no flash at 0,0
    let tx = -200, ty = -200;  // target (exact mouse)
    let rx = -200, ry = -200;  // ring (lagged)
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    // Scale ring up over interactive elements
    const onMouseEnter = () => {
      ring.style.transform = `translate(${rx - 30}px, ${ry - 30}px) scale(1.8)`;
      ring.style.borderColor = "rgba(255,255,255,0.45)";
    };
    const onMouseLeave = () => {
      ring.style.borderColor = "rgba(255,255,255,0.25)";
    };

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    const tick = () => {
      // Dot: instant follow
      dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;

      // Ring: smooth lag via lerp
      rx = lerp(rx, tx, 0.10);
      ry = lerp(ry, ty, 0.10);
      ring.style.transform = `translate(${rx - 30}px, ${ry - 30}px)`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring — follows with lag */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.25)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0s linear, border-color 0.25s ease",
          willChange: "transform",
        }}
      />
      {/* Inner dot — exact position */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
    </>
  );
}
