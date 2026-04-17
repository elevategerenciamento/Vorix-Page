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
import ProblemSection from './components/ProblemSection';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

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
        <ProblemSection />
        
        <div className="flex justify-center py-6 md:py-10 px-6">
          <button className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-base md:text-lg px-8 py-4">
             Quero transformar minha gestão agora
             <ArrowRight size={18} />
          </button>
        </div>

        <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-vorix-orange font-bold tracking-widest uppercase text-[10px] md:text-sm"
              >
                Ecossistema Vorix
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mt-4"
              >
                Tudo o que você precisa em <span className="text-white/60">um só lugar</span>
              </motion.h2>
            </div>
            
            <Features />
          </div>

          <div className="flex justify-center mt-12 md:mt-20">
            <button className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-4 text-lg md:text-2xl px-6 py-4 md:px-16 md:py-8 shadow-[0_30px_60px_rgba(255,77,0,0.3)]">
               Quero clareza na minha gestão
               <ArrowRight size={24} />
            </button>
          </div>
        </section>

        <section className="py-24 px-6 bg-gradient-to-b from-vorix-black to-vorix-dark/50">
          <DashboardPreview />
        </section>

        <section id="ai" className="py-24 px-6 md:py-32">
          <AIShowcase />
          
          <div className="flex justify-center mt-24">
            <button className="premium-button premium-button-secondary flex items-center gap-3 text-lg md:text-xl px-10 py-5">
               Falar com a IA Vorix agora
               <ArrowRight size={20} />
            </button>
          </div>
        </section>

        <section id="gamification" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vorix-orange/10 blur-[120px] rounded-full pointer-events-none" />
          <Gamification />
        </section>

        <section id="market" className="py-24 px-6">
          <MarketRadar />
        </section>

        <section className="py-32 px-6 text-center border-t border-white/5 bg-vorix-orange/[0.02]">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="max-w-4xl mx-auto"
           >
              <h2 className="text-3xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                Pronto para deixar a <span className="text-white/30">confusão para trás?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 mb-10 md:mb-12">
                Não perca mais tempo com ferramentas que não entregam resultados. 
                O Vorix é a evolução que sua operação precisa.
              </p>
              <button className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-lg md:text-2xl px-6 py-4 md:px-12 md:py-6 mx-auto shadow-[0_0_50px_rgba(255,77,0,0.3)]">
                Entrar no Ecossistema Vorix
                <ArrowRight size={24} className="md:w-[28px] md:h-[28px]" />
              </button>
             <p className="mt-8 text-sm text-white/20 font-bold uppercase tracking-widest">Acesso imediato • Sem cartão de crédito necessário</p>
           </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
