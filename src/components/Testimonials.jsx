import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Sterling",
      program: "Pro Member - Strength Focus",
      rating: 5,
      review:
        "The environment at Tornado Fitness is unmatched. The trainers design precise macro limits and custom biomechanics workouts. Tornado completely changed how I approach my lifestyle and mental discipline.",
      initials: "MS"
    },
    {
      id: 2,
      name: "Helena Vance",
      program: "Elite Member - Recomp Focus",
      rating: 5,
      review:
        "I've trained at premium boutique clubs globally, but Tornado's biometric tracking and professional coaches are on another level. The sauna recovery suites make the elite tier worth every penny.",
      initials: "HV"
    },
    {
      id: 3,
      name: "Tyler Jenkins",
      program: "Pro Member - Functional Fitness",
      rating: 5,
      review:
        "The group circuits are full of incredible energy. The coaches push you to your absolute limits while correcting your lifting form at every interval. The community is supportive and elite.",
      initials: "TJ"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.4 }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-graphite border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect bottom-10 right-[-100px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            CLIENT <span className="text-cyanAccent text-glow">REVIEWS</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Hear from our members who have transformed their physiques, habits, and lifestyles inside our club.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-12 min-h-[350px] flex flex-col justify-center">
          
          {/* Main Card */}
          <div className="relative overflow-hidden w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-card p-8 md:p-12 rounded-3xl relative flex flex-col items-center text-center bg-charcoal/40"
              >
                {/* Quote Icon Background */}
                <Quote size={80} className="absolute top-6 left-6 text-white/[0.02] pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-cyanAccent fill-cyanAccent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-base md:text-xl text-white/80 font-light italic leading-relaxed mb-8 max-w-2xl">
                  "{current.review}"
                </p>

                {/* Avatar Badge */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyanAccent to-cyanAccent-dark flex items-center justify-center text-charcoal font-black text-lg mb-3 shadow-cyanGlow">
                  {current.initials}
                </div>

                {/* Client info */}
                <h4 className="text-sm md:text-base font-bold uppercase tracking-wider text-white">
                  {current.name}
                </h4>
                <p className="text-xs text-white/40 tracking-wide font-medium uppercase mt-0.5">
                  {current.program}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center w-full absolute left-0 right-0 top-1/2 -translate-y-1/2 px-2 pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-charcoal/80 border border-white/5 flex items-center justify-center text-white/60 hover:text-cyanAccent hover:border-cyanAccent/30 hover:bg-charcoal transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-charcoal/80 border border-white/5 flex items-center justify-center text-white/60 hover:text-cyanAccent hover:border-cyanAccent/30 hover:bg-charcoal transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-cyanAccent shadow-cyanGlow" : "w-2.5 bg-white/10"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
