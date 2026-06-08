import React, { useState } from "react";
import { Coffee, Apple, Award, Sparkles, Plus, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Nutrition() {
  const [activeTab, setActiveTab] = useState("meals"); // 'meals' or 'supps'

  const mealCards = [
    {
      title: "Citrus Salmon Bowl",
      tag: "Lean Muscle / Omega-3 Focus",
      prepTime: "15 min prep",
      macros: { p: "38g", c: "42g", f: "16g", cal: "464" },
      ingredients: ["Wild-caught salmon fillet", "Quinoa base", "Steamed asparagus", "Lemon-dill glaze"]
    },
    {
      title: "Lemon Herb Chicken Recomp",
      tag: "High Protein / Low Carb",
      prepTime: "20 min prep",
      macros: { p: "48g", c: "12g", f: "8g", cal: "312" },
      ingredients: ["Organic chicken breast", "Roasted cauliflower rice", "Sautéed spinach", "Olive oil dressing"]
    },
    {
      title: "Tornado Vegan Fuel Bowl",
      tag: "Functional Carb Loader",
      prepTime: "10 min prep",
      macros: { p: "22g", c: "68g", f: "10g", cal: "450" },
      ingredients: ["Spiced chickpeas", "Brown rice & avocado", "Roasted sweet potato", "Tahini drizzle"]
    }
  ];

  const supplementSpecs = [
    {
      name: "Whey Protein Isolate",
      purpose: "Muscle Repair & Recovery",
      timing: "Post-workout / Within 45 minutes",
      dose: "25-30g scoop",
      rating: "Essential Core"
    },
    {
      name: "Creatine Monohydrate",
      purpose: "ATP Power Output & Hypertrophy",
      timing: "Daily / Consistent timing",
      dose: "5g daily dose",
      rating: "Clinically Proven"
    },
    {
      name: "Omega-3 Fish Oils",
      purpose: "Joint Lubrication & Cardiovascular Health",
      timing: "Morning / With first meal",
      dose: "2000mg daily",
      rating: "Long-term Vitality"
    },
    {
      name: "ZMA (Zinc, Magnesium, B6)",
      purpose: "Deep Sleep & Hormonal Support",
      timing: "Evening / 30 mins before sleep",
      dose: "Standard capsule dose",
      rating: "Sleep/Recovery"
    }
  ];

  return (
    <section id="nutrition" className="relative py-24 bg-charcoal border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect top-10 right-[15%] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Science & Fuel
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            NUTRITION & <span className="text-cyanAccent text-glow">MACROS</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Training only accounts for 30% of your progress. Build a structured nutritional foundation optimized for hypertrophy, fat loss, or cognitive energy.
          </p>
        </div>

        {/* Macros Summary Dashboard Banner */}
        <div className="glass-card rounded-3xl p-8 max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-graphite/10">
          <div className="text-left border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <Apple className="text-cyanAccent" size={18} /> Optimal Macro Ratios
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Recommended standard caloric distributions for general athletic reconstruction. Individual parameters may shift.
            </p>
          </div>
          {/* Ratios Display */}
          <div className="col-span-2 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-white/80">
                <span>Protein (Lean Mass Synthesis)</span>
                <span className="text-cyanAccent">40% / 2.0g per kg</span>
              </div>
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-cyanAccent shadow-cyanGlow rounded-full" style={{ width: "40%" }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-white/80">
                <span>Carbohydrates (Muscle Glycogen)</span>
                <span>35% / Complex Starch Focus</span>
              </div>
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-white/40 rounded-full" style={{ width: "35%" }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-white/80">
                <span>Healthy Fats (Hormone Secretion)</span>
                <span>25% / Omega & MCT Focus</span>
              </div>
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full bg-white/20 rounded-full" style={{ width: "25%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Navigator */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("meals")}
            className={`px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "meals"
                ? "bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal shadow-cyanGlow"
                : "bg-white/5 border border-white/5 text-white/60"
            }`}
          >
            Healthy Meals
          </button>
          <button
            onClick={() => setActiveTab("supps")}
            className={`px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "supps"
                ? "bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal shadow-cyanGlow"
                : "bg-white/5 border border-white/5 text-white/60"
            }`}
          >
            Supplements Guidance
          </button>
        </div>

        {/* Content Render */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "meals" ? (
            /* Meals Grid */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mealCards.map((meal, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyanAccent/20 hover:shadow-cyanGlow transition-all duration-300 group bg-graphite/20"
                >
                  <div>
                    {/* Badge */}
                    <span className="text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-cyanAccent/5 border border-cyanAccent/10 text-cyanAccent block mb-4 w-fit">
                      {meal.tag}
                    </span>
                    <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-1">
                      {meal.title}
                    </h4>
                    <span className="text-[10px] text-white/40 block mb-6 font-medium uppercase tracking-wider">
                      {meal.prepTime}
                    </span>

                    {/* Ingredients list */}
                    <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      {meal.ingredients.map((ing, ingIdx) => (
                        <li key={ingIdx} className="text-xs text-white/60 font-light flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent/50" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Macro breakdown footer block */}
                  <div className="grid grid-cols-4 gap-2 text-center p-3 rounded-xl bg-black/40 border border-white/5 mt-auto">
                    <div>
                      <p className="text-[8px] uppercase font-bold text-white/40 mb-0.5">Protein</p>
                      <p className="text-xs font-black text-cyanAccent">{meal.macros.p}</p>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase font-bold text-white/40 mb-0.5">Carbs</p>
                      <p className="text-xs font-black text-white">{meal.macros.c}</p>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase font-bold text-white/40 mb-0.5">Fat</p>
                      <p className="text-xs font-black text-white">{meal.macros.f}</p>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase font-bold text-white/40 mb-0.5">Cal</p>
                      <p className="text-xs font-black text-cyanAccent">{meal.macros.cal}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Supplements Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supplementSpecs.map((supp, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  key={index}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyanAccent/20 hover:shadow-cyanGlow transition-all duration-300 bg-graphite/20"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                        {supp.rating}
                      </span>
                      <h4 className="text-lg font-bold uppercase tracking-wide text-white mt-3">
                        {supp.name}
                      </h4>
                    </div>
                    <Award className="text-cyanAccent" size={24} />
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/40 uppercase font-semibold">Primary Purpose:</span>
                      <span className="text-white/80 text-right">{supp.purpose}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 uppercase font-semibold">Optimum Timing:</span>
                      <span className="text-cyanAccent font-medium text-right">{supp.timing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 uppercase font-semibold">Suggested Dosage:</span>
                      <span className="text-white/80 text-right">{supp.dose}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
