import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, MapPin, Building2, Stethoscope, HeartPulse } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      src: '/panchakarma_table.png',
      title: 'Authentic Panchakarma Droni Therapy Table',
      category: 'Therapy Room & Panchakarma',
      desc: 'Traditional wooden Droni table crafted for herbal oil massage (Abhyangam), Shirodhara, and therapeutic body rejuvenation.'
    },
    {
      src: '/home page.png',
      title: 'Sri Dhanvanthri Ayurveda Hospital',
      category: 'Hospital Main Entrance',
      desc: 'Welcoming healthcare center in Villupuram equipped with modern Panchakarma facilities.'
    },
    {
      src: '/landmark.png',
      title: 'Prime Hospital Name Board',
      category: 'Hospital Main Board',
      desc: 'Official hospital consultation board with Dr. M. Devi B.A.M.S. & contact details.'
    },
    {
      src: '/direction_board.png',
      title: 'Street Direction & Guide Board',
      category: 'Hospital Way & Landmark',
      desc: 'Clear street directional signboard guiding patients to Sri Dhanvanthri Ayurveda Hospital.'
    },
    {
      src: '/patient waiting place.png',
      title: 'Patient Lounge & Waiting Area',
      category: 'Comfortable Facilities',
      desc: 'Hygiene-focused, tranquil, and comfortable waiting environment for patients and family.'
    },
    {
      src: '/medicine.png',
      title: 'In-House Ayurveda Pharmacy & Dispensary Room',
      category: 'Herbal Pharmacy Store',
      desc: 'Fully stocked in-house pharmacy storing traditional Kwaths, Arishtams, Churnams, and classical formulations.'
    },
    {
      src: '/medicine_close_up.png',
      title: 'Certified Classic Ayurveda Formulations & Capsules',
      category: 'Pharmacy & Formulations',
      desc: 'Quality-tested herbal remedies, specialized capsules & tailored Ayurveda oil extracts.'
    },
    {
      src: '/diseases.png',
      title: 'Specialized Clinical Consultation & Diagnostics',
      category: 'Doctor Consultation',
      desc: 'Detailed pulse diagnosis (Nadi Pariksha) & Prakriti evaluation by Dr. M. Devi.'
    }
  ];

  return (
    <section id="gallery" className="py-8 sm:py-16 relative bg-ayurveda-dark border-t border-ayurveda-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ayurveda-forest/40 border border-ayurveda-gold/30 text-ayurveda-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-ayurveda-gold" />
            <span>3D Interactive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Our Hospital <span className="gold-text-gradient">Gallery & Facilities</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light">
            Take a visual tour of Sri Dhanvanthri Ayurveda Hospital, our treatment rooms, authentic herbal store, and peaceful environment.
          </p>
        </div>

        {/* 3D Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer rounded-3xl glass-card border border-ayurveda-gold/30 overflow-hidden relative glass-card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ayurveda-dark via-ayurveda-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-ayurveda-dark/90 text-ayurveda-gold border border-ayurveda-gold/40 backdrop-blur-md">
                  {item.category}
                </span>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-ayurveda-gold/20 text-ayurveda-gold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-ayurveda-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-ayurveda-gold/40 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-ayurveda-dark/80 text-ayurveda-gold border border-ayurveda-gold/40 hover:bg-ayurveda-gold hover:text-ayurveda-dark transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-ayurveda-dark/95 border-t border-ayurveda-gold/20">
                <span className="text-xs font-bold text-ayurveda-gold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
