import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the operating hours of Tornado Fitness?",
      answer: "Tornado Fitness is fully open 24/7/365 for Pro and Elite tier members. Basic tier members can access the training floor from 5:00 AM to 11:00 PM daily."
    },
    {
      question: "Does membership include 1-on-1 personal coaching?",
      answer: "All new memberships include a complimentary biometric and lifting assessment. The Pro plan includes 4 monthly personal coaching hours, and the Elite plan provides unlimited coaching sessions tailored to your goals."
    },
    {
      question: "Can I freeze or cancel my membership contract?",
      answer: "Yes, we offer flexible terms. You can freeze or pause your membership directly through the Tornado Mobile App under 'Account Management' or by notifying support via email."
    },
    {
      question: "Are locker room amenities and showers provided?",
      answer: "Yes, we provide boutique luxury locker suites equipped with biometric keyless lock systems, private showers, premium towel service, and vanity essentials."
    },
    {
      question: "What is your policy on guest passes?",
      answer: "Pro members receive 2 guest passes monthly, and Elite members receive unlimited guest bookings (limit 1 guest per visit). Guests must check in at the reception desk."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-charcoal border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect top-1/2 left-[-200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            FREQUENTLY ASKED <span className="text-cyanAccent text-glow">QUESTIONS</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Find answers to common questions regarding membership billing, coaching facilities, hours, and guest details.
          </p>
        </div>

        {/* Accordions List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 bg-graphite/10 transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                >
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider text-white pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-cyanAccent shrink-0">
                    {isOpen ? <Minus size={16} className="text-cyanAccent" /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Accordion Panel Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-white/50 font-light leading-relaxed border-t border-white/[0.03]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
