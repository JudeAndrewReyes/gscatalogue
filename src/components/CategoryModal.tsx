import React from 'react';

const CategoryModal = ({ category, onClose, onQuoteClick }) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.title} Sourcing
              </h2>
              {category.featured && (
                <div className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full mt-2 inline-block">
                  🏆 {category.featured}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl font-bold w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Sourcing Capabilities */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sourcing Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {category.details.capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* STIHL Partnership (if applicable) */}
          {category.details.stihlPartnership && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <div>
                  <h3 className="text-xl font-bold text-orange-800">
                    STIHL Authorized Dealer Since {category.details.stihlPartnership.since}
                  </h3>
                  <p className="text-orange-700">Professional outdoor power equipment specialist</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Equipment Available:</h4>
                  <ul className="space-y-1">
                    {category.details.stihlPartnership.products.map((product, index) => (
                      <li key={index} className="text-orange-700 text-sm">• {product}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Partnership Benefits:</h4>
                  <ul className="space-y-1">
                    {category.details.stihlPartnership.benefits.map((benefit, index) => (
                      <li key={index} className="text-orange-700 text-sm flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 flex gap-3">
                <button 
                  onClick={onQuoteClick}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold"
                >
                  Get STIHL Equipment Quote
                </button>
                <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold">
                  STIHL Specialist
                </button>
              </div>
            </div>
          )}

          {/* Brands & Recent Projects */}
          <div className="grid md:grid-cols-1 gap-6">
            {/* Available Brands */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">Available Brands</h3>
              <div className="flex flex-wrap gap-2">
                {category.details.brands.map((brand, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      brand === 'STIHL' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {brand}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-gray-600">
                  +15 more
                </span>
              </div>
            </div>

            {/* Lead Time & Stats */}
            {/* <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">Service Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-green-700">Lead Time: </span>
                  <span className="text-green-600">{category.leadTime}</span>
                  {category.details.stihlPartnership && (
                    <span className="block text-sm text-green-600 mt-1">
                      STIHL Equipment: 1-3 days
                    </span>
                  )}
                </div>
                <div>
                  <span className="font-medium text-green-700">Items Available: </span>
                  <span className="text-green-600">{category.items}</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Recent Projects */}
          {/* <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent {category.title} Projects</h3>
            <div className="space-y-3">
              {category.details.recentProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500">•</span>
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Footer CTAs */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <button 
              onClick={onQuoteClick}
              className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-colors text-center"
            >
              <div className="text-2xl mb-1">📋</div>
              <div className="font-bold mb-1">Request Detailed Quote</div>
              <div className="text-sm text-gray-200">
                Custom pricing • Bulk discounts • Project timeline
              </div>
            </button>
            
            <button className="border border-gray-600 text-black-600 p-4 rounded-lg hover:bg-red-50 transition-colors text-center">
              <div className="text-2xl mb-1">📞</div>
              <div className="font-bold mb-1">Speak to Specialist</div>
              <div className="text-sm text-gray-600">
                Call +63-XXX-XXXX • Technical support available
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;