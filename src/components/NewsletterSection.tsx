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
    showToast('Namaste! You have joined the TOP Ayurveda Ritual Circle.');
  };

  return (
    <section id="newsletter" className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-200/60 text-stone-900 border border-stone-300 text-xs font-serif uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>The Mindful Dispatch</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
          Begin Your Wellness Ritual
        </h2>

        <p className="mt-3 text-sm sm:text-base text-stone-600 font-light max-w-lg mx-auto">
          Get updates, wellness tips and exclusive product offers delivered thoughtfully to your inbox.
        </p>

        {/* Subscription Form */}
        <div className="mt-8 max-w-md mx-auto">
          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-center gap-2 animate-scale-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium tracking-wide">
                Welcome to our ritual circle. We have dispatched your welcome guide.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-stone-200 focus:border-stone-800 focus:outline-hidden text-xs sm:text-sm text-stone-950 placeholder:text-stone-400 shadow-xs transition-colors"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-stone-900 hover:shadow-md transition-all shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-3 text-[11px] text-stone-500 font-light">
            We honor your privacy with sacred respect. Unsubscribe anytime with a single click.
          </p>
        </div>

      </div>
    </section>
  );
};
