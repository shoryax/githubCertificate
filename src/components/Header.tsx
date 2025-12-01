"use client";

import { useState } from "react";
import Model from "./3d";
import { NavItem } from "@/components/NavItem";
import { Home, User2, Grid2x2, ImageIcon } from "lucide-react";
import { usePathname } from "next/navigation"
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const pathname = usePathname();
  

  return (
    <header className="w-[85%] h-[85%] mx-auto mt-8 mb-15 rounded-2xl transition-colors px-3 flex flex-col items-center justify-center">
      <div className="relative w-full flex items-center justify-between py-4">
        <div
          className="text-xl text-white/70 font-semibold cursor-pointer"
          onClick={() => setShowModel(true)}
        >
          Shorya
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden text-gray-100/90 md:flex">
          <nav
            aria-label="Main"
            className="pointer-events-auto rounded-full backdrop-blur scale-90"
            style={{ 
              boxShadow: '0 0 20px rgba(255, 255, 55, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            <ul className="flex items-center gap-1 px-2 bg-transparent py-1.5">
              <NavItem href="/" label="Home" icon={Home} active={pathname === "/"} />

              {/* vertical divider */}
              <li aria-hidden="true">
                <div className="mx-2 h-6 w-px bg-border/60 bg-amber-50" />
              </li>

              <NavItem href="/" label="About" icon={User2} active={pathname === "/about"} />
              <NavItem href="/" label="Work" icon={Grid2x2} active={pathname === "/work"} />
              <NavItem href="/" label="Gallery" icon={ImageIcon} active={pathname === "/gallery"} />
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex space-x-8">
            <a href="https://www.github.com/shoryax/" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="w-8 h-8" />
            </a>
            <a href="https://coff.ee/shoryavard0" target="_blank" rel="noopener noreferrer">
              <Image src="/coffee.svg" alt="Coffee" width={32} height={32} className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
            </a>
            <a href="https://www.x.com/in/realShorya/" target="_blank" rel="noopener noreferrer">
              <Image src="/bi_twitter-x.svg" alt="X" width={28} height={32} className="w-7 h-8" />
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-inherit rounded shadow-md py-2 px-4 flex justify-center space-x-8">
          <a href="https://www.github.com/shoryax/" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={32} height={32} className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
            <Image src="/coffee.svg" alt="Coffee" width={32} height={32} className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
          </a>
          <a href="https://x.com/realShorya/" target="_blank" rel="noopener noreferrer">
            <Image src="/x.svg" alt="X" width={32} height={32} className="w-8 h-8" />
          </a>
        </div>
      )}

      {showModel && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 p-4">
          <button
            className="mb-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            onClick={() => setShowModel(false)}
          >
            Close 3D Model
          </button>
          <div className="w-full max-w-4xl h-[600px] rounded-lg overflow-hidden bg-white">
            <Model />
          </div>
        </div>
      )}
    </header>
  );
}
