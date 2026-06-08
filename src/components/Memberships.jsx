import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Memberships() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$49",
      period: "month",
      description: "Essential gym access for independent trainers.",
      features: [
        { text: "Access to training floor & equipment", included: true },
        { text: "Locker room & shower access", included: true },
        { text: "Standard operating hours entry", included: true },
        { text: "1 Complimentary coaching assessment", included: true },
        { text: "Group fitness classes access", included: false },
        { text: "Custom macro nutrition blueprints", included: false },
        { text: "Spa, sauna & recovery suite access", included: false },
        { text: "Unlimited personal training hours", included: false }
      ],
      featured: false,
      ctaText: "Get Started"
    },
    {
      name: "Pro Plan",
      price: "$89",
      period: "month",
      description: "Our signature plan for serious performance goals.",
      features: [
        { text: "Access to training floor & equipment", included: true },
        { text: "Locker room & shower access", included: true },
        { text: "24/7 Premium facility entry", included: true },
        { text: "4 1-on-1 monthly coaching hours", included: true },
        { text: "Unlimited group fitness classes", included: true },
        { text: "Custom macro nutrition blueprints", included: true },
        { text: "Sauna & recovery suite entry", included: false },
        { text: "Unlimited personal training hours", included: false }
      ],
      featured: true,
      ctaText: "Join Pro"
    },
    {
      name: "Elite Plan",
      price: "$149",
      period: "month",
      description: "All-inclusive luxury experience for elite athletes.",
      features: [
        { text: "Access to training floor & equipment", included: true },
        { text: "Locker room & shower access", included: true },
        { text: "24/7 Premium facility entry", included: true },
        { text: "Unlimited 1-on-1 coaching hours", included: true },
        { text: "Unlimited group fitness classes", included: true },
        { text: "Custom macro nutrition blueprints", included: true },
        { text: "Spa, sauna & recovery suite access", included: true },
        { text: "Dedicated athlete laundry service", included: true }
      ],
      featured: false,
      ctaText: "Join Elite"
    }
  ];

  return (
    <section id="memberships" className="relative py-24 bg-graphite border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect bottom-10 left-[-200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Membership Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            CHOOSE YOUR <span className="text-cyanAccent text-glow">TIER</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Luxury tiered pricing structured to match your commitment levels, lifestyle needs, and physical objectives.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? "bg-charcoal border-2 cyan-glow-border scale-100 lg:scale-105 z-10"
                  : "glass-card hover:border-white/20 z-0 bg-charcoal/40"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal font-black uppercase text-[10px] tracking-widest px-4 py-1.5 rounded-full shadow-cyanGlow">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-white/50 font-light mb-6">
                  {plan.description}
                </p>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-white/40 font-light">/{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 border-t border-white/5 pt-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex gap-3 items-start text-xs md:text-sm">
                      {feature.included ? (
                        <Check size={16} className="text-cyanAccent shrink-0 mt-0.5" />
                      ) : (
                        <X size={16} className="text-white/20 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-white/80" : "text-white/30 line-through"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Join Now CTA */}
              <a
                href="#contact"
                className={`w-full text-center py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal shadow-cyanGlow hover:scale-105"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
