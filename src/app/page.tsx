"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Body from "@/components/Body";
import Footer from '@/components/Footer';
import Time from '@/components/Time';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'projects' | 'techstack'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data.allProjects))
      .catch(err => console.error('Error loading projects:', err));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Intro activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body activeTab={activeTab} projects={projects} />
      <Footer />
      <Time />
    </div>
  );
}
