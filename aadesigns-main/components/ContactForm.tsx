import React, { useState } from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    projectType: 'Website',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="glass-card p-12 rounded-3xl text-center">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Message Received!</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
          Thanks for reaching out, {formData.name.split(' ')[0]}. I'll review your project details and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Full Name</label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Email Address</label>
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Business Name (Optional)</label>
          <input
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            type="text"
            className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white"
            placeholder="Your Company Co."
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white appearance-none"
          >
            <option>Website</option>
            <option>Web App</option>
            <option>AI Feature</option>
            <option>Payments</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Timeline</label>
          <input
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            type="text"
            className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white"
            placeholder="e.g. 1 month"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Budget Range</label>
          <input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            type="text"
            className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white"
            placeholder="e.g. $5k - $10k"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Project Details</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-white/50 dark:bg-[#0B0F1C]/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-900 dark:text-white resize-none"
          placeholder="Tell me about what you're looking to build..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Send Inquiry
      </Button>
    </form>
  );
};