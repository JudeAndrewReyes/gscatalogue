import React, { useState, useMemo } from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

const Categories = ({ onCategorySelect, onQuoteClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Filter and search logic
  const filteredCategories = useMemo(() => {
    let filtered = [...categories];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(category =>
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        category.details.brands.some(brand => brand.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedFilter !== 'all') {
      if (selectedFilter === 'featured') {
        filtered = filtered.filter(category => category.featured);
      } else if (selectedFilter === 'fast') {
        filtered = filtered.filter(category => {
          const leadTime = parseInt(category.leadTime);
          return leadTime <= 7;
        });
      }
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'leadTime':
          return parseInt(a.leadTime) - parseInt(b.leadTime);
        case 'items':
          return parseInt(b.items) - parseInt(a.items);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [searchQuery, selectedFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Equipment Categories
            </h1>
            <p className="text-xl text-gray-600">
              Browse our complete sourcing capabilities across {categories.length} industries
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-xl p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-2xl">🔍</span>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Search categories, products, or brands..."
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Filter:</label>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="featured">Featured Partners</option>
                  <option value="fast">Fast Lead Time</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Name A-Z</option>
                  <option value="leadTime">Lead Time</option>
                  <option value="items">Items Available</option>
                </select>
              </div>

              <button
                onClick={onQuoteClick}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredCategories.length} Categories Available
          </h2>
          {searchQuery && (
            <div className="text-gray-600">
              Showing results for "<span className="font-semibold">{searchQuery}</span>"
            </div>
          )}
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <CategoryCard 
                key={category.id}
                category={category}
                onClick={onCategorySelect}
                compact={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No categories found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            We can source equipment from any industry. Tell us what you need!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button
              onClick={onQuoteClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold shadow-lg"
            >
              Request Custom Category
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Contact Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;