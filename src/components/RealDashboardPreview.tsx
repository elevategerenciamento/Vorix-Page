import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Wallet,
  Menu,
  FileText
} from 'lucide-react';

const RealDashboardPreview = () => {
  return (
    <div className="w-full max-w-[320px] mx-auto bg-[#050505] rounded-[3rem] border-[8px] border-[#1A1A1A] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative aspect-[9/19.5]">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1A1A] rounded-b-2xl z-50" />
      
      {/* Top Status Bar Mockup */}
      <div className="pt-8 px-5 flex justify-between items-center text-[8px] font-bold tracking-tight">
        <div className="flex gap-2">
          <span className="bg-white/5 px-2 py-0.5 rounded text-white/40 border border-white/5 uppercase">NÍVEL 17</span>
          <span className="bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-500 border border-emerald-500/10 uppercase">★ PREMIUM</span>
        </div>
        <div className="flex items-center gap-1 text-vorix-orange">
          <TrendingUp size={8} />
          <span>16080 PONTOS</span>
        </div>
      </div>

      {/* Header */}
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
            <Menu size={20} className="text-white/60" />
          </div>
          <div>
            <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-none mb-1">OLÁ,</p>
            <h3 className="text-sm font-bold">Oliveira</h3>
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-vorix-orange to-orange-600 border border-white/10 p-1">
           <div className="w-full h-full rounded-lg bg-vorix-black flex items-center justify-center overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Oliveira" alt="Avatar" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-5 space-y-4 h-[calc(100%-150px)] overflow-y-auto scrollbar-hide pb-20">
        <div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Dashboard</h1>
          <p className="text-[10px] text-white/30 mt-1">Bem-vindo de volta ao seu centro de comando financeiro.</p>
        </div>

        <button className="w-full py-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center gap-2 text-[10px] font-bold text-white/60 hover:bg-white/10 transition-colors uppercase tracking-widest">
          <FileText size={14} />
          Exportar Relatório (PDF)
        </button>

        {/* Info Cards */}
        <div className="space-y-3">
          {/* Saldo Total */}
          <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5 flex items-center justify-between group hover:border-vorix-orange/30 transition-colors">
            <div>
              <p className="text-[8px] text-white/30 font-bold uppercase tracking-widest mb-1">Saldo Total</p>
              <h4 className="text-lg font-bold">R$ 6.450,00</h4>
            </div>
            <div className="w-10 h-10 bg-vorix-orange/10 rounded-xl flex items-center justify-center text-vorix-orange">
              <Wallet size={18} />
            </div>
          </div>

          {/* Entradas */}
          <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[8px] text-white/30 font-bold uppercase tracking-widest mb-1">Entradas (Mês)</p>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-emerald-500">R$ 83,00</h4>
                <span className="text-[8px] text-emerald-500 font-bold">↑ 12%</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
              <ArrowUp size={18} />
            </div>
          </div>

          {/* Saídas */}
          <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[8px] text-white/30 font-bold uppercase tracking-widest mb-1">Saídas (Mês)</p>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-red-500">R$ 932,00</h4>
                <span className="text-[8px] text-red-500 font-bold">↓ 5%</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
              <ArrowDown size={18} />
            </div>
          </div>

          {/* Chart Section */}
          <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5">
            <h5 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-white/40">Fluxo de Caixa</h5>
            <div className="h-28 relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <defs>
                   <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.4" />
                     <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
                   </linearGradient>
                </defs>
                <path d="M0,35 Q10,38 20,35 T40,20 T60,35 T80,30 T100,32" fill="none" stroke="#ff4d00" strokeWidth="1.5" />
                <path d="M0,35 Q10,38 20,35 T40,20 T60,35 T80,30 T100,32 V40 H0 Z" fill="url(#grad)" />
                <path d="M0,25 Q15,30 30,22 T60,25 T90,30 T100,28" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.6" />
              </svg>
            </div>
            <div className="flex justify-between mt-2 text-[6px] font-bold text-white/20 uppercase">
               <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-10 right-5 w-14 h-14 bg-vorix-orange rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(255,77,0,0.4)] border border-white/20 active:scale-95 transition-transform z-10">
        <Plus size={32} className="text-white" />
      </button>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
    </div>
  );
};

export default RealDashboardPreview;
