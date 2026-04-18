import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Target, 
  Layers, 
  Cpu 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Lucro Sob Controle",
      desc: "Saiba exatamente para onde vai cada centavo. Sem surpresas no fim do mês, apenas previsibilidade absoluta.",
      icon: <BarChart3 size={32} />,
      color: "from-blue-500 to-cyan-400",
      accent: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Antecipação Técnica",
      desc: "A nossa engenharia corta gastos desnecessários antes que eles virem prejuízo real no seu caixa.",
      icon: <Cpu size={32} />,
      color: "from-purple-500 to-pink-500",
      accent: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Blindagem de Dados",
      desc: "Seus números são seu maior segredo. Protegemos sua operação com segurança de nível bancário.",
      icon: <ShieldCheck size={32} />,
      color: "from-emerald-500 to-teal-400",
      accent: "bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Escala Automática",
      desc: "Recupere até 10 horas semanais automatizando processos que hoje drenam sua energia.",
      icon: <Zap size={32} />,
      color: "from-vorix-orange to-amber-500",
      accent: "bg-orange-500/10 text-vorix-orange"
    },
    {
      title: "Direção de Metas",
      desc: "Pare de 'achar' e comece a 'saber'. Defina objetivos reais baseados no seu comportamento financeiro.",
      icon: <Target size={32} />,
      color: "from-rose-500 to-red-400",
      accent: "bg-rose-500/10 text-rose-400"
    },
    {
      title: "Central de Poder",
      desc: "Toda a sua engenharia de gestão conectada em um único ecossistema modular e eficiente.",
      icon: <Layers size={32} />,
      color: "from-indigo-500 to-blue-500",
      accent: "bg-indigo-500/10 text-indigo-400"
    }
  ];

  return (
    <div>
      {/* Mobile Swipe Indicator */}
      <div className="md:hidden flex items-center justify-center gap-2 mb-8 text-white/40 text-[10px] font-black uppercase tracking-widest">
         <span>Explore as Funcionalidades</span>
         <Zap size={12} className="text-vorix-orange animate-pulse" />
      </div>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-10 md:pb-0 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-[85vw] md:w-auto snap-center relative group h-full"
          >
            {/* Background Highlight on Hover */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
            
            <div className="relative h-full bg-[#0A0A0A] border border-white/5 p-8 md:p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden">
               {/* Gradient Accent Bar */}
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
               
               <div>
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${feature.accent} flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 tracking-tight leading-tight uppercase group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.desc}
                  </p>
               </div>

               <div className="mt-8 md:mt-10 flex items-center justify-between">
                  <div className="flex gap-1">
                     {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-20`} />)}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 group-hover:text-white/30 transition-colors">
                     Engenharia Vorix
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
