import { useState } from 'react';

const useQuoteForm = (initialCategory = "Construction & Tools") => {
  const [formData, setFormData] = useState({
    contactName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    otherProjectType: '',
    equipmentNeeded: '',
    budgetRange: '',
    timeline: '',
    deliveryLocation: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleProjectTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      projectType: type,
      otherProjectType: type === 'other' ? prev.otherProjectType : ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.equipmentNeeded.trim()) {
      newErrors.equipmentNeeded = 'Equipment description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      contactName: '',
      company: '',
      email: '',
      phone: '',
      projectType: '',
      otherProjectType: '',
      equipmentNeeded: '',
      budgetRange: '',
      timeline: '',
      deliveryLocation: ''
    });
    setErrors({});
    setIsSubmitting(false);
  };

  const submitForm = async (onSuccess, onError) => {
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call or actual submission logic
      console.log('Form submitted:', { 
        ...formData, 
        category: initialCategory,
        submittedAt: new Date().toISOString()
      });
      
      // Call success callback if provided
      if (onSuccess) {
        await onSuccess(formData);
      }
      
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Call error callback if provided
      if (onError) {
        onError(error);
      }
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFieldError = (fieldName, errorMessage) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: errorMessage
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const updateFormData = (updates) => {
    setFormData(prev => ({
      ...prev,
      ...updates
    }));
  };

  const getFormSummary = () => {
    const requiredFields = ['contactName', 'email', 'equipmentNeeded'];
    const completedRequired = requiredFields.filter(field => formData[field].trim()).length;
    const totalFields = Object.keys(formData).filter(key => formData[key]).length;
    
    return {
      isValid: validateForm(),
      completedRequired,
      totalRequiredFields: requiredFields.length,
      completedTotal: totalFields,
      totalFields: Object.keys(formData).length,
      completionPercentage: Math.round((totalFields / Object.keys(formData).length) * 100)
    };
  };

  return {
    // State
    formData,
    errors,
    isSubmitting,
    
    // Actions
    handleInputChange,
    handleProjectTypeChange,
    validateForm,
    submitForm,
    resetForm,
    setFieldError,
    clearErrors,
    updateFormData,
    
    // Utilities
    getFormSummary
  };
};

export default useQuoteForm;