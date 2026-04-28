"use client";

import { useState } from "react";

interface ContactFormProps {
  subject?: string;
}

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "Psychoeducational Evaluation", label: "Psychoeducational Evaluation" },
  { value: "Independent Educational Evaluation", label: "Independent Educational Evaluation (IEE)" },
  { value: "Learning Therapy", label: "Learning Therapy" },
  { value: "District Contracting", label: "District Contracting" },
  { value: "Testing for Accommodations", label: "Testing for Accommodations" },
  { value: "Other", label: "Other" },
];

export function ContactForm({ subject = "Website Inquiry" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentInfo: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mgowpagv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `${subject}: ${formData.name} - ${formData.service || "General Inquiry"}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          studentInfo: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-[560px] bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You</h3>
        <p className="text-green-700 mb-6">
          Your message has been sent. Dennis will follow up as soon as possible.
        </p>
        <div className="text-sm text-green-600">
          <p className="mb-1">
            <strong>Call or text:</strong>{" "}
            <a href="tel:+16692486602" className="underline">669-248-6602</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:dennis@reblearn.com" className="underline">dennis@reblearn.com</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="max-w-[560px]" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Parent/Guardian or Contact Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
          className="w-full px-3.5 py-3 text-[15px] border border-[var(--border)] rounded-[10px] bg-white text-[var(--text)] transition-all duration-150 focus:outline-none focus:border-[var(--brand)] focus:ring-[3px] focus:ring-blue-600/10 placeholder:text-[var(--muted)] placeholder:opacity-70"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full px-3.5 py-3 text-[15px] border border-[var(--border)] rounded-[10px] bg-white text-[var(--text)] transition-all duration-150 focus:outline-none focus:border-[var(--brand)] focus:ring-[3px] focus:ring-blue-600/10 placeholder:text-[var(--muted)] placeholder:opacity-70"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(555) 555-5555"
            className="w-full px-3.5 py-3 text-[15px] border border-[var(--border)] rounded-[10px] bg-white text-[var(--text)] transition-all duration-150 focus:outline-none focus:border-[var(--brand)] focus:ring-[3px] focus:ring-blue-600/10 placeholder:text-[var(--muted)] placeholder:opacity-70"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="studentInfo" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Student Age or Grade
          </label>
          <input
            type="text"
            id="studentInfo"
            name="studentInfo"
            value={formData.studentInfo}
            onChange={(e) => setFormData({ ...formData, studentInfo: e.target.value })}
            placeholder="e.g., 8 years old, 3rd grade"
            className="w-full px-3.5 py-3 text-[15px] border border-[var(--border)] rounded-[10px] bg-white text-[var(--text)] transition-all duration-150 focus:outline-none focus:border-[var(--brand)] focus:ring-[3px] focus:ring-blue-600/10 placeholder:text-[var(--muted)] placeholder:opacity-70"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-3 text-[15px] border border-[var(--border)] rounded-[10px] bg-white text-[var(--text)] transition-all duration-150 focus:outline-none focus:border-[var(--brand)] focus:ring-[3px] focus:ring-blue-600/10"
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help? Please include any relevant details about your situation."
          className="w-full px-3.5 py-3 text-[15px] border border-[var(--border)] rounded-[10px] bg-white text-[var(--text)] transition-all duration-150 focus:outline-none focus:border-[var(--brand)] focus:ring-[3px] focus:ring-blue-600/10 placeholder:text-[var(--muted)] placeholder:opacity-70 resize-y min-h-[120px]"
        />
      </div>

      {status === "error" && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          Something went wrong. Please try again or contact us directly at{" "}
          <a href="mailto:dennis@reblearn.com" className="underline">dennis@reblearn.com</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn primary w-full justify-center py-3.5 px-6 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="mt-5 text-sm text-[var(--muted)] text-center">
        Prefer to reach out directly? Email{" "}
        <a href="mailto:dennis@reblearn.com" className="text-[var(--brand)]">dennis@reblearn.com</a> or call/text{" "}
        <a href="tel:+16692486602" className="text-[var(--brand)]">669-248-6602</a>.
      </p>
    </form>
  );
}
