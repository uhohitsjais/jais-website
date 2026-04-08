"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const CONTACT_EMAIL = "jaisalexis16@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/jaisalexis-tollette/";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3A49A3] leading-tight mb-4">
              Let&apos;s get sticky
            </h2>
            <div className="w-16 mb-8" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
            <p className="text-[#374151] leading-relaxed text-lg mb-10">
              Tell me what you&apos;re building. I&apos;ll tell you if I can help.
            </p>

            {/* Direct contact options */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#7E83FF]/10 flex items-center justify-center text-[#7E83FF] group-hover:bg-[#7E83FF]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-[#374151] font-medium group-hover:text-[#3A49A3] transition-colors">
                  {CONTACT_EMAIL}
                </span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#7E83FF]/10 flex items-center justify-center text-[#7E83FF] group-hover:bg-[#7E83FF]/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="text-[#374151] font-medium group-hover:text-[#3A49A3] transition-colors">
                  LinkedIn · Jais Tollette
                </span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[#7E83FF]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E83FF" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-[#3A49A3] font-semibold text-lg">Message ready</p>
                <p className="text-[#6b7280] text-sm mt-2">
                  Your email client should have opened. Looking forward to
                  connecting.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-[#374151] uppercase tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#374151] placeholder-[#9ca3af] focus:border-[#7E83FF] focus:ring-1 focus:ring-[#7E83FF] outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#374151] uppercase tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#374151] placeholder-[#9ca3af] focus:border-[#7E83FF] focus:ring-1 focus:ring-[#7E83FF] outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[#374151] uppercase tracking-widest mb-2"
                  >
                    What are you building?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your product and where you're feeling stuck..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#374151] placeholder-[#9ca3af] focus:border-[#7E83FF] focus:ring-1 focus:ring-[#7E83FF] outline-none transition text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3A49A3] text-white py-4 rounded-xl font-semibold hover:bg-[#2e3a82] transition-all hover:shadow-lg hover:shadow-[#3A49A3]/20 text-sm"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-[#9ca3af]">
                  I typically respond within 1–2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
