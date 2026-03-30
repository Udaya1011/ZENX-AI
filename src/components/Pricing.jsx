import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      description: "Perfect for exploring AI voice capabilities for small businesses.",
      features: [
        "Up to 500 call minutes",
        "3 Concurrent agents",
        "Standard voice models",
        "Web dashboard access",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "99",
      popular: true,
      description: "Ideal for growing businesses needing scale and customization.",
      features: [
        "Up to 5,000 call minutes",
        "15 Concurrent agents",
        "Premium voice models",
        "API & Webhooks",
        "Slack integration",
        "Priority 24/7 support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale operations and high-volume needs.",
      features: [
        "Unlimited call minutes",
        "Unlimited concurrent agents",
        "Custom voice cloning",
        "Dedicated account manager",
        "SSO & security compliance",
        "On-prem deployment options"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 whitespace-normal">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light text-sm font-bold uppercase tracking-[4px] mb-4"
          >
            Pricing Plans
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Transparent <span className="gradient-text">Pricing</span> <br />
            For Every Stage
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass-card p-10 rounded-[40px] flex flex-col items-center text-center ${plan.popular ? 'border-primary-light ring-2 ring-primary/20 scale-105 z-10' : 'border-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-purple-500/20">
                  <Sparkles size={16} className="text-white" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Most Popular</span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-100 mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">
                  {typeof plan.price === 'string' && plan.price.startsWith('Custom') ? 'Custom' : `$${plan.price}`}
                </span>
                {plan.price !== 'Custom' && <span className="text-slate-400 font-medium">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-xs">{plan.description}</p>

              <ul className="flex flex-col gap-5 w-full mb-10 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm group">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-black transition-all">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-3xl font-bold transition-all mt-auto ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/20' : 'bg-slate-800 text-white hover:bg-slate-700 border border-white/5'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
