import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`p-6 rounded-[28px] border transition-all duration-300 mb-4 cursor-pointer ${isOpen ? 'bg-primary/5 border-primary/20 shadow-xl shadow-primary/5' : 'bg-slate-900/40 border-white/5 hover:border-slate-800'}`} onClick={toggle}>
      <button className="flex w-full justify-between items-center text-left">
        <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>{question}</span>
        <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-90' : 'bg-slate-800 text-slate-400 rotate-0'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 leading-relaxed text-sm lg:text-base border-t border-white/10 pt-6 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
       question: "How does the AI voice differ from standard TTS?",
       answer: "Unlike traditional text-to-speech, ZenX uses generative voice models that understand context, tone, and pacing. It can pause, emphasize words, and even use filler sounds like 'um' or 'ah' to sound indistinguishable from a human."
    },
    {
       question: "Can I integrate it with my current CRM?",
       answer: "Yes! ZenX AI seamlessly integrates with Salesforce, HubSpot, Zendesk, and over 50+ other CRMs out of the box through our API and webhook library."
    },
    {
       question: "What is the average latency for responses?",
       answer: "We take latency seriously. Our AI agents respond in approximately 400-600ms, which is significantly faster than most competitors and feels incredibly natural in a real conversation."
    },
    {
       question: "Does it support multiple languages?",
       answer: "We currently support over 35+ languages with localized accents, ensuring your business can provide a native experience to customers worldwide."
    },
    {
       question: "Is my data secure?",
       answer: "Absolutely. We are SOC2 Type II compliant. All voice data is encrypted at rest and in transit, and we offer PII redaction features for compliance-heavy industries like healthcare and finance."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 whitespace-normal">
          <HelpCircle className="mx-auto text-primary-light mb-6" size={40} />
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Common <span className="gradient-text">Questions</span>
          </motion.h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              toggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
