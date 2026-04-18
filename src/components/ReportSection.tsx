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
                Gere relatórios técnicos e personalizados com total liberdade. 
                Escolha o período, exporte em PDF para o WhatsApp e tenha o raio-x absoluto da sua lucratividade.
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
              <div className="bg-white rounded-lg md:rounded-xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-[550px] mx-auto group-hover:translate-y-[-10px] transition-transform duration-700 font-sans">
                
                {/* Header (Black Bar) */}
                <div className="bg-[#050505] text-white p-5 md:p-8 flex justify-between items-start border-b border-white/10">
                  <div>
                    <div className="text-vorix-orange font-black text-2xl md:text-3xl tracking-tighter mb-1">VORIX</div>
                    <div className="text-[7px] md:text-[9px] text-white/50 uppercase tracking-[0.3em] font-medium transition-all group-hover:tracking-[0.4em] duration-1000">Centro de Comando Financeiro</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] md:text-[11px] font-black uppercase tracking-widest mb-1.5">Relatório de Movimentações</div>
                    <div className="text-[7px] md:text-[9px] text-white/40 font-medium">Gerado em: 18/04/2026, 12:32:25</div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-10 bg-white text-black min-h-[550px]">
                  {/* User & Period Info */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#050505] mb-1">USUARIO OLIVEIRA</h3>
                    <p className="text-[10px] md:text-xs text-black/80 font-semibold mb-3">Período de Análise: 18/03/2026 até 18/04/2026</p>
                    <div className="h-[1.5px] w-full bg-black/80" />
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="border-[1.5px] border-black p-3.5 rounded-sm">
                      <p className="text-[7px] md:text-[8px] font-black uppercase text-black/60 mb-2 leading-none">Saldo Total Atual</p>
                      <p className="text-[10px] md:text-[13px] font-black text-[#050505]">R$ 6.450,00</p>
                    </div>
                    <div className="border-[1.5px] border-black p-3.5 rounded-sm">
                      <p className="text-[7px] md:text-[8px] font-black uppercase text-black/60 mb-2 leading-none">Entradas no Período</p>
                      <p className="text-[10px] md:text-[13px] font-black text-vorix-orange">R$ 83,00</p>
                    </div>
                    <div className="border-[1.5px] border-black p-3.5 rounded-sm">
                      <p className="text-[7px] md:text-[8px] font-black uppercase text-black/60 mb-2 leading-none">Saídas no Período</p>
                      <p className="text-[10px] md:text-[13px] font-black text-[#050505]">R$ 932,00</p>
                    </div>
                  </div>

                  {/* Net Result (Banner) */}
                  <div className="bg-[#050505] p-4.5 rounded-sm mb-8 flex justify-between items-center text-white px-6">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] text-white/90">Resultado Líquido do Período:</span>
                    <span className="text-xs md:text-base font-black text-vorix-orange">-R$ 849,00</span>
                  </div>

                  {/* Table */}
                  <div className="overflow-hidden border border-black/5 rounded-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#050505] text-white">
                          <th className="p-2 text-[7px] md:text-[9px] font-black uppercase tracking-wider">Data</th>
                          <th className="p-2 text-[7px] md:text-[9px] font-black uppercase tracking-wider">Descrição</th>
                          <th className="p-2 text-[7px] md:text-[9px] font-black uppercase tracking-wider">Conta</th>
                          <th className="p-2 text-[7px] md:text-[9px] font-black uppercase tracking-wider">Categoria</th>
                          <th className="p-2 text-[7px] md:text-[9px] font-black uppercase tracking-wider">Tipo</th>
                          <th className="p-2 text-[7px] md:text-[9px] font-black uppercase tracking-wider text-right">Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { data: "05/04/2026", desc: "Aluguel", conta: "Nubank", cat: "Moradia", tipo: "SAÍDA", valor: "- R$ 251,00", isPositive: false },
                          { data: "05/04/2026", desc: "Supermercado", conta: "Nubank", cat: "Alimentação", tipo: "SAÍDA", valor: "- R$ 300,00", isPositive: false },
                          { data: "05/04/2026", desc: "Venda Camisa", conta: "Nubank", cat: "Outros", tipo: "ENTRADA", valor: "+ R$ 83,00", isPositive: true, bg: "bg-[#FAFAFA]" },
                          { data: "11/04/2026", desc: "Compras supermercado", conta: "Nubank", cat: "Alimentação", tipo: "SAÍDA", valor: "- R$ 381,00", isPositive: false },
                        ].map((row, i) => (
                          <tr key={i} className={`border-b border-gray-100 ${row.bg || ''}`}>
                            <td className="p-2 text-[7px] md:text-[9px] font-medium text-black/60">{row.data}</td>
                            <td className="p-2 text-[7px] md:text-[9px] font-bold text-black/80">{row.desc}</td>
                            <td className="p-2 text-[7px] md:text-[9px] font-medium text-black/60">{row.conta}</td>
                            <td className="p-2 text-[7px] md:text-[9px] font-medium text-black/60">{row.cat}</td>
                            <td className={`p-2 text-[7px] md:text-[9px] font-bold ${row.isPositive ? 'text-vorix-orange' : 'text-black'}`}>{row.tipo}</td>
                            <td className={`p-2 text-[7px] md:text-[9px] font-black text-right ${row.isPositive ? 'text-vorix-orange' : 'text-black'}`}>{row.valor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Placeholder for more content to simulate height */}
                  <div className="mt-6 flex flex-col gap-2 opacity-10">
                    <div className="h-1.5 w-full bg-black rounded-full" />
                    <div className="h-1.5 w-[90%] bg-black rounded-full" />
                  </div>
                </div>

                {/* Report Footer */}
                <div className="bg-white p-4 border-t border-gray-100 flex justify-between items-center px-8">
                  <span className="text-[7px] text-black/40 font-bold uppercase tracking-widest">Página 1 de 1</span>
                  <span className="text-[7px] text-black/40 font-bold uppercase tracking-widest">Vorix Financial Command Center</span>
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
