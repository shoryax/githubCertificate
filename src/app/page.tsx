"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SpotlightMarquee from "@/components/SpotlightMarquee";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tech: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.allProjects))
      .catch(console.error);
  }, []);

  return (
    <main style={{ background: "#000", minHeight: "100vh", cursor: "none" }}>

      {/* ── Fixed: corner nav ────────────────────────────────── */}
      {/* Top-left: identity */}
      <div
        style={{
          position: "fixed",
          top: "15px",
          left: "20px",
          padding: "20px 30px",
          zIndex: 99,
          borderRight: "1px solid #1e1e1e",
        }}
      >
        <a href="#" className="corner-link" style={{ display: "block" }}>
          Shorya Vardhan
        </a>
        <span className="corner-link-dim">Developer · Designer · Creator</span>
      </div>

      {/* Top-right: about/contact */}
      <a
        href="#contact"
        className="corner-link"
        style={{
          position: "fixed",
          top: "15px",
          right: "20px",
          padding: "20px 30px",
          zIndex: 99,
          textAlign: "right",
        }}
      >
        About / Contact
      </a>

      {/* Bottom-left: project count */}
      <a
        href="#projects"
        className="corner-link"
        style={{
          position: "fixed",
          bottom: "15px",
          left: "20px",
          padding: "20px 30px",
          zIndex: 99,
        }}
      >
        {projects.length > 0 ? `${projects.length} Projects` : "Projects"}
      </a>

      {/* Bottom-right: GitHub */}
      <a
        href="https://github.com/shoryax"
        target="_blank"
        rel="noopener noreferrer"
        className="corner-link"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "20px",
          padding: "20px 30px",
          zIndex: 99,
          textAlign: "right",
        }}
      >
        GitHub
      </a>

      {/* ── Fixed: edge vignette gradients ───────────────────── */}
      {/* Top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "28vh",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.92), transparent)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
      {/* Bottom */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "290px",
          background: "linear-gradient(to top, #000, transparent)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
      {/* Left */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "130px",
          background: "linear-gradient(to right, #000, transparent)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
      {/* Right */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "130px",
          background: "linear-gradient(to left, #000, transparent)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* ── Fixed: center vertical hairline ──────────────────── */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: 0,
          width: "1px",
          height: "18vh",
          background: "rgba(255,255,255,0.45)",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      {/* ── Hero section ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <SpotlightMarquee />

        {/* Circular white dot-button — scroll to projects */}
        <a
          href="#projects"
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 60,
            padding: "15px",
            textDecoration: "none",
            display: "block",
          }}
        >
          <div className="dot-btn">
            <div className="dot-btn__dot" />
            <div className="dot-btn__dot" />
            <div className="dot-btn__dot" />
          </div>
        </a>
      </section>

      {/* ── Projects section ─────────────────────────────────── */}
      <section
        id="projects"
        style={{ paddingTop: "6rem", paddingBottom: "8rem" }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 3rem 1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "0",
          }}
        >
          <span className="section-label">Selected Work</span>
          <span
            className="section-label"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Project rows */}
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="project-row"
            style={{ display: "flex" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
                minWidth: 0,
              }}
            >
              <span className="project-row__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="project-row__title">{project.title}</span>
            </div>

            <div className="project-row__meta">
              <span className="project-row__tag">
                {project.tech.split(",")[0].trim()}
              </span>
              <span className="project-row__arrow">↗</span>
            </div>
          </Link>
        ))}
      </section>

      {/* ── Contact section ──────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: "5rem 3rem 4rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {/* Left: email */}
          <div>
            <p
              className="section-label"
              style={{ marginBottom: "1.25rem" }}
            >
              Get in touch
            </p>
            <a
              href="mailto:shoryavardhan13@gmail.com"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                color: "rgba(255,255,255,0.82)",
                fontWeight: 400,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.2s ease",
              }}
            >
              shoryavardhan13@gmail.com
            </a>
          </div>

          {/* Right: social links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
              alignItems: "flex-end",
            }}
          >
            {[
              {
                label: "GitHub",
                href: "https://github.com/shoryax",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/shorya1",
              },
              {
                label: "X / Twitter",
                href: "https://x.com/realShorya",
              },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="corner-link"
                style={{ fontSize: "13px" }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            maxWidth: "960px",
            margin: "3rem auto 0",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Shorya Vardhan
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.05em",
            }}
          >
            Patna, India
          </span>
        </div>
      </section>
    </main>
  );
}
