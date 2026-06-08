import React from "react";
import { Instagram, Twitter, Linkedin, Award, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

export default function Trainers() {
  const trainers = [
    {
      name: "Coach Victor",
      specialization: "Olympic Lifts & Powerlifting",
      experience: "12 Years Experience",
      bio: "Former national weightlifter specializing in compound biomechanics and structural hypertrophy.",
      socials: { instagram: "#", twitter: "#", linkedin: "#" },
      initials: "VC",
      accent: "from-cyanAccent/30 to-charcoal"
    },
    {
      name: "Coach Elena",
      specialization: "High Intensity Cardio & Recomp",
      experience: "8 Years Experience",
      bio: "Certified sports nutritionist helping corporate athletes burn body fat while maintaining clean muscle tissue.",
      socials: { instagram: "#", twitter: "#", linkedin: "#" },
      initials: "EV",
      accent: "from-white/10 to-charcoal"
    },
    {
      name: "Coach Julian",
      specialization: "Fascia Release & Yoga Flow",
      experience: "10 Years Experience",
      bio: "Specialist in alignment correction, mobility rehabilitation, active sports recovery and breathwork.",
      socials: { instagram: "#", twitter: "#", linkedin: "#" },
      initials: "JC",
      accent: "from-cyanAccent/20 to-charcoal"
    }
  ];

  return (
    <section id="trainers" className="relative py-24 bg-charcoal border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect top-10 left-[20%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Elite Coaching Staff
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            MEET YOUR <span className="text-cyanAccent text-glow">COACHES</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Train under award-winning athletes and scientists dedicated to form accuracy, biometric progress, and mental resilience.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainers.map((coach, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center relative group hover:border-cyanAccent/30 hover:shadow-cyanGlow transition-all duration-300 bg-graphite/20"
            >
              {/* Circular Avatar Holder */}
              <div className="relative mb-6">
                {/* Glowing border ring */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyanAccent to-cyanAccent-dark rounded-full opacity-30 group-hover:opacity-100 group-hover:animate-spin transition duration-500 blur-sm" />
                
                {/* Circular image replacement / Initials badge */}
                <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${coach.accent} border border-white/10 flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                  {coach.initials}
                  {/* Small floating sub-badge */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-cyanAccent text-charcoal border-2 border-charcoal flex items-center justify-center">
                    <Dumbbell size={12} className="font-extrabold" />
                  </div>
                </div>
              </div>

              {/* Coach details */}
              <span className="text-[10px] uppercase tracking-widest font-bold text-cyanAccent mb-1 block">
                {coach.experience}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
                {coach.name}
              </h3>
              <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-4 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                {coach.specialization}
              </p>
              
              <p className="text-sm text-white/40 leading-relaxed font-light mb-6">
                {coach.bio}
              </p>

              {/* Social links */}
              <div className="flex gap-4 items-center mt-auto">
                <a
                  href={coach.socials.instagram}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 hover:border-cyanAccent/30 hover:bg-cyanAccent/10 text-white/60 hover:text-cyanAccent flex items-center justify-center transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={coach.socials.twitter}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 hover:border-cyanAccent/30 hover:bg-cyanAccent/10 text-white/60 hover:text-cyanAccent flex items-center justify-center transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={coach.socials.linkedin}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 hover:border-cyanAccent/30 hover:bg-cyanAccent/10 text-white/60 hover:text-cyanAccent flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
