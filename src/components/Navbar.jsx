import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Doctor Profile', href: '#doctor' },
    { name: 'Treatments', href: '#services' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Banner Contact Info (Hidden on small mobile, visible on sm and up) */}
      <div className="bg-ayurveda-dark/95 border-b border-ayurveda-gold/20 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 hidden sm:block backdrop-blur-md relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-300 gap-1.5 md:gap-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <span className="flex items-center text-ayurveda-goldLight">
              <MapPin className="w-3.5 h-3.5 mr-1 text-ayurveda-gold shrink-0" /> No. 17, West Hanumar Kovil St, Villupuram - 605602
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-ayurveda-gold shrink-0" /> Mon - Sat: 10:00 AM - 12:00 PM | 5:00 PM - 8:00 PM (Sun: Closed)
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/40">
              Est. 2011 (13+ Yrs)
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a href="tel:8778307484" className="hover:text-ayurveda-gold transition-colors flex items-center font-semibold">
              <Phone className="w-3.5 h-3.5 mr-1 text-ayurveda-gold" /> 87783 07484
            </a>
            <span className="text-ayurveda-gold/40">|</span>
            <a href="tel:9994724910" className="hover:text-ayurveda-gold transition-colors flex items-center font-semibold">
              99947 24910
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`w-full transition-all duration-500 bg-ayurveda-dark/95 backdrop-blur-xl border-b border-ayurveda-gold/30 shadow-2xl py-3 ${
          scrolled ? 'py-2.5 shadow-ayurveda-gold/10' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center space-x-2.5 sm:space-x-3 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-ayurveda-forest via-ayurveda-gold to-ayurveda-goldLight p-[2px] shadow-xl group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full bg-ayurveda-dark rounded-full overflow-hidden flex items-center justify-center p-0.5">
                <img
                  src="/logo.jpeg"
                  alt="Sri Dhanvanthri Ayurveda Hospital Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="font-serif text-base sm:text-xl font-bold tracking-wide text-white group-hover:text-ayurveda-gold transition-colors leading-tight">
                Sri Dhanvanthri
              </div>
              <div className="text-[9px] sm:text-xs text-ayurveda-gold uppercase tracking-wider font-semibold">
                Ayurveda Hospital • Villupuram
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm text-slate-200 hover:text-ayurveda-gold font-medium transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-ayurveda-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href="https://wa.me/918778307484?text=Hello%20Dr.%20M.%20Devi,%20I%20would%20like%20to%20consult%20at%20Sri%20Dhanvanthri%20Ayurveda%20Hospital."
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300"
              title="WhatsApp Consultation"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <button
              onClick={onBookClick}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-ayurveda-dark uppercase tracking-wider bg-gradient-to-r from-ayurveda-goldLight via-ayurveda-gold to-ayurveda-goldDark rounded-full overflow-hidden shadow-lg hover:shadow-ayurveda-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" /> Book Appointment
            </button>
          </div>

          {/* Mobile Right Controls: Book Icon + Menu Hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onBookClick}
              className="sm:hidden px-3 py-1.5 rounded-full bg-gradient-to-r from-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark text-[10px] font-extrabold uppercase flex items-center shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" /> Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-ayurveda-gold border border-ayurveda-gold/30 bg-ayurveda-forest/40 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-14 sm:top-20 z-30 bg-ayurveda-dark/98 backdrop-blur-2xl border-b border-ayurveda-gold/30 p-6 lg:hidden shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-slate-200 hover:text-ayurveda-gold font-medium py-2 border-b border-slate-800/80 flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <span className="text-ayurveda-gold/50 text-xs">→</span>
                </a>
              ))}
              
              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark font-extrabold text-sm uppercase tracking-wider text-center rounded-xl shadow-lg"
                >
                  Book Appointment Now
                </button>
                
                <a
                  href="https://wa.me/918778307484?text=Hello%20Dr.%20M.%20Devi,%20I%20would%20like%20to%20consult%20at%20Sri%20Dhanvanthri%20Ayurveda%20Hospital."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs uppercase tracking-wider text-center rounded-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
