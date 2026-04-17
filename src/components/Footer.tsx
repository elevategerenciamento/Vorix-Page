import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-vorix-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Pronto para elevar seu <span className="text-vorix-orange">padrão de gestão?</span></h2>
            <p className="text-white/40 text-lg mb-10 max-w-lg">Junte-se a centenas de profissionais que já transformaram seus dados em poder de decisão real.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="premium-button premium-button-primary flex items-center justify-center gap-2">
                Começar gratuitamente
                <ArrowRight size={18} />
              </button>
              <button className="premium-button premium-button-secondary">Ver funcionalidades</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-vorix-orange">Plataforma</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">I.A. Vorix</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mercado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-vorix-orange">Empresa</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-vorix-orange">Legal</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-vorix-orange rounded-lg flex items-center justify-center font-bold">V</div>
            <span className="font-bold tracking-tighter text-xl">VORIX</span>
          </div>
          
          <p className="text-white/20 text-xs">© 2026 Vorix Intelligence System. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-vorix-orange transition-colors"><Plus size={20} /></a>
            <a href="#" className="text-white/20 hover:text-vorix-orange transition-colors"><Plus size={20} /></a>
            <a href="#" className="text-white/20 hover:text-vorix-orange transition-colors"><Plus size={20} /></a>
            <a href="#" className="text-white/20 hover:text-vorix-orange transition-colors"><Plus size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
