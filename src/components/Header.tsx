"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
        zIndex: 99,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)",
      }}
    >
      <Link href="/" className="project-back-link">
        ← Shorya Vardhan
      </Link>
    </header>
  );
}
