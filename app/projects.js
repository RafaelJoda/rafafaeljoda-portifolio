"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MovieFiap",
    description:
      "Um site que apresenta os catálogos de filmes, com suas respectivas notas de avaliação, integradas a uma API.",
    tech: ["HTML", "CSS", "JS"],
    img: "/images/moviefiap.png",
    link: "checkpoint-5-webdev-1espz.vercel.app",
  },
  {
    title: "Passa bola App",
    description: "Aplicativo de futebol feminino desenvolvido em Next.js com foco em estatísticas, notícias e acompanhamento de ligas. Usuario: admin / Senha: 123456",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "/images/aplicativo passabola.png",
    link: "https://sprint3-web-front-challenge-6oac-d4pl1punf.vercel.app/",
  },
  {
    title: "Green Path",
    description: "A Greenpath é uma landing page voltada à sustentabilidade empresarial, destacando projetos ambientais e estratégias de economia verde.",
    tech: ["Tailwind", "React"],
    img: "/images/greenpatch.png",
    link: "greenpath-rose.vercel.app",
  },

  {
    title: "TalentHub",
    description:
      "O projeto consiste em uma aplicação web para consulta e filtragem de profissionais, com foco em usabilidade, organização visual e boas práticas de front-end.",
    tech: ["Tailwind", "React", "JS"],
    img: "/images/talent lab.png",
    link: "gs-web-front-xi.vercel.app",
  },

  {
    title: "Airbnb Clone",
    description:
      "Clone do Airbnb focado apenas na interface front-end, reproduzindo o layout e a experiência visual da plataforma.",
    tech: ["Tailwind", "React", "JS"],
    img: "/images/airbnbn.png",
    link: "https://rafaeljoda.github.io/CP---Airbnb/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 bg-[#0B0B14] text-white"
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_#00ffff20] hover:shadow-[0_0_35px_#00ffff60] transition-all"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
                {p.title}
              </h3>

              <p className="text-gray-300 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                className="text-cyan-400 hover:text-cyan-200 transition"
              >
                Ver Projeto →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
