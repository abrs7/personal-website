// API configuration and utilities
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * Download resume from the backend API
 */
export const downloadResume = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/resume/download`, {
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Failed to download resume');
    }
    
    // Get the blob data
    const blob = await response.blob();
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    return { success: true };
  } catch (error) {
    console.error('Error downloading resume:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Send contact form email via API
 */
export const sendContactEmail = async (formData) => {
  try {
    // Clean up form data - convert empty strings to null for optional fields
    const cleanedData = {
      name: formData.name?.trim() || '',
      email: formData.email?.trim() || '',
      company: formData.company?.trim() || null,
      projectType: formData.projectType || '',
      budget: formData.budget || null,
      timeline: formData.timeline || null,
      message: formData.message?.trim() || ''
    };
    
    // Convert empty strings to null for optional fields
    if (cleanedData.company === '') cleanedData.company = null;
    if (cleanedData.budget === '') cleanedData.budget = null;
    if (cleanedData.timeline === '') cleanedData.timeline = null;
    
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      // Handle validation errors
      if (response.status === 422 && data.errors) {
        const errorMessages = data.errors.map(err => `${err.field}: ${err.message}`).join(', ');
        throw new Error(errorMessages || data.detail || 'Validation error');
      }
      throw new Error(data.detail || 'Failed to send email');
    }
    
    return data;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

export { API_BASE_URL };


