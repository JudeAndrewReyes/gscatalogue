import React from 'react';
import G1 from "@/assets/G1.png";

interface HeroProps {
  onNavigate: (section: string) => void;
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onQuoteClick }) => {
  return (
    <section className="bg-white py-0 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Company Badge */}
          <div className="text-center lg:text-left">
            <div
              className="w-64 h-64 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0 bg-cover bg-center border-4 border-red-100"
              style={{ backgroundImage: `url(${G1})` }}
            >
            </div>

            <div className="space-y-3 text-gray-700 mb-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-medium">National Procurement</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-medium">Partner Solutions</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-medium">Trusted Network</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Hero Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Professional Equipment 
              <span className="text-red-500 block">Sourcing</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Any Equipment. Any Industry.
              </p>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Anywhere in the Philippines
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              From single items to complete project procurement solutions
            </p>
            
            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto lg:mx-0">
              <button 
                onClick={() => onNavigate('categories')}
                className="group bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 p-6 rounded-xl transition-all text-left shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🔍</div>
                <h3 className="font-bold text-lg mb-1">Browse Equipment</h3>
                <h3 className="font-bold text-lg mb-2">Categories</h3>
                <p className="text-gray-600 text-sm">Explore our sourcing capabilities</p>
              </button>
              
              <button className="group bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 p-6 rounded-xl transition-all text-left shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📤</div>
                <h3 className="font-bold text-lg mb-1">Upload Purchase</h3>
                <h3 className="font-bold text-lg mb-2">Order</h3>
                <p className="text-gray-600 text-sm">Already know what you need?</p>
              </button>
            </div>
            
            <button 
              onClick={onQuoteClick}
              className="group w-full bg-red-500 hover:bg-red-600 text-white p-6 rounded-xl transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="font-bold text-lg mb-2">Request Custom Quote</h3>
              <p className="text-red-100">Tell us what you need and we'll source it for you</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;