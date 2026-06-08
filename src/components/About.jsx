import React from "react";
import { Award, UserCheck, Activity, Coffee, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: <Award className="text-cyanAccent" size={24} />,
      title: "Certified Trainers",
      description: "Elite, certified coaches dedicated to elevating your performance."
    },
    {
      icon: <UserCheck className="text-cyanAccent" size={24} />,
      title: "Personalized Coaching",
      description: "Bespoke programs customized entirely for your physiological profile."
    },
    {
      icon: <Activity className="text-cyanAccent" size={24} />,
      title: "Modern Equipment",
      description: "State-of-the-art biomechanically optimized training equipment."
    },
    {
      icon: <Coffee className="text-cyanAccent" size={24} />,
      title: "Nutrition Guidance",
      description: "Science-backed diet planning and macro analysis for sustainable goals."
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-b border-white/5">
      <div className="bg-glow-effect top-1/2 left-[-250px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Showcase Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background glowing frame decoration */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyanAccent to-cyanAccent-dark rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            {/* Image Wrapper */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-square bg-graphite">
              <img
                src="/gym_about.png"
                alt="Tornado Fitness premium training area"
                className="w-full h-full object-cover"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            </div>

            {/* Floating Premium Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-6 glass-card border-cyanAccent/30 p-6 rounded-2xl max-w-xs flex items-center gap-4 shadow-cyanGlow"
            >
              <div className="w-12 h-12 rounded-xl bg-cyanAccent/10 border border-cyanAccent/30 flex items-center justify-center shrink-0">
                <span className="text-cyanAccent font-black text-xl">8+</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-cyanAccent font-semibold">Years of Excellence</p>
                <p className="text-sm font-bold text-white mt-0.5">Empowering fitness journeys daily.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Story & Info Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
              Our Vision & Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-6 leading-tight">
              Dedication. Strength. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyanAccent-light to-cyanAccent">
                Transformation.
              </span>
            </h2>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-8">
              At Tornado Fitness, we believe strength is more than just muscle; it is a lifestyle. Our high-end premium environment is designed for individuals who demand excellence in every aspect of their lives. We combine state-of-the-art equipment, bespoke coaching programs, and an elite fitness community to help you unlock your true physical and mental potential.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyanAccent/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="shrink-0 mt-0.5 w-10 h-10 rounded-lg bg-cyanAccent/5 flex items-center justify-center border border-cyanAccent/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
