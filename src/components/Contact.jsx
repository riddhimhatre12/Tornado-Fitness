import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", plan: "pro", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission success
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", plan: "pro", message: "" });
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="relative py-24 bg-graphite border-b border-white/5 overflow-hidden">
      <div className="bg-glow-effect bottom-[-200px] left-[10%] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-3xl relative bg-charcoal/40"
          >
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
              Inquire
            </span>
            <h3 className="text-2xl md:text-3xl font-black font-sans uppercase tracking-tight text-white mb-8">
              START YOUR <span className="text-cyanAccent text-glow">JOURNEY</span>
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-cyanAccent/10 border border-cyanAccent/30 flex items-center justify-center text-cyanAccent mb-6 shadow-cyanGlow">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-2">Message Received</h4>
                <p className="text-sm text-white/50 font-light max-w-sm leading-relaxed">
                  Thank you for reaching out. Our concierge team will contact you within 24 hours to schedule your club walkthrough.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Full Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-black/40 border border-white/5 focus:border-cyanAccent rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="bg-black/40 border border-white/5 focus:border-cyanAccent rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="bg-black/40 border border-white/5 focus:border-cyanAccent rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                  {/* Target Tier Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Select Plan</label>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      className="bg-black border border-white/5 focus:border-cyanAccent rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="basic">Basic Plan ($49/mo)</option>
                      <option value="pro">Pro Plan ($89/mo)</option>
                      <option value="elite">Elite Plan ($149/mo)</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Message *</label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your fitness objectives and background..."
                    className="bg-black/40 border border-white/5 focus:border-cyanAccent rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-white/20 focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal font-black uppercase tracking-wider rounded-xl hover:scale-[1.02] shadow-cyanGlow transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Submit Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Location Details & Custom Simulated Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-cyanAccent mb-3 block">
                Directory
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-sans uppercase tracking-tight text-white leading-tight">
                VISIT THE <span className="text-cyanAccent text-glow">CLUB</span>
              </h3>
              <p className="text-white/50 text-sm md:text-base font-light mt-4">
                Our luxury facilities are located in the heart of downtown. Feel free to contact our support reception desk for queries.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <MapPin className="text-cyanAccent shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-1">Club Location</h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    100 Luxury Avenue, Suite 500,<br />Miami, FL 33101
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <Phone className="text-cyanAccent shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-1">Call Concierge</h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Main Office: +1 (800) 555-GYM1<br />Desk Support: +1 (800) 555-GYM2
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <Mail className="text-cyanAccent shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-1">Email Inquiries</h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    concierge@tornadofitness.com<br />media@tornadofitness.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <Clock className="text-cyanAccent shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-1">Reception Hours</h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Mon - Sun: 8:00 AM - 10:00 PM<br />(Gym open 24/7/365)
                  </p>
                </div>
              </div>
            </div>

            {/* Custom simulated dark map frame */}
            <div className="w-full h-52 rounded-2xl overflow-hidden border border-white/10 relative bg-[#151515] flex items-center justify-center p-6">
              {/* Map grid aesthetic */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Fake Map streets lines */}
              <div className="absolute inset-x-0 top-1/3 h-1 bg-white/[0.03] rotate-12" />
              <div className="absolute inset-x-0 top-2/3 h-1.5 bg-white/[0.03] -rotate-6" />
              <div className="absolute left-1/4 inset-y-0 w-1 bg-white/[0.03] rotate-45" />
              <div className="absolute right-1/3 inset-y-0 w-1.5 bg-white/[0.03] -rotate-12" />

              {/* Glowing Club Marker pin */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="flex h-5 w-5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanAccent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-cyanAccent shadow-cyanGlow border-2 border-charcoal"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-black text-cyanAccent bg-charcoal/90 border border-cyanAccent/30 px-3 py-1 rounded-lg mt-2 text-glow shadow-md">
                  Tornado Fitness HQ
                </span>
              </div>

              {/* Background gradient shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
