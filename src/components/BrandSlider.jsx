import React from 'react';
import { motion } from 'framer-motion';

const BrandSlider = () => {
  // Use the 15 brands I renamed
  const brandCount = 15;
  const brands = Array.from({ length: brandCount }, (_, i) => ({
    name: `Partner ${i + 1}`,
    logo: `/brands/brand${i + 1}.png`
  }));

  // Double for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="pt-0 pb-16 bg-black overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center pt-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[4px]"
        >
          Helping businesses connect with people through AI Agents
        </motion.p>
      </div>

      <div className="flex relative overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-all duration-700 cursor-pointer pointer-events-auto"
            >
              {/* Ensure same height for all brands as requested */}
              <div className="h-10 md:h-16 px-4 flex items-center justify-center">
                 <img 
                   src={brand.logo} 
                   alt={brand.name} 
                   className="h-full w-auto object-contain max-w-[150px] selection:bg-transparent pointer-events-none"
                   loading="lazy"
                 />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSlider;
