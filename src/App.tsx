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
  FileText 
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
        
        {/* Why Vorix / Identity Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-vorix-black to-vorix-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Não é apenas um dashboard. <br/>
              <span className="text-white/30">É a inteligência por trás do seu lucro.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-white/50 leading-relaxed"
            >
              Criamos o Vorix para quem cansou de ferramentas amadoras que apenas listam dados. 
              Nossa missão é transformar números frios em decisões estratégicas automáticas. 
              Aqui, cada pixel foi desenhado para remover o ruído e focar no que realmente expande sua operação.
            </motion.p>

            {/* Mini-Feature Showcase */}
            <div className="mt-16 max-w-3xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4 px-4">
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
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] md:text-xs font-bold text-white/40 hover:text-white transition-all cursor-default"
                >
                  <span className="text-vorix-orange">{item.icon}</span>
                  <span className="uppercase tracking-widest">{item.name}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        <ProblemSection />
        
        <div className="flex justify-center py-6 md:py-10 px-6">
          <a 
            href="https://vorix-project.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-base md:text-lg px-8 py-4"
          >
             Quero transformar minha gestão agora
             <ArrowRight size={18} />
          </a>
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
                Ecossistema de Soluções
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mt-4"
              >
                Engenharia de <span className="text-white/60">Alta Performance</span>
              </motion.h2>
            </div>
            
            <Features />
          </div>

          <div className="flex justify-center mt-12 md:mt-20">
            <a 
              href="https://vorix-project.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-4 text-lg md:text-2xl px-6 py-4 md:px-16 md:py-8 shadow-[0_30px_60px_rgba(255,77,0,0.3)]"
            >
               Quero clareza na minha gestão
               <ArrowRight size={24} />
            </a>
          </div>
        </section>

        <section id="ai" className="py-24 px-6 md:py-32">
          <AIShowcase />
          
          <div className="flex justify-center mt-24">
            <a 
              href="https://vorix-project.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-button premium-button-secondary flex items-center gap-3 text-lg md:text-xl px-10 py-5"
            >
               Falar com a IA Vorix agora
               <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section id="gamification" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vorix-orange/10 blur-[120px] rounded-full pointer-events-none" />
          <Gamification />
        </section>

        <section id="market" className="py-24 px-6">
          <MarketRadar />
        </section>

        <section className="py-24 md:py-48 px-4 sm:px-6">
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
              <p className="text-white/40 text-lg md:text-3xl mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
                Não perca mais tempo com ferramentas que não entregam resultados. 
                O Vorix é a evolução que sua operação precisa.
              </p>
              <a 
                href="https://vorix-project.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-lg md:text-2xl px-6 py-5 md:px-12 md:py-6 mx-auto shadow-[0_0_50px_rgba(255,77,0,0.3)]"
              >
                Entrar no Ecossistema Vorix
                <ArrowRight size={24} className="md:w-[28px] md:h-[28px]" />
              </a>
             <p className="mt-8 text-[10px] md:text-sm text-white/20 font-bold uppercase tracking-[0.3em]">Acesso imediato • Interface 100% Mobile-First</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
