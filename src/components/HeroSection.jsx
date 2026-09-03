import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Calendar, MessageCircle, ShieldCheck, Award, MapPin, PhoneCall } from 'lucide-react';
import ThreeDCanvas from './ThreeDCanvas';

function CountUp({ target, duration = 3000, suffix = '', formatNumber = false }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const displayValue = formatNumber ? count.toLocaleString('en-US') : count;

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-serif font-bold text-ayurveda-gold">
      {displayValue}{suffix}
    </div>
  );
}

export default function HeroSection({ onBookClick }) {
  const [typedText, setTypedText] = useState('');
  const fullText = "Ancient Ayurveda. Modern Healing.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-14 sm:pt-24 pb-8 sm:pb-16 overflow-hidden bg-gradient-to-b from-ayurveda-dark via-[#0d2618] to-ayurveda-dark">
      {/* Interactive 3D Canvas Background */}
      <ThreeDCanvas />

      {/* Radial Gold Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ayurveda-gold/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ayurveda-forest/60 border border-ayurveda-gold/40 backdrop-blur-md shadow-lg">
              <Sparkles className="w-4 h-4 text-ayurveda-gold animate-spin-slow" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-ayurveda-goldLight uppercase">
                Established 2011 • Villupuram, Tamil Nadu
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              Sri Dhanvanthri <br />
              <span className="gold-text-gradient">Ayurveda Hospital</span>
            </h1>

            {/* Typing Subheadline */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-serif italic text-ayurveda-sage font-medium tracking-wide border-r-2 border-ayurveda-gold pr-2 animate-pulse">
                {typedText}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Experience the divine harmony of authentic Panchakarma therapies, specialized Skin & Hair Care, and natural Pain Management curated by <strong className="text-ayurveda-goldLight">Dr. M. Devi (B.A.M.S., C.C.P.T.)</strong> with over 13+ years of clinical excellence.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-ayurveda-goldLight via-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark font-extrabold text-sm uppercase tracking-wider rounded-full shadow-2xl hover:shadow-ayurveda-gold/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
              </button>

              <a
                href="https://wa.me/918778307484?text=Hello%20Dr.%20M.%20Devi,%20I%20would%20like%20to%20consult%20at%20Sri%20Dhanvanthri%20Ayurveda%20Hospital."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 border border-emerald-500/50 hover:border-emerald-400 font-bold text-sm uppercase tracking-wider rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>

            {/* Micro Trust Indicators with 3-Second Count Animation */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <CountUp target={13} suffix="+" duration={3000} />
                <div className="text-xs text-slate-400 font-medium">Years Trust</div>
              </div>
              <div className="text-center lg:text-left">
                <CountUp target={15000} suffix="+" duration={3000} formatNumber={true} />
                <div className="text-xs text-slate-400 font-medium">Patients Cured</div>
              </div>
              <div className="text-center lg:text-left">
                <CountUp target={100} suffix="%" duration={3000} />
                <div className="text-xs text-slate-400 font-medium">Natural Therapies</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-ayurveda-gold/40 via-ayurveda-forest/30 to-transparent border border-ayurveda-gold/30 backdrop-blur-xl shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src="/home page.png"
                  alt="Sri Dhanvanthri Ayurveda Hospital Hero"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 image-render-crisp filter brightness-105 contrast-[1.03]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ayurveda-dark via-transparent to-transparent opacity-80" />
                
                {/* Floating Glassmorphism Badge with 8K Logo Seal */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl glass-card border border-ayurveda-gold/40 backdrop-blur-md shadow-2xl z-20 flex items-center space-x-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-ayurveda-forest via-ayurveda-gold to-ayurveda-goldLight p-[2px] shadow-xl shrink-0">
                    <img
                      src="/logo.jpeg"
                      alt="Sri Dhanvanthri Ayurveda Hospital Logo"
                      className="w-full h-full object-cover rounded-full bg-ayurveda-dark"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">Dr. M. Devi, B.A.M.S., C.C.P.T.</h4>
                    <p className="text-[11px] sm:text-xs text-ayurveda-goldLight font-medium">Chief Ayurveda Physician • Villupuram</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
