import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ExpertBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExpertBookingModal: React.FC<ExpertBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { showToast } = useCart();
  const [booked, setBooked] = useState(false);
  const [consultType, setConsultType] = useState<'video' | 'whatsapp'>('video');
  const [date, setDate] = useState('Tomorrow, 11:30 AM');
  const [name, setName] = useState('Sunita Sen');
  const [phone, setPhone] = useState('+91 98200 12345');
  const [focusArea, setFocusArea] = useState('Stress, Sleep & Nervous Vitality');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    showToast('Consultation confirmed! Our Vaidya will connect at the chosen time.');
  };

  const handleClose = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg bg-ivory-50 rounded-3xl shadow-2xl border border-sage-200 overflow-hidden z-10 animate-scale-in">
        
        {/* Header */}
        <div className="p-5 border-b border-sage-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-medium text-forest-950">
              Personalized Vaidya Consultation
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-forest-800 hover:text-forest-950 hover:bg-sage-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {booked ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl font-normal text-forest-950">
              Appointment Scheduled
            </h3>

            <p className="text-xs text-forest-800/80 leading-relaxed font-light">
              Your 15-minute diagnostic call with Senior Vaidya Dr. Rajesh Sharma has been reserved for <strong>{date}</strong>. A private video link has been shared via WhatsApp and SMS to <strong>{phone}</strong>.
            </p>

            <button
              onClick={handleClose}
              className="mt-4 px-8 py-3 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-wider font-semibold hover:bg-forest-850"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-sage-200">
              <img
                src="https://images.unsplash.com/photo-1594824813511-13c5717757ee?auto=format&fit=crop&w=200&q=80"
                alt="Ayurvedic Doctor"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <h4 className="font-serif text-sm font-semibold text-forest-950">
                  Dr. Rajesh Sharma (BAMS, MD Ayu)
                </h4>
                <p className="text-[11px] text-forest-700/70 font-light">
                  Chief Ayurvedic Consultant • 18+ Years Classical Practice
                </p>
              </div>
            </div>

            <div>
              <label className="text-xs font-serif uppercase tracking-wider text-forest-900 font-semibold block mb-2">
                Primary Wellness Focus
              </label>
              <select
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sage-200 text-xs text-forest-950 focus:border-forest-800 focus:outline-hidden"
              >
                <option value="Stress, Sleep & Nervous Vitality">Stress, Sleep & Nervous Vitality (Nervega)</option>
                <option value="Deep Immunity & Longevity">Deep Immunity & Longevity (Swarna Chyawanprash)</option>
                <option value="Cellular Detox & Blood Purity">Cellular Detox & Blood Purity (Nano Giloy)</option>
                <option value="Gut Fire & Digestive Health">Gut Fire & Digestive Health (Wild Amla)</option>
                <option value="Skin Radiance & Ageless Glow">Skin Radiance & Ageless Glow (Kumkumadi)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-serif uppercase tracking-wider text-forest-900 font-semibold block mb-2">
                  Format
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultType('video')}
                    className={`flex-1 p-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 ${
                      consultType === 'video' ? 'bg-forest-900 text-ivory-50 border-forest-900' : 'bg-white border-sage-200 text-forest-900'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultType('whatsapp')}
                    className={`flex-1 p-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 ${
                      consultType === 'whatsapp' ? 'bg-forest-900 text-ivory-50 border-forest-900' : 'bg-white border-sage-200 text-forest-900'
                    }`}
                  >
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-serif uppercase tracking-wider text-forest-900 font-semibold block mb-2">
                  Slot
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-sage-200 text-xs text-forest-950 focus:border-forest-800"
                >
                  <option value="Tomorrow, 11:30 AM">Tomorrow, 11:30 AM</option>
                  <option value="Tomorrow, 04:00 PM">Tomorrow, 04:00 PM</option>
                  <option value="In 2 Days, 10:00 AM">In 2 Days, 10:00 AM</option>
                  <option value="In 2 Days, 06:30 PM">In 2 Days, 06:30 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-serif uppercase tracking-wider text-forest-900 font-semibold block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-sage-200 text-xs text-forest-950"
                />
              </div>
              <div>
                <label className="text-xs font-serif uppercase tracking-wider text-forest-900 font-semibold block mb-1">
                  Mobile / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-sage-200 text-xs text-forest-950"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-forest-850 shadow-md transition-all"
              >
                Confirm Complimentary Consultation
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
