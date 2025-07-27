"use client";
import React, { useState } from 'react';
import { useTheme } from '@/app/hooks/useTheme';

const ContactSection = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can integrate with your preferred form service
    };

    return (
        <section className="py-20 px-6 bg-gray-900" id="contact-section">
            <div className="lg:container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{
                            textShadow: '0 0 20px var(--theme-glow)'
                        }}
                    >
                        Get In Touch
                    </h2>
                    <div
                        className="w-24 h-1 mx-auto rounded-full mb-6"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                    ></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to collaborate on cybersecurity projects or discuss the latest in blue/red team strategies?
                        Let's connect and build something secure together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8 h-full flex flex-col">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center space-x-4 group">
                                    <div
                                        className="p-3 rounded-lg transition-all duration-300"
                                        style={{
                                            backgroundColor: 'var(--theme-primary)',
                                            boxShadow: '0 4px 15px var(--theme-glow)'
                                        }}
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white font-medium">sudarshan_rangappa@proton.me</p>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-center space-x-4 group">
                                    <div
                                        className="p-3 rounded-lg transition-all duration-300"
                                        style={{
                                            backgroundColor: 'var(--theme-primary)',
                                            boxShadow: '0 4px 15px var(--theme-glow)'
                                        }}
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">LinkedIn</p>
                                        <p className="text-white font-medium">linkedin.com/in/sudarshan-rangappa</p>
                                    </div>
                                </div>

                                {/* GitHub */}
                                <div className="flex items-center space-x-4 group">
                                    <div
                                        className="p-3 rounded-lg transition-all duration-300"
                                        style={{
                                            backgroundColor: 'var(--theme-primary)',
                                            boxShadow: '0 4px 15px var(--theme-glow)'
                                        }}
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">GitHub</p>
                                        <p className="text-white font-medium">github.com/sudarshan-rangappa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Focus Badge */}
                        <div
                            className="p-6 rounded-xl border backdrop-blur-sm mt-auto"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderColor: 'var(--theme-primary)',
                                boxShadow: '0 8px 32px var(--theme-glow)'
                            }}
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: 'var(--theme-primary)' }}
                                ></div>
                                <h4 className="text-white font-semibold">Security First</h4>
                            </div>
                            <p className="text-gray-400 text-sm">
                                All communications are encrypted and treated with the highest level of confidentiality.
                                Your data security is my priority.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="p-8 rounded-2xl border backdrop-blur-sm"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <div className="space-y-6">
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
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300"
                                    style={{
                                        focusRingColor: 'var(--theme-primary)'
                                    }}
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
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300"
                                    style={{
                                        focusRingColor: 'var(--theme-primary)'
                                    }}
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
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                                    style={{
                                        focusRingColor: 'var(--theme-primary)'
                                    }}
                                    placeholder="Tell me about your project, security challenges, or just say hello..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4"
                                style={{
                                    backgroundColor: 'var(--theme-primary)',
                                    boxShadow: '0 4px 20px var(--theme-glow)',
                                    focusRingColor: 'var(--theme-glow)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'var(--theme-primary-dark)';
                                    e.target.style.boxShadow = '0 8px 30px var(--theme-shadow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'var(--theme-primary)';
                                    e.target.style.boxShadow = '0 4px 20px var(--theme-glow)';
                                }}
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
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