"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-lg
                 bg-[color-mix(in_oklab,var(--bg),transparent_60%)]"
    >
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center">

        {/* Logo - esquerda */}
        <h1 className="text-cyan-400 text-2xl font-bold tracking-wide hover:text-cyan-300 transition">
          Rafael.dev
        </h1>

        {/* Desktop Menu - CENTRALIZADO */}
        <nav className="hidden md:flex space-x-10 text-[var(--text)] text-lg
                        absolute left-1/2 -translate-x-1/2">
          {[
            { label: "Home", href: "#home" },
            { label: "Sobre", href: "#about" },
            { label: "Projetos", href: "#projects" },
            { label: "Experiência", href: "#experiencias" },
            { label: "Contato", href: "#contato" },
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

        {/* Mobile Toggle - direita */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-cyan-400"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden py-6 px-6 space-y-6 text-[var(--text)] text-lg
                     backdrop-blur-md bg-[color-mix(in_oklab,var(--bg),transparent_20%)]"
        >
          {[
            { label: "Home", href: "#home" },
            { label: "Sobre", href: "#about" },
            { label: "Projetos", href: "#projects" },
            { label: "Experiência", href: "#experiencias" },
            { label: "Contato", href: "#contato" },
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
