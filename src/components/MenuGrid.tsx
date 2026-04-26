import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tags: string[];
  signature?: boolean;
  featured?: boolean;
  featuredIn?: string;
  tier?: 'green' | 'red' | 'gold' | 'special';
}

interface MenuGridProps {
  items: MenuItem[];
  activeCategory: string;
}

const tierConfig = {
  green: {
    dot: 'bg-wasabi-green',
    bg: 'bg-wasabi-green/10',
    text: 'text-wasabi-green',
    label: 'RM 1.90',
    name: 'Green'
  },
  red: {
    dot: 'bg-salmon-red',
    bg: 'bg-salmon-red/10',
    text: 'text-salmon-red',
    label: 'RM 3.90',
    name: 'Red'
  },
  gold: {
    dot: 'bg-gold',
    bg: 'bg-gold/10',
    text: 'text-gold',
    label: 'RM 5.90+',
    name: 'Gold'
  },
  special: {
    dot: 'bg-monster-coral',
    bg: 'bg-monster-coral/10',
    text: 'text-monster-coral',
    label: 'Set Menu',
    name: 'Special'
  }
};

const filterOptions = [
  { key: 'halal', label: 'Halal ✓' },
  { key: 'signature', label: 'Signature' },
  { key: 'vegetarian', label: 'Vegetarian' },
  { key: 'spicy', label: 'Spicy 🌶️' },
];

export default function MenuGrid({ items, activeCategory }: MenuGridProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const filterMatch =
        activeFilters.length === 0 || activeFilters.some((f) => item.tags.includes(f));
      return categoryMatch && filterMatch;
    });
  }, [items, activeCategory, activeFilters]);

  const getTierBadge = (tier?: string) => {
    if (!tier || !tierConfig[tier as keyof typeof tierConfig]) return null;
    const config = tierConfig[tier as keyof typeof tierConfig];
    return (
      <span className={`inline-flex items-center gap-1.5 ${config.bg} ${config.text} text-xs font-medium px-2 py-1 rounded-full`}>
        <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>
        <span>{config.name}</span>
      </span>
    );
  };

  return (
    <div>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => toggleFilter(option.key)}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ease-out ${
              activeFilters.includes(option.key)
                ? 'bg-monster-coral text-white'
                : 'bg-soft-white text-slate hover:bg-monster-coral/20 hover:scale-[1.03]'
            }`}
          >
            {option.label}
          </button>
        ))}
        {activeFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="px-3 py-1.5 text-sm text-slate hover:text-monster-coral transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`bg-soft-white rounded-lg overflow-hidden transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-monster-coral/10 ${
              item.featured ? 'sm:col-span-2' : ''
            }`}
          >
            {item.image && (
              <div className={`overflow-hidden ${item.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display text-xl text-deep-navy">{item.name}</h3>
                <span className="font-semibold text-deep-navy whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-slate text-sm">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tier && getTierBadge(item.tier)}
                {item.signature && (
                  <span className="inline-flex items-center gap-1 bg-monster-coral/20 text-monster-coral text-xs font-medium px-2 py-1 rounded-full">
                    <span>🍣</span>
                    <span>Signature</span>
                  </span>
                )}
              </div>
              {item.featuredIn && (
                <div className="mt-2 text-xs text-slate">
                  Featured in <span className="font-semibold">{item.featuredIn}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate text-lg">No items match your filters.</p>
          <button
            onClick={() => setActiveFilters([])}
            className="mt-4 text-monster-coral hover:text-salmon-red font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
