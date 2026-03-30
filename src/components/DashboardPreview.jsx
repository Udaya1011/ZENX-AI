import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Phone, Users, Clock, ArrowUpRight } from 'lucide-react';

const DashboardPreview = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.3, 0.7], [100, -50]);
  const rotateX = useTransform(scrollYProgress, [0.3, 0.7], [10, 0]);

  const data = useMemo(() => [
    { name: 'Mon', calls: 4000, value: 2400 },
    { name: 'Tue', calls: 3000, value: 1398 },
    { name: 'Wed', calls: 2000, value: 9800 },
    { name: 'Thu', calls: 2780, value: 3908 },
    { name: 'Fri', calls: 1890, value: 4800 },
    { name: 'Sat', calls: 2390, value: 3800 },
    { name: 'Sun', calls: 3490, value: 4300 },
  ], []);

  const stats = [
    { label: "Today's Calls", value: '1,284', change: '+12%', icon: Phone, color: 'text-teal-400' },
    { label: 'Active Agents', value: '24', change: '+3', icon: Users, color: 'text-purple-400' },
    { label: 'Mean Duration', value: '3m 42s', icon: Clock, color: 'text-emerald-400' },
  ];

  return (
    <section id="dashboard" className="py-12 md:py-32 relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-12 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 text-xs font-black uppercase tracking-[3px] mb-4"
          >
            Insights & Analytics
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-white tracking-tight"
          >
            Monitor Performance <br className="hidden md:block" /> In <span className="gradient-text">Real Time</span>
          </motion.h2>
        </div>

        <motion.div 
          style={{ y, rotateX, perspective: 1200 }}
          className="glass border border-white/5 shadow-2xl rounded-[32px] md:rounded-[48px] p-4 md:p-12 relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col gap-2">
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                    <stat.icon size={22} />
                  </div>
                  {stat.change && (
                    <span className="text-[10px] font-black px-2 py-1 rounded-full bg-teal-500/10 text-teal-400">
                      {stat.change}
                    </span>
                  )}
                </div>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                <span className="text-2xl md:text-3xl font-black text-white">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="h-[250px] md:h-[400px] w-full bg-white/5 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/5 relative overflow-hidden">
             <div className="flex items-center gap-3 mb-8">
               <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,1)] animate-pulse" />
               <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Call Volume Trend</span>
             </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCallsP" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '12px' }}
                  itemStyle={{ color: '#2dd4bf' }}
                />
                <Area type="monotone" dataKey="calls" stroke="#2dd4bf" strokeWidth={4} fillOpacity={1} fill="url(#colorCallsP)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Floaters for Depth */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass p-5 md:p-8 rounded-3xl w-40 md:w-64 shadow-2xl flex flex-col gap-4 hidden sm:flex"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Global Conversion</span>
              <ArrowUpRight size={16} className="text-teal-400" />
            </div>
            <div className="text-2xl font-black text-white">48.2%</div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '48%' }}
                className="h-full bg-teal-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
