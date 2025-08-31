import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProjectExamples from '../components/ProjectExamples';
import TrustedPartners from '../components/TrustedPartners';

const Home = ({ onNavigate, onCategorySelect, onQuoteClick }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        onNavigate={onNavigate}
        onQuoteClick={onQuoteClick}
      />
      
      {/* Equipment Categories Preview */}
      <CategoryGrid 
        onCategorySelect={onCategorySelect}
        showAll={false}
        compact={false}
      />
      
      {/* Recent Sourcing Examples */}
      <ProjectExamples 
        onQuoteClick={onQuoteClick}
      />
      
      {/* Trusted Partnerships */}
      <TrustedPartners />
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Procurement Project?
          </h2>
          <p className="text-xl text-red-100 mb-12">
            Get expert sourcing solutions tailored to your needs
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button 
              onClick={onQuoteClick}
              className="bg-white text-red-600 p-8 rounded-xl hover:bg-blue-50 transition-all text-center group shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-xl font-bold mb-2">Get Custom Quote</h3>
              <p className="text-gray-900 text-sm">
                Tell us your needs<br />
                Get pricing in 24hrs
              </p>
            </button>
            
            <button className="bg-green-600 text-white p-8 rounded-xl hover:bg-green-700 transition-all text-center group shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-xl font-bold mb-2">Call Now</h3>
              <p className="text-green-100 text-sm">
                +63-XXX-XXXX<br />
                Speak to specialist
              </p>
            </button>
          </div>
          
          <p className="text-blue-200 mt-8 text-lg">
            Can't find what you need? <span className="font-bold">We can source it for you!</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;