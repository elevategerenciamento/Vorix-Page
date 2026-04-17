import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

const Footer = () => {
  const instagramLink = "https://www.instagram.com/br.financeiro/";
  const appLink = "https://vorix-project.vercel.app/";

  return (
    <footer className="pt-20 md:pt-24 pb-12 px-5 sm:px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-vorix-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tighter max-w-3xl">
            Pronto para elevar seu <span className="text-vorix-orange">padrão de gestão?</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto">
            Junte-se a centenas de profissionais que já transformaram seus dados em poder de decisão real com o Vorix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={appLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-button premium-button-primary flex items-center justify-center gap-2 py-4 px-10 text-lg"
            >
              Começar agora
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-vorix-orange rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,77,0,0.3)]">V</div>
            <span className="font-bold tracking-tighter text-xl">VORIX</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-vorix-orange transition-colors">Sobre nós</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-vorix-orange transition-colors">Empresa</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-vorix-orange transition-colors">Organização</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-vorix-orange hover:border-vorix-orange/50 transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-white/10 text-[10px] md:text-xs text-center mt-12">
          © 2026 Vorix Intelligence System. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
