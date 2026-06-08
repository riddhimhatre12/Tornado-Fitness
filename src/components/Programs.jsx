import React from "react";
import { Dumbbell, Flame, Zap, Compass, User, Users, RefreshCw, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      icon: <Dumbbell className="text-cyanAccent" size={28} />,
      title: "Strength Training",
      description: "Build raw strength, power, and lean muscle tissue under scientific compound load patterns."
    },
    {
      icon: <Flame className="text-cyanAccent" size={28} />,
      title: "Fat Loss Program",
      description: "High-intensity metabolic conditioning designed to optimize calorie deficit and muscle retention."
    },
    {
      icon: <RefreshCw className="text-cyanAccent" size={28} />,
      title: "Functional Fitness",
      description: "Enhance everyday stability, movement biomechanics, and core endurance for peak daily energy."
    },
    {
      icon: <Zap className="text-cyanAccent" size={28} />,
      title: "Cross Training",
      description: "Combine olympic lifts, gymnastics, and athletic speed blocks in a highly intense competitive setup."
    },
    {
      icon: <User className="text-cyanAccent" size={28} />,
      title: "Personal Training",
      description: "Bespoke 1-on-1 strategy sessions tracking posture, lift form, goals, and nutrition metrics."
    },
    {
      icon: <Users className="text-cyanAccent" size={28} />,
      title: "Group Classes",
      description: "Energetic team environment combining community motivation, pulse music, and targeted circuits."
    },
    {
      icon: <Compass className="text-cyanAccent" size={28} />,
      title: "Yoga & Mobility",
      description: "Unlock deep fascia blockages, joint mobility ranges, mindfulness, and active muscle recovery."
    },
    {
      icon: <Trophy className="text-cyanAccent" size={28} />,
      title: "Athlete Performance Training",
      description: "Power thresholds, vertical jump expansion, and rapid reaction blocks built for competitive sports."
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="programs" className="relative py-24 bg-graphite border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect bottom-[-200px] right-[-200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Signature Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            CHOOSE YOUR <span className="text-cyanAccent text-glow">PATH</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Bespoke training disciplines optimized for your personal growth, performance, and long-term vitality.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((prog, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-cyanAccent/30 hover:shadow-cyanGlow group relative hover:-translate-y-2 overflow-hidden bg-charcoal/40"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyanAccent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div>
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-xl bg-cyanAccent/5 flex items-center justify-center border border-cyanAccent/10 group-hover:border-cyanAccent/30 group-hover:bg-cyanAccent/10 transition-all duration-300 mb-6">
                  {prog.icon}
                </div>

                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 group-hover:text-cyanAccent transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
                  {prog.description}
                </p>
              </div>

              {/* Action trigger link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyanAccent group-hover:text-white transition-colors mt-auto"
              >
                Explore Program
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
