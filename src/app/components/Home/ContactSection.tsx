"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// If SVGs are in a /icons folder, update the paths accordingly
const GITHUB_ICON = "/github.svg";
const LINKEDIN_ICON = "/linkedin.svg";
const EMAIL_ICON = "/email.svg";

const theme = {
  primary: "var(--theme-primary, #dc2626)",
  primaryDark: "var(--theme-primary-dark, #991b1b)",
  glow: "var(--theme-glow, rgba(220,38,38,0.52))"
};

const IconButton = ({ href, src, alt, aria }: { href:string; src:string; alt:string; aria:string }) => (
  <a
    href={href}
    {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    aria-label={aria}
    className="rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900"
    style={{
      width: 56,
      height: 56,
      backgroundColor: theme.primary,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 4px 20px ${theme.glow}`,
    }}
  >
    <img src={src} alt={alt} className="w-6 h-6" />
  </a>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const SERVICE_ID = "service_tbpol46";
  const CONTACT_TEMPLATE_ID = "template_y4hh4i4";
  const AUTOREPLY_TEMPLATE_ID = "template_pek3yrg";
  const PUBLIC_KEY = "-sjytvc9_uTRYw4HQ";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const contactParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Sudarshan",
        to_email: "sudarshan_rangappa@proton.me",
        sent_date: new Date().toLocaleString(),
      };
      const autoReplyParams = {
        from_name: "Sudarshan Rangappa",
        from_email: "sudarshan_rangappa@proton.me",
        to_name: formData.name,
        to_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        sent_date: new Date().toLocaleString(),
      };
      await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, contactParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, autoReplyParams, PUBLIC_KEY);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonText = () =>
    isSubmitting
      ? "Sending..."
      : submitStatus === "success"
      ? "Message Sent!"
      : submitStatus === "error"
      ? "Failed - Try Again"
      : "Send Message";

  const getButtonColor = () =>
    submitStatus === "success"
      ? "#10B981"
      : submitStatus === "error"
      ? "#EF4444"
      : theme.primary;

  return (
    <section className="py-20 px-6 bg-gray-900" id="contact-section">
      <div className="lg:container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ textShadow: `0 0 20px ${theme.glow}` }}
          >
            Get In Touch
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects or swap threat memes? Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT PANEL (desktop/tablet only) */}
          <div className="space-y-10 h-full flex flex-col hidden sm:block">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <div className="flex flex-col gap-4 max-w-xs">
              <a
                href="https://github.com/sudarshan-rangappa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-5 rounded-lg font-semibold text-white text-lg shadow transition"
                style={{ backgroundColor: theme.primary, boxShadow: `0 4px 20px ${theme.glow}` }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.primaryDark)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.primary)}
                aria-label="GitHub Profile"
              >
                <img src={GITHUB_ICON} alt="GitHub" className="w-6 h-6" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/sudarshan-rangappa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-5 rounded-lg font-semibold text-white text-lg shadow transition"
                style={{ backgroundColor: theme.primary, boxShadow: `0 4px 20px ${theme.glow}` }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.primaryDark)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.primary)}
                aria-label="LinkedIn Profile"
              >
                <img src={LINKEDIN_ICON} alt="LinkedIn" className="w-6 h-6" /> LinkedIn
              </a>
              <a
                href="mailto:sudarshan_rangappa@proton.me"
                className="flex items-center gap-3 py-3 px-5 rounded-lg font-semibold text-white text-lg shadow transition"
                style={{ backgroundColor: theme.primary, boxShadow: `0 4px 20px ${theme.glow}` }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.primaryDark)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.primary)}
                aria-label="Send Email"
              >
                <img src={EMAIL_ICON} alt="Email" className="w-6 h-6" /> Email
              </a>
            </div>
            {/* Coffee Box (only desktop/tablet) */}
            <div
              className="p-6 rounded-xl border backdrop-blur-sm mt-auto"
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderColor: theme.primary,
                boxShadow: `0 8px 32px ${theme.glow}`
              }}
            >
              <h4 className="text-white font-semibold text-lg mb-3">☕ The Coffee’s Always On!</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Blue team Jedi, digital explorer, or security meme connoisseur—say hello! Security stories, bug bounties, or zero-day jokes always welcome. I’ll reply before your next Nessus scan finishes. 🚀
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: Contact Form */}
          <div
            className="p-8 rounded-2xl border backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              borderColor: "rgba(255,255,255,0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            {/* Submission status */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-red-400 text-sm font-medium">Failed to send message. Please try again or email me directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
                  placeholder="Tell me about your project, security challenges, or just say hello..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  backgroundColor: getButtonColor(),
                  boxShadow: `0 4px 20px ${theme.glow}`,
                  "--tw-ring-color": theme.glow,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (!isSubmitting && submitStatus === "idle") {
                    (e.target as HTMLButtonElement).style.backgroundColor = theme.primaryDark;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting && submitStatus === "idle") {
                    (e.target as HTMLButtonElement).style.backgroundColor = theme.primary;
                  }
                }}
              >
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-0">
          <p className="text-gray-500 text-sm mb-2">
            Usually respond within 24 hours • All messages are encrypted
          </p>
        </div>

        {/* MOBILE-ONLY: icon buttons AFTER everything (after the note) */}
        <div className="flex sm:hidden justify-center gap-6 mt-4">
          <IconButton href="mailto:sudarshan_rangappa@proton.me" src={EMAIL_ICON} alt="Email" aria="Mail me" />
          <IconButton href="https://linkedin.com/in/sudarshan-rangappa" src={LINKEDIN_ICON} alt="LinkedIn" aria="LinkedIn" />
          <IconButton href="https://github.com/sudarshan-rangappa" src={GITHUB_ICON} alt="GitHub" aria="GitHub" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
