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
    <div className="w-full max-w-[380px] mx-auto bg-[#050505] rounded-[3rem] border-[10px] border-[#1A1A1A] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative aspect-[9/18.5]">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-[#1A1A1A] rounded-b-2xl z-50 flex items-center justify-center p-1">
        <div className="w-12 h-1.5 bg-white/5 rounded-full" />
      </div>
      
      {/* Top Status Bar Mockup */}
      <div className="pt-10 px-6 flex justify-between items-center text-[10px] font-bold tracking-tight">
        <div className="flex gap-2">
          <span className="bg-white/5 px-2.5 py-1 rounded text-white/40 border border-white/5 uppercase">NÍVEL 17</span>
          <span className="bg-emerald-500/10 px-2.5 py-1 rounded text-emerald-500 border border-emerald-500/10 uppercase">★ PREMIUM</span>
        </div>
        <div className="flex items-center gap-1.5 text-vorix-orange">
          <TrendingUp size={10} />
          <span>16080 PONTOS</span>
        </div>
      </div>

      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
            <Menu size={24} className="text-white/60" />
          </div>
          <div>
            <p className="text-[11px] text-white/30 font-bold uppercase tracking-widest leading-none mb-1.5">OLÁ,</p>
            <h3 className="text-base font-bold">Oliveira</h3>
          </div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vorix-orange to-orange-600 border border-white/10 p-1 shadow-[0_0_20px_rgba(255,77,0,0.2)]">
           <div className="w-full h-full rounded-xl bg-vorix-black flex items-center justify-center overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Oliveira" alt="Avatar" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 space-y-5 h-[calc(100%-160px)] overflow-y-auto scrollbar-hide pb-28">
        <div>
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight">Dashboard</h1>
          <p className="text-xs text-white/30 mt-1.5 font-medium">Bem-vindo de volta ao seu centro de comando financeiro.</p>
        </div>

        <button className="w-full py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center gap-2.5 text-xs font-bold text-white/60 hover:bg-white/10 transition-colors uppercase tracking-[0.15em]">
          <FileText size={16} />
          Exportar Relatório (PDF)
        </button>

        {/* Info Cards */}
        <div className="space-y-4">
          {/* Saldo Total */}
          <div className="p-5 bg-[#0A0A0A] rounded-[2rem] border border-white/5 flex items-center justify-between group hover:border-vorix-orange/30 transition-all cursor-pointer">
            <div>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Saldo Total</p>
              <h4 className="text-xl font-bold">R$ 6.450,00</h4>
            </div>
            <div className="w-12 h-12 bg-vorix-orange/10 rounded-2xl flex items-center justify-center text-vorix-orange border border-vorix-orange/10">
              <Wallet size={20} />
            </div>
          </div>

          {/* Entradas */}
          <div className="p-5 bg-[#0A0A0A] rounded-[2rem] border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Entradas (Mês)</p>
              <div className="flex items-center gap-2.5">
                <h4 className="text-xl font-bold text-emerald-500 font-mono">R$ 83,00</h4>
                <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-md font-black">↑ 12%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/10">
              <ArrowUp size={20} />
            </div>
          </div>

          {/* Saídas */}
          <div className="p-5 bg-[#0A0A0A] rounded-[2rem] border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Saídas (Mês)</p>
              <div className="flex items-center gap-2.5">
                <h4 className="text-xl font-bold text-red-500 font-mono">R$ 932,00</h4>
                <span className="text-[10px] px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded-md font-black">↓ 5%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 border border-red-500/10">
              <ArrowDown size={20} />
            </div>
          </div>

          {/* Chart Section - More Realistic Wave */}
          <div className="p-6 bg-[#0A0A0A] rounded-[2rem] border border-white/5">
            <h5 className="text-[11px] font-bold mb-6 uppercase tracking-[0.2em] text-white/40">Fluxo de Caixa</h5>
            <div className="h-40 relative flex items-end">
              <div className="absolute inset-0 border-b border-white/5 flex flex-col justify-between pt-2">
                 {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-white/[0.03]" />)}
              </div>
              <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 100 40">
                <defs>
                   <linearGradient id="grad-main" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.3" />
                     <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
                   </linearGradient>
                </defs>
                {/* Main Curve */}
                <path 
                  d="M0,35 Q10,38 20,35 T40,10 T60,35 T80,28 T100,30" 
                  fill="none" 
                  stroke="#ff4d00" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                <path d="M0,35 Q10,38 20,35 T40,10 T60,35 T80,28 T100,30 V45 H0 Z" fill="url(#grad-main)" />
                
                {/* Secondary Curve */}
                <path 
                  d="M0,25 Q15,30 30,22 T60,25 T90,32 T100,28" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  opacity="0.4" 
                />
              </svg>
            </div>
            <div className="flex justify-between mt-5 text-[8px] font-black text-white/20 uppercase tracking-widest px-1">
               <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
            </div>
          </div>

           {/* Distribution - The part starting below */}
           <div className="p-6 bg-[#0A0A0A] rounded-[2rem] border border-white/5">
            <h5 className="text-[11px] font-bold mb-6 uppercase tracking-[0.2em] text-white/40">Distribuição de Despesas</h5>
            <div className="flex items-center gap-6">
               <div className="relative w-20 h-20">
                 <div className="absolute inset-0 rounded-full border-[6px] border-vorix-orange/80 border-t-emerald-500 border-l-purple-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8px] font-bold">R$ 932</span>
                 </div>
               </div>
               <div className="flex-1 space-y-2">
                 <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-vorix-orange" /> <span>Lazer</span></div>
                   <span className="text-white/40">45%</span>
                 </div>
                 <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> <span>Comida</span></div>
                   <span className="text-white/40">30%</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-12 right-6 w-16 h-16 bg-vorix-orange rounded-[1.5rem] flex items-center justify-center shadow-[0_20px_40px_rgba(255,77,0,0.5)] border border-white/20 active:scale-95 transition-transform z-10">
        <Plus size={36} className="text-white" />
      </button>

      {/* Home Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-white/10 rounded-full" />
    </div>
  );
};

export default RealDashboardPreview;
