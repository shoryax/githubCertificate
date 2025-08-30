"use client";

import { useState } from "react";
import Model from "./3d";  // Adjust path if needed

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);

  return (
    <header className="w-[85%] h-[85%] mx-auto mt-8 mb-15 rounded-2xl transition-colors px-3 flex flex-col items-center justify-center">
      <div className="relative w-full flex items-center justify-between py-4">

        {/* Clickable "Shorya" text */}
        <div
          className="text-xl text-white/70 font-semibold cursor-pointer"
          onClick={() => setShowModel(true)}
        >
          Shorya
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <nav className="flex space-x-10">
            <a href="/" className="cursor-pointer text-white/70">About</a>
            <a href="/" className="cursor-pointer text-white/70">Home</a>
            <a href="#contact" className="cursor-pointer text-white/70">Contact</a>
          </nav>
        </div>


        {/* Right side: Icons or Menu */}
        <div className="flex items-center space-x-4">

          {/* Hamburger button for small screens */}
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

          {/* Icons for md and up */}
          <div className="hidden md:flex space-x-8">
            <a href="https://www.github.com/shoryax/" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://coff.ee/shoryavard0" target="_blank" rel="noopener noreferrer">
              <img src="/coffee.svg" alt="Coffee" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white rounded shadow-md py-2 px-4 flex justify-center space-x-8">
          <a href="https://www.github.com/shoryax/" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
            <img src="/coffee.svg" alt="Coffee" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/shorya1/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      )}

      {/* Show Model when showModel is true */}
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
