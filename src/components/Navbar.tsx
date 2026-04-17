import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 bg-vorix-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-vorix-orange rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,77,0,0.4)]">
            <TrendingUp size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tighter hidden sm:block">VORIX</span>
        </div>

        <div>
          <a 
            href="https://vorix-project.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-button premium-button-primary flex items-center gap-3 text-sm md:text-base !py-2.5 !px-5 md:!px-8"
          >
            Acessar App Agora
            <ArrowRight size={18} className="hidden sm:block" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
