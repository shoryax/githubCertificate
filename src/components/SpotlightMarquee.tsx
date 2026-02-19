"use client";

import { useEffect, useRef } from "react";

// Title case — matches the reference site's mixed-case style
const ROW_TEXTS = [
  "glossyDeals  MindEase  glossyDeals  MindEase  glossyDeals  MindEase  glossyDeals",
  "ResuPro  ASL Recognition  ResuPro  ASL Recognition  ResuPro  ASL Recognition",
  "MindEase  glossyDeals  MindEase  glossyDeals  MindEase  glossyDeals  MindEase",
  "ASL Recognition  ResuPro  glossyDeals  MindEase  ASL Recognition  ResuPro",
  "glossyDeals  ASL Recognition  MindEase  ResuPro  glossyDeals  ASL Recognition",
];

// ── Tuning ────────────────────────────────────────────────────────────────
const PAN_RANGE = 160;
const PAN_LERP = 0.055;
const SCROLL_SCALE = 0.45;
const SCROLL_LERP = 0.10;
const VEL_FRICTION = 0.78;
const SPOTLIGHT_R = 300;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export default function SpotlightMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let spotX = window.innerWidth / 2;
    let spotY = window.innerHeight / 2;
    let targetPan = 0;
    let currentPan = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let currentScrollOffset = 0;
    let rafId: number;

    container.style.setProperty("--mouse-x", `${spotX}px`);
    container.style.setProperty("--mouse-y", `${spotY}px`);

    const onMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      spotX = e.clientX - r.left;
      spotY = e.clientY - r.top;
      targetPan = (e.clientX / window.innerWidth - 0.5) * 2;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const r = container.getBoundingClientRect();
      spotX = touch.clientX - r.left;
      spotY = touch.clientY - r.top;
      targetPan = (touch.clientX / window.innerWidth - 0.5) * 2;
    };

    const onScroll = () => {
      const sy = window.scrollY;
      scrollVelocity += (sy - lastScrollY) * SCROLL_SCALE;
      lastScrollY = sy;
    };

    const tick = () => {
      currentPan = lerp(currentPan, targetPan, PAN_LERP);
      currentScrollOffset += scrollVelocity;
      currentScrollOffset = lerp(currentScrollOffset, 0, SCROLL_LERP);
      scrollVelocity *= VEL_FRICTION;

      container.style.setProperty("--mouse-x", `${spotX}px`);
      container.style.setProperty("--mouse-y", `${spotY}px`);

      for (let i = 0; i < ROW_TEXTS.length; i++) {
        const dir = i % 2 === 0 ? 1 : -1;
        const panX = currentPan * PAN_RANGE * dir;
        const skewX = scrollVelocity * 0.08;
        const t = `translateX(${panX}px) translateY(${currentScrollOffset}px) skewX(${skewX}deg)`;
        const base = baseRefs.current[i];
        const reveal = revealRefs.current[i];
        if (base) base.style.transform = t;
        if (reveal) reveal.style.transform = t;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Row-level vertical fade: top is sharp, bottom dissolves into black.
  // Applied per-row so it fades within each individual line of text.
  const rowFadeMask =
    "linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.5) 65%, transparent 92%)";

  const rowStyle: React.CSSProperties = {
    fontFamily: "Satoshi, system-ui, -apple-system, sans-serif",
    fontWeight: 700,
    fontSize: "14vw",
    lineHeight: 0.88,          // tighter — rows sit closer together
    userSelect: "none",
    whiteSpace: "nowrap",
    willChange: "transform",
    letterSpacing: "-0.02em",
    paddingLeft: "3vw",
    // fade each row from its top (visible) to its bottom (transparent)
    WebkitMaskImage: rowFadeMask,
    maskImage: rowFadeMask,
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        background: "#000000",
        overflow: "hidden",
      } as React.CSSProperties}
    >
      {/* Base layer — hollow outline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {ROW_TEXTS.map((text, i) => (
          <div
            key={i}
            ref={(el) => { baseRefs.current[i] = el; }}
            style={{
              ...rowStyle,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.18)",
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Reveal layer — spotlight mask */}
      <div
        style={
          {
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pointerEvents: "none",
            WebkitMaskImage: `radial-gradient(circle ${SPOTLIGHT_R}px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle ${SPOTLIGHT_R}px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`,
          } as React.CSSProperties
        }
      >
        {ROW_TEXTS.map((text, i) => (
          <div
            key={i}
            ref={(el) => { revealRefs.current[i] = el; }}
            style={{
              ...rowStyle,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.70)",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
