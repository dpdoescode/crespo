'use client';

import { useState } from 'react';

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const response = await fetch('https://formspree.io/f/xkolqypq', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    });

    setLoading(false);
    if (response.ok) {
      setSubmitted(true);
    } else {
      setError(true);
    }
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Thanks for Choosing Crespo!
        </h1>
        <p className="text-lg text-gray-600">Your guests won&rsquo;t thank you enough!</p>
      </section>

      {/* Steps */}
      <section className="max-w-xl mx-auto px-6 pb-16 text-center">
        <h2
          className="text-2xl font-bold mb-8 inline-block"
          style={{
            textDecoration: 'underline',
            textDecorationColor: '#c44b2a',
            textDecorationThickness: '2px',
            textUnderlineOffset: '6px',
          }}
        >
          Steps to Cater
        </h2>
        <ol className="space-y-4 text-base text-gray-700 text-left list-none p-0">
          <li className="flex gap-3">
            <span className="font-bold" style={{ color: '#c44b2a' }}>1.</span>
            <span>Fill out the form below with your event details.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold" style={{ color: '#c44b2a' }}>2.</span>
            <span>Include event size, date and time, and food preferences.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold" style={{ color: '#c44b2a' }}>3.</span>
            <span>We&rsquo;ll send an invoice with a price estimate and detail confirmation.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold" style={{ color: '#c44b2a' }}>4.</span>
            <span>Sit back and let us do the heavy-lifting.</span>
          </li>
        </ol>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        {submitted ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-black mb-3">We&rsquo;ll be in touch!</h3>
            <p className="text-gray-600">
              Your inquiry has been sent. We&rsquo;ll get back to you within 24–48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(443) 000-0000"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  name="guests"
                  required
                  min="1"
                  placeholder="50"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                  Food Preferences
                </label>
                <input
                  type="text"
                  name="preferences"
                  placeholder="Tacos, burritos, tamales..."
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 uppercase tracking-widest">
                Additional Notes
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your event — location, time, dietary restrictions, etc."
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black resize-none"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please try again or email us directly at crespofoodsco@gmail.com.
              </p>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-block px-16 py-4 text-white font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90 cursor-pointer border-none disabled:opacity-50"
                style={{ backgroundColor: '#c44b2a' }}
              >
                {loading ? 'SENDING...' : 'BOOK NOW'}
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
