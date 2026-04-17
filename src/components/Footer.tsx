import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-24 pb-12 px-5 sm:px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-vorix-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tighter">
              Pronto para elevar seu <span className="text-vorix-orange">padrão de gestão?</span>
            </h2>
            <p className="text-white/40 text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Junte-se a centenas de profissionais que já transformaram seus dados em poder de decisão real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="premium-button premium-button-primary flex items-center justify-center gap-2 py-4 px-8">
                Começar gratuitamente
                <ArrowRight size={18} />
              </button>
              <button className="premium-button premium-button-secondary py-4 px-8">Ver funcionalidades</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            <div>
              <h4 className="font-bold mb-5 md:mb-6 text-[10px] md:text-sm uppercase tracking-widest text-vorix-orange">Plataforma</h4>
              <ul className="space-y-3 md:space-y-4 text-white/40 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">I.A. Vorix</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mercado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-5 md:mb-6 text-[10px] md:text-sm uppercase tracking-widest text-vorix-orange">Empresa</h4>
              <ul className="space-y-3 md:space-y-4 text-white/40 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-5 md:mb-6 text-[10px] md:text-sm uppercase tracking-widest text-vorix-orange">Legal</h4>
              <ul className="space-y-3 md:space-y-4 text-white/40 text-xs md:text-sm grid grid-cols-2 md:grid-cols-1">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li className="col-span-2 md:col-span-1"><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8 bg-vorix-black/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-vorix-orange rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,77,0,0.3)]">V</div>
            <span className="font-bold tracking-tighter text-xl">VORIX</span>
          </div>
          
          <p className="text-white/20 text-[10px] md:text-xs text-center">© 2026 Vorix Intelligence System. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-5">
            {[1, 2, 3, 4].map((i) => (
              <a key={i} href="#" className="text-white/20 hover:text-vorix-orange transition-all hover:scale-110">
                <Plus size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
