// app/components/Contact.jsx
'use client';
import React, { useState } from 'react';
import AnimatedInput from './AnimatedInput'; // Import our new component
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    // !!! REPLACE WITH YOUR OWN ACCESS KEY !!!
    formData.append('access_key', process.env.NEXT_PUBLIC_W3F_ACCESS_KEY);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Message Sent Successfully!');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-16">Contact Me</h2>
        
        {/* The Glassmorphic Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
        >
          <div className="mb-4">
            <AnimatedInput
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <AnimatedInput
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <AnimatedInput
              as="textarea" // Tell our component to render a textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-bold transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
        
        {result && (
          <p className={`mt-4 inline-block ${result.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
            {result}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;