import path from "path";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  githubLink?: string;
  link?: string;
  tech: string;
}

async function getProject(id: string): Promise<Project | null> {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data.allProjects.find((p: Project) => p.id === id) || null;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data.allProjects.map((p: Project) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) return notFound();

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "rgba(255,255,255,0.82)",
      }}
    >
      <Header />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "7rem 2.5rem 6rem",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link href="/" className="project-back-link">
            ← All Projects
          </Link>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {project.link && !project.link.startsWith("on your") && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                }}
              >
                Live ↗
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                }}
              >
                Code ↗
              </a>
            )}
          </div>
        </div>

        {/* Project title */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "rgba(255,255,255,0.9)",
            marginBottom: "1.5rem",
          }}
        >
          {project.title}
        </h1>

        {/* Tech tags */}
        <div style={{ marginBottom: "2.5rem" }}>
          {project.tech.split(",").map((t, i) => (
            <span key={i} className="project-tag">
              {t.trim()}
            </span>
          ))}
        </div>

        {/* Description */}
        {project.description && (
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "580px",
              marginBottom: "3.5rem",
            }}
          >
            {project.description}
          </p>
        )}

        {/* Project image */}
        {project.image && (
          <div
            style={{
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={860}
              height={480}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
