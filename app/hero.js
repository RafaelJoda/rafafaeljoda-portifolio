"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 
      bg-[#0B0B14] relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b14]/40 to-[#0b0b14] pointer-events-none"></div>

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[130px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 blur-[130px] rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          Olá, eu sou o{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            Rafael
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 tracking-wide drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]">
          Desenvolvedor Front-end focado em criar experiências futuristas e interfaces modernas.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-xl shadow-lg 
          hover:bg-cyan-400 transition-all"
        >
          Ver Projetos
        </motion.a>
      </motion.div>
    </section>
  );
}
