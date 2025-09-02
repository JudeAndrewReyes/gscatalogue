// hook/useQuoteForm.ts
import { useState } from 'react';

// Define FormData to match QuoteForm
interface FormData {
  contactName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  otherProjectType: string;
  equipmentNeeded: string;
  budgetRange: string;
  timeline: string;
  deliveryLocation: string;
}

// Define FormErrors to match useQuoteForm logic
interface FormErrors {
  contactName?: string;
  email?: string;
  equipmentNeeded?: string;
  [key: string]: string | undefined;
}

// Define return type
interface UseQuoteFormReturn {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleProjectTypeChange: (type: string) => void;
  validateForm: () => boolean;
  submitForm: (
    onSuccess?: (data: FormData) => void,
    onError?: (error: Error | string) => void
  ) => Promise<boolean>;
  resetForm: () => void;
  setFieldError: (fieldName: string, errorMessage: string) => void;
  clearErrors: () => void;
  updateFormData: (updates: Partial<FormData>) => void;
  getFormSummary: () => {
    isValid: boolean;
    completedRequired: number;
    totalRequiredFields: number;
    completedTotal: number;
    totalFields: number;
    completionPercentage: number;
  };
}

const useQuoteForm = (initialCategory = "Construction & Tools"): UseQuoteFormReturn => {
  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleProjectTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: type,
      otherProjectType: type === 'other' ? prev.otherProjectType : ''
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
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

  const submitForm = async (onSuccess?: (data: FormData) => void, onError?: (error: Error | string) => void) => {
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
        onError(error instanceof Error ? error : String(error)); // Fix: pass single argument
      }
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFieldError = (fieldName: string, errorMessage: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: errorMessage
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({
      ...prev,
      ...updates
    }));
  };

  const getFormSummary = () => {
    const requiredFields: (keyof FormData)[] = ['contactName', 'email', 'equipmentNeeded'];
    const completedRequired = requiredFields.filter(field => formData[field].trim()).length;
    const allFormDataEntries = Object.entries(formData);
    const totalFields = allFormDataEntries.filter(([_, value]) => value.trim()).length;
    
    return {
      isValid: Object.keys(errors).length === 0,
      completedRequired,
      totalRequiredFields: requiredFields.length,
      completedTotal: totalFields,
      totalFields: allFormDataEntries.length,
      completionPercentage: Math.round((totalFields / allFormDataEntries.length) * 100)
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