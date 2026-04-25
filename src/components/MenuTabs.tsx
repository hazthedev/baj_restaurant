import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuTabs({ categories, activeCategory, onCategoryChange }: MenuTabsProps) {
  return (
    <div className="sticky top-16 md:top-20 z-40 bg-bone-white/95 backdrop-blur-md border-b border-soy-brown/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => onCategoryChange('All')}
            className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'All' ? 'text-ink-black' : 'text-soy-brown hover:text-ink-black'
            }`}
          >
            All
            {activeCategory === 'All' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cheese-yellow"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category ? 'text-ink-black' : 'text-soy-brown hover:text-ink-black'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cheese-yellow"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
