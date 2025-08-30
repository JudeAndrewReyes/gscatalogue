import React from 'react';

const Header = ({ currentPage, onNavigate, onQuoteClick }) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 flex-wrap gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-blue-700 font-bold text-xl shadow-lg">
              PC
            </div>
            <div>
              <h1 
                className="text-2xl font-bold cursor-pointer hover:text-blue-200 transition-colors"
                onClick={() => onNavigate('home')}
              >
                Gensson Trade Corporation
              </h1>
              <div className="flex gap-4 text-sm flex-wrap">
                <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  🏆 Authorized STIHL Dealer
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Global Sourcing Since 2010
                </span>
              </div>
            </div>
          </div>
          
          {/* Contact & CTA Section */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm hidden md:block">
              <div>Contact: +63-XXX-XXXX</div>
              <div>genssonts@example.com</div>
            </div>
            <button 
              onClick={onQuoteClick}
              className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
            >
              Get Quote
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="pb-4">
          <div className="flex gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'categories' 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Categories
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;