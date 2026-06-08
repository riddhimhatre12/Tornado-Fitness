import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "transform", label: "Before/After" },
    { id: "atmosphere", label: "Gym Atmosphere" },
    { id: "training", label: "Training Sessions" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "transform",
      title: "David K. - 12 Weeks",
      subtitle: "Strength & Shred Program",
      description: "Lost 14kg body fat, gained 4kg skeletal muscle mass.",
      isBeforeAfter: true,
      beforeVal: "96 kg",
      afterVal: "82 kg",
      gradient: "from-cyanAccent/20 to-charcoal"
    },
    {
      id: 2,
      category: "atmosphere",
      title: "Olympic Lifting Zone",
      subtitle: "Elite Gear Suite",
      description: "Equipped with certified barbell sets and shock-absorbent platforms.",
      isBeforeAfter: false,
      image: "/olympic_lifting.png",
      gradient: "from-white/10 to-charcoal"
    },
    {
      id: 3,
      category: "training",
      title: "Metabolic Conditioning",
      subtitle: "High Intensity Circuits",
      description: "Our signature high-heart-rate group conditioning.",
      isBeforeAfter: false,
      image: "/metabolic_conditioning.png",
      gradient: "from-cyanAccent/15 to-charcoal"
    },
    {
      id: 4,
      category: "transform",
      title: "Sarah M. - 16 Weeks",
      subtitle: "Body Recomposition Plan",
      description: "Decreased body fat by 11% while building shoulder/core tone.",
      isBeforeAfter: true,
      beforeVal: "28% Fat",
      afterVal: "17% Fat",
      gradient: "from-cyanAccent/25 to-charcoal"
    },
    {
      id: 5,
      category: "atmosphere",
      title: "Bio-Feedback Cardio Area",
      subtitle: "Smart Machine Suite",
      description: "Smart metrics screen integration tracking calorie burn ratios in real time.",
      isBeforeAfter: false,
      image: "/cardio_area.png",
      gradient: "from-white/10 to-charcoal"
    },
    {
      id: 6,
      category: "training",
      title: "1-on-1 Boxing Mitts",
      subtitle: "Personal Coaching",
      description: "Refining reaction time, punch speed, and core twist power.",
      isBeforeAfter: false,
      image: "/boxing_mitts.png",
      gradient: "from-cyanAccent/10 to-charcoal"
    }
  ];

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-charcoal border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect top-1/2 right-[-250px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Visual Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            TRANSFORMATION <span className="text-cyanAccent text-glow">GALLERY</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Real physical results, luxury environment design, and intense client sessions captured live on the floor.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal shadow-cyanGlow"
                  : "bg-white/5 border border-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group relative min-h-[350px] bg-graphite/30"
              >
                {/* Visual Representation box with live images or high-end styling */}
                <div className={`h-56 w-full ${item.isBeforeAfter ? `bg-gradient-to-br ${item.gradient}` : ''} flex items-center justify-center p-6 relative overflow-hidden`}>
                  {/* Subtle Grid overlay for background luxury feel */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] z-10" />
                  
                  {item.isBeforeAfter ? (
                    /* Before After Comparison Visual Card */
                    <div className="relative z-20 flex w-full justify-between items-center gap-4">
                      <div className="text-center flex-1 bg-charcoal/80 backdrop-blur-md p-4 rounded-xl border border-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Before</p>
                        <p className="text-lg font-black text-white/90">{item.beforeVal}</p>
                      </div>
                      <div className="text-cyanAccent font-black text-xl animate-pulse">➔</div>
                      <div className="text-center flex-1 bg-cyanAccent/10 backdrop-blur-md p-4 rounded-xl border border-cyanAccent/20">
                        <p className="text-[10px] uppercase tracking-widest text-cyanAccent/70 mb-1">After</p>
                        <p className="text-lg font-black text-cyanAccent">{item.afterVal}</p>
                      </div>
                    </div>
                  ) : (
                    /* High-resolution Photograph with Cinematic Overlay */
                    <div className="absolute inset-0 z-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                    </div>
                  )}

                  {/* Dynamic background circle animation on hover (only for before/after layout) */}
                  {item.isBeforeAfter && (
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyanAccent/5 group-hover:scale-150 transition-all duration-700 blur-xl z-10" />
                  )}
                </div>

                {/* Card Content details */}
                <div className="p-6 border-t border-white/5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-cyanAccent mb-1 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-extrabold uppercase tracking-wide text-white group-hover:text-cyanAccent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed font-light mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
