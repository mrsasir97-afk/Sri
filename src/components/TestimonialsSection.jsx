import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Pause, Play, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Abishek Ramalingam',
      time: '4 months ago',
      rating: 5,
      comment: 'I visited the hospital for treatment of stomach pain caused by an ulcer. I took the medicines regularly as prescribed by Dr. M. Devi, and now my health has improved a lot. The treatment was excellent. Thank you so much. I highly recommend Sri Dhanvanthri Ayurveda hospital for treatment and recovery.',
      badge: 'Stomach Ulcer Cure'
    },
    {
      name: 'Subash Mala',
      time: '2 weeks ago',
      rating: 5,
      comment: 'I am very happy with the care and treatment provided by the Ayurveda doctor. She listens patiently, understands the health concerns, and gives proper guidance with a caring approach. Her treatment is effective, and I truly appreciate her dedication and kindness towards patients. Highly recommended.',
      badge: 'Patient Care & Guidance'
    },
    {
      name: 'Karthika Ramalingam',
      time: 'Local Guide • 11 reviews',
      rating: 5,
      comment: 'I have visited this hospital multiple times. Doctor was so kind and the treatment given by her was so perfect for my problem. Fully satisfied with the treatment.',
      badge: 'Multiple Visits'
    },
    {
      name: 'Tony Cox',
      time: '5 years ago',
      rating: 5,
      comment: 'Dr. Devi is a very kind and knowledgeable person. She treated me for a chronic disease. My health has greatly improved in couple of months of her treatment. She patiently takes time to explain the patient what disease he/she goes through.',
      badge: 'Chronic Disease Cure'
    },
    {
      name: 'Jeni Liya',
      time: '4 months ago',
      rating: 5,
      comment: 'One of the Best Treatment given in this hospital. Very caring and Knowledgeable Doctor. Thank you Dr. Devi mam.',
      badge: 'Caring & Knowledgeable'
    },
    {
      name: 'Sivakumar J',
      time: '10 months ago',
      rating: 5,
      comment: 'நான் டாக்டர் தேவி அவர்களிடம் எனது பேக் பெயினுக்கு மருத்துவம் பெற்று 90% நலமுடன் உள்ளேன். அவர்களுக்கு என் மனமார்ந்த நன்றிகள்! (90% relief from severe back pain!)',
      badge: 'Back Pain Cure'
    },
    {
      name: 'Vij Aji',
      time: '2 years ago',
      rating: 5,
      comment: 'Doctor is very caring! Explains about disease clearly and gives remedy with Ayurveda medicine! Medicine cost also very Economical! Family Doctor!',
      badge: 'Economical & Caring'
    },
    {
      name: 'Shailendar Khandare',
      time: '2 years ago',
      rating: 5,
      comment: 'Satisfactory results from day one of treatment. Ancient science of ayurved is really very effective and useful specially without any kind of side effects.',
      badge: 'Results From Day 1'
    },
    {
      name: 'Karthibanu 197',
      time: '4 months ago',
      rating: 5,
      comment: 'Very good Hospital and Doctor is so Kind and Health conditions far better than before.',
      badge: 'Overall Wellness'
    },
    {
      name: 'Monisha Moni',
      time: '4 months ago',
      rating: 5,
      comment: 'Thankful to the doctors and staff for such genuine treatment 💚',
      badge: 'Genuine Treatment'
    },
    {
      name: 'Upendhar Sankaran',
      time: '3 years ago',
      rating: 5,
      comment: 'I am Sankaran from Villupuram. My whole family is taking treatment from Dr. Devi for the past four years. Excellent family Ayurveda hospital.',
      badge: '4+ Years Family Care'
    },
    {
      name: 'Dharani Raj',
      time: '4 years ago',
      rating: 5,
      comment: 'Treatment is good, caring is much more good because patient will like to convey their problems to doctors in regarding that your caring is fantabulous.',
      badge: 'Fantabulous Care'
    },
    {
      name: 'Vijayakumar S',
      time: 'a year ago',
      rating: 5,
      comment: 'Really an amazing experience in wonderful treatment for even complicated chronic diseases.',
      badge: 'Complicated Conditions'
    },
    {
      name: 'Karthikeyan Dhandapani',
      time: 'Local Guide',
      rating: 5,
      comment: 'Excellent aurveda treatment by an experienced Doctor. Dr. Devi madam is very kind.',
      badge: 'Experienced Doctor'
    },
    {
      name: 'Nizer Ahamed',
      time: 'Local Guide',
      rating: 5,
      comment: 'Dr. Devi well experienced doctor. Specialist in skin disease and skin care.',
      badge: 'Skin Care Specialist'
    }
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-8 sm:py-16 relative bg-[#07130b] overflow-hidden border-t border-ayurveda-gold/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ayurveda-emerald/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ayurveda-forest/50 border border-ayurveda-gold/30 text-ayurveda-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-ayurveda-gold" />
            <span>Google Reviews • 4.9 Stars Rating</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Patient Reviews & <span className="gold-text-gradient">Real Testimonials</span>
          </h2>

          {/* Rating Summary Box */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center space-x-1.5 bg-ayurveda-dark/80 px-4 py-2 rounded-xl border border-ayurveda-gold/30">
              <span className="font-extrabold text-white text-lg">4.9</span>
              <div className="flex text-ayurveda-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ayurveda-gold text-ayurveda-gold" />
                ))}
              </div>
              <span className="text-slate-400 font-medium">(39+ Google Reviews)</span>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-ayurveda-forest/40 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-ayurveda-gold border border-ayurveda-gold/30 transition-all font-bold text-xs"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              <span>{isPaused ? 'Resume Auto-Scroll' : 'Click / Hover to Pause'}</span>
            </button>
          </div>
        </div>

        {/* Continuous Left-to-Right Moving Reviews Carousel */}
        <div
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07130b] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07130b] to-transparent z-20 pointer-events-none" />

          {/* Motion Track moving continuously */}
          <motion.div
            className="flex space-x-6 w-max"
            animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 45,
                ease: 'linear'
              }
            }}
          >
            {/* Duplicated list for seamless infinite loop */}
            {[...reviews, ...reviews].map((rev, index) => (
              <div
                key={index}
                className="w-[340px] sm:w-[420px] rounded-3xl glass-card p-6 border border-ayurveda-gold/30 flex flex-col justify-between glass-card-hover shrink-0 relative group cursor-pointer"
                onClick={() => setIsPaused(!isPaused)}
              >
                <Quote className="w-10 h-10 text-ayurveda-gold/15 absolute top-5 right-5 pointer-events-none" />

                <div>
                  {/* Badge & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/40">
                      {rev.badge}
                    </span>
                    <div className="flex space-x-0.5 text-ayurveda-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-ayurveda-gold text-ayurveda-gold" />
                      ))}
                    </div>
                  </div>

                  {/* Comment text */}
                  <p className="text-sm font-sans text-slate-200 leading-relaxed mb-6 font-light">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Patient details footer */}
                <div className="border-t border-ayurveda-gold/20 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-serif font-bold text-white flex items-center group-hover:text-ayurveda-gold transition-colors">
                      {rev.name}
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 ml-1.5 shrink-0" />
                    </h4>
                    <span className="text-[11px] text-slate-400">{rev.time}</span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-bold text-ayurveda-gold/70 bg-ayurveda-dark/60 px-2 py-1 rounded border border-ayurveda-gold/20">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-8 text-xs text-slate-400">
          <p className="flex items-center justify-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-ayurveda-gold" />
            <span>Click any review card or hover over the carousel to pause scrolling.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
