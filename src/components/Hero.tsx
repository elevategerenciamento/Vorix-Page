import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, X, CheckCircle2, Zap, Layers, Globe } from 'lucide-react';
import RealDashboardPreview from './RealDashboardPreview';

const Hero = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vorix-orange/10 blur-[150px] rounded-full -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -ml-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-10"
        >
          <div className="w-6 h-6 bg-vorix-orange rounded-md flex items-center justify-center">
            <TrendingUp size={14} className="text-white" />
          </div>
          <span className="text-xs md:text-sm font-bold text-white/80 uppercase tracking-widest">
            A EVOLUÇÃO DA GESTÃO MODERNA
          </span>
          <span className="w-2 h-2 rounded-full bg-vorix-orange animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8"
        >
          Sua gestão não precisa <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vorix-orange to-orange-400">
            ser um caos.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium px-4"
        >
          O Vorix é o cérebro que sua operação merece. Deixamos de lado a complexidade e entregamos <span className="text-white">clareza absoluta</span> para você focar no que realmente importa: crescer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-24 px-4"
        >
          <a 
            href="https://vorix-project.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-lg sm:text-2xl px-8 py-5 sm:px-12 sm:py-7 shadow-[0_20px_50px_rgba(255,77,0,0.4)]"
          >
            Acessar o App Agora
            <ArrowRight size={22} className="sm:w-[28px] sm:h-[28px]" />
          </a>
          <button 
            onClick={() => setShowHowItWorks(true)}
            className="premium-button premium-button-secondary w-full sm:w-auto text-lg sm:text-2xl px-8 py-5 sm:px-12 sm:py-7"
          >
            Como funciona?
          </button>
        </motion.div>


        {/* Real Dashboard Preview / Mobile Frame - Closer to borders but not touching */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 md:mt-24 relative inline-block mx-auto w-full px-2"
        >
          {/* Subtle Glow behind the phone */}
          <div className="absolute -inset-10 md:-inset-20 bg-vorix-orange/20 blur-[120px] rounded-full opacity-30 animate-pulse pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-[420px] md:max-w-[450px] mx-auto">
             <RealDashboardPreview />
          </div>
          
          {/* Floating badges around the phone on desktop */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute -left-20 top-20 bg-vorix-card/80 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10 shadow-2xl z-20"
          >
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/10">
                 <TrendingUp size={20} />
               </div>
               <div>
                  <p className="text-xs font-black leading-none mb-1">Lucro Líquido</p>
                  <p className="text-[10px] text-emerald-500 font-bold tracking-widest">+24.3% ESTE MÊS</p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>

      {/* How It Works Modal / Drawer */}
      <AnimatePresence>
        {showHowItWorks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-vorix-black/90 backdrop-blur-xl p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              className="w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-[0_0_100px_rgba(255,77,0,0.1)]"
            >
              <button 
                onClick={() => setShowHowItWorks(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-vorix-orange transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                {/* Left side / Intro */}
                <div className="p-10 md:p-16 flex-1 border-b md:border-b-0 md:border-r border-white/5 space-y-10">
                   <div className="space-y-4">
                     <span className="text-vorix-orange font-black text-xs md:text-sm uppercase tracking-[0.4em]">O DNA DO SISTEMA</span>
                     <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight italic">
                        SIMPLES. <br/>
                        PRECISO. <br/>
                        <span className="text-vorix-orange">LUCRATIVO.</span>
                     </h2>
                   </div>
                   
                   <p className="text-white/40 text-lg md:text-xl leading-relaxed">
                     O Vorix foi construído sob uma base de <strong>linguagem clara</strong>. Chega de planilhas complexas que ninguém entende. Nós traduzimos sua operação em poder de decisão real.
                   </p>

                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <CheckCircle2 className="text-emerald-500" size={24} />
                        <p className="text-xs font-bold text-white/60">Configuração em 60s</p>
                      </div>
                      <div className="space-y-2">
                        <Zap className="text-vorix-orange" size={24} />
                        <p className="text-xs font-bold text-white/60">Decisões 10x rápidas</p>
                      </div>
                   </div>
                </div>

                {/* Right side / Journey */}
                <div className="p-10 md:p-16 flex-1 bg-white/[0.01] space-y-10">
                   <h3 className="text-xl font-bold mb-8">Como vai mudar sua vida:</h3>
                   
                   {[
                     { title: "Identificação", desc: "O sistema mapeia seus hábitos financeiros e encontra os gargalos de prejuízo que você nem sabia que existiam.", icon: <Globe size={20}/> },
                     { title: "Direção Técnica", desc: "A IA integrada sugere exatamente onde cortar e onde investir para maximizar seu lucro diário.", icon: <Layers size={20}/> },
                     { title: "Liberdade Real", desc: "Menos tempo olhando dados, mais tempo vivendo. O Vorix faz o trabalho sujo por você.", icon: <ArrowRight size={20}/> }
                   ].map((step, i) => (
                     <div key={i} className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-2xl bg-vorix-orange/10 flex items-center justify-center text-vorix-orange flex-shrink-0 group-hover:scale-110 transition-transform">
                          {step.icon}
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                           <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                     </div>
                   ))}

                   <div className="pt-8">
                     <a 
                       href="https://vorix-project.vercel.app/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="premium-button premium-button-primary w-full py-6 flex items-center justify-center gap-3 text-xl font-black"
                     >
                       ENTRAR AGORA
                       <ArrowRight size={20} />
                     </a>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
