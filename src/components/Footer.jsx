import React, { useState } from "react";
import { Instagram, Twitter, Facebook, Youtube, Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const handleQuickScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-charcoal text-white border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow bubble */}
      <div className="bg-glow-effect bottom-[-150px] right-[10%] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <a
              href="#home"
              onClick={(e) => handleQuickScroll(e, "home")}
              className="flex items-center gap-2 text-xl font-black tracking-wider text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyanAccent to-cyanAccent-dark flex items-center justify-center shadow-cyanGlow">
                <span className="text-charcoal font-black text-base">T</span>
              </div>
              <span className="font-sans font-extrabold uppercase">
                Tornado<span className="text-cyanAccent font-light">Fitness</span>
              </span>
            </a>
            <p className="text-xs text-white/45 font-light leading-relaxed max-w-sm">
              Tornado Fitness combines bespoke performance programming, biometric metrics analysis, and high-end recovery suites to deliver an elite luxury physical experience.
            </p>
            {/* Social media icons */}
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-cyanAccent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-cyanAccent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-cyanAccent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-cyanAccent transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mb-6">Quick Navigation</h4>
            <ul className="space-y-3 text-xs text-white/50">
              <li>
                <a href="#about" onClick={(e) => handleQuickScroll(e, "about")} className="hover:text-cyanAccent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleQuickScroll(e, "programs")} className="hover:text-cyanAccent transition-colors">
                  Signature Programs
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleQuickScroll(e, "why-us")} className="hover:text-cyanAccent transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#memberships" onClick={(e) => handleQuickScroll(e, "memberships")} className="hover:text-cyanAccent transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleQuickScroll(e, "gallery")} className="hover:text-cyanAccent transition-colors">
                  Before / Afters
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal/Support */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mb-6">Club Resources</h4>
            <ul className="space-y-3 text-xs text-white/50">
              <li>
                <a href="#trainers" onClick={(e) => handleQuickScroll(e, "trainers")} className="hover:text-cyanAccent transition-colors">
                  Coaching Staff
                </a>
              </li>
              <li>
                <a href="#bmi" onClick={(e) => handleQuickScroll(e, "bmi")} className="hover:text-cyanAccent transition-colors">
                  BMI Tool
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleQuickScroll(e, "faq")} className="hover:text-cyanAccent transition-colors">
                  FAQs & Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyanAccent transition-colors">
                  Privacy Regulations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyanAccent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mb-2">Newsletter</h4>
            <p className="text-xs text-white/45 font-light leading-relaxed">
              Subscribe to get elite workout blueprints, nutrition suggestions, and gym event schedules.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold text-cyanAccent bg-cyanAccent/5 border border-cyanAccent/20 px-4 py-3.5 rounded-xl">
                <Check size={16} /> Subscribed Successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="flex-grow bg-black/40 border border-white/5 focus:border-cyanAccent rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal rounded-xl shadow-cyanGlow hover:scale-105 transition-all duration-300"
                >
                  <Send size={14} className="font-extrabold" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest gap-4">
          <p>© 2026 Tornado Fitness. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
