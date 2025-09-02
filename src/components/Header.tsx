import React from 'react';
import G1 from "@/assets/G1.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onQuoteClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onQuoteClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-secondary-900 to-primary-700 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 flex-wrap gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${G1})` }}
            />
            
            <div className="flex flex-col justify-center">
              <h1
                className="text-2xl font-bold cursor-pointer hover:text-primary-200 transition-colors"
                onClick={() => onNavigate('home')}
              >
                Gensson Trade Corporation
              </h1>
              <div className="flex gap-2 text-sm flex-wrap mt-1">
                <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  🏆 Authorized STIHL Dealer
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Nationwide Sourcing Since 2006
                </span>
              </div>
            </div>
          </div>

          
          {/* Contact & CTA Section */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm hidden md:block">
              <div>Contact: 043 757 1935 Loc 1932 & 1933 / 043 723</div>
              <div>Email: gensson@gmail.com</div>
            </div>
            <button 
              onClick={onQuoteClick}
              className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-md"
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
                  : 'text-primary-200 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'categories' 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-primary-200 hover:text-white'
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