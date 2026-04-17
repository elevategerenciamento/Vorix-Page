import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

const Footer = () => {
  const instagramLink = "https://www.instagram.com/br.financeiro/";
  const appLink = "https://vorix-project.vercel.app/";

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden bg-vorix-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-vorix-orange/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-vorix-orange rounded-xl flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(255,77,0,0.3)]">V</div>
            <span className="font-bold tracking-tighter text-2xl">VORIX</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 max-w-2xl leading-tight">
            Gestão inteligente para quem <span className="text-vorix-orange text-white/40">não tem tempo a perder.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/30">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-vorix-orange transition-all">Empresa</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-vorix-orange transition-all">Sobre Nós</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-vorix-orange transition-all">Organização</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-12 border-t border-white/5 w-full justify-between">
            <p className="text-white/10 text-[10px] uppercase tracking-widest font-bold order-2 sm:order-1">
              © 2026 Vorix Intelligence. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4 order-1 sm:order-2">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest mr-2">Siga-nos</span>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-vorix-orange hover:border-vorix-orange/50 transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
