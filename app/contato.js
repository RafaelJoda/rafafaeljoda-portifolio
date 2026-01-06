"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contato() {
  const contacts = [
    {
      icon: <Mail size={30} className="text-cyan-400" />,
      title: "E-mail",
      info: "rafaeljoda06@outlook",
    },
    {
      icon: <Phone size={30} className="text-cyan-400" />,
      title: "Telefone",
      info: "(11) 970444072 ",
    },
    {
      icon: <Linkedin size={30} className="text-cyan-400" />,
      title: "Linkedin",
      info: "@RafaelJoda",
    },
    {
      icon: <Github size={30} className="text-cyan-400" />,
      title: "Github",
      info: "@RafaelJoda",
    },
  ];

  return (
    <section className="py-24 bg-[#00000] text-cyan-400 text-center px-6 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl font-bold mb-20"
      >
        Contatos
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {contacts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: false }}

            /* 🔥 HOVER ADICIONADO AQUI */
            whileHover={{
              y: -8,
              scale: 1.15,
             
            }}

            className="flex flex-col items-center"
          >
            <div className="bg-[#1A1A24] w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-black/50">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>

            <p className="text-gray-400 mt-1">{item.info}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
