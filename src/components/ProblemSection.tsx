import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Clock, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "O Labirinto dos Dados",
      desc: "Você se sente perdido em um mar de informações que não levam a lugar nenhum. Falta clareza para decidir.",
      icon: <XCircle className="text-red-500" />
    },
    {
      title: "A Escravidão da Rotina",
      desc: "Sua operação deveria trabalhar para você, mas você gasta 80% do dia apenas organizando o caos.",
      icon: <Clock className="text-red-500" />
    },
    {
      title: "O Custo do Achismo",
      desc: "Sem direção técnica, cada decisão é uma aposta. E no mercado moderno, apostas custam caro.",
      icon: <TrendingDown className="text-red-500" />
    },
    {
      title: "Exaustão Mental",
      desc: "Interfaces poluídas e ruído visual constantes drenam sua energia antes mesmo de você começar a produzir.",
      icon: <AlertCircle className="text-red-500" />
    }

  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-vorix-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vorix-orange font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs"
          >
            A REALIDADE NEGLECTED
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-8xl font-extrabold mt-6 md:mt-8 tracking-tighter leading-[0.9]"
          >
            Gerir é difícil. <br className="hidden md:block" />
            <span className="text-white/20">Ver seu tempo sumir é pior.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-2xl mt-8 max-w-3xl mx-auto leading-relaxed"
          >
            O método tradicional de gestão está quebrado. Planilhas infinitas e ferramentas complexas não trazem lucro, trazem ansiedade e paralisia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {problems.map((prob, index) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 group border-transparent bg-vorix-card/30 hover:bg-vorix-card/60 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">{prob.title}</h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
