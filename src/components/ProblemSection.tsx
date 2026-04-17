import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Clock, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Decisões no Escuro",
      desc: "Sem dados claros, você toma decisões baseadas em 'achismos', perdendo dinheiro sem perceber.",
      icon: <XCircle className="text-red-500" />
    },
    {
      title: "Relatórios Lentos",
      desc: "Perder um dia inteiro para gerar um relatório de performance é coisa do passado.",
      icon: <Clock className="text-red-500" />
    },
    {
      title: "Carga Cognitiva Alta",
      desc: "Você passa horas tentando entender planilhas que deveriam te ajudar, mas só geram mais confusão.",
      icon: <TrendingDown className="text-red-500" />
    },
    {
      title: "Ruído Visual",
      desc: "Interfaces poluídas que te distraem do que realmente importa: o lucro da sua operação.",
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
            Por que sua gestão <br className="hidden md:block" />
            <span className="text-white/20">está drenando seu tempo?</span>
          </motion.h2>
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
