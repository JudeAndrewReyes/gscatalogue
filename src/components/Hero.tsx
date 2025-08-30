import React from 'react';

const Hero = ({ onNavigate, onQuoteClick }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Company Badge */}
          <div className="text-center lg:text-left">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-4xl mb-6 shadow-2xl mx-auto lg:mx-0">
              PC
            </div>
            <div className="space-y-2 text-blue-600 mb-6">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-lg">🌍</span>
                <span className="font-medium">Global Procurement</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-lg">📋</span>
                <span className="font-medium">Partner Solutions</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-lg">🤝</span>
                <span className="font-medium">Trusted Network</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Hero Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Professional Equipment 
              <span className="text-blue-600 block">Sourcing</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Any Equipment. Any Industry.
              </p>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Anywhere in the Philippines and Beyond
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              From single items to complete project procurement solutions
            </p>
            
            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto lg:mx-0">
              <button 
                onClick={() => onNavigate('categories')}
                className="group bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-all text-left shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🔍</div>
                <h3 className="font-bold text-lg mb-1">Browse Equipment</h3>
                <h3 className="font-bold text-lg mb-2">Categories</h3>
                <p className="text-blue-100 text-sm">Explore our sourcing capabilities</p>
              </button>
              
              <button className="group bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-all text-left shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📤</div>
                <h3 className="font-bold text-lg mb-1">Upload Purchase</h3>
                <h3 className="font-bold text-lg mb-2">Order</h3>
                <p className="text-green-100 text-sm">Already know what you need?</p>
              </button>
            </div>
            
            <button 
              onClick={onQuoteClick}
              className="group w-full bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="font-bold text-lg mb-2">Request Custom Quote</h3>
              <p className="text-orange-100">Tell us what you need and we'll source it for you</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;