import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Rocket, GitBranch, BarChart3, Database, ShieldCheck } from 'lucide-react';

const ForwardRefCard = React.forwardRef(({ feature, index, scrollProgress }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      style={{ perspective: "1000px" }}
      className="glass-card group p-8 rounded-3xl cursor-pointer relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary-light group-hover:text-black transition-all duration-300">
        <feature.icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">{feature.title}</h3>
      <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
        {feature.description}
      </p>
      
      <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-light opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
        Learn More <Rocket size={14} />
      </div>
    </motion.div>
  );
});

const Features = () => {
  const features = [
    {
      title: "Real-time Voice",
      description: "Milliseconds of latency for natural, human-like voice conversations that never miss a beat.",
      icon: MessageSquare
    },
    {
      title: "API Integration",
      description: "Seamlessly connect with your existing tech stack, CRM, and databases.",
      icon: Database
    },
    {
      title: "Custom Workflows",
      description: "Build complex conversational logic with our drag-and-drop workflow builder.",
      icon: GitBranch
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into call performance, agent behavior, and customer sentiment.",
      icon: BarChart3
    },
    {
      title: "Enterprise Grade",
      description: "Secure, compliant, and scalable for mission-critical business operations.",
      icon: ShieldCheck
    },
    {
      title: "Rapid Deployment",
      description: "Go from concept to production in hours, not weeks, with our intuitive platform.",
      icon: Rocket
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light text-sm font-bold uppercase tracking-[4px] mb-4"
          >
            Powerful Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Built for <span className="gradient-text">Performance</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ForwardRefCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
