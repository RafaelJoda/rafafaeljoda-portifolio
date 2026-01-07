"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experiencias"
      className="py-20 scroll-mt-28 bg-[#00000] text-white px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2, once: false }}
        className="text-4xl font-bold text-cyan-400 text-center mb-12"
      >
        Experiências
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {[
          {
            role: "Jovem Aprendiz",
            company: "VendPerto",
            time: "2025 - Presente",
            desc: "Atuação na área administrativa com automação de processos e criação de planilhas avançadas.",
          },
        ].map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ amount: 0.2, once: false }}
            className="bg-gray-900/60 p-6 rounded-lg border border-cyan-600/30 shadow-xl hover:shadow-cyan-400/30 duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-300">
              {job.role}
            </h3>
            <p className="text-gray-400">
              {job.company} • {job.time}
            </p>
            <p className="mt-3 text-gray-300">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
