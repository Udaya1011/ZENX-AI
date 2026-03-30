import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Calendar, PhoneCall, ClipboardList, TrendingUp, Users } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      title: "Support Automation",
      description: "Resolve 80% of routine inquiries instantly. Hand off complex cases smoothly.",
      icon: Headphones,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Appointment Booking",
      description: "Automate scheduling, reminders, and rescheduling for your busy medical clinic.",
      icon: Calendar,
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      title: "Outbound Calls",
      description: "Scale your lead qualification and outreach without hiring more SDRs.",
      icon: PhoneCall,
      color: "bg-emerald-500/20 text-emerald-400"
    },
    {
      title: "Customer Surveys",
      description: "Collect real-time feedback with high completion rates through voice interactions.",
      icon: ClipboardList,
      color: "bg-amber-500/20 text-amber-500"
    },
    {
      title: "Market Development",
      description: "Quickly scale to new territories with multi-language AI capabilities.",
      icon: TrendingUp,
      color: "bg-rose-500/20 text-rose-400"
    },
    {
      title: "User Onboarding",
      description: "Guide new users through your platform with personalized voice assistance.",
      icon: Users,
      color: "bg-indigo-500/20 text-indigo-400"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-[-100px] top-1/2 w-48 h-48 bg-primary/20 blur-[100px] rounded-full opacity-30" />
      <div className="absolute right-[-100px] bottom-1/2 w-48 h-48 bg-secondary/20 blur-[100px] rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-light text-sm font-bold uppercase tracking-[4px] mb-4"
          >
            Real-World Impact
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Universal <span className="gradient-text">Use Cases</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-[40px] border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-[20px] ${useCase.color} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
