import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, HeartPulse, Sparkles, CheckCircle2, Shield, Leaf, Clock, MapPin } from 'lucide-react';

export default function DoctorAboutSection() {
  return (
    <section id="doctor" className="py-8 sm:py-16 relative overflow-hidden bg-ayurveda-dark border-t border-ayurveda-gold/10">
      {/* Background glow circle */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-ayurveda-forest/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <img
            src="/logo.jpeg"
            alt="Sri Dhanvanthri Hospital Official Seal"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full shadow-2xl border-2 border-ayurveda-gold/60 p-0.5 bg-ayurveda-dark hover:scale-105 transition-transform duration-300"
          />
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ayurveda-forest/40 border border-ayurveda-gold/30 text-ayurveda-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rooted in Ancient Wisdom & Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Meet Our Chief Physician <br />
            <span className="gold-text-gradient">Dr. M. Devi</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light">
            Guiding thousands toward holistic health and natural rejuvenation through authentic, time-tested Ayurveda science since 2011.
          </p>
        </div>

        {/* Profile Card & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Image & Profile Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-ayurveda-gold via-ayurveda-emerald to-ayurveda-gold opacity-30 group-hover:opacity-60 blur-lg transition duration-500" />
              <div className="relative rounded-2xl glass-card overflow-hidden p-6 border border-ayurveda-gold/30">
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-[4/5] bg-ayurveda-forest/20">
                  <img
                    src="/doctor_consultation.png"
                    alt="Dr. M. Devi Consultation Desk & Clinic - Sri Dhanvanthri Ayurveda Hospital"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 image-render-crisp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ayurveda-dark via-transparent to-transparent opacity-60" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-white">Dr. M. Devi</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/40">
                      B.A.M.S.
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-500/40">
                      C.C.P.T. (Panchakarma & Wellness)
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 flex items-center pt-2">
                    <MapPin className="w-4 h-4 mr-1 text-ayurveda-gold shrink-0" />
                    Sri Dhanvanthri Ayurveda Hospital, Villupuram
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Doctor Details & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Dedicated to Pure Ayurveda Healing & Patient Welfare
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Dr. M. Devi is a distinguished Ayurveda Practitioner with expertise in traditional Panchakarma therapies, skin disease management, anti-hair loss protocols, and chronic pain alleviation.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Her personalized approach integrates classic Dosha analysis (Vata, Pitta, Kapha) with customized herbal formulations and authentic therapeutic regimens to target the root cause of illnesses rather than merely suppressing symptoms.
              </p>
            </div>

            {/* Experience & Certifications Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-card border border-ayurveda-gold/20 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-ayurveda-gold/20 text-ayurveda-gold shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">13+ Years Experience</h4>
                  <p className="text-xs text-slate-400">Serving Villupuram and surrounding regions with high clinical success rates.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-ayurveda-gold/20 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Panchakarma Expert</h4>
                  <p className="text-xs text-slate-400">Certified in traditional detoxification and rejuvenation techniques.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-ayurveda-gold/20 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-ayurveda-gold/20 text-ayurveda-gold shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Skin & Hair Specialist</h4>
                  <p className="text-xs text-slate-400">Natural formulations for acne, psoriasis, hair fall, dandruff & alopecia.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-ayurveda-gold/20 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Patient-Centric Care</h4>
                  <p className="text-xs text-slate-400">Individual dietary guidance and lifestyle counseling for long-term health.</p>
                </div>
              </div>
            </div>

            {/* Specialization List */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-ayurveda-gold uppercase tracking-wider mb-3">Core Expertise & Treatments</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Panchakarma Detox',
                  'Skin & Face Polishing',
                  'Hair Fall Control',
                  'Joint & Back Pain Relief',
                  'Stress Relief Therapy',
                  'Leech Therapy (Jalaukavacharana)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs text-slate-200 bg-ayurveda-forest/30 border border-ayurveda-gold/10 px-3 py-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ayurveda-gold mr-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
