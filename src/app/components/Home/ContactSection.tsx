"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// ContactSection Component
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace with your real EmailJS IDs/Key
  const SERVICE_ID = 'service_tbpol46';
  const CONTACT_TEMPLATE_ID = 'template_y4hh4i4';
  const AUTOREPLY_TEMPLATE_ID = 'template_pek3yrg';
  const PUBLIC_KEY = '-sjytvc9_uTRYw4HQ';

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // === Contact email (to you) params ===
      const contactParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sudarshan',
        to_email: 'sudarshan_rangappa@proton.me',
        sent_date: new Date().toLocaleString(),
      };

      // === Auto-reply (to user) params ===
      const autoReplyParams = {
        from_name: 'Sudarshan Rangappa',
        from_email: 'sudarshan_rangappa@proton.me',
        to_name: formData.name,
        to_email: formData.email,        // THIS MUST MATCH TEMPLATE!
        message: formData.message,       // Optional: If you want to show back user’s message
        sent_date: new Date().toLocaleString(),
      };

      // Send contact message to you
      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        contactParams,
        PUBLIC_KEY
      );

      // Send auto-reply to user
      await emailjs.send(
        SERVICE_ID,
        AUTOREPLY_TEMPLATE_ID,
        autoReplyParams,
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (err) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Button display logic
  const getButtonText = () => {
    if (isSubmitting) return 'Sending...';
    if (submitStatus === 'success') return 'Message Sent!';
    if (submitStatus === 'error') return 'Failed - Try Again';
    return 'Send Message';
  };
  const getButtonColor = () => {
    if (submitStatus === 'success') return '#10B981'; // Green
    if (submitStatus === 'error') return '#EF4444'; // Red
    return 'var(--theme-primary)';
  };

  return (
    <section className="py-20 px-6 bg-gray-900" id="contact-section">
      <div className="lg:container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ textShadow: '0 0 20px var(--theme-glow)' }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: 'var(--theme-primary)' }}></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss the latest in blue/red team strategies? Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 h-full flex flex-col">
            {/* ... your contact info/links/security message as before ... */}
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl border backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderColor: 'rgba(255,255,255,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-red-400 text-sm font-medium">Failed to send message. Please try again or email me directly.</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ '--tw-ring-color': 'var(--theme-primary)' } as React.CSSProperties}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ '--tw-ring-color': 'var(--theme-primary)' } as React.CSSProperties}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ '--tw-ring-color': 'var(--theme-primary)' } as React.CSSProperties}
                  placeholder="Tell me about your project, security challenges, or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  backgroundColor: getButtonColor(),
                  boxShadow: '0 4px 20px var(--theme-glow)',
                  '--tw-ring-color': 'var(--theme-glow)'
                } as React.CSSProperties}
                onMouseEnter={e => {
                  if (!isSubmitting && submitStatus === 'idle') {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'var(--theme-primary-dark)';
                    target.style.boxShadow = '0 8px 30px var(--theme-shadow)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSubmitting && submitStatus === 'idle') {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'var(--theme-primary)';
                    target.style.boxShadow = '0 4px 20px var(--theme-glow)';
                  }
                }}
              >
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Usually respond within 24 hours • All messages are encrypted
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
