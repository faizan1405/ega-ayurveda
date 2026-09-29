import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    showToast('Namaste! You have joined the EGA Ayurveda Ritual Circle.');
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28 bg-ivory-50 bg-grain border-b border-sage-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-forest-900 border border-gold-500/30 text-xs font-serif uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>The Mindful Dispatch</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-light text-forest-950 tracking-tight">
          A little Ayurveda in your inbox.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-forest-800/70 font-light max-w-lg mx-auto">
          Wellness rituals, ingredient stories, seasonal Ritucharya guides, and exclusive small-batch releases.
        </p>

        {/* Subscription Form */}
        <div className="mt-8 max-w-md mx-auto">
          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-center gap-2 animate-scale-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium tracking-wide">
                Welcome to the ritual circle. We have sent your welcome guide.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-sage-200 focus:border-forest-800 focus:outline-hidden text-xs sm:text-sm text-forest-950 placeholder:text-sage-400 shadow-xs transition-colors"
                />
              </div>

              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-forest-850 hover:shadow-md transition-all shrink-0"
              >
                Join The Ritual
              </button>
            </form>
          )}

          <p className="mt-3 text-[11px] text-forest-700/50 font-light">
            We honor your privacy with sacred respect. Unsubscribe anytime with a single click.
          </p>
        </div>

      </div>
    </section>
  );
};
