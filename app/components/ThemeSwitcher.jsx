"use client";

import { useTheme } from "./ThemeProvider";
import { Palette } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botão */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-xl bg-black/40 text-cyan-400 border border-white/10 hover:scale-110 transition"
      >
        <Palette size={20} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-[#0B0B14] border border-white/10 rounded-xl p-2 shadow-xl z-50">
          <button
            onClick={() => { setTheme("dark"); setOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Tema Escuro
          </button>

          <button
            onClick={() => { setTheme("light"); setOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Tema Claro
          </button>

          <button
            onClick={() => { setTheme("purple"); setOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Tema Roxo
          </button>
        </div>
      )}
    </div>
  );
}
