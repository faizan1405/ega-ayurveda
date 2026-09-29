import React, { useState, useEffect } from 'react';
import { Product, BotanicalIngredient } from '../types';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  ingredients: BotanicalIngredient[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  ingredients,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingProducts = cleanQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.sanskritName.toLowerCase().includes(cleanQuery) ||
          p.shortPurpose.toLowerCase().includes(cleanQuery) ||
          p.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingIngredients = cleanQuery
    ? ingredients.filter(
        (ing) =>
          ing.name.toLowerCase().includes(cleanQuery) ||
          ing.sanskritName.toLowerCase().includes(cleanQuery) ||
          ing.botanicalName.toLowerCase().includes(cleanQuery)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 sm:pt-28 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-ivory-50 rounded-3xl shadow-2xl border border-sage-200 overflow-hidden z-10 animate-scale-in">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-sage-200 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-forest-800 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by botanical name, health goal, gold, silver, amla..."
            className="flex-1 bg-transparent border-none text-sm sm:text-base text-forest-950 placeholder:text-sage-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-sage-400 hover:text-forest-900"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-forest-700 hover:bg-sage-100 text-xs uppercase tracking-wider font-semibold"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
          {!cleanQuery ? (
            <div className="space-y-4">
              <span className="text-[10px] font-serif uppercase tracking-widest text-forest-700 font-semibold block">
                Popular Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {['Swarna Bhasma', 'Rajata Bhasma', 'Kashmiri Saffron', 'Wild Amla', 'Giloy', 'Sleep & Nervous Vitality', 'Collagen & Agni'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-full bg-white border border-sage-200 text-xs text-forest-900 hover:border-gold-500 hover:bg-ivory-100 transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : matchingProducts.length === 0 && matchingIngredients.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-sm font-serif text-forest-950">No classical matches found for “{query}”</p>
              <p className="text-xs text-forest-700/60 mt-1">Try searching for ‘Gold’, ‘Amla’, ‘Giloy’ or ‘Nervega’</p>
            </div>
          ) : (
            <>
              {matchingProducts.length > 0 && (
                <div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-forest-700 font-semibold block mb-3">
                    Matching Formulations ({matchingProducts.length})
                  </span>
                  <div className="space-y-2.5">
                    {matchingProducts.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          onClose();
                          onSelectProduct(prod);
                        }}
                        className="p-3 rounded-2xl bg-white border border-sage-200/80 hover:border-gold-500/50 shadow-xs flex items-center justify-between gap-4 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-serif text-sm font-medium text-forest-950">
                              {prod.name}
                            </h4>
                            <p className="text-[11px] text-forest-700/70 truncate max-w-xs">
                              {prod.shortPurpose}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-serif text-xs font-semibold text-forest-950">
                            ₹{prod.price.toLocaleString('en-IN')}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-forest-700" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingIngredients.length > 0 && (
                <div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-forest-700 font-semibold block mb-3">
                    Botanical Monograph Matches ({matchingIngredients.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchingIngredients.map((ing) => (
                      <div
                        key={ing.id}
                        className="p-3 rounded-2xl bg-white border border-sage-200 flex items-center gap-3"
                      >
                        <img
                          src={ing.image}
                          alt={ing.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-serif text-xs font-semibold text-forest-950">
                            {ing.name}
                          </h5>
                          <span className="text-[10px] text-forest-700 italic block">
                            {ing.sanskritName}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
