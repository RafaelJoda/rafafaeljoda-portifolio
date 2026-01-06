"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#0B0B14] text-white"
    >
      <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2, once: false }}
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Sobre Mim
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Sou Rafael, estudante de Engenharia de Software, apaixonado por tecnologia e pelo desenvolvimento de soluções digitais modernas, eficientes e bem estruturadas. Estou em constante evolução, sempre buscando aprender novas tecnologias e transformar ideias em projetos reais.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Tenho experiência com Python, C#, JavaScript, TypeScript, Node.js, HTML, CSS e React, além de sólidos conhecimentos em lógica de programação, organização de código e boas práticas de desenvolvimento de software.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Meu objetivo como futuro engenheiro de software é criar soluções que não apenas funcionem, mas que sejam escaláveis, bem planejadas e capazes de gerar impacto real por meio da tecnologia.
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
