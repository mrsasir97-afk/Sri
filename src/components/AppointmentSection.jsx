import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, User, Phone, Stethoscope, Clock, CheckCircle2, MessageCircle, Send, Sparkles, X, ChevronLeft, ChevronRight, Sun, Moon, Sunrise } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppointmentSection({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Skin Care & Facials',
    date: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);

  // Calendar State
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const selectDate = (day) => {
    const formattedMonth = String(currentMonth + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const selected = `${currentYear}-${formattedMonth}-${formattedDay}`;
    setFormData({ ...formData, date: selected });
    setShowCalendarDropdown(false); // Close calendar modal/dropdown after date selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date) {
      alert('Please click the Calendar icon to pick your date!');
      return;
    }
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const sendWhatsApp = () => {
    const text = `*New Appointment Request - Sri Dhanvanthri Ayurveda Hospital*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Treatment:* ${formData.treatment}%0A*Preferred Date:* ${formData.date}%0A*Notes:* ${formData.notes || 'N/A'}`;
    window.open(`https://wa.me/918778307484?text=${text}`, '_blank');
  };

  // Render Calendar Grid inside Popup/Dropdown
  const renderCalendar = () => {
    const numDays = daysInMonth(currentMonth, currentYear);
    const startDay = firstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-9 w-9" />);
    }

    for (let day = 1; day <= numDays; day++) {
      const formattedMonth = String(currentMonth + 1).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
      const dateStr = `${currentYear}-${formattedMonth}-${formattedDay}`;

      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      const isPast =
        new Date(currentYear, currentMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

      const isSelected = formData.date === dateStr;

      days.push(
        <button
          key={day}
          type="button"
          disabled={isPast}
          onClick={() => selectDate(day)}
          className={`h-9 w-9 text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center relative ${
            isPast
              ? 'text-slate-600 cursor-not-allowed opacity-40'
              : isSelected
              ? 'bg-gradient-to-r from-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark font-extrabold shadow-lg scale-110 border-2 border-white'
              : isToday
              ? 'bg-ayurveda-forest/80 text-ayurveda-gold border border-ayurveda-gold'
              : 'hover:bg-ayurveda-gold/20 text-slate-200 hover:text-ayurveda-gold'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const formContent = (
    <div className="glass-card rounded-3xl p-5 sm:p-8 border-2 border-ayurveda-gold/50 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0f281a]/95 via-ayurveda-dark/95 to-[#09180f]/95 backdrop-blur-xl">
      <div className="text-center mb-6 flex flex-col items-center">
        <img
          src="/logo.jpeg"
          alt="Sri Dhanvanthri Ayurveda Hospital Official Badge"
          className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full shadow-xl border-2 border-ayurveda-gold/60 p-0.5 bg-ayurveda-dark"
        />
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ayurveda-gold/20 border border-ayurveda-gold/40 text-ayurveda-gold text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Appointment Booking</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
          Book Your <span className="gold-text-gradient">Ayurveda Session</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Click the Calendar Icon to select your preferred consultation date
        </p>
      </div>

      {submitted ? (
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-white">Appointment Ready!</h4>
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-ayurveda-dark/80 border border-ayurveda-gold/30 text-xs text-left space-y-2">
            <p><strong className="text-ayurveda-gold">Patient:</strong> {formData.name}</p>
            <p><strong className="text-ayurveda-gold">Phone:</strong> {formData.phone}</p>
            <p><strong className="text-ayurveda-gold">Treatment:</strong> {formData.treatment}</p>
            <p><strong className="text-ayurveda-gold">Date:</strong> {formData.date}</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={sendWhatsApp}
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Confirm via WhatsApp Now</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Change Details
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Patient Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-ayurveda-gold uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ayurveda-gold uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 99947 24910"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>
            </div>
          </div>

          {/* Treatment & Date Input with Clickable Calendar Icon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-ayurveda-gold uppercase tracking-wider mb-1.5">
                Treatment Required *
              </label>
              <div className="relative">
                <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm appearance-none bg-ayurveda-dark text-white"
                >
                  <option value="Ayurveda Skin Care & Facials">Ayurveda Skin Care (Acne, Facials, Polishing)</option>
                  <option value="Ayurveda Hair Care">Ayurveda Hair Care (Hair fall, Dandruff, Alopecia)</option>
                  <option value="Panchakarma & Abhyangam">Panchakarma Detox & Body Massage</option>
                  <option value="Leech Therapy (Jalaukavacharana)">Leech Therapy (Jalaukavacharana)</option>
                  <option value="Joint & Back Pain Management">Joint & Cervical Back Pain Management</option>
                  <option value="General Doctor Consultation">General Doctor Consultation</option>
                </select>
              </div>
            </div>

            {/* Click Calendar Icon to Open Popover Calendar */}
            <div className="relative">
              <label className="block text-xs font-bold text-ayurveda-gold uppercase tracking-wider mb-1.5">
                Preferred Date (Click Icon) *
              </label>
              <div className="relative flex items-center">
                <button
                  type="button"
                  onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                  className="p-3 rounded-l-xl bg-ayurveda-gold/20 text-ayurveda-gold border border-r-0 border-ayurveda-gold/40 hover:bg-ayurveda-gold hover:text-ayurveda-dark transition-all flex items-center justify-center shrink-0"
                  title="Click to open calendar"
                >
                  <CalendarIcon className="w-5 h-5 animate-pulse" />
                </button>
                <input
                  type="text"
                  readOnly
                  placeholder="Click calendar icon to pick date"
                  value={formData.date ? `Date Selected: ${formData.date}` : ''}
                  onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                  className="w-full pl-3 pr-4 py-3 rounded-r-xl glass-input text-sm cursor-pointer"
                />
              </div>

              {/* Center Modal Calendar Overlay when user clicks calendar icon */}
              <AnimatePresence>
                {showCalendarDropdown && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowCalendarDropdown(false)}
                    className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-[#07190f] p-5 rounded-3xl border-2 border-ayurveda-gold/60 shadow-2xl w-full max-w-sm relative"
                    >
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-ayurveda-gold/30">
                        <span className="text-sm font-serif font-bold text-white flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-2 text-ayurveda-gold" />
                          {monthNames[currentMonth]} {currentYear}
                        </span>

                        <div className="flex space-x-1.5">
                          <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="p-1.5 rounded-lg bg-ayurveda-forest/80 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-ayurveda-gold transition-all"
                            title="Previous Month"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-1.5 rounded-lg bg-ayurveda-forest/80 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-ayurveda-gold transition-all"
                            title="Next Month"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-ayurveda-gold uppercase mb-2">
                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                      </div>

                      <div className="grid grid-cols-7 gap-1.5 justify-items-center">
                        {renderCalendar()}
                      </div>

                      <div className="mt-4 pt-3 border-t border-ayurveda-gold/20 flex justify-between items-center text-xs text-slate-300">
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-ayurveda-gold inline-block mr-1.5" /> Pick a Date
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowCalendarDropdown(false)}
                          className="px-4 py-1.5 rounded-full bg-ayurveda-gold/20 hover:bg-ayurveda-gold hover:text-ayurveda-dark text-ayurveda-gold font-bold transition-all text-xs"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-ayurveda-gold uppercase tracking-wider mb-1.5">
              Additional Health Notes (Optional)
            </label>
            <textarea
              rows="2"
              placeholder="Describe your health problem or preferred time..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-ayurveda-goldLight via-ayurveda-gold to-ayurveda-goldDark text-ayurveda-dark font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-ayurveda-gold/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Confirm & WhatsApp Appointment Request</span>
          </button>
        </form>
      )}
    </div>
  );

  // Modal view if passed as popup, or embedded section if on-page
  if (isOpen !== undefined) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full my-auto rounded-3xl"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-ayurveda-dark text-ayurveda-gold border border-ayurveda-gold/40 hover:bg-ayurveda-gold hover:text-ayurveda-dark transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              {formContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <section id="appointment" className="py-20 relative bg-ayurveda-dark border-t border-ayurveda-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {formContent}
      </div>
    </section>
  );
}
