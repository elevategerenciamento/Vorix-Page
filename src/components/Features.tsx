import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wallet, Brain, Trophy, FileText, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Visão de Águia",
      desc: "Pare de olhar para o passado. Veja sua operação em tempo real com métricas que realmente movem o ponteiro do seu lucro.",
      icon: <LayoutDashboard size={24} className="text-vorix-orange" />,
    },
    {
      title: "Estanque o Sangramento",
      desc: "Nós encontramos onde o seu dinheiro está vazando. Identificamos custos invisíveis e recuperamos sua margem de lucro.",
      icon: <Wallet size={24} className="text-blue-400" />,
    },
    {
      title: "Direção Técnica",
      desc: "Nossa I.A. não dá palpites. Ela analisa padrões e sugere ações baseadas em dados concretos, removendo o medo de errar.",
      icon: <Brain size={24} className="text-purple-400" />,
    },
    {
      title: "Hábito de Vencer",
      desc: "A gamificação transforma o trabalho duro em progresso visível. Criamos um ciclo de produtividade impossível de ignorar.",
      icon: <Trophy size={24} className="text-yellow-400" />,
    },
    {
      title: "Autoridade em Dados",
      desc: "Gere relatórios profissionais que falam a língua do dinheiro. Mostre para o mundo o valor real da sua operação.",
      icon: <FileText size={24} className="text-emerald-400" />,
    },
    {
      title: "Radar Estratégico",
      desc: "Nunca seja pego de surpresa. Tenha um sistema que monitora o mercado para você, alertando sobre riscos e oportunidades.",
      icon: <LineChart size={24} className="text-rose-400" />,
    },

  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, borderColor: 'rgba(255, 77, 0, 0.2)' }}
          className="glass-card p-6 md:p-8 group border-transparent bg-vorix-card/30 hover:bg-vorix-card/60 transition-all cursor-default"
        >
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
