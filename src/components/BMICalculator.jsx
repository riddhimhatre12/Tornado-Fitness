import React, { useState, useEffect } from "react";
import { Scale, Ruler, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState("metric"); // 'metric' or 'imperial'
  
  // Metric States
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(175);

  // Imperial States
  const [weightLbs, setWeightLbs] = useState(154);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(9);

  const [bmi, setBmi] = useState(22.9);
  const [category, setCategory] = useState("Normal");
  const [advice, setAdvice] = useState("");

  // Calculate BMI whenever states change
  useEffect(() => {
    let computedBmi = 0;
    if (unitSystem === "metric") {
      const heightM = heightCm / 100;
      if (heightM > 0) {
        computedBmi = weightKg / (heightM * heightM);
      }
    } else {
      const totalInches = heightFt * 12 + parseInt(heightIn || 0, 10);
      if (totalInches > 0) {
        computedBmi = (weightLbs / (totalInches * totalInches)) * 703;
      }
    }

    computedBmi = parseFloat(computedBmi.toFixed(1));
    setBmi(computedBmi);

    // Categories
    if (computedBmi < 18.5) {
      setCategory("Underweight");
      setAdvice("Focus on progressive strength building combined with a clean calorie-surplus nutrition model.");
    } else if (computedBmi >= 18.5 && computedBmi < 25) {
      setCategory("Normal Weight");
      setAdvice("Excellent athletic zone. Keep training with progressive overload and support muscle with high protein ratios.");
    } else if (computedBmi >= 25 && computedBmi < 30) {
      setCategory("Overweight");
      setAdvice("Optimize metabolic circuits alongside progressive resistance blocks and a slight calorie deficit plan.");
    } else {
      setCategory("Obese Range");
      setAdvice("Incorporate low-impact functional movements, high metabolic conditioning, and structured custom nutrition guidance.");
    }
  }, [unitSystem, weightKg, heightCm, weightLbs, heightFt, heightIn]);

  // Color mapping based on category
  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "text-yellow-400";
      case "Normal Weight":
        return "text-cyanAccent";
      case "Overweight":
        return "text-orange-400";
      case "Obese Range":
        return "text-red-400";
      default:
        return "text-white";
    }
  };

  const getBmiPercentage = () => {
    // Clamp BMI visually between 15 and 35
    const min = 15;
    const max = 35;
    const percentage = ((bmi - min) / (max - min)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  return (
    <section id="bmi" className="relative py-24 bg-graphite border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect bottom-10 left-[-200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
            Health Analytics
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-4 text-white">
            BMI <span className="text-cyanAccent text-glow">CALCULATOR</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light">
            Quickly estimate your Body Mass Index and unlock elite targeted suggestions for your fitness path.
          </p>
        </div>

        {/* Form & Result Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Inputs Column */}
          <div className="glass-card p-8 rounded-3xl bg-charcoal/40">
            {/* Toggle unit systems */}
            <div className="flex gap-2 p-1.5 bg-black/40 rounded-xl mb-8 border border-white/5">
              <button
                onClick={() => setUnitSystem("metric")}
                className={`flex-1 py-3 text-xs md:text-sm uppercase tracking-wider font-extrabold rounded-lg transition-all duration-300 ${
                  unitSystem === "metric" ? "bg-cyanAccent text-charcoal shadow-cyanGlow" : "text-white/60 hover:text-white"
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => setUnitSystem("imperial")}
                className={`flex-1 py-3 text-xs md:text-sm uppercase tracking-wider font-extrabold rounded-lg transition-all duration-300 ${
                  unitSystem === "imperial" ? "bg-cyanAccent text-charcoal shadow-cyanGlow" : "text-white/60 hover:text-white"
                }`}
              >
                Imperial (lbs/ft)
              </button>
            </div>

            {/* Sliders */}
            {unitSystem === "metric" ? (
              <div className="space-y-8">
                {/* Metric Height Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70 flex items-center gap-2">
                      <Ruler size={16} className="text-cyanAccent" /> Height
                    </label>
                    <span className="text-lg font-black text-cyanAccent">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyanAccent"
                  />
                </div>

                {/* Metric Weight Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70 flex items-center gap-2">
                      <Scale size={16} className="text-cyanAccent" /> Weight
                    </label>
                    <span className="text-lg font-black text-cyanAccent">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="160"
                    value={weightKg}
                    onChange={(e) => setWeightKg(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyanAccent"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Imperial Height Sliders */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70 flex items-center gap-2">
                      <Ruler size={16} className="text-cyanAccent" /> Height (Feet / Inches)
                    </label>
                    <span className="text-lg font-black text-cyanAccent">{heightFt} ft {heightIn} in</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="range"
                        min="4"
                        max="7"
                        value={heightFt}
                        onChange={(e) => setHeightFt(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyanAccent"
                      />
                      <span className="text-[10px] text-white/40 block mt-1">Feet</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max="11"
                        value={heightIn}
                        onChange={(e) => setHeightIn(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyanAccent"
                      />
                      <span className="text-[10px] text-white/40 block mt-1">Inches</span>
                    </div>
                  </div>
                </div>

                {/* Imperial Weight Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70 flex items-center gap-2">
                      <Scale size={16} className="text-cyanAccent" /> Weight
                    </label>
                    <span className="text-lg font-black text-cyanAccent">{weightLbs} lbs</span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="350"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyanAccent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Results Column */}
          <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center relative overflow-hidden bg-charcoal/40 min-h-[350px]">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-white/40 mb-2">Calculated Index</span>
            
            {/* Visual Ring Gauge */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
              <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Grey track */}
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                {/* Active index bar */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#00D4FF"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * getBmiPercentage()) / 100}
                  className="shadow-cyanGlow"
                  transition={{ duration: 0.5 }}
                />
              </svg>
              {/* Central text display */}
              <div className="text-center">
                <span className="text-4xl font-black font-sans text-white tracking-tight">{bmi}</span>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">BMI Value</p>
              </div>
            </div>

            {/* Health Category text */}
            <h3 className={`text-xl font-bold uppercase tracking-wider mb-3 ${getCategoryColor()}`}>
              {category}
            </h3>

            {/* Recommendations block */}
            <div className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-left max-w-sm">
              <Sparkles className="text-cyanAccent shrink-0 mt-0.5" size={16} />
              <p className="text-xs text-white/60 leading-relaxed font-light">
                {advice}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
