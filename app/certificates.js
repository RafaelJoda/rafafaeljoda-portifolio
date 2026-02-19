"use client";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Front-End Completo",
    institution: "FIAP",
    description: "HTML, CSS e JavaScript.",
    tech: ["HTML", "CSS", "JS"],
    img: "/images/front end.png",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=3f2172f9d0333b32a993914bbcc5a78f&action=view",
  },
  {
    title: "Lógica de Programação",
    institution: "FIAP",
    description: "Fundamentos com JavaScript.",
    tech: ["JavaScript"],
    img: "/images/logica inicial.png",
    link: "https://cursos.alura.com.br/certificate/dd0bd26b-a2f1-40d6-9031-4a18cfc649fb",
  },
  {
    title: "Excel Avançado",
    institution: "Udemy",
    description: "Dashboards e análise de dados.",
    tech: ["Excel"],
    img: "/images/excel.png",
    link: "#",
  },

   {
    title: "Formacao e Sustentabilidade",
    institution: "FIAP",
    description: "Desenvolvimento de competências para formação e sustentabilidade.",
    tech: ["None"],
    img: "/images/formacao e sustentabilidade.png",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=743c40d57cf39092ebc4eeda76b053ec&action=view",
  },

   {
    title: "Git e GitHub: compartilhando e colaborando em projetos",
    institution: "FIAP",
    description: " compartilhando e colaborando em projetos.",
    tech: ["Git", "GitHub"],
    img: "/images/githuib.png",
    link: "https://cursos.alura.com.br/certificate/196140b1-d767-4c45-bcc3-c950590f97d0?lang",
  },

   {
    title: "Design Thinking: Process",
    institution: "FIAP",
    description: "Processos de design thinking.",
    tech: ["None"],
    img: "/images/design think.png",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=dd9e9d49029f1f56f9d8309239bc6fe5&action=view",
  },

   {
    title: "Java: criando a sua primeira aplicação",
    institution: "FIAP",
    description: "Primeiro programa em Java",
    tech: ["Java"],
    img: "/images/java inicial.png",
    link: "https://cursos.alura.com.br/certificate/f343be6f-d07f-4edd-9a1e-9e5915d45e8e",
  },
];

const duplicatedCertificates = [...certificates, ...certificates];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-[#0B0B14] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">
          Certificações
        </h2>

        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Minha jornada de aprendizado contínuo e especializações técnicas.
        </p>

        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCertificates.map((c, i) => (
              <div
                key={i}
                className="w-[350px] flex-shrink-0 group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_20px_#00ffff20] hover:shadow-[0_0_35px_#00ffff60] transition-all duration-500"
              >
                {/* Imagem */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] to-transparent" />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    {c.institution}
                  </span>

                  <h3 className="text-xl font-semibold mt-1 mb-2 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {c.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={c.link}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-200 transition"
                  >
                    Ver credencial
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
