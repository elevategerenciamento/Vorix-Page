import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import AIShowcase from './components/AIShowcase';
import Gamification from './components/Gamification';
import MarketRadar from './components/MarketRadar';
import ReportSection from './components/ReportSection';
import ProblemSection from './components/ProblemSection';
import Footer from './components/Footer';
import { 
  ArrowRight, 
  Plus, 
  TrendingUp, 
  LayoutDashboard, 
  ArrowRightLeft, 
  CreditCard, 
  Bell, 
  Radar, 
  Trophy, 
  Target, 
  StickyNote, 
  Bot, 
  Star, 
  FileText,
  Zap,
  Cpu
} from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-vorix-black text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vorix-orange origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        
        {/* Quick Clarity Section */}
        <section className="py-16 md:py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 md:col-span-1 glass-card p-6 md:p-10 bg-vorix-card/20 border-white/5 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-vorix-orange/10 flex items-center justify-center text-vorix-orange mb-4 md:mb-6">
                  <Target size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wider">O que é?</h3>
                <p className="text-white/40 text-[10px] md:text-base leading-relaxed md:text-white/60">
                  Um ecossistema digital inteligente que centraliza toda a gestão do seu negócio em um único lugar.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 md:p-10 bg-vorix-card/20 border-white/5 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 md:mb-6">
                  <Zap size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wider">Para que?</h3>
                <p className="text-white/40 text-[10px] md:text-base leading-relaxed md:text-white/60">
                  Eliminar a confusão mental e estancar prejuízos.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 md:p-10 bg-vorix-card/20 border-white/5 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 md:mb-6">
                  <Cpu size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wider">Como?</h3>
                <p className="text-white/40 text-[10px] md:text-base leading-relaxed md:text-white/60">
                  Processamento de dados em tempo real.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Why Vorix / Identity Section */}
        <section className="py-16 md:py-32 px-6 bg-gradient-to-b from-vorix-black to-vorix-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2"
            >
              Não é apenas um dashboard. <br className="hidden md:block"/>
              <span className="text-white/50">É a inteligência por trás do seu lucro.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-xl text-white/70 leading-relaxed font-normal mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            >
              O Vorix organiza sua operação para que você tome decisões baseadas em dados, não em palpites. Transformamos a confusão financeira em uma rota clara de crescimento.
            </motion.p>

            {/* Mini-Feature Showcase */}
            <div className="mt-8 md:mt-16 max-w-3xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4 px-2 md:px-4">
              {[
                { name: 'Dashboard', icon: <LayoutDashboard size={14} /> },
                { name: 'Transações', icon: <ArrowRightLeft size={14} /> },
                { name: 'Contas', icon: <CreditCard size={14} /> },
                { name: 'Alertas', icon: <Bell size={14} /> },
                { name: 'Radar', icon: <Radar size={14} /> },
                { name: 'Missões', icon: <Trophy size={14} /> },
                { name: 'Metas', icon: <Target size={14} /> },
                { name: 'Anotações', icon: <StickyNote size={14} /> },
                { name: 'IA Vorix', icon: <Bot size={14} /> },
                { name: 'Assinatura', icon: <Star size={14} /> },
                { name: 'Relatórios', icon: <FileText size={14} /> },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 77, 0, 0.1)', borderColor: 'rgba(255, 77, 0, 0.3)' }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] md:text-xs font-bold text-white/60 hover:text-white transition-all cursor-default"
                >
                  <span className="text-vorix-orange">{item.icon}</span>
                  <span className="uppercase tracking-widest">{item.name}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        <ProblemSection />
        
        <div className="flex justify-center py-16 md:py-32 px-6">
          <motion.a 
            href="https://vorix-project.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="premium-button premium-button-primary w-full max-w-4xl flex items-center justify-between gap-6 px-10 py-8 md:px-16 md:py-12 group relative overflow-hidden shadow-[0_40px_80px_rgba(255,77,0,0.3)]"
          >
             {/* Dynamic background glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-vorix-orange via-orange-500 to-vorix-orange opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
             
             <div className="flex flex-col items-start text-left z-10">
               <span className="text-2xl md:text-5xl font-black tracking-tight uppercase leading-none mb-4 group-hover:translate-x-1 transition-transform">
                 Quero transformar <br className="hidden md:block"/> minha gestão agora
               </span>
               <div className="flex items-center gap-2 text-[10px] md:text-xs font-black text-white/60 tracking-[0.4em] uppercase">
                 <Zap size={12} className="text-vorix-orange" /> Acesso imediato ao ecossistema
               </div>
             </div>

             <div className="hidden sm:flex w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 items-center justify-center group-hover:bg-white group-hover:text-vorix-black transition-all duration-500 z-10">
                <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
             </div>

             {/* Mobile Arrow */}
             <ArrowRight size={32} className="sm:hidden z-10" />
          </motion.a>
        </div>



        <section id="features" className="py-16 md:py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-vorix-orange font-bold tracking-widest uppercase text-[10px] md:text-sm"
              >
                Ecossistema de Soluções
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-7xl font-bold mt-4 tracking-tighter"
              >
                Engenharia de <span className="text-white/70">Alta Performance</span>
              </motion.h2>
            </div>
            
            <Features />
          </div>

          <div className="flex justify-center mt-12 md:mt-20">
            <a 
              href="https://vorix-project.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-4 text-xl md:text-3xl px-8 py-6 md:px-20 md:py-10 shadow-[0_30px_60px_rgba(255,77,0,0.3)] font-black uppercase tracking-tighter"
            >
               LIBERAR MEU ACESSO AGORA
               <ArrowRight size={32} />
            </a>
          </div>
        </section>

        <section id="ai" className="py-16 md:py-32 px-6">
          <AIShowcase />
          
          <div className="flex justify-center mt-12 md:mt-24">
            <a 
              href="https://vorix-project.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-button premium-button-secondary flex items-center gap-3 text-base md:text-xl px-8 py-4 md:px-10 md:py-5 font-bold uppercase"
            >
               ELIMINAR GARGALOS TECNICAMENTE
               <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section id="gamification" className="py-16 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vorix-orange/10 blur-[120px] rounded-full pointer-events-none" />
          <Gamification />
        </section>

        <section id="market" className="py-16 md:py-32 px-6">
          <MarketRadar />
        </section>

        <ReportSection />

        <section className="py-16 md:py-48 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-10 md:p-20 relative overflow-hidden bg-vorix-orange/5 border-vorix-orange/20"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vorix-orange to-transparent" />
              
              <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter leading-none">
                A Revolução <br className="hidden md:block" />
                <span className="text-vorix-orange">Começa Aqui.</span>
              </h2>
              <p className="text-white/60 text-lg md:text-3xl mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
                Não perca mais tempo com ferramentas que não entregam resultados. 
                O Vorix é a evolução que sua operação precisa para crescer.
              </p>
              <a 
                href="https://vorix-project.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-2xl md:text-4xl px-8 py-6 md:px-16 md:py-10 mx-auto shadow-[0_0_80px_rgba(255,77,0,0.5)] font-black uppercase italic tracking-tighter"
              >
                ENTRAR NO ECOSSISTEMA AGORA
                <ArrowRight size={32} className="md:w-[48px] md:h-[48px]" />
              </a>
             <p className="mt-8 text-[10px] md:text-sm text-white/40 font-black uppercase tracking-[0.4em]">ACESSO IMEDIATO • 100% OPERACIONAL • SEM CARTÃO AGORA</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
