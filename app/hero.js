"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-[#0B0B14] overflow-hidden"
    >
      {/* Detalhe sutil de fundo */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
                      bg-cyan-500/10 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl text-center"
      >
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Olá, eu sou o{" "}
          <span className="text-cyan-400">Rafael</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Estudante de Engenharia de Software, focado no desenvolvimento de soluções eficientes, escaláveis e bem estruturadas.
        </p>

        {/* Linha decorativa */}
        <div className="mt-10 flex justify-center">
          <span className="w-24 h-[2px] bg-cyan-400/60 rounded-full"></span>
        </div>

        {/* CTA */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-9 py-3 border border-cyan-400/60 
                     text-cyan-300 rounded-xl font-medium
                     hover:bg-cyan-400 hover:text-black transition-all"
        >
          Ver Projetos
        </motion.a>
      </motion.div>
    </section>
  );
}
