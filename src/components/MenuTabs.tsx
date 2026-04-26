import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuTabs({ categories, activeCategory, onCategoryChange }: MenuTabsProps) {
  return (
    <div className="sticky top-16 md:top-20 z-40 bg-soft-white/95 backdrop-blur-md border-b border-slate/10 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => onCategoryChange('All')}
            className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'All' ? 'text-deep-navy' : 'text-slate hover:text-deep-navy'
            }`}
          >
            All
            {activeCategory === 'All' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-monster-coral"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category ? 'text-deep-navy' : 'text-slate hover:text-deep-navy'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-monster-coral"
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
