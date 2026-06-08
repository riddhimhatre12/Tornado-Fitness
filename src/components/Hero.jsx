import React, { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function StatCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Extract numerical value from target string
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (isNaN(num)) {
      // For non-numeric stats (e.g. "24/7")
      return;
    }

    const increment = num / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  // If it's non-numeric, just display it directly
  if (isNaN(parseInt(target.replace(/\D/g, ""), 10))) {
    return <span>{target}</span>;
  }

  return (
    <span>
      {count.toLocaleString()}
      {suffix || target.replace(/[0-9,\s]/g, "")}
    </span>
  );
}

export default function Hero() {
  const stats = [
    { label: "Members", value: "5000", suffix: "+" },
    { label: "Expert Trainers", value: "20", suffix: "+" },
    { label: "Client Satisfaction", value: "98", suffix: "%" },
    { label: "Operating Hours", value: "24/7", suffix: "" }
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center text-white bg-charcoal overflow-hidden pt-24"
    >
      {/* Background Image with Dark & Radial Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gym_hero.png"
          alt="Tornado Fitness Hero background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0F0F0F_90%)]" />
      </div>

      {/* Decorative Radial Glowing Spheres */}
      <div className="bg-glow-effect top-10 left-[-100px] opacity-30" />
      <div className="bg-glow-effect bottom-10 right-[-100px] opacity-20" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center my-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyanAccent/20 text-cyanAccent text-xs uppercase tracking-widest font-semibold mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanAccent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyanAccent"></span>
          </span>
          Luxury Fitness Redefined
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-black font-sans uppercase tracking-tight leading-none mb-6 max-w-4xl"
        >
          Transform Your Body. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyanAccent to-cyanAccent-light text-glow">
            Elevate Your Life.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-10"
        >
          Join Tornado Fitness and experience world-class training, expert coaching,
          and a motivating fitness community.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-cyanGlow hover:scale-105 flex items-center justify-center gap-2"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </button>
          
          <button
            onClick={() => handleScrollTo("memberships")}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            View Membership Plans
          </button>
        </motion.div>
      </div>

      {/* Animated Stats Section */}
      <div className="relative z-10 w-full bg-gradient-to-t from-graphite to-charcoal border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2 font-sans tracking-tight">
                <span className="text-cyanAccent">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
