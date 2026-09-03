import React from 'react';
import { Sparkles, ShieldCheck, Heart, Leaf, Award, Clock, Users, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Since 2011 Trusted Care',
      desc: '13+ years of clinical excellence in Villupuram with high patient satisfaction & recovery rate.'
    },
    {
      icon: ShieldCheck,
      title: 'Experienced Doctor',
      desc: 'Supervised directly by Dr. M. Devi (B.A.M.S., C.C.P.T.) for accurate Nadi diagnosis.'
    },
    {
      icon: Heart,
      title: 'Personalized Treatment',
      desc: 'Individualized herbal medicine formulations tailored to your Prakriti body constituent.'
    },
    {
      icon: Leaf,
      title: 'Natural & Safe Therapies',
      desc: '100% pure Ayurveda formulations, herbal oils, and organic plant extracts without side-effects.'
    },
    {
      icon: Users,
      title: 'Holistic Healing Approach',
      desc: 'Harmonizing mind, body, and soul through classic Panchakarma & dietary lifestyle guidance.'
    },
    {
      icon: Flame,
      title: 'Modern Facilities',
      desc: 'Hygienic, comfortable therapy rooms combined with authentic traditional Vedic wisdom.'
    }
  ];

  return (
    <section id="whyus" className="py-8 sm:py-16 relative bg-ayurveda-dark border-t border-ayurveda-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ayurveda-forest/50 border border-ayurveda-gold/30 text-ayurveda-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-ayurveda-gold" />
            <span>Why Patients Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Why Choose <span className="gold-text-gradient">Sri Dhanvanthri?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light">
            Combining timeless Vedic healing principles with medical precision and compassionate care.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl glass-card glass-card-hover border border-ayurveda-gold/25 relative group overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-6 text-4xl font-serif font-extrabold text-ayurveda-gold/10 group-hover:text-ayurveda-gold/20 transition-colors">
                  0{idx + 1}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-ayurveda-forest/60 text-ayurveda-gold flex items-center justify-center mb-6 border border-ayurveda-gold/30 group-hover:bg-ayurveda-gold group-hover:text-ayurveda-dark transition-all duration-300 shadow-lg">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-ayurveda-goldLight transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
