import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles, Check } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up pointer-events-none">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-forest-900 text-ivory-50 shadow-2xl border border-gold-500/40 backdrop-blur-md">
        <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-medium tracking-wide">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};
