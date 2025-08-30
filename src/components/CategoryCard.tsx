import React from 'react';

const CategoryCard = ({ category, onClick, compact = false }) => {
  return (
    <div 
      onClick={() => onClick(category)}
      className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer group transform hover:-translate-y-1 ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      <div className="text-center">
        {/* Icon */}
        <div className={`${compact ? 'text-3xl mb-3' : 'text-4xl mb-4'} group-hover:scale-110 transition-transform`}>
          {category.icon}
        </div>
        
        {/* Title */}
        <h3 className={`font-bold ${compact ? 'text-base mb-2' : 'text-lg mb-3'} group-hover:text-blue-600 transition-colors`}>
          {category.title}
          {category.featured && (
            <div className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full mt-1 inline-block ml-2 animate-pulse">
              🏆 {category.featured}
            </div>
          )}
        </h3>
        
        {/* Description */}
        <p className={`text-gray-600 ${compact ? 'text-xs mb-3' : 'text-sm mb-4'}`}>
          {category.description}
        </p>
        
        {/* Stats */}
        <div className="space-y-2">
          <div className={`font-semibold text-blue-600 ${compact ? 'text-sm' : 'text-base'}`}>
            {category.items} Available
          </div>
          <div className={`text-gray-500 ${compact ? 'text-xs' : 'text-sm'}`}>
            Lead Time: {category.leadTime}
          </div>
        </div>
        
        {/* CTA */}
        <div className={`${compact ? 'mt-3' : 'mt-4'} opacity-0 group-hover:opacity-100 transition-opacity`}>
          <div className={`text-blue-600 font-semibold ${compact ? 'text-xs' : 'text-sm'}`}>
            View Details & Quote →
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;