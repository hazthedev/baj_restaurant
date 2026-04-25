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
}

interface MenuGridProps {
  items: MenuItem[];
  activeCategory: string;
}

const filterOptions = [
  { key: 'signature', label: 'Signature' },
  { key: 'spicy', label: 'Spicy 🌶️' },
  { key: 'vegetarian', label: 'Vegetarian' },
  { key: 'cheap', label: 'Under RM10' },
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

  return (
    <div>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => toggleFilter(option.key)}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
              activeFilters.includes(option.key)
                ? 'bg-cheese-yellow text-ink-black'
                : 'bg-cream text-soy-brown hover:bg-cheese-yellow/30'
            }`}
          >
            {option.label}
          </button>
        ))}
        {activeFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="px-3 py-1.5 text-sm text-soy-brown hover:text-chili-red transition-colors"
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
            className={`bg-cream rounded-lg overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:shadow-cheese-yellow/20 ${
              item.featured ? 'sm:col-span-2' : ''
            }`}
          >
            {item.image && (
              <div className={`overflow-hidden ${item.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display text-xl text-ink-black">{item.name}</h3>
                <span className="font-semibold text-ink-black whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-soy-brown text-sm">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.signature && (
                  <span className="inline-flex items-center gap-1 bg-cheese-yellow/20 text-bkt-brown text-xs font-medium px-2 py-1 rounded">
                    <span>🧀</span>
                    <span>Signature</span>
                  </span>
                )}
                {item.featuredIn && (
                  <span className="inline-flex items-center gap-1 bg-bkt-brown/10 text-soy-brown text-xs font-medium px-2 py-1 rounded">
                    Featured in {item.featuredIn}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-soy-brown text-lg">No items match your filters.</p>
          <button
            onClick={() => setActiveFilters([])}
            className="mt-4 text-cheese-yellow hover:text-soft-mustard font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
