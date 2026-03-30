import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Fast & Snap Spring
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // REVEAL ON SCROLL: "Book Appointments" - Hidden on load, revealed rapidly as soon as user scrolls
  const revealOpacity = useTransform(smoothProgress, [0, 0.05, 0.25], [0, 0, 1]);
  const revealY = useTransform(smoothProgress, [0, 0.05, 0.25], [15, 15, 0]);
  const revealScale = useTransform(smoothProgress, [0, 0.05, 0.25], [0.96, 0.96, 1]);

  // EXIT ANIMATION
  const exitOpacity = useTransform(smoothProgress, [0.45, 0.7], [1, 0]);
  const exitY = useTransform(smoothProgress, [0.45, 0.7], [0, 80]);

  return (
    <section ref={containerRef} className="relative pt-40 md:pt-64 pb-20 md:pb-32 overflow-hidden min-h-[150vh] bg-transparent">
      
      {/* Sticky container for the sequential show */}
      <div className="sticky top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center pointer-events-none">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center pointer-events-auto">
          {/* Top Heading: ALWAYS VISIBLE ON OPENING PAGE AS REQUESTED */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-8xl font-black text-white tracking-tight mb-8 leading-tight"
          >
            Our Zenvoice AI agents makes
          </motion.h1>

          {/* Sub Heading - "Book Appointments": SCROLL MEANS VISIBLE (Changes Fast) */}
          <motion.div
             style={{ 
               opacity: revealOpacity, 
               y: revealY, 
               scale: revealScale,
               translateY: exitY,
               filter: useTransform(smoothProgress, [0.4, 0.7], ["blur(0px)", "blur(12px)"])
             }}
             className="relative inline-block mb-12"
          >
            <motion.h2
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-[-0.04em] pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-blue-500 bg-[length:200%_auto] whitespace-nowrap leading-none"
            >
              Book Appointments
            </motion.h2>
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent shadow-[0_0_25px_rgba(45,212,191,0.3)]" />
          </motion.div>

          {/* Other contents revealed sequentially */}
          <motion.p 
            style={{ opacity: useTransform(smoothProgress, [0.2, 0.4], [0, 1]), translateY: exitY }}
            className="text-lg md:text-3xl text-slate-400 font-medium max-w-4xl mb-12 leading-relaxed"
          >
            Build smart Voice AI agents in minutes. No coding, <br className="hidden md:block" />
            no complex setup—just plug and play
          </motion.p>

          <motion.div 
             style={{ 
               opacity: useTransform(smoothProgress, [0.35, 0.55], [0, 1]), 
               scale: useTransform(smoothProgress, [0.35, 0.55], [0.9, 1]),
               translateY: exitY 
             }}
             className="relative group w-full sm:w-auto mt-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition-opacity" />
            <button className="relative w-full sm:w-auto bg-black border border-white/20 hover:border-white/40 text-white font-black px-16 py-6 rounded-2xl text-xs uppercase tracking-[4px] transition-all flex items-center justify-center gap-4 active:scale-95 shadow-2xl">
              Talk to sales
              <div className="w-3.5 h-3.5 rounded-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,1)] animate-pulse" />
            </button>
          </motion.div>
        </div>

        {/* Scroll explorer indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 focus-visible:scale-110"
        >
          <span className="text-[10px] text-teal-400 font-black uppercase tracking-[6px] animate-bounce">Scroll Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-teal-500/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
