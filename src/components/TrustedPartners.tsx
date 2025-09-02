// import React from 'react';
import { brandPartners } from '../data/brandPartners';

const TrustedPartners = () => {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted Partnerships
          </h2>
          <p className="text-xl text-gray-600">
            Authorized Dealer Network & Brand Partners
          </p>
        </div>

        {/* Featured STIHL Partnership */}
        <div className="bg-gradient-to-br from-red-50 to-red-50 border border-red-200 rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  🟠
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-800">
                    STIHL Authorized Dealer
                  </h3>
                  <p className="text-red-700 font-medium">
                    Partnership Since 2018
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  Direct partnerships with leading manufacturers for guaranteed authenticity, 
                  warranty coverage, and competitive pricing.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Professional Equipment:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Chainsaws & Power Tools</li>
                      <li>• Trimmers & Brushcutters</li>
                      <li>• Blowers & Garden Equipment</li>
                      <li>• Professional Accessories</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Partnership Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Authorized warranty service</li>
                      <li>• Genuine parts & accessories</li>
                      <li>• Bulk contractor pricing</li>
                      <li>• Technical support & training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-6xl text-red-600 mb-4">🏆</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Authorized Since 2018
                </h4>
                <p className="text-gray-600 mb-4">
                  6+ Years of Professional Partnership
                </p>
                <div className="bg-red-100 text-gray-800 px-4 py-2 rounded-lg inline-block font-semibold">
                  ₱50M+ STIHL Equipment Sourced
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Brand Partners */}
        <div className="bg-gray-50 rounded-2xl p-2">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Additional Brand Partners
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brandPartners.filter(partner => !partner.featured).map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center text-2xl font-bold text-white mb-3 group-hover:scale-110 transition-transform ${
                  partner.logo === '🟡' ? 'bg-yellow-500' :
                  partner.logo === '🔵' ? 'bg-blue-500' :
                  partner.logo === '🔴' ? 'bg-red-500' :
                  partner.logo === '🟢' ? 'bg-green-500' : 'bg-gray-500'
                }`}>
                  {partner.logo}
                </div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-8">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg">
              View All Brand Partners
            </button>
            <p className="text-gray-600 mt-4">
              <span className="font-bold text-red-600">20+</span> authorized brand partnerships
            </p>
          </div> */}
        </div>

        {/* Why Choose Us Stats */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { number: '500+', label: 'Companies Served', icon: '🏢' },
              { number: '24hr', label: 'Response Time', icon: '⚡' },
              { number: 'Nationwide', label: 'Supplier Network', icon: '🌍' },
              { number: 'ISO 9001', label: 'Certified Process', icon: '✅' },
              { number: '20+', label: 'Authorized Dealers', icon: '🤝' },
              { number: 'Best', label: 'Pricing Guarantee', icon: '💰' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;