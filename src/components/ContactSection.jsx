import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  ExternalLink,
  UserCheck,
} from 'lucide-react';

/**
 * ============================================================
 * SRI DHANVANTHRI AYURVEDA HOSPITAL
 * Contact + Location Section
 * ============================================================
 *
 * IMPORTANT:
 * 1. The Google Maps Embed API key must be stored in .env
 * 2. Do NOT hard-code the API key in this component.
 *
 * Vite:
 * VITE_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
 *
 * ============================================================
 */

// ------------------------------------------------------------
// Hospital Location Configuration
// ------------------------------------------------------------

const HOSPITAL = {
  name: 'Sri Dhanvanthri Ayurveda Hospital',

  address: {
    line1: '27, Sankaramadam Street',
    line2: 'Fathima Layout, Viluppuram',
    line3: 'Tamil Nadu – 605602, India',
  },

  shortAddress:
    '27, Sankaramadam Street, Fathima Layout, Viluppuram, Tamil Nadu 605602',

  landmark: 'West Hanumar Kovil Street / Villupuram Head Post Office area',

  phone1: '8778307484',
  phone2: '9994724910',

  whatsapp:
    'https://wa.me/918778307484?text=Hello%20Dr.%20M.%20Devi,%20I%20would%20like%20to%20consult%20at%20Sri%20Dhanvanthri%20Ayurveda%20Hospital.',

  // Google Maps destination
  mapsDestination:
    'Sri Dhanvanthri Ayurveda Hospital, 27, Sankaramadam Street, Fathima Layout, Viluppuram, Tamil Nadu 605602',
};

// ------------------------------------------------------------
// Google Maps Embed URL
// ------------------------------------------------------------

const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const googleMapsEmbedUrl = GOOGLE_MAPS_API_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
      GOOGLE_MAPS_API_KEY
    )}&q=${encodeURIComponent(HOSPITAL.mapsDestination)}&zoom=17&maptype=roadmap`
  : '';


// ------------------------------------------------------------
// Google Maps Directions URL
// ------------------------------------------------------------

const googleMapsDirectionsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    HOSPITAL.mapsDestination
  )}`;


// ------------------------------------------------------------
// Component
// ------------------------------------------------------------

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-8 sm:py-16 relative bg-[#07130b] border-t border-ayurveda-gold/10 overflow-hidden"
    >
      {/* =====================================================
          Background Glow
          ===================================================== */}

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-ayurveda-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />


      {/* =====================================================
          Main Container
          ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        {/* ===================================================
            Header
            =================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-14">

          <div
            className="
              inline-flex items-center space-x-2
              px-4 py-1.5
              rounded-full
              bg-ayurveda-forest/60
              border border-ayurveda-gold/40
              text-ayurveda-gold
              text-xs font-bold uppercase tracking-wider
              mb-3
              backdrop-blur-md
              shadow-lg
            "
          >
            <MapPin className="w-3.5 h-3.5" />

            <span>
              Villupuram Premier Healthcare Destination
            </span>
          </div>


          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Contact &{' '}
            <span className="gold-text-gradient">
              Hospital Location
            </span>
          </h2>


          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Reach out to Sri Dhanvanthri Ayurveda Hospital for expert
            consultations, specialized Panchakarma therapies, and authentic
            in-house herbal pharmacy guidance.
          </p>

        </div>



        {/* ===================================================
            Doctor Information Banner
            =================================================== */}

        <div
          className="
            mb-10
            p-4 sm:p-6
            rounded-3xl
            glass-card
            border border-ayurveda-gold/40
            bg-gradient-to-r
            from-ayurveda-dark
            via-[#0f2d1c]
            to-ayurveda-dark
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-4 sm:gap-6
            shadow-xl
            overflow-hidden
            w-full
          "
        >

          {/* Doctor Info */}

          <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">

            <div
              className="
                w-12 h-12 sm:w-14 sm:h-14
                rounded-2xl
                bg-ayurveda-gold/20
                text-ayurveda-gold
                border border-ayurveda-gold/40
                flex items-center justify-center
                shrink-0
              "
            >
              <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-ayurveda-gold" />
            </div>


            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">

                <h3 className="text-base sm:text-lg font-serif font-bold text-white truncate">
                  Dr. M. Devi
                </h3>

                <span
                  className="
                    px-2 py-0.5
                    rounded-full
                    text-[9px] sm:text-[10px]
                    font-bold
                    bg-ayurveda-gold/20
                    text-ayurveda-gold
                    border border-ayurveda-gold/40
                    shrink-0
                  "
                >
                  B.A.M.S., C.C.P.T.
                </span>

              </div>


              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 leading-snug">
                Reg. No: 765/A • Chief Ayurveda Physician & Specialist
                (13+ Yrs Exp.)
              </p>

            </div>

          </div>



          {/* Doctor Contact Buttons */}

          <div
            className="
              flex items-center
              gap-2.5 sm:gap-3
              w-full md:w-auto
              pt-1 md:pt-0
            "
          >

            {/* Call */}

            <a
              href={`tel:${HOSPITAL.phone1}`}
              className="
                flex-1 md:flex-none
                px-3.5 sm:px-6
                py-2.5 sm:py-3
                rounded-full
                bg-gradient-to-r
                from-ayurveda-gold
                to-ayurveda-goldDark
                text-ayurveda-dark
                font-extrabold
                text-[11px] sm:text-xs
                uppercase tracking-wider
                shadow-lg
                hover:scale-105
                transition-all
                flex items-center
                justify-center
                space-x-1.5 sm:space-x-2
                shrink-0
              "
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />

              <span className="whitespace-nowrap">
                Call Doctor
              </span>
            </a>


            {/* WhatsApp */}

            <a
              href={HOSPITAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 md:flex-none
                px-3.5 sm:px-6
                py-2.5 sm:py-3
                rounded-full
                bg-emerald-900/50
                hover:bg-emerald-800/80
                text-emerald-300
                border border-emerald-500/50
                font-bold
                text-[11px] sm:text-xs
                uppercase tracking-wider
                backdrop-blur-md
                transition-all
                flex items-center
                justify-center
                space-x-1.5 sm:space-x-2
                hover:scale-105
                shrink-0
              "
            >
              <MessageCircle
                className="
                  w-3.5 h-3.5
                  sm:w-4 sm:h-4
                  text-emerald-400
                  shrink-0
                "
              />

              <span className="whitespace-nowrap">
                WhatsApp
              </span>
            </a>

          </div>

        </div>



        {/* ===================================================
            Contact + Map Grid
            =================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">


          {/* =================================================
              LEFT SIDE — CONTACT INFORMATION
              ================================================= */}

          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">


            {/* =================================================
                ADDRESS CARD
                ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                p-6
                rounded-2xl
                glass-card
                border border-ayurveda-gold/30
                flex items-start
                space-x-4
              "
            >

              <div
                className="
                  p-3
                  rounded-xl
                  bg-ayurveda-gold/20
                  text-ayurveda-gold
                  shrink-0
                  border border-ayurveda-gold/40
                "
              >
                <MapPin className="w-6 h-6" />
              </div>


              <div className="min-w-0">

                <h4 className="text-lg font-serif font-bold text-white mb-1">
                  Hospital Address
                </h4>


                <p className="text-sm text-slate-300 leading-relaxed font-light">

                  {HOSPITAL.name}
                  <br />

                  {HOSPITAL.address.line1}
                  <br />

                  {HOSPITAL.address.line2}
                  <br />

                  {HOSPITAL.address.line3}

                </p>


                <div className="mt-3 inline-flex items-center text-xs font-bold text-ayurveda-gold">

                  <span>
                    Landmark: {HOSPITAL.landmark}
                  </span>

                </div>

              </div>

            </motion.div>



            {/* =================================================
                PHONE CARD
                ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                p-6
                rounded-2xl
                glass-card
                border border-ayurveda-gold/30
                flex items-start
                space-x-4
              "
            >

              <div
                className="
                  p-3
                  rounded-xl
                  bg-emerald-500/20
                  text-emerald-400
                  shrink-0
                  border border-emerald-500/40
                "
              >
                <Phone className="w-6 h-6" />
              </div>


              <div>

                <h4 className="text-lg font-serif font-bold text-white mb-1">
                  Click-To-Call Phone
                </h4>


                <p className="text-xs text-slate-400 mb-3">
                  Available for consultations & emergency appointments
                </p>


                <div className="flex flex-wrap gap-3">


                  {/* Phone 1 */}

                  <a
                    href={`tel:${HOSPITAL.phone1}`}
                    className="
                      px-4 py-2
                      rounded-xl
                      bg-ayurveda-forest/60
                      hover:bg-ayurveda-gold
                      hover:text-ayurveda-dark
                      text-white
                      text-xs
                      font-bold
                      border border-ayurveda-gold/30
                      transition-all
                      flex items-center
                      space-x-2
                    "
                  >
                    <Phone className="w-3.5 h-3.5" />

                    <span>
                      87783 07484
                    </span>
                  </a>


                  {/* Phone 2 */}

                  <a
                    href={`tel:${HOSPITAL.phone2}`}
                    className="
                      px-4 py-2
                      rounded-xl
                      bg-ayurveda-forest/60
                      hover:bg-ayurveda-gold
                      hover:text-ayurveda-dark
                      text-white
                      text-xs
                      font-bold
                      border border-ayurveda-gold/30
                      transition-all
                      flex items-center
                      space-x-2
                    "
                  >
                    <Phone className="w-3.5 h-3.5" />

                    <span>
                      99947 24910
                    </span>
                  </a>

                </div>

              </div>

            </motion.div>



            {/* =================================================
                CONSULTATION HOURS
                ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                p-6
                rounded-2xl
                glass-card
                border border-ayurveda-gold/30
                flex items-start
                space-x-4
              "
            >

              <div
                className="
                  p-3
                  rounded-xl
                  bg-ayurveda-gold/20
                  text-ayurveda-gold
                  shrink-0
                  border border-ayurveda-gold/40
                "
              >
                <Clock className="w-6 h-6" />
              </div>


              <div>

                <h4 className="text-lg font-serif font-bold text-white mb-1">
                  Consultation Hours
                </h4>


                <div className="text-xs text-slate-300 space-y-1 mt-1">

                  <span className="block font-medium">

                    <strong className="text-ayurveda-gold">
                      Mon – Sat:
                    </strong>{' '}

                    Morning 10:00 AM – 12:00 PM | Evening
                    5:00 PM – 8:00 PM

                  </span>


                  <span
                    className="
                      block
                      text-amber-400/90
                      font-semibold
                      flex items-center
                    "
                  >

                    <span
                      className="
                        w-2 h-2
                        rounded-full
                        bg-amber-400
                        inline-block
                        mr-1.5
                        animate-pulse
                      "
                    />

                    Sunday: Holiday

                  </span>

                </div>

              </div>

            </motion.div>

          </div>



          {/* =================================================
              RIGHT SIDE — MAP
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="
              lg:col-span-7
              rounded-3xl
              glass-card
              border border-ayurveda-gold/30
              overflow-hidden
              flex flex-col
              relative
            "
          >


            {/* =================================================
                DIRECTION SIGNBOARD
                ================================================= */}

            <div
              className="
                relative
                group
                overflow-hidden
                border-b border-ayurveda-gold/30
                bg-black/40
              "
            >

              <img
                src="/direction_board.png"
                alt="Sri Dhanvanthri Ayurveda Hospital Direction Signboard"
                className="
                  w-full
                  h-64 sm:h-72
                  object-cover
                  object-center
                  group-hover:scale-105
                  transition-transform
                  duration-700
                  image-render-crisp
                  filter brightness-105
                "
              />


              {/* Overlay */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-ayurveda-dark
                  via-ayurveda-dark/40
                  to-transparent
                "
              />


              {/* =================================================
                  SIGNBOARD INFO + DIRECTIONS
                  ================================================= */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  p-4
                  rounded-2xl
                  glass-card
                  border border-ayurveda-gold/40
                  backdrop-blur-md
                "
              >

                <div className="flex items-center space-x-3">

                  <div
                    className="
                      p-2.5
                      rounded-xl
                      bg-ayurveda-gold/20
                      text-ayurveda-gold
                      border border-ayurveda-gold/40
                    "
                  >
                    <Navigation className="w-5 h-5 animate-pulse" />
                  </div>


                  <div>

                    <h4 className="text-sm font-bold text-white">
                      Hospital Street Signboard
                    </h4>

                    <p className="text-xs text-ayurveda-goldLight font-medium">
                      27, Sankaramadam Street, Viluppuram
                    </p>

                  </div>

                </div>


                {/* Get Directions */}

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Sri Dhanvanthri Ayurveda Hospital"
                  className="
                    px-5 py-2.5
                    rounded-full
                    bg-gradient-to-r
                    from-ayurveda-gold
                    via-ayurveda-goldLight
                    to-ayurveda-gold
                    text-ayurveda-dark
                    font-extrabold
                    text-xs
                    uppercase
                    tracking-wider
                    shadow-lg
                    hover:scale-105
                    active:scale-95
                    transition-all
                    flex items-center
                    justify-center
                    space-x-2
                    shrink-0
                  "
                >

                  <Navigation className="w-4 h-4" />

                  <span>
                    Get Directions
                  </span>

                  <ExternalLink className="w-3.5 h-3.5" />

                </a>

              </div>

            </div>



            {/* =================================================
                MAP HEADER
                ================================================= */}

            <div
              className="
                p-3
                bg-ayurveda-dark/90
                border-b border-ayurveda-gold/20
                flex justify-between
                items-center
                px-4
              "
            >

              <div className="flex items-center space-x-2">

                <MapPin className="w-4 h-4 text-ayurveda-gold" />

                <span
                  className="
                    text-xs
                    font-bold
                    text-white
                    uppercase
                    tracking-wider
                  "
                >
                  Interactive Live Navigation Map
                </span>

              </div>


              {/* External Navigation */}

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs
                  text-ayurveda-gold
                  hover:underline
                  flex items-center
                  space-x-1
                  font-bold
                "
              >

                <span>
                  Navigate to Clinic
                </span>

                <ExternalLink className="w-3.5 h-3.5" />

              </a>

            </div>



            {/* =================================================
                GOOGLE MAP
                ================================================= */}

            <div className="w-full relative h-64 sm:h-72 bg-[#e5e7eb]">


              {googleMapsEmbedUrl ? (

                <iframe
                  title="Sri Dhanvanthri Ayurveda Hospital Map Location"
                  src={googleMapsEmbedUrl}
                  className="
                    w-full
                    h-full
                    border-0
                    absolute
                    inset-0
                  "
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

              ) : (

                /* =================================================
                   API KEY NOT CONFIGURED FALLBACK
                   ================================================= */

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-6
                    bg-gradient-to-br
                    from-[#0b1f13]
                    to-[#07130b]
                  "
                >

                  <div
                    className="
                      w-14 h-14
                      rounded-full
                      bg-ayurveda-gold/15
                      border border-ayurveda-gold/30
                      flex items-center
                      justify-center
                      mb-4
                    "
                  >
                    <MapPin className="w-6 h-6 text-ayurveda-gold" />
                  </div>


                  <h4 className="text-white font-serif text-lg font-bold">
                    Hospital Location
                  </h4>


                  <p className="text-slate-400 text-xs mt-2 max-w-md leading-relaxed">
                    {HOSPITAL.shortAddress}
                  </p>


                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      px-5 py-2.5
                      rounded-full
                      bg-ayurveda-gold
                      text-ayurveda-dark
                      font-bold
                      text-xs
                      uppercase
                      tracking-wider
                      hover:scale-105
                      transition-transform
                      flex items-center
                      gap-2
                    "
                  >
                    <Navigation className="w-4 h-4" />

                    Open Google Maps

                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </div>

              )}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}