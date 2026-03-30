import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'FEATURES', href: '#features', id: 'features' },
    { name: "FAQ'S", href: '#faq', id: 'faq' },
    { name: 'BLOG', href: '#', id: 'blog' },
    { name: 'PRICE', href: '#pricing', id: 'pricing' },
    { name: 'PARTNER WITH US', href: '#', id: 'partner' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] sm:w-[95%] max-w-6xl">
      <div className="rounded-2xl sm:rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-4 sm:px-10 py-3 flex justify-between items-center shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 rounded-full border border-teal-500/0 group-hover:border-teal-500/20 transition-all duration-500 pointer-events-none" />
        
        <a href="#home" className="flex items-center gap-3 relative z-10 shrink-0 group/logo">
          <img 
            src="/logo.png" 
            alt="ZenZai AI Logo" 
            className="h-8 md:h-10 w-auto object-contain selection:bg-transparent group-hover/logo:brightness-110 transition-all"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] font-black tracking-[1.5px] transition-all uppercase relative group/link ${
                activeSection === link.id ? 'text-teal-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,1)]" 
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <button className="hidden sm:block px-6 py-2.5 rounded-xl text-[10px] font-black tracking-[1.5px] border-2 border-slate-700 text-white hover:border-teal-500 hover:text-teal-400 transition-all uppercase active:scale-95">
            SIGN IN
          </button>
          
          <button 
            className="lg:hidden p-2 text-white hover:text-teal-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl p-8 flex flex-col gap-6 shadow-2xl z-[110]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xs font-black tracking-[2px] border-b border-white/5 pb-4 uppercase transition-colors ${
                  activeSection === link.id ? 'text-teal-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 rounded-2xl bg-teal-500 text-black font-black uppercase text-xs tracking-[2px] active:scale-95">
              SIGN IN
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
