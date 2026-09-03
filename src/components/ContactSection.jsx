import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ExternalLink, ShieldCheck, HeartPulse, UserCheck, Building } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-16 relative bg-[#07130b] border-t border-ayurveda-gold/10 overflow-hidden">
      {/* Soft Gold Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-ayurveda-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ayurveda-forest/60 border border-ayurveda-gold/40 text-ayurveda-gold text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md shadow-lg">
            <MapPin className="w-3.5 h-3.5" />
            <span>Villupuram Premier Healthcare Destination</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Contact & <span className="gold-text-gradient">Hospital Location</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Reach out to Sri Dhanvanthri Ayurveda Hospital for expert consultations, specialized Panchakarma therapies, and authentic in-house herbal pharmacy guidance.
          </p>
        </div>

        {/* Professional Doctor & Hospital Quick Info Banner */}
        <div className="mb-10 p-4 sm:p-6 rounded-3xl glass-card border border-ayurveda-gold/40 bg-gradient-to-r from-ayurveda-dark via-[#0f2d1c] to-ayurveda-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-xl overflow-hidden w-full">
          <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/40 flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-ayurveda-gold" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-white truncate">Dr. M. Devi</h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/40 shrink-0">
                  B.A.M.S., C.C.P.T.
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 leading-snug">
                Reg. No: 765/A • Chief Ayurveda Physician & Specialist (13+ Yrs Exp.)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto pt-1 md:pt-0">
            <a
              href="tel:8778307484"
              className="flex-1 md:flex-none px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-1.5 sm:space-x-2 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">Call Doctor</span>
            </a>
            <a
              href="https://wa.me/918778307484?text=Hello%20Dr.%20M.%20Devi,%20I%20would%20like%20to%20consult%20at%20Sri%20Dhanvanthri%20Ayurveda%20Hospital."
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-emerald-900/50 hover:bg-emerald-800/80 text-emerald-300 border border-emerald-500/50 font-bold text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Contact Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-card border border-ayurveda-gold/30 flex items-start space-x-4"
            >
              <div className="p-3 rounded-xl bg-ayurveda-gold/20 text-ayurveda-gold shrink-0 border border-ayurveda-gold/40">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-white mb-1">Hospital Address</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Sri Dhanvanthri Ayurveda Hospital<br />
                  No. 17, West Hanumar Kovil Street, Villupuram,<br />
                  Tamil Nadu – 605602, India.
                </p>
                <div className="mt-3 inline-flex items-center text-xs font-bold text-ayurveda-gold">
                  <span>Landmark: Villupuram Head Post Office Backside Street</span>
                </div>
              </div>
            </motion.div>

            {/* Direct Phone Numbers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl glass-card border border-ayurveda-gold/30 flex items-start space-x-4"
            >
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 border border-emerald-500/40">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-white mb-1">Click-To-Call Phone</h4>
                <p className="text-xs text-slate-400 mb-3">Available for consultations & emergency appointments</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:8778307484"
                    className="px-4 py-2 rounded-xl bg-ayurveda-forest/60 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-white text-xs font-bold border border-ayurveda-gold/30 transition-all flex items-center space-x-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>87783 07484</span>
                  </a>
                  <a
                    href="tel:9994724910"
                    className="px-4 py-2 rounded-xl bg-ayurveda-forest/60 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-white text-xs font-bold border border-ayurveda-gold/30 transition-all flex items-center space-x-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>99947 24910</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Timings Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl glass-card border border-ayurveda-gold/30 flex items-start space-x-4"
            >
              <div className="p-3 rounded-xl bg-ayurveda-gold/20 text-ayurveda-gold shrink-0 border border-ayurveda-gold/40">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-white mb-1">Consultation Hours</h4>
                <p className="text-xs text-slate-300 space-y-1 mt-1">
                  <span className="block font-medium"><strong className="text-ayurveda-gold">Mon – Sat:</strong> Morning 10:00 AM – 12:00 PM | Evening 5:00 PM – 8:00 PM</span>
                  <span className="block text-amber-400/90 font-semibold flex items-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block mr-1.5 animate-pulse"></span>
                    Sunday: Holiday
                  </span>
                </p>
              </div>
            </motion.div>

          </div>

          {/* Google Map Container & Direction Board Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl glass-card border border-ayurveda-gold/30 overflow-hidden flex flex-col relative"
          >
            {/* Direction Signboard Image with Clickable Navigation Overlay */}
            <div className="relative group overflow-hidden border-b border-ayurveda-gold/30 bg-black/40">
              <img
                src="/direction_board.png"
                alt="Sri Dhanvanthri Ayurveda Hospital Direction Signboard"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700 image-render-crisp filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ayurveda-dark via-ayurveda-dark/40 to-transparent" />
              
              {/* Floating Badge & Get Directions Button */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-2xl glass-card border border-ayurveda-gold/40 backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/40">
                    <Navigation className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Hospital Street Signboard</h4>
                    <p className="text-xs text-ayurveda-goldLight font-medium">West Hanumar Kovil Street, Villupuram</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Sri+Dhanvanthri+Ayurveda+Hospital,+27,+Sankaramadam+St,+Fathima+Layout,+Viluppuram,+Tamil+Nadu+605602"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-ayurveda-gold via-ayurveda-goldLight to-ayurveda-gold text-ayurveda-dark font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 shrink-0"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-3 bg-ayurveda-dark/90 border-b border-ayurveda-gold/20 flex justify-between items-center px-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-ayurveda-gold" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Interactive Live Navigation Map
                </span>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Sri+Dhanvanthri+Ayurveda+Hospital,+27,+Sankaramadam+St,+Fathima+Layout,+Viluppuram,+Tamil+Nadu+605602"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-ayurveda-gold hover:underline flex items-center space-x-1 font-bold"
              >
                <span>Navigate to Clinic</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full relative h-64 sm:h-72">
              <iframe
                title="Sri Dhanvanthri Ayurveda Hospital Map Location"
                src="https://maps.google.com/maps?q=11.9401,79.4932+(Sri%20Dhanvanthri%20Ayurveda%20Hospital)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full border-0 absolute inset-0 filter contrast-[1.1] opacity-95"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
