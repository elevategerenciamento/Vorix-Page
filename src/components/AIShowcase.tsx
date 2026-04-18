import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Brain, Shield } from 'lucide-react';

const AIShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-vorix-orange text-sm font-bold"
        >
          <Brain size={16} />
          VORIX INTELLIGENCE
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tighter">
          Seu consultor técnico, <span className="text-white/60">na velocidade do agora.</span>
        </h2>
        <p className="text-base md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed font-bold uppercase tracking-tight">
          A Tecnologia Vorix não é um bot de conversa. É uma <strong>unidade de processamento técnico</strong> que vive no seu caixa, cortando gargalos de prejuízo em tempo real.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {[
            { title: "Análise Integrada", desc: "Diferente de sistemas comuns, a Vorix conhece seus números e responde com base neles.", icon: <Brain size={20} className="text-vorix-orange" /> },
            { title: "Predição de Riscos", desc: "Detectamos anomalias no seu fluxo antes que virem prejuízo.", icon: <Shield size={20} className="text-vorix-orange" /> },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-4 p-6 glass-card bg-white/5 border-white/5">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-vorix-orange/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-base">{item.title}</h4>
                <p className="text-white/60 text-[11px] leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>


        
        <a 
          href="https://vorix-project.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="premium-button premium-button-primary mt-8 md:mt-12 w-full lg:w-auto text-base md:text-lg px-8 py-4 md:px-10 md:py-5 flex items-center justify-center"
        >
           Experimentar Inteligência Vorix
        </a>
      </div>

      <div className="relative mt-12 lg:mt-0">
        <div className="absolute -inset-4 bg-orange-500/5 blur-[80px] rounded-full" />
        
        {/* Chat UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0F0F0F] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vorix-orange rounded-2xl flex items-center justify-center">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold">CORE VORIX</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">ONLINE</span>
                </div>
              </div>
            </div>
            <span className="text-[10px] font-bold bg-green-500/10 text-green-500 px-3 py-1 rounded-full uppercase tracking-wider">ECONÔMICO</span>
          </div>

          <div className="p-4 md:p-8 space-y-6 h-[350px] md:h-[500px] overflow-y-auto scrollbar-hide">
            <div className="flex justify-end">
              <div className="bg-vorix-orange p-4 md:p-5 rounded-3xl rounded-tr-none max-w-[95%] md:max-w-[80%]">
                <p className="text-xs md:text-sm font-bold">Faça uma análise rápida da minha saúde financeira atual.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-vorix-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="text-vorix-orange" size={16} />
              </div>
              <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/10 max-w-[90%] md:max-w-[85%]">
                <p className="text-sm leading-relaxed text-white/90">
                  Oliveira, sua saúde financeira atual é <span className="font-extrabold text-white">PREDICAMENTOSA</span>.
                </p>
                <p className="text-sm leading-relaxed text-white/80 mt-4">
                  Déficit mensal: <span className="text-vorix-orange font-bold">R$ 849,00</span>.
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                   <p className="text-[10px] font-bold text-white/60 uppercase mb-2">Ação Sugerida:</p>
                   <p className="text-xs text-white/80 tracking-tight">• Cortar 40% dos custos em Alimentação.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-vorix-black/50 border-t border-white/5">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4">
              <input readOnly placeholder="Pergunte algo..." className="bg-transparent border-none outline-none text-sm flex-1 text-white/50" />
              <button className="w-10 h-10 bg-vorix-orange rounded-xl flex items-center justify-center"><Send size={18} /></button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIShowcase;
