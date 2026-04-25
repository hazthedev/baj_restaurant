import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cheese-yellow/20 text-ink-black p-8 rounded-xl text-center"
      >
        <h3 className="font-display text-2xl mb-2">Message sent!</h3>
        <p>Thanks for reaching out. We'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-cheese-yellow hover:text-soft-mustard font-medium"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-black mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-cream border border-soy-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cheese-yellow text-ink-black"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-ink-black mb-1">
          Phone or Email
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          required
          className="w-full px-4 py-3 bg-cream border border-soy-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cheese-yellow text-ink-black"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-ink-black mb-1">
          Reservation Date (optional)
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-3 bg-cream border border-soy-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cheese-yellow text-ink-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-black mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-cream border border-soy-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cheese-yellow text-ink-black resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-chili-red text-sm">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-cheese-yellow text-ink-black font-medium py-3 rounded-lg hover:bg-soft-mustard transition-colors disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
