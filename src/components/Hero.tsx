import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import RealDashboardPreview from './RealDashboardPreview';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vorix-orange/10 blur-[120px] rounded-full -mr-64 -mt-32" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -ml-32" />

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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20 px-4"
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
          <a 
            href="https://vorix-project.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-button premium-button-secondary w-full sm:w-auto text-lg sm:text-2xl px-8 py-5 sm:px-12 sm:py-7"
          >
            Como funciona?
          </a>
        </motion.div>


        {/* Real Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-20 relative group max-w-6xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-vorix-orange/30 to-blue-500/20 rounded-[1.5rem] md:rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass-card p-1 md:p-2 overflow-hidden bg-white/5 border-white/10 scale-[0.85] sm:scale-100 origin-top">
             <RealDashboardPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
