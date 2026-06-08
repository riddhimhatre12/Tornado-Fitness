import React from "react";
import { Cpu, Award, Calendar, Heart, Sparkles, Users, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Cpu className="text-cyanAccent" size={24} />,
      title: "Advanced Equipment",
      description: "Train with world-class premium equipment designed to isolate specific muscle groups and protect joints."
    },
    {
      icon: <Award className="text-cyanAccent" size={24} />,
      title: "Expert Coaches",
      description: "Receive elite training directives from our highly certified personal training staff."
    },
    {
      icon: <Calendar className="text-cyanAccent" size={24} />,
      title: "Flexible Memberships",
      description: "Select custom terms that fit your individual travel schedule and long-term commitments."
    },
    {
      icon: <Heart className="text-cyanAccent" size={24} />,
      title: "Nutrition Support",
      description: "Get structured nutritional blueprints and supplement protocols engineered for rapid goals."
    },
    {
      icon: <Sparkles className="text-cyanAccent" size={24} />,
      title: "Clean Environment",
      description: "Experience absolute hygiene with our rigorous sanitization standards across all locker and gym areas."
    },
    {
      icon: <Users className="text-cyanAccent" size={24} />,
      title: "Community Driven",
      description: "Surround yourself with high-achieving, motivated peers working towards physical greatness."
    },
    {
      icon: <Smartphone className="text-cyanAccent" size={24} />,
      title: "Mobile App Access",
      description: "Book classes, track lifts, scan check-ins, and inspect macronutrients within our custom mobile experience."
    },
    {
      icon: <TrendingUp className="text-cyanAccent" size={24} />,
      title: "Progress Tracking",
      description: "Undergo biometric scans and performance reviews to see exact progress percentages."
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-charcoal border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect top-10 left-[10%] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Why Tornado Fitness
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            THE TORNADO <span className="text-cyanAccent text-glow">DIFFERENCE</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            We transcend standard gym offerings, introducing high-end details built around performance, utility, and elite results.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={index}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-graphite/40 to-charcoal/80 border border-white/5 hover:border-cyanAccent/20 hover:shadow-cyanGlow transition-all duration-300 group"
            >
              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-xl bg-cyanAccent/5 border border-cyanAccent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyanAccent/10 group-hover:border-cyanAccent/30 transition-all duration-300">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2 group-hover:text-cyanAccent transition-colors">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-white/40 leading-relaxed font-light">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
