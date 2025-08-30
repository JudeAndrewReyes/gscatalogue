import React from 'react';
import { X, Phone } from 'lucide-react';
import useQuoteForm from '../hook/useQuoteForm';

const QuoteForm = ({ category = "Construction & Tools", isOpen = true, onClose = () => {} }) => {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleProjectTypeChange,
    submitForm
  } = useQuoteForm(category);

  const handleSubmit = async () => {
    const success = await submitForm(
      (data) => {
        // Success callback
        alert('Quote request submitted successfully! We\'ll respond within 2-4 hours.');
        onClose();
      },
      (error) => {
        // Error callback
        alert('Submission failed. Please try again.');
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">GET DETAILED QUOTE</h2>
            <p className="text-sm text-gray-600 mt-1">
              Category: {category} {category.includes("Construction") && "| STIHL Partnership"}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isSubmitting}
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Company Information Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">COMPANY INFORMATION</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name <span className="text-red-500">*Required</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                    errors.contactName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*Required</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="+63-XXX-XXX-XXXX"
                />
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PROJECT DETAILS</h3>
            
            {/* Project Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Project Type:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'construction', label: 'Construction Project' },
                  { value: 'manufacturing', label: 'Manufacturing Setup' },
                  { value: 'maintenance', label: 'Facility Maintenance' },
                  { value: 'stihl', label: 'STIHL Equipment Only' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectType === option.value}
                      onChange={() => handleProjectTypeChange(option.value)}
                      disabled={isSubmitting}
                      className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded disabled:cursor-not-allowed"
                    />
                    <span className={`text-sm ${isSubmitting ? 'text-gray-400' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              
              <div className="mt-3 flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.projectType === 'other'}
                    onChange={() => handleProjectTypeChange('other')}
                    disabled={isSubmitting}
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded disabled:cursor-not-allowed"
                  />
                  <span className={`text-sm mr-2 ${isSubmitting ? 'text-gray-400' : 'text-gray-700'}`}>
                    Other:
                  </span>
                </label>
                {formData.projectType === 'other' && (
                  <input
                    type="text"
                    name="otherProjectType"
                    value={formData.otherProjectType}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="flex-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Please specify"
                  />
                )}
              </div>
            </div>

            {/* Equipment Needed */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Needed <span className="text-red-500">*Required</span>
              </label>
              <textarea
                name="equipmentNeeded"
                value={formData.equipmentNeeded}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows={6}
                className={`w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                  errors.equipmentNeeded ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Please describe what you need:
- Specific tools/equipment
- Quantities needed  
- Specifications or brands preferred
- Project timeline

Example: 'Need 10 STIHL chainsaws MS 250, 5 cordless drills, safety equipment for 20 workers'"
              />
              {errors.equipmentNeeded && (
                <p className="mt-1 text-sm text-red-500">{errors.equipmentNeeded}</p>
              )}
            </div>

            {/* Budget Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range:
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
              >
                <option value="">Select Range</option>
                <option value="under-100k">Under ₱100,000</option>
                <option value="100k-500k">₱100K-₱500K</option>
                <option value="500k-1m">₱500K-₱1M</option>
                <option value="1m-5m">₱1M-₱5M</option>
                <option value="over-5m">Over ₱5M</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Timeline:
              </label>
              <div className="space-y-2">
                {[
                  { value: 'standard', label: 'Standard (1-2 weeks)' },
                  { value: 'urgent', label: 'Urgent (3-5 days)' },
                  { value: 'emergency', label: 'Emergency (24-48 hours) +20% rush fee' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      checked={formData.timeline === option.value}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 disabled:cursor-not-allowed"
                    />
                    <span className={`text-sm ${isSubmitting ? 'text-gray-400' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Delivery Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Location:
              </label>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="City, Province"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400"
            >
              CANCEL
              <div className="text-sm text-gray-500 mt-1">Back to Categories</div>
            </button>
            
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
              <div className="text-sm text-orange-100 mt-1">
                {isSubmitting ? (
                  'Please wait...'
                ) : (
                  <>
                    • Response in 2-4hrs<br />
                    • Detailed pricing<br />
                    • Alternative options
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Phone size={16} className="mr-2" />
            <span>Need immediate assistance? Call </span>
            <a href="tel:+63-XXX-XXXX" className="text-orange-600 font-medium ml-1 hover:text-orange-700">
              +63-XXX-XXXX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;