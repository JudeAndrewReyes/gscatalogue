import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';

const CategoryGrid = ({ onCategorySelect, showAll = false, compact = false }) => {
  const displayCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <section className={`${compact ? 'py-8' : 'py-16'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Source Across These Industries
            </h2>
            <p className="text-xl text-gray-600">Equipment Categories Preview</p>
          </div>
        )}
        
        <div className={`grid gap-6 ${
          compact 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {displayCategories.map((category) => (
            <CategoryCard 
              key={category.id}
              category={category}
              onClick={onCategorySelect}
              compact={compact}
            />
          ))}
        </div>
        
        {!showAll && categories.length > 6 && (
          <div className="text-center mt-8 space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
              View All {categories.length}+ Categories
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold">
              See Sample Products
            </button>
          </div>
        )}
        
        {showAll && (
          <div className="text-center mt-8 space-x-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
              Request Custom Quote
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryGrid;