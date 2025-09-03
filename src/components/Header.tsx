import React from 'react';
import G1 from "@/assets/G1.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onQuoteClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onNavigate, onQuoteClick }) => {
// const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onQuoteClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-525 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 flex-wrap gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-md bg-cover bg-center"
                style={{ backgroundImage: `url(${G1})` }}
              >
                {/* Fallback if no image */}
                <span className="text-white font-bold text-lg">G</span>
              </div>
              
              <div className="flex flex-col justify-center">
                <h1
                  className="text-xl font-bold text-gray-900 cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => onNavigate('home')}
                >
                  Gensson Trade Corporation
                </h1>
                <div className="flex gap-2 text-xs flex-wrap mt-1">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    🏆 Authorized STIHL Dealer
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    Since 2006
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & CTA Section */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm text-gray-600 hidden md:block text-right">
              <div className="font-medium">043 757 1935 Loc 1932 & 1933</div>
              <div>gensson@gmail.com</div>
            </div>
            <button 
              onClick={onQuoteClick}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Get Quote
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        {/* <nav className="border-t border-gray-100 pt-3 pb-4">
          <div className="flex gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors pb-2 ${
                currentPage === 'home' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`text-sm font-medium transition-colors pb-2 ${
                currentPage === 'categories' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Categories
            </button>
          </div>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;