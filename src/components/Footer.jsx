import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, Github as GithubIcon, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Use Cases", "Dashboard", "Integrations", "Pricing"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press", "Security"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Responsible Use"]
    }
  ];

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20 pb-12 border-b border-white/5">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex flex-col gap-6 group/footerlogo">
              <img 
                src="/logo.png" 
                alt="ZenZai AI Logo" 
                className="h-10 w-auto object-contain self-start transition-all group-hover/footerlogo:brightness-125"
              />
            </a>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-medium">
              Empowering businesses with sovereign AI voice agents. 
              Next-gen automation for a connected world.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={18} className="text-primary-light" />
                <span className="text-sm">hello@zenzai.io</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                <MapPin size={18} className="text-primary-light" />
                <span className="text-sm">123 AI Boulevard, Silicon Valley</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-white font-black mb-8 uppercase tracking-[3px] text-xs">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-primary-light transition-all text-sm flex items-center gap-1 group">
                      <span className="w-0 overflow-hidden group-hover:w-2 transition-all opacity-0 group-hover:opacity-100">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-8 uppercase tracking-[3px] text-xs">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Get the latest AI voice updates in your inbox.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-slate-900/80 border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary/50 transition-all text-white placeholder-slate-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-dark transition-all px-4 rounded-xl text-white font-bold group-active:scale-95">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6 order-2 md:order-1">
            {[Twitter, GithubIcon, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass border-white/5 text-slate-400 hover:text-white hover:border-primary-light/30 transition-all"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <p className="text-slate-500 text-sm order-1 md:order-2">
            © {currentYear} ZenZai AI Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-2 order-3 bg-slate-900 px-4 py-2 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
