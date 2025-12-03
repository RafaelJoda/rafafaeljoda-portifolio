"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher"; // ajuste o caminho se necessário

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-cyan-400 text-2xl font-bold tracking-wide hover:text-cyan-300 transition">
          Rafael.dev
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-white text-lg">
          {[
            { label: "Home", href: "#home" },
            { label: "Sobre", href: "#about" },
            { label: "Projetos", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Contato", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-cyan-300 transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right section → Theme switcher + Mobile button */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher /> {/* botão de seleção de tema */}
          
          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cyan-400"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md py-6 px-6 space-y-6 text-white text-lg">
          {[
            { label: "Home", href: "#home" },
            { label: "Sobre", href: "#about" },
            { label: "Projetos", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Contato", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block hover:text-cyan-300 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
