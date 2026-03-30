import React from 'react';
import { motion, useTransform, useSpring, useScroll } from 'framer-motion';

const CircuitBackground = () => {
  // Use GLOBAL scroll for full-page experience
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 30 });
  
  // Neon teal glow variability
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      <svg className="w-full h-full opacity-30 md:opacity-40" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
          </linearGradient>
          
          <filter id="circuitGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Circuit Paths - Restored to the robust wire-link design */}
        {[
          "M-200,100 L400,100 L500,200 L900,200 L1000,300 L1700,300",
          "M1600,0 L1100,0 L1000,100 L500,100 L400,200 L-200,200",
          "M100,-200 L100,500 L200,600 L200,1100",
          "M1300,-200 L1300,500 L1200,600 L1200,1100",
          "M-200,800 L500,800 L600,700 L800,700 L900,800 L1700,800",
          "M1600,600 L1100,600 L1000,700 L500,700 L400,800 L-200,800",
          "M1440,400 L800,400 L700,500 L0,500"
        ].map((path, i) => (
          <g key={i}>
            <path
              d={path}
              fill="none"
              stroke="rgba(45, 212, 191, 0.08)"
              strokeWidth="2"
            />
            {/* Animated Current Pulse - HIGH IMPACT */}
            <motion.path
              d={path}
              fill="none"
              stroke="url(#glowGradient)"
              strokeWidth="3.5"
              strokeDasharray="200 1200"
              filter="url(#circuitGlow)"
              style={{
                strokeDashoffset: useTransform(smoothProgress, [0, 1], [4000 + i * 500, -4000 + i * 500])
              }}
            />
            <circle cx={path.split(' ')[0].substring(1).split(',')[0]} cy={path.split(' ')[0].substring(1).split(',')[1]} r="2" fill="#2dd4bf" className="animate-pulse" />
          </g>
        ))}
      </svg>

      {/* Floating Spark particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [-30, 30],
              x: [-15, 15]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 8
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '1.5px',
              height: '1.5px',
              backgroundColor: '#2dd4bf',
              borderRadius: '50%',
              boxShadow: '0 0 10px #2dd4bf'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircuitBackground;
