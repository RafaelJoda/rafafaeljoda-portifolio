"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#00000] text-white"
    >
      <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2, once: false }}
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Sobre Mim</h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Sou Rafael, desenvolvedor front-end apaixonado por criar experiências
            digitais modernas, fluidas e visualmente impactantes. Estou sempre em busca
            de evoluir, aprender novas tecnologias e transformar ideias em projetos reais.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Tenho experiência com HTML, CSS, JavaScript e React, além de trabalhar com
            animações usando Framer Motion e interfaces futuristas com estilos neon,
            glassmorphism e efeitos interativos.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Minha missão como dev é criar interfaces que não só funcionem, mas que também
            inspirem, prendam a atenção e ofereçam uma experiência memorável.
          </p>
        </motion.div>

        {/* Imagem / Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_25px_#00ffff70] hover:scale-105 transition-transform">
            <img
              src="https://avatars.githubusercontent.com/u/000000?v=4"
              alt="Rafael Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
