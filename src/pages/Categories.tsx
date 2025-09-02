// pages/Categories.tsx
import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

interface CategoriesProps {
  onCategorySelect: (categoryId: string) => void; // Updated to categoryId
  onQuoteClick: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect, onQuoteClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Equipment Categories
            </h1>
            <p className="text-xl text-gray-600">
              Browse our complete sourcing capabilities across industries
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {categories.length} Categories Available
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              category={category}
              onClick={onCategorySelect}
              compact={true}
            />
          ))}
        </div>
        <div className="mt-16 bg-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            We can source equipment from any industry. Tell us what you need!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button
              onClick={onQuoteClick}
              className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold shadow-lg"
            >
              Request Custom Quote
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
              Contact Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;