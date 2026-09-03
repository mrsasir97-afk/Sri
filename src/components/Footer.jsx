import React from 'react';
import { Phone, MessageCircle, Heart, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ onBookClick }) {
  return (
    <footer className="bg-[#050e09] border-t border-ayurveda-gold/20 relative pt-16 pb-12 overflow-hidden text-slate-400 text-xs sm:text-sm">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-ayurveda-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-ayurveda-forest via-ayurveda-gold to-ayurveda-goldLight p-[2px] shadow-lg shrink-0">
                <div className="w-full h-full bg-ayurveda-dark rounded-full overflow-hidden p-0.5 flex items-center justify-center">
                  <img
                    src="/logo.jpeg"
                    alt="Sri Dhanvanthri Ayurveda Hospital Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white">Sri Dhanvanthri</div>
                <div className="text-[10px] text-ayurveda-gold uppercase tracking-wider font-semibold">Ayurveda Hospital • Villupuram</div>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Providing authentic Ayurveda treatments, Panchakarma therapies, specialized Skin & Hair Care in Villupuram, Tamil Nadu since 2011. Led by Dr. M. Devi (B.A.M.S., C.C.P.T.).
            </p>

            <div className="flex space-x-3 pt-2">
              <a
                href="https://wa.me/918778307484"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:8778307484"
                className="p-2.5 rounded-full bg-ayurveda-forest/40 text-ayurveda-gold border border-ayurveda-gold/30 hover:bg-ayurveda-gold hover:text-ayurveda-dark transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Doctor Profile', 'Treatments', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-ayurveda-gold transition-colors text-slate-300 text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Key Treatments</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Panchakarma Detoxification</li>
              <li>• Abhyangam & Podi Kizhi</li>
              <li>• Skin Facials & Dark Spots Treatment</li>
              <li>• Hair Fall & Dandruff Solutions</li>
              <li>• Leech Therapy (Jalaukavacharana)</li>
              <li>• Joint & Cervical Back Pain Relief</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Hospital Address</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sri Dhanvanthri Ayurveda Hospital<br />
              No. 17, West Hanumar Kovil Street, Villupuram,<br />
              Tamil Nadu – 605602, India.
            </p>
            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                Book Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Sri Dhanvanthri Ayurveda Hospital. All Rights Reserved.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-1 text-slate-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Natural Ayurveda Healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
