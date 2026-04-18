import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Trophy, Landmark, Diamond } from 'lucide-react';

const Gamification = () => {
  const missions = [
    {
      title: "Primeira Meta",
      desc: "Junte seus primeiros R$ 1.000,00 e...",
      points: "+50",
      progress: 1.2,
      total: 100,
      icon: <Target size={20} className="text-orange-400" />,
      completed: false
    },
    {
      title: "Primeira Transação",
      desc: "Registre sua primeira...",
      points: "+10",
      progress: 100,
      total: 100,
      icon: <Zap size={20} className="text-green-400" />,
      completed: true
    },
    {
      title: "Planejador de Metas",
      desc: "Ative 3 metas financeiras para o se...",
      points: "+30",
      progress: 66,
      total: 100,
      icon: <Target size={20} className="text-orange-400" />,
      completed: false
    },
    {
      title: "Economista Vorix",
      desc: "Alcance R$ 10.000,00 em saldo...",
      points: "+40",
      progress: 0,
      total: 100,
      icon: <Landmark size={20} className="text-blue-400" />,
      completed: false
    },
    {
      title: "Mestre do Saldo",
      desc: "Alcance R$ 5.000,00 em saldo...",
      points: "+50",
      progress: 0,
      total: 100,
      icon: <Diamond size={20} className="text-cyan-400" />,
      completed: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">Disciplina que <br className="md:hidden"/> <span className="text-vorix-orange">vira lucro</span></h2>
        <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto">Não é sobre jogar. É sobre construir hábitos de alta performance. O Vorix usa psicologia comportamental para manter você no caminho da rentabilidade.</p>
      </div>

      <div className="glass-card p-5 md:p-8 bg-vorix-card/40 border-white/5 space-y-4">
        {/* Header Tabs Mockup */}
        <div className="flex gap-2 md:gap-4 border-b border-white/5 pb-4 mb-6 md:mb-8 overflow-x-auto scrollbar-hide">
          {['Missões', 'Conquistas', 'Badges', 'Ranking'].map((tab, i) => (
            <button key={tab} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${i === 0 ? 'bg-vorix-orange text-white' : 'text-white/50 hover:text-white/70'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3 md:space-y-4">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-vorix-accent/30 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                    {mission.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-base md:text-lg ${mission.completed ? 'text-green-500' : 'text-white'}`}>{mission.title}</h4>
                    <p className="text-[10px] md:text-xs text-white/60 leading-tight">{mission.desc}</p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                  <div className="sm:text-right">
                    <p className="text-xs md:text-sm font-bold text-vorix-orange">{mission.points}</p>
                    <p className="text-[9px] text-vorix-orange/50 font-bold uppercase tracking-widest leading-none">PONTOS</p>
                  </div>
                  {mission.completed && (
                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest sm:mt-1">✓ CONCLUÍDO</p>
                  )}
                </div>
              </div>

              {!mission.completed && (
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <span>PROGRESSO</span>
                    <span className="tabular-nums">{mission.progress < 10 && mission.progress > 0 ? mission.progress + ' / 1000' : mission.progress === 66 ? '2 / 3' : '0 / 10000'}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mission.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${mission.progress > 50 ? 'bg-vorix-orange' : 'bg-vorix-orange/40'}`}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamification;
