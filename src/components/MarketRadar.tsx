import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Bitcoin, TrendingUp, RefreshCcw } from 'lucide-react';

const MarketRadar = () => {
  const markets = [
    {
      name: "DÓLAR COMERCIAL",
      ticker: "Dólar Comercial",
      value: "R$ 4.99",
      change: "-0.04%",
      isPositive: false,
      icon: <DollarSign size={24} />,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      name: "BITCOIN",
      ticker: "Bitcoin",
      value: "R$ 374.888",
      change: "+0.52%",
      isPositive: true,
      icon: <Bitcoin size={24} />,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      name: "PETR4",
      ticker: "Petrobras PN",
      value: "R$ 48.58",
      change: "+3.60%",
      isPositive: true,
      icon: <TrendingUp size={24} />,
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight">Radar <span className="text-vorix-orange">Vorix</span></h2>
          <p className="text-white/50 text-base md:text-xl max-w-xl mx-auto md:mx-0">Mercado em tempo real e oportunidades estratégicas na palma da sua mão.</p>
        </div>
        <button className="premium-button premium-button-secondary flex items-center justify-center gap-2 text-xs md:text-sm font-bold h-fit w-full md:w-auto py-4 md:py-3">
          <RefreshCcw size={16} />
          Atualizar Radar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {markets.map((market, index) => (
          <motion.div
            key={market.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 md:p-8 bg-vorix-card/40 border-white/5 group hover:border-white/10 transition-all"
          >
            <div className="flex justify-between items-start mb-8 md:mb-10">
              <div className={`w-12 md:w-14 h-12 md:h-14 ${market.iconBg} ${market.iconColor} rounded-xl md:rounded-2xl flex items-center justify-center border border-current/10`}>
                {market.icon}
              </div>
              <div className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${market.isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {market.isPositive ? '↗' : '↘'} {market.change}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{market.name}</p>
              <h4 className="text-2xl md:text-3xl font-bold">{market.value}</h4>
              <p className="text-[10px] md:text-xs text-white/20 font-medium">{market.ticker}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Market News Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 md:mt-12 p-6 md:p-8 glass-card bg-vorix-card/20 border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
          <div className="w-12 md:w-16 h-12 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-white/40">
            <RefreshCcw size={24} className="md:w-[32px] md:h-[32px]" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold">Notícias de Hoje</h4>
            <p className="text-xs md:text-sm text-white/30">Atualiza diariamente com notícias reais do ecossistema financeiro.</p>
          </div>
        </div>
        <button className="premium-button premium-button-primary w-full md:w-auto px-8 py-4">Acessar News</button>
      </motion.div>
    </div>
  );
};

export default MarketRadar;
