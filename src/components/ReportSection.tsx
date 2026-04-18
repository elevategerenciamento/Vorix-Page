import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Printer, 
  Calendar, 
  ArrowRight,
  FileDown,
  MessageCircle
} from 'lucide-react';

const ReportSection = () => {
  return (
    <section id="reports" className="py-24 md:py-48 px-6 relative overflow-hidden bg-vorix-black">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vorix-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Content side */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vorix-orange/10 border border-vorix-orange/20 text-vorix-orange text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8">
                <FileText size={12} />
                Inteligência Documentada
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                Sua Gestão na <br />
                <span className="text-white/40">Palma da Mão.</span>
              </h2>
              
              <p className="text-white/60 text-lg md:text-2xl mb-12 leading-relaxed max-w-xl">
                Gere relatórios profissionais e personalizados com total liberdade. 
                Escolha o período que desejar e tenha o raio-x completo do seu negócio em segundos.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { 
                    icon: <Calendar className="text-vorix-orange" />, 
                    title: "Datas Personalizadas", 
                    desc: "Filtre por qualquer intervalo de tempo, de um único dia a anos de histórico." 
                  },
                  { 
                    icon: <FileDown className="text-blue-400" />, 
                    title: "Exportação em PDF", 
                    desc: "Documentos prontos para impressão com layout limpo e profissional." 
                  },
                  { 
                    icon: <MessageCircle className="text-green-500" />, 
                    title: "Direto para o WhatsApp", 
                    desc: "Compartilhe o desempenho da sua empresa com sócios ou gerentes instantaneamente." 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex gap-4 md:gap-6 group"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold mb-1 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-white/40 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="https://vorix-project.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="premium-button premium-button-primary px-8 py-5 text-lg md:text-xl flex items-center gap-3 w-full sm:w-auto"
                >
                  EXPERIMENTAR RELATÓRIOS
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Side (Mockup) */}
          <div className="order-1 lg:order-2 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20, rotateX: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: -10, rotateX: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 perspective-1000"
            >
              {/* Report Mockup */}
              <div className="bg-white rounded-lg md:rounded-xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-[500px] mx-auto group-hover:translate-y-[-10px] transition-transform duration-700">
                
                {/* Header */}
                <div className="bg-[#050505] text-white p-4 md:p-6 flex justify-between items-center border-b border-white/10">
                  <div>
                    <div className="text-vorix-orange font-black text-xl md:text-2xl tracking-tighter">VORIX</div>
                    <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest">Centro de Comando Financeiro</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-tight">Relatório de Movimentações</div>
                    <div className="text-[8px] md:text-[10px] text-white/40">Gerado em: 18/04/2026, 12:23:45</div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-10 bg-white text-black min-h-[500px]">
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#050505]">Oliveira</h3>
                    <p className="text-xs text-gray-400 font-medium">Período de Análise: 01/12/2025 até 11/02/2026</p>
                    <div className="h-[2px] w-full bg-gray-100 mt-2" />
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-10">
                    <div className="border border-gray-200 p-3 rounded-md">
                      <p className="text-[8px] font-black uppercase text-gray-400 mb-1">Saldo Atual</p>
                      <p className="text-xs md:text-sm font-black text-[#050505]">R$ 6.450,00</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-md">
                      <p className="text-[8px] font-black uppercase text-gray-400 mb-1">Entradas</p>
                      <p className="text-xs md:text-sm font-black text-vorix-orange">R$ 12.840,00</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-md">
                      <p className="text-[8px] font-black uppercase text-gray-400 mb-1">Saídas</p>
                      <p className="text-xs md:text-sm font-black text-[#050505]">R$ 6.390,00</p>
                    </div>
                  </div>

                  {/* Net Result */}
                  <div className="bg-[#050505] p-4 rounded-md mb-10 flex justify-between items-center text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest">Resultado Líquido:</span>
                    <span className="text-sm md:text-lg font-black text-vorix-orange">R$ 6.450,00</span>
                  </div>

                  {/* Mock content lines */}
                  <div className="space-y-4">
                    <div className="h-4 w-1/2 bg-gray-50 rounded" />
                    <div className="h-4 w-full bg-gray-50 rounded" />
                    <div className="h-4 w-full bg-gray-50 rounded" />
                    <div className="h-4 w-3/4 bg-gray-50 rounded" />
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-white p-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Página 1 de 1</span>
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Vorix Financial Command Center</span>
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Relatório Confidencial</span>
                </div>
              </div>

              {/* Float Icons Around */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-8 w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-2xl shadow-2xl flex items-center justify-center text-white z-20"
              >
                <MessageCircle size={32} className="md:w-10 md:h-10" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-8 w-16 h-16 md:w-20 md:h-20 bg-vorix-orange rounded-2xl shadow-2xl flex items-center justify-center text-white z-20"
              >
                <FileDown size={32} className="md:w-10 md:h-10" />
              </motion.div>

              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-12 w-14 h-14 bg-white rounded-xl shadow-2xl flex items-center justify-center text-black z-0 opacity-50 backdrop-blur-sm"
              >
                <Printer size={24} />
              </motion.div>
            </motion.div>

            {/* Reflection / Glow below */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-vorix-orange/20 blur-[100px] rounded-full opacity-50 scale-110 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReportSection;
