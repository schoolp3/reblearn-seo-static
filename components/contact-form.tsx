"use client";

import { useState } from "react";

interface ContactFormProps {
  subject?: string;
}

export function ContactForm({ subject = "Website Inquiry" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto URL with form data
    const mailtoParams = new URLSearchParams({
      subject: `${subject}: ${formData.name}`,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    });
    
    window.location.href = `mailto:dennis@reblearn.com?${mailtoParams.toString()}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help? Please include any relevant details about your situation."
        />
      </div>

      <button type="submit" className="btn primary submit-btn">
        Send Message
      </button>

      <p className="form-note">
        Prefer to reach out directly? Email{" "}
        <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a> or call/text{" "}
        <a href="tel:+16692486602">669-248-6602</a>.
      </p>

      <style jsx>{`
        .contact-form {
          max-width: 560px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 6px;
        }
        input,
        textarea {
          width: 100%;
          padding: 12px 14px;
          font-size: 15px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: #fff;
          color: var(--text);
          font-family: inherit;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        input::placeholder,
        textarea::placeholder {
          color: var(--muted);
          opacity: 0.7;
        }
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px 24px;
          font-size: 16px;
        }
        .form-note {
          margin-top: 20px;
          font-size: 14px;
          color: var(--muted);
          text-align: center;
        }
        .form-note a {
          color: var(--brand);
        }
        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
}
