import React from "react";
import { Smartphone, CheckCircle, TrendingUp, Calendar, QrCode, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileApp() {
  const appFeatures = [
    {
      icon: <TrendingUp className="text-cyanAccent" size={20} />,
      title: "Progress Analytics",
      description: "Inspect body composition stats, skeletal muscle gains, and historical lifting volume charts."
    },
    {
      icon: <Calendar className="text-cyanAccent" size={20} />,
      title: "Class Bookings",
      description: "Instantly reserve slots in high-intensity circuits, boxing mitt classes, or yoga flow sessions."
    },
    {
      icon: <QrCode className="text-cyanAccent" size={20} />,
      title: "Digital Membership Access",
      description: "Enjoy keyless entry by scanning your secure personal QR code at Tornado terminal gates."
    },
    {
      icon: <Shield className="text-cyanAccent" size={20} />,
      title: "Workout Tracking",
      description: "Log sets, repetitions, active rest intervals, and weight loads directly on the floor."
    }
  ];

  return (
    <section id="app" className="relative py-24 bg-graphite border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect bottom-1/2 left-[-200px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CSS Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            {/* Background Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-cyanAccent/10 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Smart Phone Shell Frame */}
            <div className="w-[300px] h-[600px] rounded-[40px] bg-charcoal border-[12px] border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 select-none">
              {/* Phone Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-white/20 rounded-full mb-1" />
              </div>

              {/* Status bar */}
              <div className="flex justify-between items-center text-[10px] text-white/50 pt-2 px-2 z-10">
                <span className="font-semibold">9:41 AM</span>
                <span className="flex gap-1 items-center">5G 📶 100% 🔋</span>
              </div>

              {/* App Screen Contents */}
              <div className="flex-grow flex flex-col justify-between mt-6 overflow-y-auto px-1">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Active Member</p>
                    <p className="text-sm font-bold text-white">Alexander S.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyanAccent/20 border border-cyanAccent/30 flex items-center justify-center text-cyanAccent font-black text-xs">
                    AS
                  </div>
                </div>

                {/* Simulated Chart Widget */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Weekly Cal Burn</p>
                    <span className="text-[10px] font-bold text-cyanAccent bg-cyanAccent/10 px-2 py-0.5 rounded-full">+12.4%</span>
                  </div>
                  <div className="text-xl font-black text-white">2,850 kcal</div>
                  {/* Fake sparklines path */}
                  <svg className="w-full h-12 mt-3 text-cyanAccent" viewBox="0 0 100 30" fill="none">
                    <path
                      d="M0 25 C 20 15, 30 20, 50 10 C 70 0, 80 5, 100 2"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 25 C 20 15, 30 20, 50 10 C 70 0, 80 5, 100 2 L 100 30 L 0 30 Z"
                      fill="url(#gradient-chart)"
                      opacity="0.1"
                    />
                    <defs>
                      <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Workout Widget */}
                <div className="p-4 rounded-2xl bg-cyanAccent/5 border border-cyanAccent/20 mb-4">
                  <p className="text-[9px] uppercase font-bold text-cyanAccent tracking-widest mb-1">Workout Active</p>
                  <p className="text-xs font-bold text-white">Hypertrophy Chest & Shoulders</p>
                  
                  <div className="flex justify-between items-center mt-3 text-[10px] text-white/60">
                    <span>Target: 24 Sets</span>
                    <span className="text-cyanAccent font-bold">18/24 Done</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/40 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-cyanAccent shadow-cyanGlow rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>

                {/* Booking list */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-[10px] uppercase font-bold text-white/50 tracking-wider mb-2.5">Today's Class</p>
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-white">HIIT Conditioning</p>
                      <p className="text-[10px] text-white/40">Coach Elena / 6:30 PM</p>
                    </div>
                    <span className="text-[9px] font-bold text-cyanAccent border border-cyanAccent/30 bg-cyanAccent/5 px-2 py-1 rounded-lg uppercase tracking-wider">Booked</span>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="w-28 h-1.5 bg-white/20 rounded-full mx-auto mt-4" />
            </div>
          </motion.div>

          {/* Right Column: Title & Descriptions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
              Digital Integration
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tight mb-6 text-white leading-tight">
              TORNADO APP <br />
              <span className="text-cyanAccent text-glow">IN YOUR POCKET</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-8">
              Take your performance beyond the club floor. Log your workout lifts, inspect weekly macro profiles, and manage your schedules directly inside our premium mobile application.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-10">
              {appFeatures.map((feat, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyanAccent/5 border border-cyanAccent/10 flex items-center justify-center shrink-0 mt-1">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges container */}
            <div className="flex gap-4 items-center">
              {/* Fake App Store button */}
              <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyanAccent/30 hover:bg-cyanAccent/5 transition-all duration-300 text-left">
                <Smartphone size={24} className="text-white/80" />
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/40">Download on the</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">App Store</p>
                </div>
              </button>
              {/* Fake Play Store button */}
              <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyanAccent/30 hover:bg-cyanAccent/5 transition-all duration-300 text-left">
                <Smartphone size={24} className="text-white/80" />
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/40">Get it on</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Google Play</p>
                </div>
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
