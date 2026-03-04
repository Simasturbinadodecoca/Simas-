import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Bronze',
    price: 'Grátis',
    description: 'Perfeito para começar sua jornada.',
    features: ['Acesso básico à plataforma', '5 projetos ativos', 'Suporte via comunidade', '1GB de armazenamento'],
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    color: 'border-orange-100',
    buttonText: 'Começar Agora',
    popular: false,
  },
  {
    name: 'Prata',
    price: 'R$ 49',
    description: 'O equilíbrio ideal para profissionais.',
    features: ['Tudo do Bronze', 'Projetos ilimitados', 'Suporte prioritário', '10GB de armazenamento', 'Ferramentas avançadas'],
    icon: <Shield className="w-6 h-6 text-slate-400" />,
    color: 'border-slate-200',
    buttonText: 'Escolher Prata',
    popular: true,
  },
  {
    name: 'Ouro',
    price: 'R$ 99',
    description: 'Poder total para grandes empresas.',
    features: ['Tudo do Prata', 'Acesso antecipado a recursos', 'Gerente de conta dedicado', 'Armazenamento ilimitado', 'API personalizada'],
    icon: <Crown className="w-6 h-6 text-yellow-500" />,
    color: 'border-yellow-200',
    buttonText: 'Escolher Ouro',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Nossos Planos &wedbar;</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4"
          >
            Escolha o nível da sua <br /> produtividade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/50 text-lg"
          >
            Planos flexíveis que crescem com você. Sem taxas escondidas, apenas resultados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white border ${plan.color} rounded-[32px] p-8 flex flex-col transition-all duration-300 ${
                plan.popular ? 'shadow-[0_20px_50px_rgba(0,0,0,0.08)] scale-105 z-20' : 'shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                  {plan.price !== 'Grátis' && <span className="text-black/40 text-sm font-medium">/mês</span>}
                </div>
                <p className="text-black/50 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-black/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-black/80 shadow-lg shadow-black/10'
                    : 'bg-black/5 text-black hover:bg-black/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
