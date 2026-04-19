import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Usuários Ativos', value: '2k+' },
    { label: 'Saúde Financeira', value: '100%' },
    { label: 'Problemas Resolvidos', value: 'Milhares' },
    { label: 'Taxa de Acerto I.A.', value: '99%' },
  ];

  return (
    <section className="py-12 md:py-20 border-y border-white/5 bg-vorix-dark/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-[12px] md:text-xs text-vorix-orange font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
