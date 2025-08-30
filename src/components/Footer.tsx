import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">ProCure Solutions Philippines</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Address: San Pedro, Calabarzon</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>Phone: +63-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>Email: procurement@procuresolutions.ph</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒</span>
                <span>Business Hours: Mon-Fri 8AM-6PM, Sat 8AM-12PM</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Equipment Sourcing</li>
              <li>Project Procurement</li>
              <li>Custom Solutions</li>
              <li>Authorized Dealer Network</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">
                  Get Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © 2006 Gensson Trade Corporations. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                🏆 Authorized STIHL Dealer Since 2018
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                ISO 9001 Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;