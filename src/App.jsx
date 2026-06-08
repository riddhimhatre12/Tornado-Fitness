import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhyChooseUs from "./components/WhyChooseUs";
import Memberships from "./components/Memberships";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Trainers from "./components/Trainers";
import BMICalculator from "./components/BMICalculator";
import Nutrition from "./components/Nutrition";
import MobileApp from "./components/MobileApp";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-charcoal text-white min-h-screen relative font-sans selection:bg-cyanAccent selection:text-charcoal antialiased overflow-x-hidden">
      {/* Top Animated Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyanAccent via-cyanAccent-light to-white z-[60] origin-left shadow-cyanGlow"
        style={{ scaleX }}
      />

      {/* Global Background Glow Spheres */}
      <div className="absolute top-[10%] left-[-150px] w-[600px] h-[600px] bg-cyanAccent/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-150px] w-[600px] h-[600px] bg-cyanAccent/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[75%] left-[-150px] w-[600px] h-[600px] bg-cyanAccent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Landing Page Content Sections */}
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Memberships />
      <Gallery />
      <Testimonials />
      <Trainers />
      <BMICalculator />
      <Nutrition />
      <MobileApp />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
