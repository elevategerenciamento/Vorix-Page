import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      desc: "Ideal para quem está começando o controle.",
      features: ["Até 2 contas bancárias", "Dashboards básicos", "I.A. Vorix limitada", "Sem exportação PDF"],
      cta: "Começar Grátis",
      highlight: false
    },
    {
      name: "Pro",
      price: "R$ 49",
      period: "/mês",
      desc: "Para usuários que buscam profissionalismo.",
      features: ["Contas ilimitadas", "I.A. Vorix Completa", "Exportação PDF Premium", "Radar de Mercado em tempo real", "Suporte prioritário"],
      cta: "Assinar Agora",
      highlight: false
    },
    {
      name: "Premium",
      price: "R$ 89",
      period: "/mês",
      desc: "O estado da arte em gestão acelerada.",
      features: ["Tudo do Pro", "Consultoria I.A. Customizada", "Acesso antecipado a novas tools", "Mentoria mensal coletiva", "Badge Premium no Perfil"],
      cta: "Experimentar 7 dias grátis",
      highlight: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Planos que <span className="text-vorix-orange text-glow">Evoluem</span> com Você</h2>
        <p className="text-white/50 text-xl">Escolha o nível de potência que seu negócio merece.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-8 rounded-[2.5rem] border flex flex-col ${
              plan.highlight 
                ? 'bg-vorix-orange/10 border-vorix-orange scale-105 shadow-[0_0_50px_rgba(255,77,0,0.15)] z-10' 
                : 'bg-vorix-card/40 border-white/5'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vorix-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={12} />
                MAIS POPULAR
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-white/40 font-medium">{plan.period}</span>}
              </div>
              <p className="text-white/50 text-sm">{plan.desc}</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map(feature => (
                <div key={feature} className="flex gap-3 text-sm">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-vorix-orange text-white' : 'bg-white/10 text-white/40'}`}>
                    <Check size={12} />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`premium-button w-full text-sm ${
              plan.highlight ? 'premium-button-primary' : 'premium-button-secondary'
            }`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
