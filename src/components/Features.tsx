import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wallet, Brain, Trophy, FileText, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Clareza Absoluta",
      desc: "Pare de se perder em planilhas confusas. O Vorix entrega o que importa: a visão real do seu lucro em segundos.",
      icon: <LayoutDashboard size={24} className="text-vorix-orange" />,
    },
    {
      title: "Recuperação de Margem",
      desc: "Identifique gargalos financeiros e desperdícios ocultos que estão drenando o caixa da sua operação.",
      icon: <Wallet size={24} className="text-blue-400" />,
    },
    {
      title: "Decisões sem Dúvida",
      desc: "Nossa I.A. analisa seus dados e te entrega o próximo passo. Sem achismos, apenas estratégia pura.",
      icon: <Brain size={24} className="text-purple-400" />,
    },
    {
      title: "Disciplina Viral",
      desc: "A gamificação não é um jogo, é um método. Mantemos você no caminho certo até que o sucesso seja automático.",
      icon: <Trophy size={24} className="text-yellow-400" />,
    },
    {
      title: "Dados que Vendem",
      desc: "Gere relatórios de performance que convencem investidores e mostram a força do seu negócio.",
      icon: <FileText size={24} className="text-emerald-400" />,
    },
    {
      title: "Oportunidades Reais",
      desc: "Um radar conectado ao mundo para que você nunca perca uma variação de mercado que impacte seu bolso.",
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
