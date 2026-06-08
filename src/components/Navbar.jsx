import React, { useState, useEffect } from "react";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "why-us", label: "Why Us" },
    { id: "memberships", label: "Pricing" },
    { id: "gallery", label: "Results" },
    { id: "trainers", label: "Coaches" },
    { id: "bmi", label: "BMI Tool" },
    { id: "nutrition", label: "Nutrition" },
    { id: "app", label: "Mobile App" },
    { id: "contact", label: "Contact" }
  ];

  const primaryNavItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "why-us", label: "Why Us" },
    { id: "memberships", label: "Pricing" },
    { id: "gallery", label: "Results" },
    { id: "trainers", label: "Coaches" }
  ];

  const resourceItems = [
    { id: "bmi", label: "BMI Calculator" },
    { id: "nutrition", label: "Nutrition" },
    { id: "app", label: "Mobile App" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple active section highlights
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 text-2xl font-black tracking-wider text-white"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyanAccent to-cyanAccent-dark shadow-cyanGlow">
            <span className="text-charcoal font-black text-xl">T</span>
          </div>
          <span className="font-sans font-extrabold uppercase">
            Tornado<span className="text-cyanAccent font-light">Fitness</span>
          </span>
        </a>

        {/* Desktop Menu with Dropdown to prevent wrapping/overflow on medium screens */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-5">
            {primaryNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-200 hover:text-cyanAccent relative py-1 ${
                  activeSection === item.id ? "text-cyanAccent" : "text-white/60"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyanAccent rounded shadow-cyanGlow" />
                )}
              </a>
            ))}

            {/* Resources Hover/Click Dropdown using React State for robust emulation support */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 hover:text-cyanAccent outline-none ${
                  ["bmi", "nutrition", "app"].includes(activeSection) || isDropdownOpen ? "text-cyanAccent" : "text-white/60"
                }`}
              >
                Resources
                <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Glassmorphic Dropdown Drawer */}
              <div className={`absolute top-full right-0 mt-1 w-48 bg-charcoal/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-2xl transition-all duration-300 z-50 ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}>
                {resourceItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      handleNavClick(e, item.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-white/5 hover:text-cyanAccent border-l-2 border-transparent hover:border-cyanAccent ${
                      activeSection === item.id ? "text-cyanAccent border-cyanAccent bg-white/5" : "text-white/70"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-5 py-2 bg-transparent border border-cyanAccent text-cyanAccent hover:bg-cyanAccent hover:text-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm hover:shadow-cyanGlow shrink-0"
          >
            Start Your Journey
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-white/80 hover:text-cyanAccent focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-charcoal/95 backdrop-blur-lg z-40 xl:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } border-t border-white/5`}
      >
        <div className="flex flex-col p-8 gap-6 h-full overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-lg font-semibold tracking-wide uppercase transition-colors py-2 border-b border-white/5 ${
                activeSection === item.id ? "text-cyanAccent" : "text-white/75"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="w-full text-center py-3.5 bg-gradient-to-r from-cyanAccent to-cyanAccent-dark text-charcoal font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-cyanGlow mt-4"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </nav>
  );
}
