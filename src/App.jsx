import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DoctorAboutSection from './components/DoctorAboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AppointmentSection from './components/AppointmentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ayurveda-dark text-slate-100 relative font-sans selection:bg-ayurveda-gold selection:text-ayurveda-dark">
      {/* Sticky Header Navbar */}
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      {/* Main Page Sections */}
      <main>
        <HeroSection onBookClick={() => setIsModalOpen(true)} />
        <DoctorAboutSection />
        <ServicesSection onBookClick={() => setIsModalOpen(true)} />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={() => setIsModalOpen(true)} />

      {/* Appointment Popup Modal */}
      <AppointmentSection isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-2.5 sm:space-y-3">
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918778307484?text=Hello%20Dr.%20M.%20Devi,%20I%20would%20like%20to%20consult%20at%20Sri%20Dhanvanthri%20Ayurveda%20Hospital."
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/20 p-2.5 sm:p-3"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
          <span className="hidden sm:block absolute right-16 bg-ayurveda-dark/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp Doctor
          </span>
        </a>

        {/* Call Floating Button */}
        <a
          href="tel:8778307484"
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-ayurveda-gold hover:bg-ayurveda-goldLight text-ayurveda-dark flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 p-2.5 sm:p-3"
          title="Call Hospital Now"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ayurveda-forest/80 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-ayurveda-gold flex items-center justify-center border border-ayurveda-gold/40 shadow-xl transition-all"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
