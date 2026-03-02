"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        company: formData.get("company"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      alert("Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Honeypot */}
      <input type="text" name="company" className="hidden" autoComplete="off" />

      <input
        name="name"
        required
        placeholder="Your name"
        className="w-full border rounded-lg p-3 bg-white text-black placeholder-gray-500"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full border rounded-lg p-3 bg-white text-black placeholder-gray-500"
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your message"
        className="w-full border rounded-lg p-3 bg-white text-black placeholder-gray-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-green-600 mt-4">
          Message sent successfully.
        </p>
      )}
    </form>
  );
}