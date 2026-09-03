import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sparkle, ShieldCheck, Heart, Leaf, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ onBookClick }) {
  const [activeTab, setActiveTab] = useState('skin');

  const categories = [
    { id: 'skin', title: 'Ayurveda Skin Care', icon: Sparkles, color: 'from-amber-500/20 to-yellow-600/10' },
    { id: 'hair', title: 'Ayurveda Hair Care', icon: Sparkle, color: 'from-emerald-500/20 to-teal-600/10' },
    { id: 'therapies', title: 'Ayurveda Therapies', icon: Leaf, color: 'from-green-600/20 to-emerald-700/10' },
  ];

  const treatmentsData = {
    skin: {
      image: '/diseases.png',
      badge: 'Skin Glow & Dermatology',
      title: 'Authentic Ayurveda Skin Care',
      desc: 'Revitalize your skin with herbal extractions, natural facials, and deep skin detox therapies designed to cure acne, blemishes, and premature aging naturally without chemicals.',
      treatments: [
        { name: 'Pimple Treatment', desc: 'Root-cause blood purification for persistent acne & pimples.' },
        { name: 'Ayurveda Facials', desc: 'Herbal facials infused with saffron, sandalwood & rare herbs.' },
        { name: 'Skin Tan Removal', desc: 'Natural de-tanning and skin tone brightening treatments.' },
        { name: 'Anti Aging Treatment', desc: 'Cellular rejuvenation for firm, glowing & youthful skin.' },
        { name: 'Dark Spots Treatment', desc: 'Targeted herbal packs to remove hyperpigmentation & spots.' },
        { name: 'Face & Body Polishing', desc: 'Exfoliation therapy using herbal scrub powders for silky skin.' },
        { name: 'Dark Circle Treatment', desc: 'Under-eye herbal compresses & nourishment.' },
      ]
    },
    hair: {
      image: '/medicine.png',
      badge: 'Trichology & Scalp Rejuvenation',
      title: 'Ayurveda Hair & Scalp Care',
      desc: 'Formulated with traditional oils and herbal decoctions, our hair treatments restore hair roots, eliminate stubborn scalp infections, and trigger natural regrowth.',
      treatments: [
        { name: 'Hair Fall Treatment', desc: 'Strengthen hair follicles with medicated Shirodhara & herbs.' },
        { name: 'Dandruff Treatment', desc: 'Anti-fungal herbal scalp washes to clear flakes permanently.' },
        { name: 'Grey Hair Treatment', desc: 'Ayurveda therapies to delay premature greying naturally.' },
        { name: 'Hair Conditioning', desc: 'Deep nourishment with herbal oils and leaf extracts.' },
        { name: 'Ayurveda Hair Spa', desc: 'Relaxing head massage & herbal steam for ultimate root strength.' },
        { name: 'Alopecia Treatment', desc: 'Targeted hair follicle stimulation therapies.' },
      ]
    },
    therapies: {
      image: '/panchakarma_table.png',
      badge: 'Panchakarma & Wellness',
      title: 'Ayurveda Therapies & Panchakarma',
      desc: 'Complete detoxifying and pain-relieving therapies conducted by skilled therapists under the direct supervision of Dr. M. Devi.',
      treatments: [
        { name: 'Panchakarma', desc: 'Five-fold systemic purification & body detoxification therapy.' },
        { name: 'Abhyangam', desc: 'Full-body synchronized warm herbal oil rejuvenation massage.' },
        { name: 'Podi Kizhi', desc: 'Herbal powder poultice therapy for joint stiffness & arthritis.' },
        { name: 'Elakizhi', desc: 'Fresh herbal leaf poultice massage for muscle & spinal pain.' },
        { name: 'Pain Management', desc: 'Dedicated care for cervical spondylosis, sciatica & back pain.' },
        { name: 'Leech Therapy (Jalaukavacharana)', desc: 'Purify blood and relieve chronic skin ulcers & varicose veins.' },
        { name: 'Stress Relief & Detox', desc: 'Mental calm, insomnia relief & full body vitality reboot.' },
      ]
    }
  };

  const currentCategory = treatmentsData[activeTab];

  return (
    <section id="services" className="py-8 sm:py-16 relative bg-[#09180f] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ayurveda-forest/50 border border-ayurveda-gold/30 text-ayurveda-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-ayurveda-gold" />
            <span>Specialized Holistic Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Our Traditional <span className="gold-text-gradient">Ayurveda Services</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Comprehensive Ayurveda solutions customized for your body type (Prakriti) and specific health requirements.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass-card border border-ayurveda-gold/30 space-x-1 sm:space-x-2 overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark shadow-lg shadow-ayurveda-gold/20 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-ayurveda-forest/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-ayurveda-dark' : 'text-ayurveda-gold'}`} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Service Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Category Highlight Card */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-6 border border-ayurveda-gold/30 relative overflow-hidden group">
                <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ayurveda-dark via-ayurveda-dark/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-ayurveda-dark/80 text-ayurveda-gold border border-ayurveda-gold/40 backdrop-blur-md">
                    {currentCategory.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-3">{currentCategory.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{currentCategory.desc}</p>
                
                <button
                  onClick={onBookClick}
                  className="w-full py-3 bg-gradient-to-r from-ayurveda-gold/20 to-ayurveda-emerald/30 hover:from-ayurveda-gold hover:to-ayurveda-goldDark text-ayurveda-gold hover:text-ayurveda-dark border border-ayurveda-gold/40 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Book Consult for {currentCategory.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Treatment Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentCategory.treatments.map((treatment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl glass-card glass-card-hover border border-ayurveda-gold/20 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-ayurveda-forest/60 text-ayurveda-gold group-hover:bg-ayurveda-gold group-hover:text-ayurveda-dark transition-colors duration-300 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-white group-hover:text-ayurveda-goldLight transition-colors">
                        {treatment.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 font-light leading-normal">
                        {treatment.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
