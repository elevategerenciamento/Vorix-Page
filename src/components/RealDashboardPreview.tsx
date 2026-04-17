import React from 'react';
import { motion } from 'framer-motion';
import { 
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
  FileText, 
  Settings,
  Plus,
  Wallet,
  ArrowUp,
  ArrowDown,
  ChevronRight
} from 'lucide-react';

const RealDashboardPreview = () => {
  const sidebarItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'Transações', icon: <ArrowRightLeft size={18} /> },
    { name: 'Contas', icon: <CreditCard size={18} /> },
    { name: 'Alertas', icon: <Bell size={18} /> },
    { name: 'Radar', icon: <Radar size={18} /> },
    { name: 'Missões', icon: <Trophy size={18} /> },
    { name: 'Metas', icon: <Target size={18} /> },
    { name: 'Anotações', icon: <StickyNote size={18} /> },
    { name: 'IA Vorix', icon: <Bot size={18} /> },
    { name: 'Assinatura', icon: <Star size={18} /> },
    { name: 'Relatórios', icon: <FileText size={18} /> },
    { name: 'Configurações', icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-full bg-[#050505] lg:rounded-[2rem] rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex h-[500px] md:h-[800px] text-left">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 p-6 hidden lg:flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-10 px-2">
           <div className="w-6 h-6 bg-vorix-orange rounded-md flex items-center justify-center">
             <ArrowUp size={14} className="text-white transform rotate-45" />
           </div>
           <span className="font-bold tracking-tighter">VORIX</span>
        </div>
        
        {sidebarItems.map((item) => (
          <div 
            key={item.name} 
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
              item.active ? 'bg-vorix-orange text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
            {item.active && <ChevronRight size={14} className="ml-auto" />}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-3 px-4 py-1.5 bg-green-500/10 rounded-full border border-green-500/20">
               <span className="text-[10px] font-bold text-green-500 uppercase">CLIENTE PREMIUM</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                 <p className="text-sm font-bold">Paulo Batista</p>
                 <p className="text-[10px] text-white/40">NÍVEL 14</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
               <button className="bg-vorix-orange p-2 rounded-lg"><Plus size={20} /></button>
             </div>
          </div>
        </div>

        {/* Dash Content */}
        <div className="p-4 md:p-8 space-y-6 md:space-y-8 overflow-y-auto scrollbar-hide">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <p className="text-xs md:text-sm text-white/40">Bem-vindo de volta ao seu centro de comando financeiro.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-[#0A0A0A] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 relative group">
              <p className="text-[10px] text-white/40 font-bold uppercase mb-2 md:mb-4">Saldo Total</p>
              <h3 className="text-2xl md:text-3xl font-bold">R$ 6.450,00</h3>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-vorix-orange/10 rounded-xl md:rounded-2xl flex items-center justify-center text-vorix-orange">
                <Wallet size={20} className="md:w-[24px] md:h-[24px]" />
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 relative">
              <p className="text-[10px] text-white/40 font-bold uppercase mb-2 md:mb-4">Entradas (Mês)</p>
              <h3 className="text-2xl md:text-3xl font-bold text-green-500">R$ 83,00</h3>
              <p className="text-[9px] text-green-500/60 font-bold mt-1 md:mt-2">+ 12% vs mês anterior</p>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-green-500">
                <ArrowUp size={20} className="md:w-[24px] md:h-[24px]" />
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 relative">
              <p className="text-[10px] text-white/40 font-bold uppercase mb-2 md:mb-4">Saídas (Mês)</p>
              <h3 className="text-2xl md:text-3xl font-bold text-red-500">R$ 932,00</h3>
              <p className="text-[9px] text-red-500/60 font-bold mt-1 md:mt-2">- 5% vs mês anterior</p>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-red-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-red-500">
                <ArrowDown size={20} className="md:w-[24px] md:h-[24px]" />
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0A0A0A] p-8 rounded-[2rem] border border-white/5">
              <h4 className="font-bold mb-8">Fluxo de Caixa</h4>
              <div className="h-48 flex items-end gap-2 px-2">
                 {[40, 60, 45, 90, 50, 65, 55].map((h, i) => (
                   <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                     <div className="w-full bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 rounded-t-lg" style={{ height: `${h}%` }} />
                     <div className="w-full bg-gradient-to-b from-red-500/20 to-red-500/5 rounded-b-lg" style={{ height: `${h/2}%` }} />
                   </div>
                 ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] text-white/20 font-bold uppercase tracking-widest px-2">
                <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center">
              <h4 className="font-bold mb-8 self-start">Distribuição de Despesas</h4>
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[12px] border-vorix-orange border-t-emerald-500 border-l-purple-500 border-b-blue-600 opacity-90" />
                <div className="text-center">
                  <p className="text-[10px] text-white/30 font-bold uppercase">TOTAL</p>
                  <p className="text-xl font-bold tracking-tight">R$ 932,00</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-8 w-full">
                 {['ALIMENTAÇÃO', 'TRANSPORTE', 'LAZER', 'SAÚDE'].map((col, i) => (
                   <div key={col} className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full ${['bg-vorix-orange', 'bg-emerald-500', 'bg-purple-500', 'bg-blue-600'][i]}`} />
                     <span className="text-[10px] text-white/40 font-bold">{col}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          {/* Tables Row */}
          <div className="bg-[#0A0A0A] p-8 rounded-[2rem] border border-white/5">
             <h4 className="font-bold mb-6">Transações Recentes</h4>
             <div className="overflow-x-auto">
               <table className="w-full text-sm">
                 <thead className="text-white/20 border-b border-white/5">
                   <tr>
                     <th className="pb-4 text-left font-bold uppercase tracking-widest text-[10px]">Descrição</th>
                     <th className="pb-4 text-left font-bold uppercase tracking-widest text-[10px]">Categoria</th>
                     <th className="pb-4 text-left font-bold uppercase tracking-widest text-[10px]">Conta</th>
                     <th className="pb-4 text-right font-bold uppercase tracking-widest text-[10px]">Valor</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {[
                     { desc: 'Aluguel', cat: 'Moradia', bank: 'Nubank', val: '-R$ 251,00', color: 'text-red-500' },
                     { desc: 'Supermercado', cat: 'Alimentação', bank: 'Nubank', val: '-R$ 300,00', color: 'text-red-500' },
                     { desc: 'Venda Camisa', cat: 'Outros', bank: 'Nubank', val: '+R$ 83,00', color: 'text-green-500' },
                   ].map((row, i) => (
                     <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                       <td className="py-4 font-bold">{row.desc}</td>
                       <td className="py-4 text-white/40">{row.cat}</td>
                       <td className="py-4 text-white/40">{row.bank}</td>
                       <td className={`py-4 text-right font-bold ${row.color}`}>{row.val}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealDashboardPreview;
