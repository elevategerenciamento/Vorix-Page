import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Clock, TrendingDown, ArrowRight } from 'lucide-react';

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
            className="text-white/60 text-lg md:text-2xl mt-8 md:mt-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A falta de clareza custa caro. Sem o controle real dos seus números, decisões importantes acabam virando apenas palpites arriscados.
          </motion.p>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
           <span>Arraste para o lado</span>
           <ArrowRight size={12} className="animate-pulse" />
        </div>

        {/* Horizontal Container for Mobile Swiping */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-10 md:pb-0 scrollbar-hide snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0">
          {problems.map((prob, index) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center glass-card p-8 md:p-8 group border-transparent bg-vorix-card/30 hover:bg-vorix-card/60 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight uppercase">{prob.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{prob.desc}</p>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
