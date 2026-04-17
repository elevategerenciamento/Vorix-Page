import { motion } from 'framer-motion';
import { Minus, TrendingUp, Newspaper, Lightbulb } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Onde o controle encontra a <span className="text-vorix-orange">conveniência.</span></h2>
        <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto">Desenhado para quem decide rápido. Tenha o controle total da sua operação na palma da mão, com uma interface que economiza seu tempo e sua energia cognitiva.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Mobile Screen 1: Finance Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-vorix-black rounded-[3rem] p-6 border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Distribuição de Despesas</h3>
            {/* Donut Chart Mockup */}
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[15px] border-vorix-orange border-t-blue-500 border-l-emerald-500 border-b-purple-500 opacity-90" />
              <div className="text-center">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none">TOTAL</p>
                <p className="text-2xl font-bold">R$ 932,00</p>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'ALIMENTAÇÃO', color: 'bg-vorix-orange' },
                 { label: 'TRANSPORTE', color: 'bg-emerald-500' },
                 { label: 'LAZER', color: 'bg-blue-500' },
                 { label: 'SAÚDE', color: 'bg-purple-500' }
               ].map(item => (
                 <div key={item.label} className="flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full ${item.color}`} />
                   <span className="text-[10px] font-bold text-white/40 tracking-wider">{item.label}</span>
                 </div>
               ))}
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Transações Recentes</h4>
              <div className="space-y-4">
                {[
                  { title: 'Aluguel', cat: 'MORADIA', val: '-R$ 251,00', date: '05/04', pos: false },
                  { title: 'Supermercado', cat: 'ALIMENTAÇÃO', val: '-R$ 300,00', date: '05/04', pos: false },
                  { title: 'Venda Camisa', cat: 'OUTROS', val: '+R$ 83,00', date: '05/04', pos: true },
                ].map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.pos ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                        {t.pos ? <TrendingUp size={18} /> : <Minus size={18} />}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{t.title}</p>
                        <p className="text-[10px] text-white/30 font-bold">{t.cat} • {t.date}</p>
                      </div>
                    </div>
                    <p className={`font-bold text-sm ${t.pos ? 'text-emerald-500' : 'text-red-500'}`}>{t.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Screen 2: News & Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-vorix-black rounded-[3rem] p-6 border border-white/10 shadow-2xl"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                <Newspaper size={20} className="text-white/60" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Notícias de Hoje</h3>
                <p className="text-[10px] text-white/30">Atualiza diariamente com notícias reais</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">BOLSA</span>
                <h4 className="font-bold mt-4 leading-snug">Bolsa bate recorde e encosta nos 200 mil pontos...</h4>
                <p className="text-[10px] text-white/30 mt-2">Fonte: CNN Brasil</p>
              </div>
              <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">CÂMBIO</span>
                <h4 className="font-bold mt-4 leading-snug">Dólar se mantém abaixo de R$ 5 com petróleo estável</h4>
                <p className="text-[10px] text-white/30 mt-2">Fonte: GZH</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 mb-6">
                 <Lightbulb size={24} className="text-orange-500" />
                 <h3 className="text-xl font-bold">Oportunidades IA</h3>
              </div>
              
              <div className="bg-vorix-orange/10 p-5 rounded-3xl border border-vorix-orange/20">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-vorix-orange px-3 py-1 rounded-full">RENDA FIXA</span>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase">BAIXO RISCO</span>
                </div>
                <h4 className="font-bold">Tesouro IPCA+ 2035</h4>
                <p className="text-xs text-white/50 mt-2 font-medium">Proteção contra inflação com rentabilidade real atrativa.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://vorix-project.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="premium-button premium-button-primary text-xl px-12 py-5 shadow-[0_20px_40px_rgba(255,77,0,0.3)] inline-flex items-center justify-center"
        >
           Quero ter esse controle agora
        </a>
      </div>
    </div>
  );
};

export default DashboardPreview;
