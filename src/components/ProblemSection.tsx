import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Clock, TrendingDown, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "O Labirinto dos Dados",
      desc: "Você se sente perdido em um mar de informações que não levam a lugar nenhum. Falta clareza para decidir.",
      icon: <XCircle size={32} className="text-red-500" />
    },
    {
      title: "A Escravidão da Rotina",
      desc: "Sua operação deveria trabalhar para você, mas você gasta 80% do dia apenas organizando o caos.",
      icon: <Clock size={32} className="text-red-500" />
    },
    {
      title: "O Custo do Achismo",
      desc: "Sem direção técnica, cada decisão é uma aposta. E no mercado moderno, apostas custam caro.",
      icon: <TrendingDown size={32} className="text-red-500" />
    },
    {
      title: "Exaustão Mental",
      desc: "Interfaces poluídas e ruído visual constantes drenam sua energia antes mesmo de você começar a produzir.",
      icon: <AlertCircle size={32} className="text-red-500" />
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-vorix-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vorix-orange font-black uppercase tracking-[0.4em] text-[10px] md:text-sm"
          >
            O CUSTO DA GESTÃO TRADICIONAL
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black mt-6 md:mt-10 tracking-tighter leading-[0.9] max-w-5xl mx-auto"
          >
            Enquanto você luta contra o caos, <br className="hidden md:block" />
            <span className="text-white/40 italic">seu lucro escorre pelas mãos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-2xl mt-8 md:mt-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A falta de clareza custa caro. Sem o controle real dos seus números, decisões importantes acabam virando apenas palpites arriscados.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {problems.map((prob, index) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 md:p-8 group border-transparent bg-vorix-card/30 hover:bg-vorix-card/60 transition-all cursor-default flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-red-500/10 flex items-center justify-center mb-4 md:mb-10 group-hover:scale-110 transition-transform">
                  <div className="scale-75 md:scale-100">{prob.icon}</div>
                </div>
                <h3 className="text-xs md:text-2xl font-black mb-2 md:mb-4 tracking-tight leading-tight uppercase">{prob.title}</h3>
                <p className="text-white/70 text-[9px] md:text-base leading-relaxed md:text-white/80">{prob.desc}</p>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 w-1 h-1 md:w-2 md:h-2 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
