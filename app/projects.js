"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AtmoGuard",
    description: "Landing page futurista criada para solução de monitoramento de enchentes.",
    tech: ["HTML", "CSS", "JS"],
    img: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "Dashboard Neon",
    description: "Interface inspirada em sci-fi com efeitos neon e glassmorphism.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "Portfolio 3D",
    description: "Projeto com animações 3D usando Three.js e motion interativo.",
    tech: ["Three.js", "React"],
    img: "https://via.placeholder.com/600x400",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-[#00000] text-white">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Projetos</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2, once: false }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_#00ffff20] hover:shadow-[0_0_35px_#00ffff60] transition-all cursor-pointer"
          >
            <div className="h-48 w-full overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/40">
                    {t}
                  </span>
                ))}
              </div>

              <a href={p.link} className="text-cyan-400 hover:text-cyan-200 transition">Ver Projeto →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}